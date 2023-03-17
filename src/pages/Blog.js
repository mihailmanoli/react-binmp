import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getBlogPosts } from "../service/service";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import "./main.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = getBlogPosts();
    setPosts(data);
  }, []);

  const renderPosts = () => {
    return posts.map((post) => {
      return <PostCard key={post.id} {...post} />;
    });
  };

  return (
    <>
      <p>
        <Link to="/home">Home</Link> - Blog
      </p>
      <h1>Blog Posts</h1>
      <div className="posts-container">{renderPosts()}</div>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button variant="contained">Load More</Button>
      </Stack>
    </>
  );
}
