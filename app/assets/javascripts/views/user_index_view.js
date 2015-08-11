Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],

  initialize: function(options){
    this.model = options.user;

    this.addSideBar();
    this.addOwnTrackField();

    this.listenTo(this.collection, 'add change remove reset', this.render.bind(this));
  },

  addSideBar: function(){
    var sideBarView = new SoundBolt.Views.SideBarView({ user: this.model });
    this.addComponent('.user-view-normal-sidebar', sideBarView);
  },

  addOwnTrackField: function(){
    var tracksView = new SoundBolt.Views.TracksView({ tracks: this.collection });
    // this.collection.each
  },

  render: function(){
    var content = this.template()
    this.$el.html(content);

    this.fusion();
  }
})
