Soundbolt.Views.PlayerMainView = Backbone.FusedView.extend({

  template: JST['player_main'],

  events:{
    "click #focus-mode-switch": "switchFocus",
    "click #audio-pause-button": "pauseAudio",
    "click #audio-play-button": "playAudio",
    "click #audio-seeking-control": "seekAudio"
  },

  initialize: function(options){
    if(options.track && options.track.id){
      this.model = options.track;
      this.model.fetch();
    }else{
      this.model = new Soundbolt.Models.Track();
    }

    this.progressSyncSchedule = setInterval(this.updateTime.bind(this), 1000);

    this.listenTo(this.model, 'change reset', this.render.bind(this));
    this.listenTo(this.model, 'switch', this.render.bind(this));
  },

  switchFocus: function(){
    if(window.focused){
      window.focused = false;
      Backbone.history.navigate("exitfocus", {trigger: true});
    }else{
      window.focused = true;
      Backbone.history.navigate("enterfocus", {trigger: true});
    }
  },

  remove: function(){
    clearInterval(this.progressSyncSchedule);
  },

  render: function(){
    // var thisController = this;
    if(window.currentTrackId){
      var content = this.template({ track: this.model });
    }else{
      var content = ""
    }
    this.$el.html(content);

    return this;
  },

  updateTime: function(){
    var audioMaster = document.getElementById("player-master-audio");
    var progress_header = document.getElementById('player-master-inner-progress');

    if(!audioMaster || !progress_header){ return; };

    var $progress_header = $(progress_header);
    var playPercent = 100 * (audioMaster.currentTime / audioMaster.duration);
    $progress_header.css("margin-left", playPercent + "%");
  },

  pauseAudio: function(event){
    var audioMaster = document.getElementById("player-master-audio");
    if(!audioMaster.paused){
      audioMaster.pause();
    }
  },

  playAudio: function(event){
    var audioMaster = document.getElementById("player-master-audio");
    if(audioMaster.paused){
      audioMaster.play();
    }
  },

  seekAudio: function(event){
    var audioMaster = document.getElementById("player-master-audio");
    var seekControl = document.getElementById('audio-seeking-control');
    var progress_header = document.getElementById('player-master-inner-progress');

    if(!audioMaster || !progress_header || !seekControl){ console.log("not found"); return; };

    var $progressHeader = $(progress_header);

    var newMargLeft = event.pageX - seekControl.offsetLeft;

  	if (newMargLeft >= 0 && newMargLeft <= seekControl.offsetWidth) {
  		$progressHeader.css("margin-left", newMargLeft + "px");
  	}
  	if (newMargLeft < 0) {
  		$progressHeader.css("margin-left", "0px");
  	}
  	if (newMargLeft > seekControl.offsetWidth) {
  		$progressHeader.css("margin-left", seekControl.offsetWidth + "px");
  	}
    var clickPercent = (event.pageX - seekControl.offsetLeft) / seekControl.offsetWidth;

    audioMaster.currentTime = audioMaster.duration * clickPercent;
  },

  _swapSyncSchedule: function(syncSchedule){
    this._syncSchedule && clearInterval(this._syncSchedule);
    this._syncSchedule = syncSchedule;
  }
})
