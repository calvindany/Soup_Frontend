import { Stack, Breadcrumbs, Link, Typography } from "@mui/material";

export default function BreadcrumbsCustom() {
  const breadcrumbs = [
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
      <Stack spacing={2}>
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
