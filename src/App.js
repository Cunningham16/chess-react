import PlayWithFriend from "./components/PlayWithFriend";
import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <SideBar/>
        <Routes>
          <Route path="/" element = {<Header />}></Route>
          <Route path="/playfriend" element = {<PlayWithFriend />}></Route>
        </Routes>
      </div>
  );
}

export default App;

const Header = () => {
  return (
    <div>Hello world</div>
  );
}