import * as React from "react";

import Container from "@mui/material/Container";

import UserTab from "@/src/components/user/userTab";
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
          {<UserTab />}
        </Container>
        <Loading open={openLoading} handleClose={handleLoaderToggle} />
      </React.Fragment>
    </div>
  );
}
