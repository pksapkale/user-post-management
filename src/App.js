import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./components/Main";
import { Directory } from "./components/Directory";
import { UserProfile } from "./components/UserProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Directory />,
        },
        {
          path: "/:user_id",
          element: <UserProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
