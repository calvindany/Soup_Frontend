import { Checkbox, Divider } from "@mui/material";
import { useEffect, useState } from "react";

import CheckoutCard from "@/components/CheckoutCard";

import { data, checkoutData } from "@/assets/data";

import "@/assets/css/Root.css";
import "@/assets/css/Checkout.css";

export default function Checkout() {
  const [checkedCourse, setCheckedCourse] = useState([]);

  function handleCheckCourse() {}

  return (
    <>
      <div className="checkoutContainer">
        <div className="checkAll">
          <Checkbox color="default" /> Pilih Semua
        </div>
        <Divider />
        {checkoutData.map((checkout) => (
          <>
            <CheckoutCard
              image={data[checkout.courseId].image}
              category={data[checkout.courseId].category}
              title={data[checkout.courseId].title}
              schedule={checkout.schedule}
              price={data[checkout.courseId].price}
            />
            <Divider />
          </>
        ))}
      </div>
    </>
  );
}
