
import './App.css'
import React, { useState } from "react";

function App() {

  const initialPosts = [
    { id: 1, text: "Tamerlan" },
    { id: 2, text: "İbrahimov" },
    { id: 3, text: "İT Brains" },
    { id: 4, text: "Front-end developer" },
    { id: 5, text: "130" },
  ];
  const [blogPosts, setBlogPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState("");

  const handleAddPost = () => {
    if (newPostText ) {
      const newPost = { id: blogPosts + 1, text: newPostText };
      setBlogPosts([...blogPosts, newPost]);
      setNewPostText("");
    }
  };

  return (
    <>
      <div >
        <h1>Blog Gönderileri</h1>

        {blogPosts.map((a) => (
          <p key={a.id}>{a.text}</p>
        ))}

      </div>

      <input
        type="text"
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
      />
      <button onClick={handleAddPost}>Gönder</button>
    </>
  )
}

export default App
