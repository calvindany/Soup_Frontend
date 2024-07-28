import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "@/assets/css/CategoryCard.css";

export default function CategoryCard({ id, image, title }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="category-card-container"
        onClick={() => navigate("/listmenuclass/" + id, { screen: "Profile" })}
      >
        <div className="category-image-container">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <Typography variant="h5">{title}</Typography>
        </div>
      </div>
    </>
  );
}
