import { useState } from "react";
import "./app.css";
import Myself from "./components/Myself";
import Whatido from "./components/Whatido";




function PagesInfo() {
  const [pages, setPages] = useState({ about: false, whatido: false });
  console.log(pages.about);
  return (
    <>
      <div className="bg-slate-950 text-white flex flex-col items-center justify-center pages-style">
        <div className="my-3 self-center">
          <h1
            onClick={() => {
              setPages({ ...pages, about: !pages.about });
            }}
            className="cursor-pointer text-xl font-sans bg-indigo-800 hover:bg-indigo-950 py-2 mb-3 shadow-md shadow-slate-900 w-fit px-6 rounded-2xl"
           
          >
            Who am i ?
          </h1>
          {pages.about && <Myself />}
        </div>

        <div className="my-3 self-center">
          <h1
            onClick={() => {
              setPages({ ...pages, whatido: !pages.whatido });
            }}
            className="cursor-pointer text-xl font-sans bg-indigo-800 hover:bg-indigo-950 py-2 mb-3 shadow-md shadow-slate-900 w-fit px-6 rounded-2xl"
           
          >
           What do i do?
          </h1>
          {pages.whatido && <Whatido />}
        </div>
      </div>

    </>
  );
}

export default PagesInfo;
