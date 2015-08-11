Backbone.FusedView = Backbone.View.extend({

  addComponent: function(component){
    this._subComponents().push(component);
    this._renderComponent(component);
  },

  fusion: function(){
    var fused = this;

    fused._subComponents().each(function(comp){
      fused.addComponent(comp);
    })
  },

  remove: function(){
    Backbone.View.prototype.remove.call(this);

    this._subComponents().each(function(comp){
      comp.remove();
    });
  },

  emptyComponents: function(){
    this._allComponents = {};
    return _(this._allComponents);
  },

  _renderComponent: function(component){
    this.$el.append(component.$el);
    component.delegateEvents();
    component.render();

    if(component.fusion){
      component.fusion();
    }
  },

  _subComponents: function(){
    this._allComponents = this._allComponents || {};
    return _(this._allComponents);
  }
})
