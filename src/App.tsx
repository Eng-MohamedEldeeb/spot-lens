import { RouterProvider } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppRouters from "./App-Routers";

function App() {
  return (
    <>
      <RouterProvider router={AppRouters()} />
    </>
  );
}

export default App;
