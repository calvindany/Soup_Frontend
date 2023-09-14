import { Typography } from "@mui/material";

// import "@/assets/css/CategoryCard.css";

export default function CategoryCard({ image, title }) {
  return (
    <>
      <div className="category-card-container">
        <div className="category-image-container ">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <Typography variant="h5">{title}</Typography>
        </div>
      </div>
    </>
  );
}
