import React from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import crane from "../assets/images/crane.jpg";
import crane1 from "../assets/images/crane1.jpg";
import crane2 from "../assets/images/crane2.jpg";
import crane3 from "../assets/images/crane3.jpg";
import "../App.css";

const cardsData = [
  {
    title: "2021 Valtra BH224HT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: crane,

  },
  {
    title: "2021 Valtra Bh224ht",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: crane1,
  },
  {
    title: "2022 Mercedes Benz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: crane2,
  },
  {
    title: "Axor 2533 6x2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: crane3,
  },
];

const Card = ({props}) => {

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: 4, marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "800",
                marginBottom: "20px",
                color: "#31425B",
              }}
            >
              Featured Listings {props}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "500", color: "#31425B" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box className="ListingBox" sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img src={card.imgSrc} alt={card.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
                <Box
                  className="ListingDescp"
                  sx={{
                    padding: "16px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "600",
                      color: "#31425B",
                    }}
                    gutterBottom
                  >
                    {card.title}
                  </Typography>
          
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "500",
                      color: "#31425B",
                      paddingTop: "5px",
                    }}
                  >
                    {card.description}
                  </Typography>
                  
                  <Button  sx={{backgroundColor: '#bc2122', color: '#FFFFFF', marginTop:'15px', padding: '8px 20px'}}>Submit</Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Card;
