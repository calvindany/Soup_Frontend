import { useEffect, useState } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";

import ListCourse from "@/components/ListCourse";
import Footer from "@/components/Footer";

import { data, categoryData } from "@/assets/data";
import { GenerateOneWeekDate } from "@/utils/GenerateDate";

import "@/assets/css/DetailClass.css";

export default function DetailClass() {
  const { courseId } = useParams();
  const { pathName } = useLocation();

  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [availSchedule, setAvailSchedule] = useState([]);

  const handleScheduleChange = (event) => {
    setSelectedSchedule(event.target.value);
  };

  useEffect(() => {
    setAvailSchedule(GenerateOneWeekDate());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <div className="detailCourseContainer">
        <div className="detailCourseImageContainer">
          <img src={data[courseId].image} alt={data[courseId].title} />
        </div>
        <div className="detailCourseForm">
          <div className="detailCourseData">
            <Typography variant="span">{data[courseId].category}</Typography>
            <Typography variant="span" className="detailCourseClassTitle">
              {data[courseId].title}
            </Typography>
            <Typography variant="span" className="detailCourseClassTitle">
              IDR. {data[courseId].price}
            </Typography>
          </div>
          <FormControl className="dropdownSchedule">
            <InputLabel id="demo-simple-select-label">Schedule Here</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedSchedule}
              label="Schedule Here"
              onChange={handleScheduleChange}
            >
              {availSchedule.map((avail, index) => (
                <MenuItem value={avail} key={index}>
                  {avail}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="button-group">
            <Button
              variant="outlined"
              className="text-primary-color button-secondary btn"
              style={{ textTransform: "none" }}
            >
              Add To Cart
            </Button>
            <Button
              variant="contained"
              className="text-primary-color button-primary btn"
              style={{ textTransform: "none" }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="detailCourseDescription">
        <Typography variant="h6">Description</Typography>
        <Typography variant="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
      </div>
      <Divider sx={{ marginTop: "10vh", marginBottom: "10vh" }} />
      <ListCourse listImage={data} />
      <Footer />
    </>
  );
}
