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
import BannerLanding1 from "@/assets/img/banner-landing.png";
import BannerLanding2 from "@/assets/img/banner-landing2.png";

import BannerLanding from "@/components/Banner";
import CategoryCard from "@/components/CategoryCard";
import ListCourse from "../../components/ListCourse";
import Footer from "@/components/Footer";

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
      <ListCourse listImage={data} />
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
            <div className="list-category-container">
              {categoryData.map((category, index) => (
                <CategoryCard
                  image={category.image}
                  title={category.title}
                  id={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
