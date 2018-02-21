# 🚦 Checkpoint

Convert Reddit...ish to React with Redux!

## Getting started

* Go to the follwing repository and clone [this project](https://github.com/gSchool/reddit-clone-redux) to your local machine
* Install the dependencies with either `yarn` or `npm install`
* This is styled with `Bootstrap v3.3.7`

Just like the previous checkpoints, you will be hitting the [provided API for this course](https://github.com/gSchool/collective-api) and be hitting the following endpoints:

* `http://localhost:8000/posts` (for the posts)
* `http://localhost:8000/comments` (for the comments)

You could roughly follow these steps (not necessarily in this order):

* Use yarn to add `redux react-redux redux-thunk`
* Create a reducer for each "resource", such as posts and comments, in this case
* Configure a store with `redux-thunk` and the reducers
* Create an actions / action-creators file for each "resource"
* Figure out which components should be connected components and implement `mapStateToProps` / `mapDispatchToProps` where necessary

## User Stories

**Users can create a post**

* Users can toggle the "New Post" form
* Users can create posts
  * Each post has a title, body, author, and image url
* Users cannot create a new post if any of the inputs are blank
  * Fields should only appear invalid once they've tabbed off
* Users cannot click "Create Post" until the form is valid

**Users can view posts**

* Users see the number of comments correctly pluralized
  * i.e. "0 comments" or "1 comment"
* Users see posts dynamically reorder according to number of votes
* Users see the post's date/time displayed nicely
  * i.e. "Yesterday at 3:09pm", "4 minute ago", etc.
  * You will need an [external library](https://www.npmjs.com/package/react-moment)

**Votes**

* Users can upvote
* Users can downvote
  * But not make it go lower than 0

**Filter**

* Users can filter based on the post title

**Sort**

* Users see posts ordered by votes (most first) by default
* Users can sort by Date or by Title

**Comments**

* Users can toggle comments
* Users can add comments

## Detailed Wireframes

**Posts**

Form toggle

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-form-toggle.gif?raw=true)

Validations

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-form-validations.gif?raw=true)

Creating and viewing a post

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-create-post.gif?raw=true)

**Votes**

Upvoting

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-votes.gif?raw=true)

Downvoting

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-down-votes.gif?raw=true)

**Filter**

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-filter.gif?raw=true)

**Sort**

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-sort.gif?raw=true)

**Comments**

![](https://github.com/gSchool/angular-curriculum/blob/master/images/reddit-clone-1/reddit-clone-comments.gif?raw=true)