import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_posts, delete_post } from "../api/posts_api";
import { set_posts, remove_post } from "../store/posts_slice";
import Posts_search from "./search_post";
import { toast } from "sonner";

const Posts_list = () => {
  const { posts, loading, error, search_term } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  const filtered_posts = posts.filter((post) => {
    if (!search_term) return true;
    const term = search_term.toLowerCase();
    return (
      post.name.toLowerCase().includes(term) ||
      post.description.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    const load_posts = async () => {
      try {
        const data = await fetch_posts();
        dispatch(set_posts(data));
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    load_posts();
  }, [dispatch]);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error loading posts: {error}</p>;
  }

  const handle_Delete = (post_id, post_name) => {
    toast.warning(`Do you want to delete this post? ${post_name}`, {
      description: "This action cannot be undone.",
      action: {
        label: "Confirm",
        onClick: async () => {
          //optimist update
          dispatch(remove_post({ id: post_id }));

          try {
            await delete_post(post_id);
            toast.success(`Post "${post_name}" deleted.`);
          } catch (err) {
            console.error("Failed to delete post:", err);
            toast.error("Error deleting post.");
            // revertimos cambios en caso de error
            dispatch(set_posts(posts));
          }
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          toast("Action cancelled.");
        },
      },
    });
  };

  return (
    <section className="container px-4 mx-auto">
      <Posts_search />
      <h2 className="text-lg font-medium text-gray-800 dark:text-white">
        Posts List
      </h2>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-gray-400"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-gray-400"
                    >
                      Content
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                  {filtered_posts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {post.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {post.description}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          className="toast-button text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600"
                          onClick={() => handle_Delete(post.id, post.name)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filtered_posts.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-4 text-sm text-center text-gray-500 dark:text-gray-400"
                      >
                        No posts found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Posts_list;
