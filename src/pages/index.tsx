import { SideBar } from "widgets/Sidebar";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const PlayWithFriend = lazy(() => import("./PlayWithFriend"));
const MainPage = lazy(() => import("./MainPage"));
const PlayWithAI = lazy(() => import("./PlayWithAI"));
const Settings = lazy(() => import("./Settings"));

const Routing = () => {
  return (
    <div>
      <SideBar />
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ca8745"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: "flex",
              width: "100%",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
            }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/playfriend" element={<PlayWithFriend />}></Route>
          <Route path="/playai" element={<PlayWithAI />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default Routing;
