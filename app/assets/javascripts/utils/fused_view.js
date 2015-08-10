Backbone.FusedView = Backbone.View.extend({

  addComponent: function(selector, component){
    this._subComponents(selector).push(component);
    this._renderComponent(selector, component);
  },

  fusion: function(){
    var fused = this;

    fused._subComponents().each(function(comps, selector){
      fused.$(selector).empty();
      comps.each(function(comp){
        fused.addComponent(selector, comp);
      })
    })
  },

  remove: function(){
    Backbone.View.prototype.remove.call(this);

    this._subComponents().each(function(comps, selector){
      comps.each(function(comp){
        comp.remove();
      });
    });
  },

  _renderComponent: function(selector, component){
    this.$(selector).append(component.$el);
    component.delegateEvents();
    component.render();

    if(component.fusion){
      component.fusion();
    }
  },

  _subComponents: function(selector){
    this._allComponents = this._allComponents || {};

    if(selector){
      this._allComponents[selector] = this._allComponents[selector] || _([]);
      return this._allComponents[selector];
    }else{
      return _(this._allComponents);
    }
  }
})
