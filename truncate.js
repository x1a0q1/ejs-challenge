const _ = require("lodash");

exports.truncatePostContent = (posts) => {
  const truncatedPosts = posts.map((post) => {
    return {
      title: post.title,
      content: _.truncate(post.content, {
        length: 100,
        omission: " ... ",
      }),
    };
  });

  return truncatedPosts;
};
