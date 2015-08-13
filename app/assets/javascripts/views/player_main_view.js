Soundbolt.Views.PlayerMainView = Backbone.FusedView.extend({

  template: JST['player_main'],

  events:{
    "click #focus-mode-switch": "switchFocus",
    "click #audio-pause-button": "pauseAudio",
    "click #audio-play-button": "playAudio",
    "click #audio-seeking-control": "seekAudio"
  },

  initialize: function(options){
    if(options.track){
      this.model = options.track;
      if(this.model.id){
        this.model.fetch();
      }
    }else{
      this.model = new Soundbolt.Models.Track();
    }

    this.progressSyncSchedule = setTimeout(this.updateTime.bind(this), 1000);

    this.listenTo(this.model, 'change remove add reset', this.render.bind(this));
    this.listenTo(this.model, 'switch', this.render.bind(this));
  },

  switchFocus: function(){
    if(window.focused){
      window.focused = false;
      Backbone.history.navigate("exitfocus", {trigger: true});
      this.render().bind(this);
    }else{
      window.focused = true;
      Backbone.history.navigate("enterfocus", {trigger: true});
      this.render().bind(this);
    }
  },

  remove: function(){
    clearInterval(this._syncSchedule);
  },

  render: function(){
    var thisController = this;

    var content = this.template({ track: this.model });
    this.$el.html(content);

    // var audioMaster = document.getElementById("player-master-audio");
    // audioMaster.addEventListener("timeupdate", thisController.updateTime, false);

    var syncSchedule = setInterval(thisController.updateTime, 1000);
    this._swapSyncSchedule(syncSchedule);

    return this;
  },

  updateTime: function(){
    var audioMaster = document.getElementById("player-master-audio");
    var progress_header = document.getElementById('player-master-inner-progress');

    if(!audioMaster || !progress_header){ console.log("not found"); return; };

    console.log("sync progress!");
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
