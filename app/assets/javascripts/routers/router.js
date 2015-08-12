Soundbolt.Routers.Router = Backbone.Router.extend({
  routes: {
    "home": "index"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  index: function(){
    var user = new Soundbolt.Models.User({ id: currentUserId });

    user.fetch();
    var indexView = new Soundbolt.Views.UserIndex({ user: user });
    this._swap(indexView);
  },

  _swap: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
