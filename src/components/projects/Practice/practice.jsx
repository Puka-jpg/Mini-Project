import { React, useState, useEffect } from "react";
import BlogList from "./BlogList";

function OutputingLists() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const [name, setName] = useState("Pukar");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("Use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="name">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's Blogs!"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
      <button onClick={() => setName("kafle")}>Change name</button>
    </div>
  );
}

export default OutputingLists;
