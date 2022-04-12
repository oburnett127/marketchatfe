# Notes

## TO-DO's

- The 'createdAt' and 'updatedAt' properties created automatically by Mongoose -- is there a way to make them use MomentJS dates instead?

  - If not, how do we convert their format to one which Moment will use?

- If we create a new Comment (probably Post, too) and it fails Mongoose validation, it will still show up on the frontend UI until page refresh
  - It does this because instead of re-fetching the data after creating a new comment, we simply update the state by falsely assuming everything went well on teh backend

## Landing Page

- Maybe just some default Post List for a sub-forum
- Maybe a nice-looking page with some call-to-action button that directs a user to start posting / browsing

## Post List

- Logically, probably just a useEffect to fetch the appropriate Post documents from the databased (based on the sub-forum being viewed -- and probably limited to the most recent 50 to start)
- In terms of JSX, probably just a simple mapping of all the fetched Post objects

## Post

When observed from the Post List, a Post will most likely need the following information:

- ID
- Sub-forum
- Author
- Creation time
- Title
- Body (small preview)
- Number of Comments
- Number of Votes
- Upvote / Downvote status

When viewing an actual individual Post, we will need:

- The same information as above
- Body (full)
- List of Comments
  - Will need to fetch these at this time, as it would be highly inefficient to fetch them on Post List
- Ability to Sort by some criteria
- Ability to type your own response in an input
