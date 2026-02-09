import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts, setPosts, page, postsPerPage } = useContext(PostContext);

  const start = (page - 1) * postsPerPage;
  const visiblePosts = posts.slice(start, start + postsPerPage);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {visiblePosts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={deletePost} />
      ))}
    </div>
  );
};

export default PostList;
