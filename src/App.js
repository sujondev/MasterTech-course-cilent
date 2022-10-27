import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './page/Home/Home';
import Login from './page/Login/Login';


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
          path: '/login',
          element: <Login></Login>
        }
      ]

    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
