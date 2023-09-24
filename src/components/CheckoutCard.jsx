import { Checkbox, Typography } from "@mui/material";

import { data, categoryData } from "@/assets/data";

import "@/assets/css/Root.css";
import "@/assets/css/CheckoutCard.css";

export default function CheckoutCard({
  image,
  category,
  title,
  schedule,
  price,
}) {
  return (
    <>
      <div className="checkoutCard">
        <div className="checkoutCheckbox">
          <Checkbox color="default" />
        </div>
        <div className="checkoutImage">
          <img src={image} alt={title} />
        </div>
        <div className="checkoutCourseData">
          <Typography variant="span" className="checkoutCourseClassCategory">
            {category}
          </Typography>
          <Typography
            variant="span"
            className="checkoutCourseClassTitle text-primary-color"
          >
            {title}
          </Typography>
          <Typography
            variant="span"
            className="checkoutCourseClassSchedule text-primary-color"
          >
            Schedule : {schedule}
          </Typography>
          <Typography
            variant="span"
            className="checkoutCourseClassPrice text-secondary-color"
          >
            IDR. {price}
          </Typography>
        </div>
      </div>
    </>
  );
}
