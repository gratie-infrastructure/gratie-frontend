import * as React from "react";
import Container from "@mui/material/Container";

import CompanyTab from "@/src/components/company/companyTab";
import Loading from "../Loading";

export default function CompanyIndex() {
  const [openLoading, setOpenLoading] = React.useState(false);

  const handleLoaderToggle = (status: boolean) => {
    setOpenLoading(status);
  };

  return (
    <div className="">
      <React.Fragment>
        <Container className="" style={{ maxWidth: "2000px" }} component="main">
          {<CompanyTab />}
        </Container>

        <Loading open={openLoading} handleClose={handleLoaderToggle} />
      </React.Fragment>
    </div>
  );
}
