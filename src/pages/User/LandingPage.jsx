import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import Edit1 from "@/assets/img/edit1.png";
import Edit2 from "@/assets/img/edit2.png";
import Edit3 from "@/assets/img/edit3.png";

import BannerLanding from "@/components/Banner";
import CategoryCard from "@/components/CategoryCard";

import "@/assets/css/Landing.css";
import "@/assets/css/Root.css";

export default function LandingPage() {
  const data = [
    {
      image: Edit1,
      title: "Tom Yum Thailand",
      category: "Asian",
      price: "IDR 450.000",
    },
    {
      image: Edit2,
      title: "Tom Yum Thailand",
      category: "Asian",
      price: "IDR 450.000",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
      category: "Asian",
      price: "IDR 450.000",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
      category: "Asian",
      price: "IDR 450.000",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
      category: "Asian",
      price: "IDR 450.000",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
      category: "Asian",
      price: "IDR 450.000",
    },
  ];

  const categoryData = [
    {
      image: Edit1,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit2,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit1,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit2,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit2,
      title: "Tom Yum Thailand",
    },
    {
      image: Edit3,
      title: "Tom Yum Thailand",
    },
  ];
  return (
    <>
      <BannerLanding />
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
      <Container maxWidth="xl" style={{ marginBottom: "8vh" }}>
        <div className="course-container">
          <Typography
            className="title-text text-primary-color"
            style={{ marginBottom: "5vh" }}
          >
            More Professional Class
          </Typography>
          <div className="list-course-container">
            {data.map((course, index) => (
              <Card sx={{ minWidth: 400 }} key={index}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={course.image}
                  title={course.title}
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="body2" color="text.secondary">
                    {course.category}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ marginBottom: "40px" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="h5" className="text-secondary-color">
                    {course.price}
                  </Typography>
                </CardContent>
              </Card>
              // <CourseCard
              //   image={course.image}
              //   title={course.title}
              //   category={course.category}
              //   price={course.price}
              // />
            ))}
          </div>
        </div>
      </Container>
      <BannerLanding />
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
            <div className="list-category-container">
              {categoryData.map((category, index) => (
                <CategoryCard
                  image={category.image}
                  title={category.title}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
