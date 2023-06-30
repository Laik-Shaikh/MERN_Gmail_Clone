import { Create } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import React, { useState } from "react";
import { SIDEBAR_CONTENT } from "../constants/sidebarContent"; 
import ComposeEmail from './ComposeEmail';
import { NavLink, Link } from "react-router-dom";

const Container = styled(Box)({
  padding: 8,

  '& > ul ' : {
    padding: "10px 0 0 5px"
  },

  '& > ul > li' : {
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
  },

  '& >ul >li > a' : {
    textDecoration : "none",
    color: "black",
    display: "flex",
    alignItems: "center"
  },

  '& >ul >li > a > svg' :{
    marginRight: 10
  }
});

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  minWidth: 130,
  padding: 12,
  textTransform: "none",
  borderRadius: 14,
  
  '&:hover': {
    background: "#c2e7ff",
    color: "#001d35",
    boxShadow: '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)'
  },
  "& > svg": {
    marginRight: 10,
  },
});

function SidebarContent() {
  const [openComposeEmail, setOpenComposeEmail] = useState(false);

  

  return (
    <>
      <Container>
        <ComposeButton onClick={() => setOpenComposeEmail(true)}>
          <Create /> Compose{" "}
        </ComposeButton>
        {/* <Link>Home</Link> */}
        <List>
          {SIDEBAR_CONTENT.map((data) => (
            <ListItem key={data.name}>
              <NavLink to={data.name}>
                <data.icon fontSize="small" />
                {data.label}
              </NavLink>
            </ListItem>
          ))}
        </List>

        <ComposeEmail setOpenComposeEmail={setOpenComposeEmail} openComposeEmail={openComposeEmail} />
      </Container>
    </>
  );
}

export default SidebarContent;
