Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],

  initialize: function(options){
    this.model = options.user;
    this.render();

    this.addSideBar();
    this.addOwnTrackField();

    this.listenTo(this.collection, 'add change remove reset', this.render.bind(this));
  },

  addSideBar: function(){
    var sideBarView = new Soundbolt.Views.SideBarView({ user: this.model });
    this.addComponent('.user-view-normal-master', sideBarView);
  },

  addOwnTrackField: function(){
    // var tracksView = new Soundbolt.Views.TracksFieldView({ tracks: this.collection });
    // this.collection.each
  },

  render: function(){
    var content = this.template()
    this.$el.html(content);

    this.fusion();

    return this;
  }
})
