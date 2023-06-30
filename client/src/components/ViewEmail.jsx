import { ArrowBack, DeleteOutline, StarBorder } from "@mui/icons-material";
import { Avatar, Box, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useNavigate } from 'react-router-dom'

const Container = styled(Box)({
  width: "calc(100% - 250px)",
});

const WrapperLeft = styled(Box)({
    display: "flex",

    "& > div": {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column"
    }
});

const WrapperTop = styled(Box)({
    marginTop: 20,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

const WrapperRight = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap: 30
});

const WrapperBody = styled(Box) ({
    padding: "40px 10px 10px 20px"
})

function ViewEmail({ openDrawer }) {
  const { type, id } = useParams();
  const getEmail = useApi();
  const navigate = useNavigate();
  const [mail, setMail] = useState(null);

  const getEmailById = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/mail/${id}`);
      setMail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmailById();
  }, []);

  return (
    <>
      {mail ? (
        <Container
          style={{
            marginLeft: openDrawer ? 250 : 10,
            padding: "2.5rem 1rem 2.5rem 1.5rem",
          }}
        >
          <Box>
            <ArrowBack sx={{cursor:"pointer"}} onClick={() => navigate(-1)} fontSize="small" />
          </Box>
          <WrapperTop>

            <WrapperLeft>
            <Avatar />

              <Box>
              <Typography fontWeight={600} fontSize={16}>
                {mail.name} <span style={{fontWeight: 400, fontSize: 14}}>&lt;{mail.from}&gt;</span>
              </Typography>
              <Typography fontSize={12}>
                to <span>&lt;{mail.to}&gt;</span>
              </Typography>
              </Box>
            </WrapperLeft>

            <WrapperRight>
              <Typography>
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "full",
                  timeStyle: "short",
                }).format(`${new Date(mail.date).getTime()}`)}
              </Typography>
              <StarBorder />
              <DeleteOutline
                fontSize="small"
                sx={{ cursor: "pointer", marginLeft: 1, marginRight: 3 }}
              />
            </WrapperRight>
          </WrapperTop>

          <WrapperBody>
            <Typography>{mail.body}</Typography>
          </WrapperBody>
        </Container>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default ViewEmail;
