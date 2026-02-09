import { useContext } from "react";
import { PostProvider, PostContext } from "./context/PostContext";
import Loader from "./components/Loader";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function Content() {
  const { loading } = useContext(PostContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {loading ? (
          <Loader />
        ) : (
          <>
            <PostList />
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <PostProvider>
      <Content />
    </PostProvider>
  );
};

export default App;
