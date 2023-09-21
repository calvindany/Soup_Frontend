import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Typography, Divider } from "@mui/material";

import BannerListClass from "@/assets/img/banner-list-class.png";

import Banner from "@/components/Banner";
import ListCourse from "@/components/ListCourse";
import Footer from "@/components/Footer";

import "@/assets/css/Root.css";
import "@/assets/css/ListMenuClass.css";

import { data, categoryData } from "@/assets/data";

export default function ListMenuClass() {
  const { pathName } = useLocation();
  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <Banner image={BannerListClass} />
      <div className="menu-class-detail">
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          {categoryData[categoryId].title}
        </Typography>
        <Typography variant="p">
          {categoryData[categoryId].description}
        </Typography>
      </div>
      <Divider sx={{ marginTop: "10vh", marginBottom: "10vh" }} />
      <ListCourse listImage={data} />
      <Footer />
    </>
  );
}
