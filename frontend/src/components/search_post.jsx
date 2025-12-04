import { useDispatch, useSelector } from "react-redux";
import { set_search_term } from "../store/posts_slice";

const Posts_search = () => {
  const dispatch = useDispatch();
  const search_term = useSelector((state) => state.posts.search_term);

  const handleChange = (e) => {
    dispatch(set_search_term(e.target.value));
  };

  return (
    <>
      {/* <section className="container px-4 mx-auto mt-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={search_term || ""}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </section> */}
      <div className="mt-4 max-w-sm">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Search posts
        </label>
        <input
          id="search"
          type="text"
          value={search_term}
          onChange={handleChange}
          placeholder="Search by title or content..."
          className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>
    </>
  );
};
export default Posts_search;
