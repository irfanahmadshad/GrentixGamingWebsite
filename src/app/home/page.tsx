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
    name: "PixelForge Studios",
    review:
      "Their expertise in game mechanics and AI took our project to the next level. Highly recommended!",
    image: company1,
  },
  {
    name: "NeonByte Interactive",
    review:
      "Fantastic collaboration! They helped us create immersive worlds with seamless gameplay.",
    image: company2,
  },
];

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home | Stealth Viper</title>
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
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              {/* STEALTH VIPER <br /> VOLT STUDIOS */}
              STEALTH VIPER
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Providing high-quality game design, development, and testing
              services.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0355cc",
                "&:hover": { backgroundColor: "#023e99" },
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
                backgroundColor: "#ff8a1d",
                "&:hover": { backgroundColor: "#d86e00" },
                mt: 3,
              }}
              onClick={() => router.push("/about")}
            >
              Read More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={about}
              alt="About Us"
              style={{ width: "370px", height: "300px", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Client Testimonials */}
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
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "8px" }}>
              <Typography variant="body1">
                📍 Address: Township, Lahore
              </Typography>
              <Typography variant="body1">📞 Phone: +92 323-4516690</Typography>
              <Typography variant="body1">
                📧 Email: contact@stealthviper.click
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ height: 300, borderRadius: "8px", overflow: "hidden" }}
            >
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "0", borderRadius: "8px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.135632626087!2d74.31050897565889!3d31.43793277425186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907ab53b7069b%3A0x741f607c84951a5c!2sGreen%20Town!5e0!3m2!1sen!2s!4v1739536803979!5m2!1sen!2s"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#0a0f43",
          color: "#fff",
          textAlign: "center",
          py: 3,
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} All Rights Reserved | Stealth Viper
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
