import { Typography } from "@mui/material";

import BannerLanding from "@/assets/img/banner-landing.png";

import "@/assets/css/Banner.css";

export default function Banner({
  titleSize = "normal",
  textSize,
  title,
  text,
}) {
  return (
    <>
      <div
        className="banner-container"
        style={{ marginBottom: "8vh", backgroundColor: "black" }}
      >
        <div className="image-container">
          <img src={BannerLanding} alt="Banner" />
        </div>
        <div className="text-container">
          <Typography
            variant="h4"
            className={
              titleSize == "normal" ? "banner-title-normal" : "banner-title-big"
            }
          >
            Be the next great chef
          </Typography>
          <Typography
            variant="p"
            className={
              titleSize == "normal" ? "banner-text-normal" : "banner-text-big"
            }
          >
            We are able to awaken your cooking skills to become a classy chef
            and ready to dive into the professional world
          </Typography>
        </div>
      </div>
    </>
  );
}
