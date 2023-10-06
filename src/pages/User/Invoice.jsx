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
import { useNavigate } from "react-router-dom";

import BreadcrumbsCustom from "@/components/BreadCrumbs";

import { invoiceData } from "@/assets/data";

import "@/assets/css/Root.css";
import "@/assets/css/Invoice.css";

export default function Invoice() {
  const navigate = useNavigate();

  const breadcrumbsItem = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
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
  ];

  return (
    <>
      <div className="invoiceContainer">
        <BreadcrumbsCustom item={breadcrumbsItem} />
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Menu Invoice
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell className="tableHeadCell" align="center">
                  No Invoice
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Date
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Total Course
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Total Price
                </TableCell>
                <TableCell className="tableHeadCell" align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceData.map((invoice, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {invoice.noInvoice}
                  </TableCell>
                  <TableCell align="center">{invoice.invoiceDates}</TableCell>
                  <TableCell align="center">{invoice.totalCourse}</TableCell>
                  <TableCell align="center">
                    IDR. {invoice.totalPrice}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      className="text-primary-color button-primary"
                      style={{ textTransform: "none", fontWeight: 600 }}
                      onClick={() =>
                        navigate("/detail-invoice/" + invoice.noInvoice)
                      }
                    >
                      Details
                    </Button>
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
