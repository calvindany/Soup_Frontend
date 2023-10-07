import CheckoutCard from "@/components/CheckoutCard";

import { myClassData } from "@/assets/data";

import "@/assets/css/Root.css";
import "@/assets/css/MyClass.css";

export default function MyClass() {
  return (
    <>
      <div className="myClassContainer">
        {myClassData.map((myClass, index) => (
          <CheckoutCard
            image={myClass.image}
            category={myClass.category}
            title={myClass.courseName}
            schedule={myClass.scheduledCourse}
            editDisplay={false}
          />
        ))}
      </div>
    </>
  );
}
