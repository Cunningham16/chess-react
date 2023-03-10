import SideBar from "components/SideBar";

import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';

const PlayWithFriend = lazy(() => import('./PlayWithFriend'))
const MainPage = lazy(() => import('./MainPage'))
const PlayWithAI = lazy(() => import('./PlayWithAI'))
const Settings = lazy(() => import('./Settings'))


const Routing = () => {
    return(
        <div>
            <SideBar/>
        <Routes>
          <Route path="/" element = {<MainPage />}></Route>
          <Route path="/playfriend" element = {<PlayWithFriend />}></Route>
          <Route path="/playai" element = {<PlayWithAI />}></Route>
          <Route path="/settings" element = {<Settings />}></Route>
        </Routes>
        </div>
    )
}

export default Routing