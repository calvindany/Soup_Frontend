import { Typography, Divider } from "@mui/material";

import BannerListClass from "@/assets/img/banner-list-class.png";

import Banner from "@/components/Banner";

import "@/assets/css/Root.css";
import "@/assets/css/ListMenuClass.css";

export default function ListMenuClass() {
  return (
    <>
      <Banner image={BannerListClass} />
      <div className="menu-class-detail">
        <Typography variant="h5">Asian</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
      <Divider sx={{ marginTop: "10vh" }} />
    </>
  );
}
