import axios from "axios";

const url = "http://localhost:5000/posts";

class PostService {
  //Get Posts
  static getPosts() {
    return new Promise((resolve, reject) => {
      try {
        const res = axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
        console.log(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default PostService;
