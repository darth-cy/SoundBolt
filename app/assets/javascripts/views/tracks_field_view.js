Soundbolt.Views.TracksFieldView = Backbone.FusedView.extend({
  template: JST['tracks_field'],
  tagName: 'section',
  className: 'user-view-normal-trackfield col-md-8',

  events: {
    "keyup #search-field": "filter",
    "click .filterable": "addFilter",
    "click .dismissable": "dismissTag"
  },

  initialize: function(options){
    this.model = options.user;
    this.users = options.users;

    this.collection = options.tracks;
    this.own = options.own;
    this.addTracks();

    this.listenTo(this.collection, 'add remove reset sync', this.updateRender.bind(this));
    this.listenTo(this.users, 'add remove reset sync', this.updateRender.bind(this));
  },

  updateRender: function(){
    this.addTracks();
    this.render();
  },

  addTracks: function(filteredTracks){
    var thisField = this;
    thisField.emptyComponents();

    if(filteredTracks){
      var tracks = filteredTracks;
    }else{
      var tracks = this.collection;
    }

    tracks.each(function(track){
      var trackView = new Soundbolt.Views.TrackView({
        artist: thisField.users.get(track.get("user_id")),
        user: thisField.model,
        tracks: thisField.collection,
        track: track,
        own: thisField.own
      });
      thisField.addComponent(trackView);
    })
  },

  addFilter: function(event){
    event.preventDefault();
    var tag = $(event.currentTarget);

    $("#click-filter-tab-notice").css("display", "none");

    var tagName = tag.html();

    if(this.getTagArray().indexOf(tagName) !== -1){ return 0; }

    var tagColor = tag.css('background-color');

    var searchBar = $("#search-field-master");
    var content = JST['filter_tab']({ tagName: tagName, tagColor: tagColor });
    searchBar.append(content);

    this.filter();
    window.scrollTo(0, 0);
  },

  dismissTag: function(event){
    event.preventDefault;
    var tag = $(event.currentTarget);
    tag.remove();

    if(this.getTagArray().length < 1){
      $("#click-filter-tab-notice").css("display", "inline");
    }

    this.filter();
  },

  getTagArray: function(){
    var tags = $('.dismissable');
    var tagNameArray = [];
    for(var i = 0; i < tags.length; i++){
      tagNameArray.push($(tags[i]).html().trim());
    }
    return tagNameArray;
  },

  tagFilter: function(collection, tagArray){
    if(tagArray.length < 1){ return collection; }

    var filteredCollection = new Soundbolt.Collections.Tracks({ user: 0 });

    collection.each(function(track){
      trackGenreString = [];
      track.get('genres').forEach(function(genre){
        trackGenreString.push(genre.name);
      })

      trackGenreString = trackGenreString.join(",");

      for(var i = 0; i < tagArray.length; i++){
        if(trackGenreString.indexOf(tagArray[i]) === -1){
          return 0;
        }
      }
      filteredCollection.add(track);
      return 0;
    })

    filteredCollection.shift();

    return filteredCollection;
  },

  filter: function(){
    var nameCriteria = $("#search-field").val();
    nameCriteria = nameCriteria.toLowerCase();

    var tagNameArray = this.getTagArray();

    if(nameCriteria.length === 0){
      var filteredCollection = this.collection;
    }else{
      var filteredCollection = new Soundbolt.Collections.Tracks({ user: 0 });
      this.collection.each(function(track){
        if(track.escape('title').toLowerCase().indexOf(nameCriteria) !== -1 ||
           track.escape('username').toLowerCase().indexOf(nameCriteria) !== -1){
          filteredCollection.add(track);
        }
      });
      filteredCollection.shift();
    }

    filteredCollection = this.tagFilter(filteredCollection, tagNameArray);

    this.addTracks(filteredCollection);
    this.fusion();
    return 0;
  },

  render: function(){
    if(this.collection.length === 0){
      var content = JST['no_track']();
      this.$el.html(content);
    }else{
      var searchBar = JST['search_bar']();
      var content = this.template({ tracks: this.collection });
      this.$el.html(searchBar + content);
    }

    this.fusion();

    return this;
  }
})
