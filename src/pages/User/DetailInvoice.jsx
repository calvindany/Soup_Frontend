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
} from "@mui/material";

export default function DetailInvoice() {
  return (
    <>
      <div className="invoiceContainer">
        {/* <BreadcrumbsCustom /> */}
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
                  <TableCell component="th" scope="row">
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
