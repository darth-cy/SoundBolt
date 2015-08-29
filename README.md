# SoundBolt

[See it Live on Web][main]

[main]: http://soundbolt.co

## Summary

SoundBolt is a music streaming application that also allows creators to upload and share tracks. Though inspired by SoundCloud, SoundBolt has extended visual effects that users can interact with.

SoundBolt has a unique multi-layered structure built carefully by z-index organization. You can have the explore tab open while also having an active modal displaying artist information and a visualizer overlay to interact with. The stucture emphasizes my idea that information delivery should be compact and rich, in a clean-cut manner. The structure also reflects my skills in constructing complicated views using the Backbone.js framework.

As a SoundBolt user, you can:

<b>Create Tracks</b>
- [x] Upload a track from local file (filepicker API)
- [x] Select and modify the genre classification of a track
- [x] Add descriptions to the user and also individual tracks

<b>Interact with Tracks</b>
- [x] Leave comments at specific timeline positions on a track
- [x] Hover and click on the central canvas to seek the audio
- [x] See the neon-drop themed visualizer background when focusing on a track

<b>Explore other Creators</b>
- [x] See other creator's complete information on a modal popup
- [x] Play tracks directly from the modal


## Selected Screenshots

### Splash Page
![splash]

[splash]: ./docs/images/splash.png

### User Explore Page
![user-explore]

[user-explore]: ./docs/images/user_explore.png

## User Information Modal

This maybe the feature in the entire project that most reflects my web development ideas.
I want the information delivery to be compact, therefore unlike most information modals, you can actually interact with the SoundBolt modal. It has playing and following utilities just like the content you see on the main content section.

I encountered severe difficulty when trying to compact information into modals. One issue is how to fetch all the information by one query from the database. To overcome this, I built a JSON template for the user controller to fetch all the user attributes, including all the nested associations (tracks, their comments, followers, followings). In the end, with one controller action, all the database information is compacted into one template.

Here is the sample template:
```ruby
  json.(@user, :id, :username, :email, :description, :image_url)

  json.followings_followed @user.followings_followed do |following_followed|
    ... # All follower data
  end

  json.followings_following @user.followings_following do |following_following|
    ... # All following data
  end

  json.tracks @user.tracks do |track|
    ... # All track attributes

    json.genres track.genres do |genre|
      ... # Track's genre information
    end
  end

  json.streams @user.streams do |stream|
    ... # All stream feeds attributes

    json.genres stream.genres do |genre|
      ... # Genre information associated with the streams
    end
end
```

### Modal Screenshot
![user-modal]

[user-modal]: ./docs/images/modal.png

## Visualizer

Visualizer is another core feature of the site. It has a neon-drop animation background (drawn on canvas) and also a middle layer canvas that synchronizes with the audio progress. User can also hover or click the canvas to interact with the progress. The most difficult part of the implementation was the mouse event detection. The canvas must re-render every time a mouse event happens, therefore it's essential to know the position of the cursor relative to the progress canvas. To achieve this, I used offset calculations on the middle index and its parent container to determine what the canvas should render.

Here is the canvas drawing logic:
```javascript
Soundbolt.Graphics.drawMusicWave = function(context, data, startX, startY, blockWidth, currentTime, cursorTime){
  for(var i = 0; i < data.length; i++){
    var height = parseInt(data[i]);

    if(i < currentTime){ // The fillStyle is determined by currentTime, cursorTime calculated from mouse event
      var fillStyle = "#FF00FF";
    }else if(cursorTime && i < cursorTime){
      var fillStyle = "#542D54";
    }else{
      var fillStyle = "#424242";
    }

    Soundbolt.Graphics.drawMusicBlock(context, startX + i * blockWidth, startY, blockWidth, height, fillStyle);
  }
};
```

### Visualizer Screenshot
![visualizer]

[visualizer]: ./docs/images/visualizer.png

## Original Design Documentation
* [View Wireframes][views]
* [Database Models][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Original Implementation Timeline

### Vanilla Database: All models and associations. (day 1 - 2)
+ Generate all necessary models (User, Track, Album, Comment, Following).
+ Add all validations, associations.
+ Test that all associations work in the console.

+ Make a simple user show page that will show tracks of the user and any followed users.
(this view will become the main interface).

+ Build authentication. Make sure that things works.

### AWS Integration: File upload, retrieval and streaming (day 3)
+ Make the track upload tab (use paperclip gem).

+ Integrate AWS file storage system into the project.
+ Use AWS-SDK gem to access AWS api.
+ Add audio tags and make sure it works.

**Backend is now completely finished. We won't be touching database anymore.**

### Front Phase 1: Navbar, User Sidebar, Song subviews (day 4)
+ First define all the color names using the color scheme here.
[Color Scheme][colors]
+ The usershow page will have sidebars similar to the css exercise we did before, therefore I will refer back to that project to organize the positioning of things.
+ Use bootstrap to define all rows, columns that might be present. Put things into respective columns.

+ Write the subview for a specific track. The subview tab will contain a canvas that draws the general movement direction of the track. For now, use bar chart drawing techniques to complete the feature.

### Front Phase 2: Transitioning to Focus View (day 5)
+ Add a tab on the user show page to transition the page into a focus view. The focus view will not be present for now. Make sure that when switching back and forth, the page doesn't reload and all the subviews in the normal show page is cleaned up.
+ The page should transition into the focus view of the currently playing track.

### Front Phase 3: Focus View (day 6 - 8)
+ Add two canvases onto the focus view and draw specific effects. Refer to this resource, which contains a lot of cool canvas drawings. (http://bl.ocks.org/mbostock)
+ Users have to go into the focus view of a track to leave a comment (when there is more interactive features). This is by design. User should not add comments directly to the song subview on the normal show page.

### Front Phase 4: Title, Polished Login and others (the rest)
+ Clean up the views.
+ Seed the database.

### Future Features (TBD)
+ Users can star a track
+ Track waveform drawing on canvas
+ Advanced search functionality that can suggest creators
+ Users have blogging pages that they can use to express their music believes

[colors]:http://htmlpreview.github.com/?https://github.com/Razynoir/soundbolt/blob/master/docs/wireframes/color_scheme.html
