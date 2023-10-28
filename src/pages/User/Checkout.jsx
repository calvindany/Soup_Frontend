import {
  Modal,
  Box,
  Checkbox,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { GridLoader } from "react-spinners";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import CheckoutCard from "@/components/CheckoutCard";
import Footer from "@/components/Footer";

import { data, paymentMethod } from "@/assets/data";

import useAuth from "@/hooks/useAuth";

import "@/assets/css/Root.css";
import "@/assets/css/Checkout.css";

export default function Checkout() {
  const { payload } = useAuth();

  // isinya course di checkout yang selected
  const [checkoutData, setCheckoutData] = useState([]);
  const [checkedCourse, setCheckedCourse] = useState([]);
  const [totalCourse, setTotalCourse] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const getUserIdFromToken = (token) => {
    const { user_id } = jwtDecode(token);
    return user_id;
  };

  useEffect(() => {
    // console.log(payload);
    const user_id = getUserIdFromToken(payload);
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_API_BASE_URL
        }/Transaction/GetCheckout/${user_id}`
      )
      .then((result) => {
        setCheckoutData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log(checkedCourse);
  // }, [checkedCourse]);

  useEffect(() => {
    let total = 0;
    checkoutData.map((checkout) => {
      // console.log(checkedCourse.includes(parseInt(checkout.courseId)));
      if (checkedCourse.includes(parseInt(checkout.courseId))) {
        total += parseInt(checkout.price);
      }
    });

    const inRupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(total);

    setTotalCourse(inRupiah.substring(3));
  }, [checkedCourse]);

  function handleCheckCourse(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
      if (checkedCourse.includes(parseInt(event.target.value))) {
        const newCheckedCourse = checkedCourse.filter((course) => {
          return course != event.target.value;
        });
        // console.log(newCheckedCourse);
        setCheckedCourse(newCheckedCourse);
      } else {
        const newCheckedCourse = [...checkedCourse];
        newCheckedCourse.push(parseInt(event.target.value));
        // console.log(newCheckedCourse);

        setCheckedCourse(newCheckedCourse);
      }
    } else {
      if (checkedCourse.includes(parseInt(event.target.value))) {
        const newCheckedCourse = checkedCourse.filter((course) => {
          return course != event.target.value;
        });
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

  function handleSelectPaymentMethod(idPaymentMethod) {
    setSelectedPaymentMethod(idPaymentMethod);
  }

  return (
    <>
      <div className="checkoutContainer">
        <div className="checkAll">
          <Checkbox
            color="default"
            onChange={handleCheckAllCourse}
            checked={checkoutData.length == checkedCourse.length ? true : false}
          />
          Pilih Semua
        </div>
        <Divider />
        {checkoutData.length == 0 ? (
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
          checkoutData.map((checkout, index) => (
            <div key={index}>
              <CheckoutCard
                courseId={checkout.courseId}
                image={checkout.image}
                category={checkout.category}
                title={checkout.title}
                schedule={checkout.schedule}
                price={checkout.price}
                isChecked={checkedCourse.includes(parseInt(checkout.courseId))}
                onChangeHandler={handleCheckCourse}
                editDisplay={true}
              />
              <Divider />
            </div>
          ))
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflowY: "true" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            bgcolor: "background.paper",
            border: "1px solid #000",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Select Payment Method
          </Typography>
          {paymentMethod.map((payment, index) => (
            <div
              id="modal-modal-description"
              className={
                selectedPaymentMethod == index
                  ? "list-payment selected-payment"
                  : "list-payment"
              }
              style={{ marginTop: "20px" }}
              onClick={() => handleSelectPaymentMethod(index)}
              key={index}
            >
              <img
                src={payment.image}
                alt={payment.paymentName}
                style={{ maxWidth: "6vh" }}
              />
              <Typography>{payment.paymentName}</Typography>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="outlined"
              className="button-secondary text-primary-color"
              style={{ textTransform: "none", fontWeight: 600 }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className="button-primary text-primary-color"
              style={{ textTransform: "none", fontWeight: 600 }}
            >
              Pay Now
            </Button>
          </div>
        </Box>
      </Modal>
      <div className="checkoutFooter">
        <div className="priceTag">
          <Typography variant="h6">Total Price</Typography>
          <span className="text-secondary-color">IDR {totalCourse}</span>
        </div>
        <Button
          variant="contained"
          className="text-primary-color button-primary"
          style={{ textTransform: "none" }}
          onClick={handleOpen}
        >
          Pay Now
        </Button>
      </div>
    </>
  );
}
