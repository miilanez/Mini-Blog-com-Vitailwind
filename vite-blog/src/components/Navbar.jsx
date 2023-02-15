import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        id="navbar"
        className="container bg-zinc-900 no-underline flex items-center justify-between px-8 py-6"
      >
        <h2 className="opacity-100">
          <Link to={`/`}>Blog</Link>
        </h2>
        <ul className="list-none flex gap-4 items-center">
          <li className=" opacity-70 hover:opacity-100">
            <Link to={`/`}>Home</Link>
          </li>
          <li
            id="new-btn"
            className="font-semibold border-solid border border-slate-300 p-4 rounded-2xl opacity-70 hover:opacity-100"
          >
            <Link to={`/new`}>Nova Postagem</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
