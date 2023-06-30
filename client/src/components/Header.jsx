import React from "react";
import { AppBar, Toolbar, styled, Box, InputBase } from "@mui/material";
import {
  Menu as MenuItem,
  Search,
  Tune,
  HelpOutline,
  Settings,
  Apps,
  AccountCircle,
} from "@mui/icons-material";

const AppBarWrapper = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  padding: "0 20px",

  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  column-gap: 20px;
`;

function Header({ toggleDrawer }) {
  return (
    <AppBarWrapper position="static">
      <Toolbar>
        <MenuItem
          sx={{
            cursor: "pointer",
            color: "black",

            "&:hover": {
              color: "grey",
            },
          }}
          onClick={toggleDrawer}
        />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail-logo"
          style={{ width: 110, marginLeft: 80 }}
        />
        <SearchWrapper>
          <Search color="action" />
          <InputBase />
          <Tune sx={{ cursor: "pointer" }} color="action" />
        </SearchWrapper>

        <OptionsWrapper>
          <HelpOutline sx={{ cursor: "pointer" }} color="action" />
          <Settings sx={{ cursor: "pointer" }} color="action" />
          <Apps sx={{ cursor: "pointer" }} color="action" />
          <AccountCircle sx={{ cursor: "pointer" }} color="action" />
        </OptionsWrapper>
      </Toolbar>
    </AppBarWrapper>
  );
}

export default Header;
