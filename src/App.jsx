import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login"
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
