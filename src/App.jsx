
import MedicationList from './pages/MedicationList';
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/LoginView.jsx';


const router = createBrowserRouter([
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MedicationList />,
  }, 
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App