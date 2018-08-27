const fileContents = (
  postTitle,
  postText,
  postImage,
  postIdStr,
  postType,
  postAuthor,
  postAvatar
) =>
  JSON.stringify({
    postId: postIdStr,
    titleContent: postTitle,
    textContent: postText,
    imageSource: postImage,
    createdAt: Date.now(),
    postType: postType,
    postAuthor: postAuthor,
    postAvatar: postAvatar
  });

export default fileContents;

//--- Future additions/modifications
// "imageContent": "${postImage}",
