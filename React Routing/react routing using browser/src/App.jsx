
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import ChildA from './Components/ChildA';
import ChildB from './Components/ChildB';
import NotFound from './Components/NotFound';

// const LayOut = () =>(
//   <div>
//     <Navbar />
//     <Outlet /> 
//   </div>
// );

// const router=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element: <LayOut />,
//       children: [
//         {path: '/', element: <Home />},
//         {path: '/about', element: <About />},
//         {path: '/dashboard', element: <Dashboard />}
//       ]
//     }
//   ]);


//first
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//second
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
       <Navbar />
       <Home />
      </div>
    },
    {
      path:'/about',
      element:
       <div>
       <Navbar />
       <About />
      </div>
    },
    {
      path:'/dashboard',
      element:
      <div>
       <Navbar />
       <Dashboard />
      </div>,
      //if we want dashboard/children then
      children: [
        {
          path:'children',
          element:<ChildA />
        },
        {
          path:'childrenb',
          element:<ChildB />
        },

      ]
    },
    //if we want any other who does not define then
    {
      path:'*',
      element:<NotFound />
    }
  ]
);

function App() {


  return (
    <>
    
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App
