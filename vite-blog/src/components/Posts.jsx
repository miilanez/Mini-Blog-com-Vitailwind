import { useState, useEffect } from "react";
import api from "../services/api/api";
import Post from "./CardPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get("/posts");
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="uppercase text-5xl text-center m-10">
            Postagens Recentes
          </h1>
          {posts.lenght === 0 ? (
            <p>Carregando...</p>
          ) : (
            posts.map((post, index) => (
              <Post
                title={post.title}
                id={post.id}
                key={index}
                body={post.body}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
