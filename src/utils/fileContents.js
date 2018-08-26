const fileContents = (
  postTitle,
  postText,
  postImage,
  postIdStr,
  postType,
  postAuthor
) =>
  JSON.stringify({
    postId: postIdStr,
    titleContent: postTitle,
    textContent: postText,
    imageSource: postImage,
    createdAt: Date.now(),
    postType: postType,
    postAuthor: postAuthor
  });

export default fileContents;

//--- Future additions/modifications
// "imageContent": "${postImage}",
