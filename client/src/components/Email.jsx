import { Checkbox, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StarBorder, Replay, SubscriptRounded } from "@mui/icons-material";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  background: "#f2f6fc",
  boxShadow: "inset 0 -1px 0 0 rgba(100,121,143,0.122)",
  cursor: "pointer",
  marginBottom: "1px",

  "& > svg": {
    marginRight: 10,
  },

  "&:hover": {
    boxShadow:
      "inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
    zIndex: 2,
  },
});

const Wrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: 10,
});



function Email({ mails, setSelectedMails, selectedMails }) {
  const formatter = new Intl.DateTimeFormat("en-us", { month: "short" });
  // console.log(mails);

  const navigate = useNavigate();

  return (
    <>
      
      {mails?.length > 0 &&
        mails?.map((mail) => (
          <Container key={mail._id}>
            <Checkbox 
            onChange={() => {
                if(selectedMails.includes(mail._id)) {
                    //remove
                    setSelectedMails((prev) => prev.filter(m => m != mail._id))
                    
                } else {
                    setSelectedMails((prev) => [...prev, mail._id])
                }
            }} 
            size="small" 
            checked={selectedMails.includes(mail._id)}
            />
            <StarBorder fontSize="small" />
            <Typography onClick={() => navigate(`/${mail.type}/${mail._id}`)} style={{ width: 200, overflow: "hidden" }}>
              {mail.name}
            </Typography>
            <Wrapper onClick={() => navigate(`/${mail.type}/${mail._id}`)}>
              <Typography>
                {mail.subject ? mail.subject : "(no subject)"} {" - "}{" "}
                {mail.body.length > 65 ? mail.body.substr(0, 65) + "..." : mail.body}
              </Typography>
              <Typography>
                {formatter.format(new Date(mail.date))}
                {formatter.formatToParts}
                &nbsp; {new Date(mail.date).getDate()}
              </Typography>
            </Wrapper>
          </Container>
        ))}
    </>
  );
}

export default Email;
