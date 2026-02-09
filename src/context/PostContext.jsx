import { createContext, useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 6;

  useEffect(() => {
    setTimeout(() => {
      fetchPosts().then((data) => {
        setPosts(data);
        setLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, page, setPage, postsPerPage, loading }}
    >
      {children}
    </PostContext.Provider>
  );
};
