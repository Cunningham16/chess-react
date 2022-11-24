import PlayWithFriend from "./components/pages/PlayWithFriend";
import SideBar from "./components/SideBar";
import { Routes, Route } from 'react-router-dom';
import PlayWithAI from "./components/pages/PlayWithAI";
import Settings from "./components/pages/Settings";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
      <div className="App">
        <SideBar/>
        <Routes>
          <Route path="/" element = {<MainPage />}></Route>
          <Route path="/playfriend" element = {<PlayWithFriend />}></Route>
          <Route path="/playai" element = {<PlayWithAI />}></Route>
          <Route path="/settings" element = {<Settings />}></Route>
        </Routes>
      </div>
  );
}

export default App;