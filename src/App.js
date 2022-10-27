import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CourseDeatails from './CourseDetails/CourseDeatails';
import Main from './layout/Main';
import Blog from './page/Blog/Blog';
import CheckOut from './page/CheckOut/CheckOut';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://programming-ninja-course-server.vercel.app/course'),
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          loader: ({ params }) => fetch(`https://programming-ninja-course-server.vercel.app/category/${params.id}`),
          element: <Home></Home>
        },

        {
          path: "details/:id",
          loader: ({ params }) => fetch(`https://programming-ninja-course-server.vercel.app/course/${params.id}`),
          element: <CourseDeatails></CourseDeatails>
        },

        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/premimum/:id',
          element: <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        }

      ]

    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
