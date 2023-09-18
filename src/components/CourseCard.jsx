import { Typography } from "@mui/material";

export default function CourseCard({ image, title, category, price }) {
  return (
    <>
      <div>
        <div className="image-container">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <div className="course-title">
            <Typography variant="p" className="normal-text">
              {category}
            </Typography>
            <Typography variant="h5" className="normal-text">
              {title}
            </Typography>
            <Typography variant="h5" className="normal-text">
              {price}
            </Typography>
          </div>
          <div className="course-price"></div>
        </div>
      </div>
    </>
  );
}
