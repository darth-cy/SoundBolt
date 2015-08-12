Soundbolt.Views.PlayerMainView = Backbone.FusedView.extend({

  template: JST['player_main'],

  initialize: function(options){
    if(options.song){
      this.model = options.song;
    }
  },

  addCurrentPlaying: function(){

  },

  render: function(){
    var content = this.template()
  }
})
