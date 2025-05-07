const fetchUserDataPromise = (userId) => {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject(new Error("User ID is required"));
      return;
    }

    setTimeout(() => {
      const user = { id: userId, name: "User " + userId };
      resolve(user);
    }, 1000);
  });
};

const fetchUserPostsPromise = (userId) => {
  return new Promise((resolve, reject) => {
    if (!userId) {
      reject(new Error("User ID is required"));
      return;
    }

    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      resolve(posts);
    }, 1000);
  });
};

const fetchPostCommentsPromise = (postId) => {
  return new Promise((resolve, reject) => {
    if (!postId) {
      reject(new Error("Post ID is required"));
      return;
    }
    setTimeout(() => {
      const comments = ["Comment 1", "Comment 2"];
      resolve(comments);
    }, 1000);
  });
};

const promiseChain = () => {
  fetchUserDataPromise(1)
    .then((user) => {
      console.log("User:", user);
      return fetchUserPostsPromise(user);
    })
    .then((posts) => {
      console.log("Posts:", posts);
      return fetchPostCommentsPromise(posts);
    })
    .then((comments) => {
      console.log("Comments:", comments);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

promiseChain();
