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
    <div className="px-20">
      <Grid container spacing={2} justifyContent="space-between">
         
         {/* Sidebar (Left Section) */}

        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        
        {/* Middle Content (Center Section) */}
                
        <Grid
          item
          className="px-5 flex justify-center "
          xs={12}
          lg={6}
        >
          <Routes>
            <Route path ="/" element ={<MiddlePart/>} />
            <Route path ="/reels" element ={<Reels/>} />
            <Route path ="/create-reels" element ={<CreateReels/>} />
            <Route path ="/profile/:id" element ={<ProfilePage/>} />
          </Routes>
        </Grid>
        
        {/* HomeRight (Right Section) */}
        
        <Grid item lg={3} className="relative">
          <div className="sticky top-0 w-full">
            <HomeRight/>
          </div>

        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
