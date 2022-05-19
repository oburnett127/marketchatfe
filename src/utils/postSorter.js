import moment from 'moment';

// Helper class with a function that will allow various types of sorting
class PostSorter {
  // Can't really do anything fancy by sorting every potential criteria using the same line of code (i.e b[criteria] - b[criteria])) because
  // some sorts require deeper logic than that. So we will just use a switch statement
  sortBy(sortType, posts) {
    let sortedposts = [];

    switch (sortType) {
      case 'comments':
        sortedposts = [...posts].sort((a, b) => b.comments.length - a.comments.length);
        break;
      case 'comments-asc':
        sortedposts = [...posts].sort((a, b) => a.comments.length - b.comments.length);
        break;
      case 'date':
        sortedposts = [...posts].sort((a, b) => {
          return new moment(new Date(b.createdAt)) - new moment(new Date(a.createdAt));
        });
        break;
      case 'date-asc':
        sortedposts = [...posts].sort((a, b) => {
          return new moment(new Date(a.createdAt)) - new moment(new Date(b.createdAt));
        });
        break;
      case 'author-asc':
        sortedposts = [...posts].sort((a, b) => {
          return a.author.toLowerCase() > b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() > a.author.toLowerCase()
            ? -1
            : 0;
        });
        break;
      case 'author':
        sortedposts = [...posts].sort((a, b) => {
          return a.author.toLowerCase() < b.author.toLowerCase()
            ? 1
            : b.author.toLowerCase() < a.author.toLowerCase()
            ? -1
            : 0;
        });
        break;
      case 'likes':
        sortedposts = [...posts].sort((a, b) => {
          return b.likes - a.likes;
        });
        break;
      case 'likes-asc':
        sortedposts = [...posts].sort((a, b) => {
          return a.likes - b.likes;
        });
        break;
      default:
        break;
    }
    return sortedposts;
  }
}

export default new PostSorter();
