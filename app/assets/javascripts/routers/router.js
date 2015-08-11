Soundbolt.Routers.Router = Backbone.Router.extend({
  routes: {
    "home": "index"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  index: function(){
    alert(currentUserId);
    var
    var indexView = new Soundbolt.Views.UserIndex({ user: user })
  },

  _swap: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
