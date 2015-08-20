Soundbolt.Views.SideBarView = Backbone.View.extend({
  template: JST['side_bar'],
  tagName: 'section',
  className: 'user-view-normal-sidebar col-md-4',

  events: {
    "dblclick .sidebar-userbio": "showBioForm",
    "blur form": "updateBio"
  },

  initialize: function(options){
    this.model = options.user;
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  showBioForm: function(event){
    event.preventDefault();

    var $field = this.$el.find(".sidebar-userbio");
    $field.html(JST['bio_form']());
    $field.find('#user-description-input').focus();
  },

  updateBio: function(event){
    event.preventDefault();
    var thisView = this;

    var description = this.$el.find('#user-description-input').val();
    var data = { 'description': description };

    this.model.save(data, {
      success: function(){
        thisView.model.fetch();
      }
    })
  }
})
