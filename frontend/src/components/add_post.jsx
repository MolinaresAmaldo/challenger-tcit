import useField from "../hooks/useField.jsx";
import { useDispatch } from "react-redux";
import { add_post } from "../store/posts_slice";
import { create_post } from "../api/posts_api";
import { toast } from "sonner";

const Add_post = () => {
  const name = useField({ type: "text", rest: "name" });
  const description = useField({ type: "textArea", rest: "description" });

  const dispatch = useDispatch();

  const validate = ({ name, description }) => {
    const showError = (message) => {
      toast.error(message);
      return false;
    };
    const isEmpty = (value) => !value || value.trim() === "";

    if (isEmpty(name)) {
      showError("Name is required");
      return false;
    }

    if (isEmpty(description)) {
      showError("Description is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate({ name: name.value, description: description.value })) return;
    const new_post = {
      name: name.value,
      description: description.value,
    };
    try {
      const promise = create_post(new_post);
      toast.promise(promise, {
        loading: "Creating post...",
        success: "Post created successfully!",
        error: "Error creating post.",
      });
      const created_post = await promise;

      dispatch(add_post(created_post));
      //vaciar los campos
      name.onChange({ target: { value: "" } });
      description.onChange({ target: { value: "" } });
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <>
      <section className="container px-4 mx-auto mt-4">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Add New Post</h2>
        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
          <form>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  {...name}
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet..."
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex-2 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Description
                </label>
                <input
                  {...description}
                  type="textArea"
                  placeholder="Lorem ipsum dolor sit amet..."
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="px-2 pt-6 mt-5 md:mt-0">
                <button
                  onClick={handleSubmit}
                  className="w-full px-5 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 focus:outline-none"
                >
                  Add Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Add_post;
