import { Checkbox, Divider } from "@mui/material";
import { useEffect, useState } from "react";

import CheckoutCard from "@/components/CheckoutCard";

import { data, checkoutData } from "@/assets/data";

import "@/assets/css/Root.css";
import "@/assets/css/Checkout.css";

export default function Checkout() {
  const [checkedCourse, setCheckedCourse] = useState([]); // isinya course di checkout yang selected

  // Only for debug
  // useEffect(() => {
  //   console.log(checkedCourse);
  // }, [checkedCourse]);

  function handleCheckCourse(event) {
    if (event.target.checked) {
      if (checkedCourse.includes(parseInt(event.target.value))) {
        const newCheckedCourse = checkedCourse.filter((course) => {
          return course != event.target.value;
        });
        setCheckedCourse(newCheckedCourse);
      } else {
        const newCheckedCourse = [...checkedCourse];
        newCheckedCourse.push(parseInt(event.target.value));
        setCheckedCourse(newCheckedCourse);
      }
    } else {
      if (checkedCourse.includes(parseInt(event.target.value))) {
        const newCheckedCourse = checkedCourse.filter((course) => {
          return course != event.target.value;
        });
        setCheckedCourse(newCheckedCourse);
      } else {
        const newCheckedCourse = [...checkedCourse];
        newCheckedCourse.push(parseInt(event.target.value));
        setCheckedCourse(newCheckedCourse);
      }
    }
  }

  function handleCheckAllCourse(event) {
    if (event.target.checked) {
      const allCheckoutCourse = [];
      checkoutData.map((checkoutCourse) => {
        allCheckoutCourse.push(checkoutCourse.courseId);
      });
      setCheckedCourse(allCheckoutCourse);
    } else {
      setCheckedCourse([]);
    }
  }

  return (
    <>
      <div className="checkoutContainer">
        <div className="checkAll">
          <Checkbox color="default" onChange={handleCheckAllCourse} /> Pilih
          Semua
        </div>
        <Divider />
        {checkoutData.map((checkout, index) => (
          <div key={index}>
            <CheckoutCard
              image={data[checkout.courseId].image}
              courseId={checkout.courseId}
              category={data[checkout.courseId].category}
              title={data[checkout.courseId].title}
              schedule={checkout.schedule}
              price={data[checkout.courseId].price}
              isChecked={checkedCourse.includes(checkout.courseId)}
              onChangeHandler={handleCheckCourse}
            />
            <Divider />
          </div>
        ))}
      </div>
    </>
  );
}
