Soundbolt.Views.MiddleCanvas = Backbone.View.extend({
  template: JST['middle_canvas'],
  className: 'user-view-focus-middle container-fluid',

  events: {
    "click #focus-middle-canvas": "seekAudio"
  },

  initialize: function(options){
    this.model = options.track;
    this.collection = options.comments;
    this.audioMaster = options.audioMaster;

    this.listenTo(this.model, 'sync', this.render.bind(this));
    this.listenTo(this.collection, 'sync', this.render.bind(this));
  },

  seekAudio: function(event){
    var audioMaster = document.getElementById("player-master-audio");
    var canvasControl = document.getElementById('focus-middle-canvas');
    var showZone = document.getElementById('user-view-focus-middle-showzone');

    if(!audioMaster || !canvasControl){ return 0; };
    var newMargLeft = event.pageX - canvasControl.offsetLeft - showZone.offsetLeft - 30;
    var clickPercent = (newMargLeft) / (canvasControl.offsetWidth - 60);
    audioMaster.currentTime = audioMaster.duration * clickPercent;
  },

  render: function(){
    var content = this.template({
       comments: this.collection,
       track: this.model
     });
    this.$el.html(content);
    this.newSyncSchedule();
    return this;
  },

  remove: function(){
    if(this._syncSchedule){
      clearInterval(this._syncSchedule);
    }
  },

  newSyncSchedule: function(){
    if(this._syncSchedule){
      clearInterval(this._syncSchedule);
    }
    this._syncSchedule = setInterval(this.updateWaveForm.bind(this), 500);
  },

  updateWaveForm: function(){
    var middleCanvas = document.getElementById('focus-middle-canvas');
    Soundbolt.Graphics.drawWaveForm(this.audioMaster, middleCanvas);
  }
})
