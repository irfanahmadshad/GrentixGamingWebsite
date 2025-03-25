"use client";

import Header from "@/components/Header";
import { Card, Grid, Container, Typography, CardContent } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import design from "../../../public/Images/design.png";
import testing from "../../../public/Images/testing.png";
import development from "../../../public/Images/development.png";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Game Design",
    description: "Creating immersive and engaging game designs.",
    image: design,
  },
  {
    title: "Development",
    description: "Expert game development services for all platforms.",
    image: development,
  },
  {
    title: "Testing",
    description: "Comprehensive game testing to ensure quality.",
    image: testing,
  },
];

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Our Services | Stealth Viper</title>
        <meta name="description" content="Explore our range of services." />
      </Head>

      <Header />

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 4 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  style={{ height: 340, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;
