"use client";
import {
  Box,
  Grid,
  Card,
  Paper,
  Button,
  Container,
  Typography,
  CardContent,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import about from "../../../public/Images/about.png";
import design from "../../../public/Images/design.png";
import heroImage from "../../../public/Images/hero.png";
import testing from "../../../public/Images/testing.png";
import company1 from "../../../public/Images/company1.png";
import company2 from "../../../public/Images/company2.png";
import development from "../../../public/Images/development.png";

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

const clients = [
  {
    name: "Nexus Forge Studios",
    review:
      "Their expertise in game mechanics and AI took our project to the next level",
    image: company1,
  },
  {
    name: "DIGIVOLT Studios",
    review:
      "Fantastic collaboration! They helped us create immersive worlds with seamless gameplay.",
    image: company2,
  },
];

const HomePage = () => {
  const router = useRouter();

  return (
    
    <>
    <Box sx={{ backgroundColor: "#f8e8eaff", minHeight: "100vh" }}>
      <Head>
        <title>Home | Grentix Gaming</title>
        <meta
          name="description"
          content="Professional games development services include design, development, and testing."
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              {/* Grentix Gaming <br /> VOLT STUDIOS */}
              Grentix Gaming
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Providing high-quality game design, development, and testing
              services.
            </Typography>
            <Button
              variant="contained"
               sx={{
                backgroundColor: "#852230",
                "&:hover": { backgroundColor: "#ee7c53ff" }
              }}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={heroImage}
              alt="Hero Image"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      {/*
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
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
      */}
      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={30} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              We provide high-quality game development services with expert
              craftsmanship and reliability.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#852230",
                "&:hover": { backgroundColor: "#ee7c53ff" },
                mt: 3,
              }}
              onClick={() => router.push("/about")}
            >
              Read More
            </Button>
          </Grid>
         
        </Grid>
      </Container>

      {/* Client Testimonials */}
      {/*
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          What Our Clients Say
        </Typography>
        <Grid container spacing={20} justifyContent="center">
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  width: "350px",
                  height: "200px",
                  textAlign: "center",
                }}
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  style={{ width: 80, borderRadius: "50%", marginBottom: 2 }}
                />
                <Typography variant="h6">{client.name}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {client.review}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      */}
      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Contact Us
        </Typography>
          <Grid container spacing={10} justifyContent="center" alignItems="center">
  <Grid item xs={12} md={10}>
    <Paper
      elevation={2}
      sx={{ 
        p: 3, 
        borderRadius: "20px", 
        textAlign: "center"  // optional: center text inside the box
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "18px", mb: 1 }}>
        📍 Address: Township, Lahore
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", mb: 1 }}>
        📞 Phone: +92 323-4516690
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px" }}>
        📧 Email: contact@stealthviper.click
      </Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} md={8}>
    <Paper
      elevation={3}
      sx={{ height: 400, borderRadius: "8px", overflow: "hidden" }}
    >
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0", borderRadius: "8px" }}
        src="https://www.google.com/maps/embed?...yourlink..."
      />
    </Paper>
  </Grid>
</Grid>

      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#852230",
          color: "#f4ebf9",
          textAlign: "center",
          py: 1,
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} All Rights Reserved | Grentix Gaming
        </Typography>
      </Box>
      </Box>
    </>
    
  );
};

export default HomePage;
