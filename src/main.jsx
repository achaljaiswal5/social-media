import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import App from "./routes/App.jsx";
import PostList from "./components/PostList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
