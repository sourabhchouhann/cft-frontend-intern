const PostCard = ({ post, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 relative transition hover:scale-[1.02]">
      
   
      <button
        onClick={() => onDelete(post.id)}
        className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xl"
      >
        ✕
      </button>

     
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
        {post.title}
      </h3>

  
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {post.body}
      </p>

   
      <p className="text-xs text-gray-400 mb-3">
        Mon, 21 Dec 2020 14:57 GMT
      </p>

   
      <img
        src={`https://picsum.photos/300/180?random=${post.id}`}
        alt="post"
        className="rounded-xl w-full h-50 object-cover"
      />
    </div>
  );
};

export default PostCard;
