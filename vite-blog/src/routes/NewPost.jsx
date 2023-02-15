import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api/api";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await api.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container">
        <h1 className="uppercase text-5xl text-center m-10">Nova Postagem</h1>
        <form
          onSubmit={(e) => createPost(e)}
          className="py-10 bg-gray-900 rounded-2xl flex flex-col items-center"
        >
          <div
            id="form-control"
            className="flex flex-col justify-center my-3 items-center w-full"
          >
            <label htmlFor="title">Título: </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Digite o título"
              onChange={(e) => setTitle(e.target.value)}
              className="w-2/4"
            />
          </div>
          <div
            id="form-body"
            className="flex flex-col justify-center my-3 items-center w-full"
          >
            <label htmlFor="body">Conteúdo: </label>
            <textarea
              name="body"
              id="title"
              placeholder="Digite o conteúdo"
              onChange={(e) => setBody(e.target.value)}
              className="w-2/4"
            />
          </div>
          <input
            type="submit"
            value="Criar Postagem"
            className="font-semibold border-solid border border-slate-300 p-4 rounded-2xl opacity-70 hover:opacity-100"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPost;
