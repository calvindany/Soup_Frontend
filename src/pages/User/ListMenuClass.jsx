import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Typography, Divider } from "@mui/material";
import axios from "axios";

import BannerListClass from "@/assets/img/banner-list-class.png";

import Banner from "@/components/Banner";
import ListCourse from "@/components/ListCourse";
import Footer from "@/components/Footer";

import "@/assets/css/Root.css";
import "@/assets/css/ListMenuClass.css";

export default function ListMenuClass() {
  const { pathName } = useLocation();
  const { categoryId } = useParams();

  const [categoryInformation, setCategoryInformation] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_API_BASE_URL
        }/Category/GetCategoryById/${categoryId}`
      )
      .then((result) => {
        setCategoryInformation(result.data);
        // console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log(categoryInformation);
  // }, [categoryInformation]);

  return (
    <>
      <Banner image={BannerListClass} />
      <div className="menu-class-detail">
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          {categoryInformation.category_Name}
        </Typography>
        <Typography variant="p">{categoryInformation.description}</Typography>
      </div>
      <Divider sx={{ marginTop: "10vh", marginBottom: "10vh" }} />
      <ListCourse listImage={categoryInformation.relatedCourse} />
      <Footer />
    </>
  );
}
