import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(
    () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("I am always called");
        });
    },
    //   [id]
    [idFromButtonClick]
  );
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      <button onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
