import React from "react";
import { Avatar } from "@mui/material";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar 
        sx={{ width: "5rem", height: "5rem" }} 
        src="https://funkylife.in/wp-content/uploads/2022/09/boys-dp-from-funkylife-88.jpg">
        </Avatar>
        <p> mr.Mac</p>
      </div>
    </div>
  );
};

export default StoryCircle;
