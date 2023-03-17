import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  Root,
  Error,
  Home,
  About,
  Teams,
  Blog,
  Contact,
  Testimonials,
  Pricing
} from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/pages",
        children: [
          { path: "/pages/teams", element: <Teams /> },
          { path: "/pages/testimonials", element: <Testimonials /> },
          { path: "/pages/pricing", element: <Pricing /> },
        ],
      },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <section>
        <RouterProvider router={routes} />
      </section>
    </div>
  );
}

export default App;
