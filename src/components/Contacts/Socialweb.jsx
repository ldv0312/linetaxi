import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Socialweb = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "20%",
        justifyContent: "space-between",
        m: 2,
        ml: 0,
      }}
    >
      <Link className="icon-instagram" href="https://www.instagram.com/">
        <InstagramIcon sx={{ fill: "#0b1f3f", fontSize: "2rem" }} />
      </Link>

      <Link className="icon-facebook" href="https://www.facebook.com/">
        <FacebookIcon sx={{ fill: "#0b1f3f", fontSize: "2rem" }} />
      </Link>

      <Link className="icon-twitter" href="https://twitter.com/">
        <TwitterIcon sx={{ fill: "#0b1f3f", fontSize: "2rem" }} />
      </Link>
    </Box>
  );
};

export default Socialweb;
