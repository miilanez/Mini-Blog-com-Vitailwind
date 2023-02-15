import React from "react";
import { Link } from "react-router-dom";

const Post = ({title, id, body}) => {
  return (
    <div>
      <div
        id="postagem"
        className="my-6 bg-gray-900 p-4 rounded-2xl flex flex-col items-center"
        key={id}
      >
        <h2 className="text-3xl">{title}</h2>
        <p className="text-base text-gray-400 my-2">{body}</p>
        <Link
          to={`/posts/${id}`}
          className="font-semibold border-solid border border-slate-300 p-4 rounded-2xl opacity-70 hover:opacity-100"
        >
          Ler Mais
        </Link>
      </div>
    </div>
  );
};

export default Post;
