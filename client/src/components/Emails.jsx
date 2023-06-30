import { DeleteOutline, Replay } from "@mui/icons-material";
import { Box, Checkbox, styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "../api/API_ENDPOINTS";
import { useApi } from "../hooks/useApi";
import Email from "./Email";

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: 10,
  "& > svg": {
    marginRight: 20,
  },
});

function Emails({ openDrawer }) {
  const { type } = useParams();
  const getEmails = useApi(API_ENDPOINTS.getEmailsFromType);
  const moveToBinServices = useApi(API_ENDPOINTS.moveToBin);

  const [selectedMails, setSelectedMails] = useState([]);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    // if (type == "bin") {
    //   // todo
    // } else {
      getEmails.call({}, type);
    // }
  }, [type, refresh]);


  const moveToBin = async () => {
    if(selectedMails.length > 0) {
      await moveToBinServices.call(selectedMails);
      setRefresh((prev) => !prev);
      if(!moveToBinServices.error) {
        setSelectedMails([]);
      }
    }
  }


  return (
    <>
      <Box
        style={{
          marginLeft: openDrawer ? 250 : 10,
          padding: "2.5rem 1rem 2.5rem 0",
        }}
      >
        <IconContainer>
          <Checkbox
            onChange={() => {
              if (selectedMails.length > 0) {
                setSelectedMails([]);
              } else {
                const mail_ids = [];
                getEmails?.response?.map((mail) => mail_ids.push(mail._id));
                setSelectedMails(mail_ids);
              }
            }}
            size="small"
          />

          {selectedMails.length > 0 && (
            <DeleteOutline
              fontSize="small"
              sx={{ cursor: "pointer", marginLeft: 1 }}
              onClick={() => moveToBin()}
            />
          )}

          <Replay onClick={() => setRefresh((prev) => !prev)} fontSize="small" sx={{ cursor: "pointer" }} />
        </IconContainer>
        <Email setSelectedMails={setSelectedMails} selectedMails={selectedMails} mails={getEmails?.response} />
      </Box>
    </>
  );
}

export default Emails;
