import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CourseDeatails from './CourseDetails/CourseDeatails';
import Main from './layout/Main';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import SignUp from './SignUp/SignUp';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/course'),
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
          element: <Home></Home>
        },

        {
          path: "details/:id",
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
          element: <CourseDeatails></CourseDeatails>
        },

        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
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
