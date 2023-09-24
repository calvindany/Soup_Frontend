import { Checkbox, Typography } from "@mui/material";

import { data, categoryData } from "@/assets/data";

import "@/assets/css/Root.css";
import "@/assets/css/CheckoutCard.css";
import { useEffect } from "react";

export default function CheckoutCard({
  courseId,
  image,
  category,
  title,
  schedule,
  price,
  isChecked,
  onChangeHandler,
}) {
  useEffect(() => {}, [isChecked]);

  return (
    <>
      <div className="checkoutCard">
        <div className="checkoutCheckbox">
          <Checkbox
            color="default"
            value={courseId}
            onChange={onChangeHandler}
            checked={isChecked}
          />
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
