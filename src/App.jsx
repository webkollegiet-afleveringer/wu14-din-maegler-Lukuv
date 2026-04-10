import { Routes, Route, Link } from "react-router";
import Home from "./home";
import PropertyList from "./propertyList";
import Agents from "./agents";
import AgentsDetail from "./agentsdetail";
import Favorites from "./favorites";
import Contact from "./contact";
import PropertyDetail from "./propertydetail";
import Hov from "./hov";
import Login from "./login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/propertylist" element={<PropertyList />}></Route>
        <Route path="/propertyDetail/:propertyId" element={<PropertyDetail />}></Route>
        <Route path="/agents" element={<Agents />}></Route>
        <Route path="/agentsdetail/:agentId" element={<AgentsDetail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Hov />}></Route>
      </Routes>
    </div>
  );
}

export default App;
