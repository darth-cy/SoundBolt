Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],
  className: 'user-view-normal-master',

  initialize: function(options){
    this.model = options.user;
    this.collection = options.tracks;

    this.addSideBar();
    this.addOwnTrackField();
  },

  addSideBar: function(){
    var sideBarView = new Soundbolt.Views.SideBarView({ user: this.model });
    this.addComponent(sideBarView);
  },

  addOwnTrackField: function(){
    var tracksFieldView = new Soundbolt.Views.TracksFieldView({ tracks: this.collection });
    this.addComponent(tracksFieldView);
  },

  render: function(){
    var content = this.template()
    this.$el.html(content);

    this.fusion();

    return this;
  }
})
