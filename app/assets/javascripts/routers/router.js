Soundbolt.Routers.Router = Backbone.Router.extend({
  routes: {
    "home": "index"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  index: function(){
    alert(currentUserId);

    var tracks = new Soundbolt.Collections.Tracks();
    var user = new Soundbolt.Models.User({ id: currentUserId, collection: tracks });

    user.fetch();

    var indexView = new Soundbolt.Views.UserIndex({ user: user, tracks: tracks });
    this._swap(indexView);
  },

  _swap: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
