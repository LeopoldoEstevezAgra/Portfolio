import axios from "axios";

const url = "http://localhost:5000/posts/";

class PostService {
  static async getPosts() {
    const res = await axios.get(url);
    try {
      const data = res.data;
      return data.map(post => ({
        ...post,
        createdAt: new Date(post.createdAt)
      }));
    } catch (err) {
      return err;
    }
  }

  static insertPost(text) {
    return axios.post(url, {
      text
    });
  }

  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
