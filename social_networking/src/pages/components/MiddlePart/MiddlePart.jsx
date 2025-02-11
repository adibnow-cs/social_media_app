import { Avatar, Card, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FeedIcon from '@mui/icons-material/Feed';

const story = [11, 1, 1, 1, 1];
const MiddlePart = () => {
  const handleOpenCreatePost = () => {
    console.log("Open  post model ");
  };
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }} src=" ">
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>

          <p> New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            readOnly
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#0b23db] border"
            type="text"
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePost}>
              <ImageIcon />
            </IconButton>
            <span> Media</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePost}>
              <VideoCallIcon />
            </IconButton>
            <span> Video</span>
          </div>
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePost}>
              <FeedIcon />
            </IconButton>
            <span> Article</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MiddlePart;
