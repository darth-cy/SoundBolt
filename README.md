# SoundBolt

[http://soundbolt.co][main]

[main]: http://soundbolt.co

## Minimum Viable Product
SoundBolt is a clone of SoundCloud built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Log into their accounts
- [ ] Upload tracks
- [ ] Play tracks
- [ ] Make comments on tracks
- [ ] Follow other users

## Design Docs
* [View Wireframes][views]
* [Database Models][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

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
+ Seed it.

### Bonus Features (TBD)
- [ ] Users can star a track (staring join table, staring count)
- [ ] Tracks have genre characterizations.
- [ ] Users can follow specific genres.
- [ ] Users can have a post board to post their music philosophy.

- [ ] **Infinite Bonus: Even fancier special effects (no upper limit)**.

[colors]:http://htmlpreview.github.com/?https://github.com/Razynoir/soundbolt/blob/master/docs/wireframes/color_scheme.html
