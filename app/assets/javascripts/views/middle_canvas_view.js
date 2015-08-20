Soundbolt.Views.MiddleCanvas = Backbone.View.extend({
  template: JST['middle_canvas'],
  className: 'user-view-focus-middle container-fluid',

  events: {
    "click #focus-middle-canvas": "seekAudio",
    "mousemove #focus-middle-canvas": "resetCursor",
    "mouseout #focus-middle-canvas": "clearCursor",
  },

  initialize: function(options){
    this.model = options.track;
    this.collection = options.comments;
    this.audioMaster = options.audioMaster;

    this.listenTo(this.model, 'sync', this.render.bind(this));
    this.listenTo(this.collection, 'add sync', this.render.bind(this));

    // RAZYNOIR: Fixed waveform.
    var dataPoints = Math.floor(this.audioMaster.duration);
    this.waveData = Array.apply(null, Array(dataPoints)).map(function(){
        return Math.floor(Math.random() * 50) + 100;
    });
  },

  seekAudio: function(event){
    var audioMaster = this.audioMaster;
    var canvasControl = document.getElementById('focus-middle-canvas');
    var showZone = document.getElementById('user-view-focus-middle-showzone');

    if(!audioMaster || !canvasControl){ return 0; };
    var newMargLeft = event.pageX - canvasControl.offsetLeft - showZone.offsetLeft - 30;
    var clickPercent = (newMargLeft) / (canvasControl.offsetWidth - 60);
    audioMaster.currentTime = audioMaster.duration * clickPercent;
  },

  markAudio: function(event){
    event.preventDefault();
    console.log(event.pageX);
  },

  render: function(){
    var content = this.template({
       comments: this.collection,
       track: this.model
     });
    this.$el.html(content);
    this.addNanoComments();
    this.newSyncSchedule();
    return this;
  },

  addNanoComments: function(){
    var fullTime = this.audioMaster.duration;
    var sectionEl = this.$el.find('#user-view-focus-middle-showzone');

    this.collection.each(function(comment){
      var content = JST['nano_comment']({
        fullTime: fullTime,
        comment: comment
      })
      sectionEl.append(content);
    })

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
    this._syncSchedule = setInterval(this.updateWaveForm.bind(this), 100);
  },

  resetCursor: function(event){
    event.preventDefault();

    var middleCanvas = document.getElementById('focus-middle-canvas');
    var showZone = document.getElementById('user-view-focus-middle-showzone');
    cursorOffsetLeft = event.pageX - middleCanvas.offsetLeft - showZone.offsetLeft - 30;
    this.cursorTime = (cursorOffsetLeft/(middleCanvas.offsetWidth - 60)) * (this.audioMaster.duration);
  },

  clearCursor: function(event){
    event.preventDefault();
    this.cursorTime = undefined;
  },

  updateWaveForm: function(){
    var middleCanvas = document.getElementById('focus-middle-canvas');
    Soundbolt.Graphics.drawWaveForm(this.waveData, this.waveData.length ,this.audioMaster, middleCanvas, this.cursorTime);
  }
})
