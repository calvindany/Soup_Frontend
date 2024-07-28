import { Stack, Breadcrumbs, Link, Typography } from "@mui/material";

export default function BreadcrumbsCustom({ item }) {
  return (
    <>
      <Stack spacing={2}>
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          {item}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
