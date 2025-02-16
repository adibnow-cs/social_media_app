import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post/Post";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const posts = [1, 1, 1, 1];

const ProfilePage = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // access ID using useParams
  return (
    <div className="py-10 w-[70%]">
      {/* Profile section*/}
      <div className="rounded-md">
        {/* Cover Image */}
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md object-cover"
            src="https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-2-1024x497.jpg"
            alt="Cover"
          />
          <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
            <Avatar
              className="transform -translate-y-24"
              sx={{ width: "10rem", height: "10rem" }}
              src="https://i0.wp.com/newspack-washingtoncitypaper.s3.amazonaws.com/uploads/2009/04/contexts.org_socimages_files_2009_04_d_silhouette.png?resize=1024%2C645&ssl=1"
            />
            {true ? (
              <Button sx={{ borderRadius: "20px" }} variant="outlined">
                Edit Profile
              </Button>
            ) : (
              <Button variant="outlined">Follow</Button>
            )}
          </div>
          <div className="p-5">
            <div>
              <h1 className="py-1 font-bold text-xl"> My Name</h1>
              <p>@username</p>
            </div>
            <div className="flex gap-5 items-center py-3">
              <span>11 Posts</span>
              <span>11 Followers</span>
              <span>12 Following</span>
            </div>
          </div>
          <div>
            <p>
              Passionate about cinema, tech, and storytelling. Exploring
              creativity, sharing insights, and embracing new experiences. 🎬🚀
            </p>
          </div>
          <section>
            <Box
              sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                {tabs.map((item) => (
                  <Tab key={item.value} value={item.value} label={item.name} wrapped />
                ))}
              </Tabs>
            </Box>
            <div className="flex justify-center">
              {value === "post" && (
                <div className="space-y-5 w-[70%] my-10">
                  {posts.map((item, index) => (
                    <div
                      key={index}
                      className="border border-slate-500 rounded-md"
                    >
                      <Post />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
