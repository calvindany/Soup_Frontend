import { Typography } from "@mui/material";

import "@/assets/css/Banner.css";

export default function Banner({
  image,
  titleSize = "normal",
  alignItems,
  title,
  text,
}) {
  return (
    <>
      <div className="banner-container" style={{ marginBottom: "8vh" }}>
        <div className="image-container">
          <img src={image} alt="Banner" />
        </div>
        {title && text ? (
          <div className="text-container" style={{ alignItems: alignItems }}>
            <Typography
              variant="h4"
              className={
                titleSize == "normal"
                  ? "banner-title-normal"
                  : "banner-title-big"
              }
            >
              {title}
            </Typography>
            <Typography
              variant="p"
              className={
                titleSize == "normal" ? "banner-text-normal" : "banner-text-big"
              }
            >
              {text}
            </Typography>
          </div>
        ) : null}
      </div>
    </>
  );
}
