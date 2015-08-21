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

    this.progressSyncSchedule = setInterval(this.updateTime.bind(this), 500);

    this.listenTo(this.model, 'change reset', this.render.bind(this));
    this.listenTo(this.model, 'switch', this.render.bind(this));
  },

  switchFocus: function(event){
    event.preventDefault();

    var $focusSwitch = this.$el.find("#focus-mode-switch")
    $focusSwitch.removeClass("focus-mode-switch-glow-notice");
    $focusSwitch.off("transitionend");

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
    if(window.currentTrackId){
      var content = this.template({ track: this.model });
    }else{
      var content = ""
    }
    this.$el.html(content);

    this.audioMaster = this.$el.find("#player-master-audio");
    if(this.audioMaster.length > 0){
      this.$el.find("#focus-mode-switch").prop("disabled", true);
      this.audioMaster[0].oncanplay = this.glowSwitch.bind(this);
    }

    return this;
  },

  glowSwitch: function(){
    var thisView = this;

    if(!thisView.glowCount){
      thisView.glowCount = 0;
    }

    var $visualSwitch = this.$el.find("#focus-mode-switch");
    if($visualSwitch.attr("disabled")){
      $visualSwitch.prop("disabled", false);
    }

    $visualSwitch.addClass("focus-mode-switch-glow-notice");

    $visualSwitch.one("transitionend", function(){
      $visualSwitch.removeClass("focus-mode-switch-glow-notice");
      $visualSwitch.one("transitionend", function(){
        thisView.glowCount += 1;
        if(thisView.glowCount < 3){
          thisView.glowSwitch();
        }
      })
    })
  },

  updateTime: function(){
    var audioMaster = document.getElementById("player-master-audio");
    var progress_header = document.getElementById('player-master-inner-progress');

    if(!audioMaster || !progress_header){ return 0; };

    var $progress_header = $(progress_header);
    var playPercent = 100 * (audioMaster.currentTime / audioMaster.duration);
    if(playPercent > 93){ playPercent = 93; }
    $progress_header.css("margin-left", playPercent + "%");
  },

  pauseAudio: function(event){
    event.preventDefault();

    var audioMaster = document.getElementById("player-master-audio");
    if(!audioMaster.paused){
      audioMaster.pause();
    }
  },

  playAudio: function(event){
    event.preventDefault();

    var audioMaster = document.getElementById("player-master-audio");
    if(audioMaster.paused){
      audioMaster.play();
    }
  },

  seekAudio: function(event){
    var audioMaster = document.getElementById("player-master-audio");
    var seekControl = document.getElementById('audio-seeking-control');
    var progress_header = document.getElementById('player-master-inner-progress');

    if(!audioMaster || !progress_header || !seekControl){ return 0; };

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
