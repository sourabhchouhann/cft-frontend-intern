import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Pagination = () => {
  const { posts, postsPerPage, page, setPage } = useContext(PostContext);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="text-gray-400 text-xl disabled:opacity-30"
      >
        ‹
      </button>

   
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-9 h-9 rounded-full flex items-center justify-center
            ${
              page === i + 1
                ? "bg-white shadow text-gray-900"
                : "bg-gray-200 text-gray-500"
            }`}
        >
          {i + 1}
        </button>
      ))}

  
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="text-gray-400 text-xl disabled:opacity-30"
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
