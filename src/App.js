import Main from "./components/Main";
import './App.scss'
import Screen2 from "./components/Screens/Screen2/Screen2";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Signin from "./components/Screens/Auth/Signin";
import Signup from "./components/Screens/Auth/Signup";

function App() {
  return (
    <div>
        <Router>
          <Routes>
          <Route exact path="/" element={ <Main/>} />
          <Route path="/upload" element={<Screen2/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
