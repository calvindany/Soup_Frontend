import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useParams } from "react-router-dom";

import BreadcrumbsCustom from "@/components/BreadCrumbs";

import { invoiceData, detailInvoiceData } from "@/assets/data";

import "@/assets/css/DetailInvoice.css";

export default function DetailInvoice() {
  const { idInvoice } = useParams();

  const breadcrumbsItem = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/invoice"
      style={{ fontWeight: 600 }}
      //   onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/invoice"
      style={{ fontWeight: 600 }}
      //   onClick={handleClick}
    >
      Invoice
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/invoice"
      style={{ fontWeight: 600 }}
      //   onClick={handleClick}
    >
      {idInvoice}
    </Link>,
  ];
  // useEffect(() => {
  //   console.log(detailInvoiceData);
  // });
  return (
    <>
      <div className="invoiceContainer">
        <BreadcrumbsCustom item={breadcrumbsItem} />
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Details Invoice
        </Typography>
        <div className="invoiceInformation">
          <div className="left">
            <div>
              <Typography variant="span">No. Invoice:</Typography>
              <Typography variant="span">
                {invoiceData[idInvoice].noInvoice}
              </Typography>
            </div>
            <div>
              <Typography variant="span">Date:</Typography>
              <Typography variant="span">
                {invoiceData[idInvoice].invoiceDates}
              </Typography>
            </div>
          </div>
          <div className="right">
            <Typography variant="span" style={{ fontWeight: 600 }}>
              Total Price
            </Typography>
            <Typography variant="span" style={{ fontWeight: 600 }}>
              IDR. {invoiceData[idInvoice].totalPrice}
            </Typography>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell className="tableHeadCell" align="center">
                  No
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Course Name
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Type
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Schedule
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detailInvoiceData[idInvoice].map((detailInvoice, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {detailInvoice.courseName}
                  </TableCell>
                  <TableCell align="center">{detailInvoice.category}</TableCell>
                  <TableCell align="center">
                    {detailInvoice.scheduledCourse}
                  </TableCell>
                  <TableCell align="center">
                    IDR. {detailInvoice.coursePrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
