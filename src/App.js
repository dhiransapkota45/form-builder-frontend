import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import {useSelector} from "react-redux"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Homepage />} />
        
      </Routes>
    </div>
  );
}

export default App;
