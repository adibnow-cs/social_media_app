import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../components/MiddlePart/MiddlePart";
import Reels from "../components/Reels/Reels";
import CreateReels from "../components/Reels/CreateReels";
import ProfilePage from "../Profile/ProfilePage";
import HomeRight from "../components/HomeRight/HomeRight";

function Homepage() {
  const location = useLocation();
  return (
    <div className="flex h-screen">
        {/* Sidebar (Left Section) */}
            <Sidebar />

        {/* Scrollable */}
        <div className="ml-[250px] flex-1 overflow-y-auto h-screen px-10">
        <Grid container spacing={2} justifyContent="space-between">
        {/* Middle Content (Center Section) */}

        <Grid item className="px-5 flex justify-center w-full lg:w-2/3">
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReels />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </Grid>

        {/* HomeRight (Right Section) */}

        {location.pathname === "/" && (
          <Grid item className="w-1/3">
              <HomeRight />
          </Grid>
        )}
      </Grid>
    </div>
    </div>
  );
}

export default Homepage;
