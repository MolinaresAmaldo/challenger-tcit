import "./App.css";
import Posts_list from "./components/Posts_list";
import Add_post from "./components/Add_post";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors />
      <h1 className="text-3xl font-bold underline">Challenger TCIT</h1>{" "}
      <span className="text-xs">By Amaldo Molinares</span>
      <Posts_list />
      <Add_post />
    </>
  );
}

export default App;
