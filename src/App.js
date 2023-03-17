import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Player from "./components/player";
import Sidebar from "./components/sidebar";
import Queue from "./components/queue";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Queue/>
     <Routes>
      <Route index element={<Home/>}/>
     </Routes>
     <Player/>
    </div>
  );
}

export default App;
