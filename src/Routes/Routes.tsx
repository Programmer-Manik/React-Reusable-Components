import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";

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
]);

export default router ;