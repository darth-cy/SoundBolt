Soundbolt.Models.Comment = Backbone.Model.extend({
  urlRoot: "/api/comments",
  //
  // username: function(){
  //   var thisComment = this;
  //   if(!this._username){
  //     var user = new Soundbolt.Models.User({ id: this.user_id });
  //     user.fetch({
  //       success: function(){
  //         thisComment._username = user.username;
  //       }
  //     })
  //   }
  //   return this._username;
  // },

  // RAZYNOIR-INCOMPLETE: parse method doesn't go deep enough.
  parse: function(response){
    this.set(response);

    // if(response.username){
    //   this.username = response.username;
    //   delete response.username;
    // }

    return response;
  }
})
