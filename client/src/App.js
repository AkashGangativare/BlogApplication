import Homepage from "./pages/homepage/Homepage";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user} = useContext(Context) ;
  return (
      <Router>
          <Topbar/>
          <Routes>
          <Route exact path="/"  element={<Homepage/>}></Route>
          <Route exact path="/register"  element={user?<Homepage/>:<Register/>}></Route>
          <Route exact path="/login"  element={<Login/>}></Route>
          <Route exact path="/settings"  element={user?<Settings/>:<Register/>}></Route>
          <Route exact path="/write"  element={user?<Write/>:<Register/>}></Route>
          <Route exact path="/post/:postId"  element={<Single/>}></Route>
          <Route exact path="/about"  element={<About/>}></Route>

          </Routes>
          
      </Router>
  );
}

export default App;
