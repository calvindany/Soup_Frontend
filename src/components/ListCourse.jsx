import {
  Container,
  CardContent,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { GridLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function ListCourse({ listImage }) {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="xl" style={{ marginBottom: "8vh" }}>
        <div className="course-container">
          <Typography
            className="title-text text-primary-color"
            style={{ marginBottom: "5vh" }}
          >
            More Professional Class
          </Typography>
          <div className="list-course-container">
            {listImage.length == 0 ? (
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
              listImage.map((course, index) => (
                <Card
                  sx={{ minWidth: 400 }}
                  key={index}
                  onClick={() => navigate("/detailclass/" + index)}
                >
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
              ))
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
