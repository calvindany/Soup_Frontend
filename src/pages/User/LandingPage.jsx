import { Container, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import { GridLoader } from "react-spinners";

import BannerLanding1 from "@/assets/img/banner-landing.png";
import BannerLanding2 from "@/assets/img/banner-landing2.png";

import BannerLanding from "@/components/Banner";
import CategoryCard from "@/components/CategoryCard";
import ListCourse from "../../components/ListCourse";
import Footer from "@/components/Footer";

import "@/assets/css/Landing.css";
import "@/assets/css/Root.css";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/Courses`)
      .then((result) => {
        // console.log(result.data);
        setCourses(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/Category`)
      .then((result) => {
        setCategories(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log(courses);
  // }, [courses]);

  return (
    <>
      <BannerLanding
        image={BannerLanding1}
        titleSize="normal"
        alignItems="center"
        title="Be the next great chef"
        text="We are able to awaken your cooking skills to become a classy chef and
      ready to dive into the professional world"
      />
      <Container maxWidth="xl" style={{ marginBottom: "8vh" }}>
        <div className="card-container">
          <Card className="course-total-card">
            <CardContent className="course-total-card-content">
              <Typography
                variant="h3"
                className="text-secondary-color"
                style={{ textAlign: "center" }}
              >
                200+
              </Typography>
              <Typography
                variant="p"
                className="text-primary-color normal-text"
                style={{
                  textAlign: "center",
                }}
              >
                Various cuisines available in professional class
              </Typography>
            </CardContent>
          </Card>
          <Card className="course-total-card">
            <CardContent className="course-total-card-content">
              <Typography
                variant="h3"
                className="text-secondary-color"
                style={{ textAlign: "center" }}
              >
                50+
              </Typography>
              <Typography
                variant="p"
                className="text-primary-color normal-text"
                style={{
                  textAlign: "center",
                }}
              >
                A chef who is reliable and has his own characteristics in
                cooking
              </Typography>
            </CardContent>
          </Card>
          <Card className="course-total-card">
            <CardContent className="course-total-card-content">
              <Typography
                variant="h3"
                className="text-secondary-color"
                style={{ textAlign: "center" }}
              >
                200+
              </Typography>
              <Typography
                variant="p"
                className="text-primary-color normal-text"
                style={{
                  textAlign: "center",
                }}
              >
                Cooperate with trusted and upscale restaurants
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
      <ListCourse listImage={courses} />
      <BannerLanding
        image={BannerLanding2}
        titleSize="big"
        alignItems="start"
        title="Gets your best benefit"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
      />
      <Container maxWidth="xl" style={{ marginBottom: "8vh" }}>
        <div className="course-container">
          <Typography
            className="title-text text-primary-color"
            style={{ marginBottom: "5vh" }}
          >
            More food type as you can choose
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {categories.length == 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  margin: "50px 64px",
                }}
              >
                <GridLoader color="#372B22" />
              </div>
            ) : (
              <div className="list-category-container">
                {categories.map((category, index) => (
                  <CategoryCard
                    id={category.id}
                    image={category.image}
                    title={category.title}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
