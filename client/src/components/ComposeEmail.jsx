import React from "react";
import {
  Box,
  Dialog,
  InputBase,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Delete } from "@mui/icons-material";
import { Button } from "@mui/base";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import {API_ENDPOINTS} from "../api/API_ENDPOINTS";

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  background: "#f2f6fc",

  "& > p": {
    fontSize: "14px",
    fontWeight: "500",
    color: "#000",
  }, 
});

const InputWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",

  "& > div": {
    borderBottom: "1px solid #eee",
    padding: "5px 0px",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 15px",
});

const SendButton = styled(Box)({
  background: "#0B57D0",
  color: "#fff",
  padding: "10px 25px",
  borderRadius: 20,
  cursor: "pointer",
  fontWeight: "500",
});

function ComposeEmail({ openComposeEmail, setOpenComposeEmail }) {
  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sentServices = useApi(API_ENDPOINTS.sent);
  const saveDraft = useApi(API_ENDPOINTS.saveDraft);

  const onReset = () => {
    setMessage("");
    setRecipients("");
    setSubject("");
    setOpenComposeEmail(!openComposeEmail);
  };

  const saveEmailToDatabase = async () => {
    const payload = {
      to: recipients,
      from: "s.i.s.t.r.unk.er.icb@gmail.com",
      subject: subject,
      body: message,
      date: new Date(),
      name: "no-reply",
      starred: false,
      type: "sent",
    };
    await sentServices.call(payload);
    if (!sentServices.error) {
      onReset();
    }
  };

  const moveToDraft = async () => {
    const payload = {
      to: recipients,
      from: "s.i.s.t.r.unk.er.icb@gmail.com",
      subject: subject,
      body: message,
      date: new Date(),
      name: "no-reply",
      starred: false,
      type: "draft",
    };
    await saveDraft.call(payload);
    if (!saveDraft.error) {
      onReset();
    }
  }

  const onSendEmail = () => {
    if (recipients) {
      if (!subject || !message) {
        alert(
          `Are you sure? you want to send this message without a ${
            !subject ? "subject" :""
          } ${!subject && !message ? "and " : ""}${!message ? "body" : ""}.`
        );
        return;
      }
      
      if (window.Email) {
        window.Email.send({
          Host: "smtp.elasticemail.com",
          Username: "christina.na.mod.eo.83.2@gmail.com",
          Password: "EAB74241412BF323C7EE56D1E43D9A4A39BD",
          Port: 2525,
          To: recipients,
          From: "s.i.s.t.r.unk.er.icb@gmail.com",
          Subject: subject,
          Body: message,
        }).then((message) => {
          // alert(message)
          saveEmailToDatabase();
        });
      }
    } else {
      console.log("Please Fill All The Required Fields.");
    }
    
  };

  const onSaveToDraft = () => {
    if (recipients) {
      if (!subject || !message) {
        alert(
          `Are you sure? you want to send this message without a ${
            !subject ? "subject" :""
          } ${!subject && !message ? "and " : ""}${!message ? "body" : ""}.`
        );
        return;
      }
      moveToDraft();
      
    } else {
      console.log("Please Fill All The Required Fields.");
    }
    
  };

  return (
    <>
      <Dialog
        open={openComposeEmail}
        onClose={() => setOpenComposeEmail(!openComposeEmail)}
        PaperProps={{
          sx: {
            maxHeight: "100%",
            maxWidth: "100%",
            width: "80%",
            height: "80%",
          },
        }}
      >
        <Header>
          <Typography>New Message</Typography>
          <Close
            sx={{ cursor: "pointer" }}
            onClick={onSaveToDraft}
          />
        </Header>

        <InputWrapper>
          <InputBase
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            placeholder="Recipients"
          />
          <InputBase
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
        </InputWrapper>

        <TextField
          multiline
          rows={9}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              outline: "none",
            },
          }}
        />

        <Footer>
          <SendButton onClick={onSendEmail}>Send</SendButton>
          <Delete />
        </Footer>
      </Dialog>
    </>
  );
}

export default ComposeEmail;
