import { Card, CardHeader } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Post = () => {
  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="UserName"
        subheader="@user_name"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2024/11/29/09/38/mute-swan-9232607_640.jpg"
        alt="Swan"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          A graceful swan glides effortlessly across the calm waters, its white
          feathers reflecting in the gentle ripples. The warm autumn hues in the
          foreground frame the serene scene, adding a touch of seasonal beauty.
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            {<ShareIcon />}
          </IconButton>
          <IconButton>
            {<ChatBubbleIcon />}
          </IconButton>
        </div>
        <div>
            <IconButton>
                 {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
            </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default Post;
