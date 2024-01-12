import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AdminLayout from "../Components/Layout/AdminLayout";

const router = createBrowserRouter([
   {
      path : '/',
      element : <App />,
      children : [
         {
            index : true,
            element: <Home />
         },
         {
            path : '/about',
            element: <About />
         },
      ],
   },
  {
   path : '/',
   element : <AdminLayout />,
   children : [
      {
         path: '/admin',
         element : <h1 className="text-red-400">this admin  Dashboard</h1>
      },
      {
         path : '/add-admin',
         element : <h1 className="text-red-400">this add-admin  Dashboard</h1>
      },
   ]
  },
]);

export default router ;