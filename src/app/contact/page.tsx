"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Header from "@/components/Header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Inance</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <Header />

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 4 }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "8px" }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#0355cc",
                    "&:hover": { backgroundColor: "#023e99" },
                  }}
                >
                  SEND
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Google Map */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ height: 360, borderRadius: "8px", overflow: "hidden" }}
            >
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                style={{ border: "0", borderRadius: "8px" }}
                referrerPolicy="no-referrer-when-downgrade"
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
          mt: 6,
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} All Rights Reserved | Stealth Viper
        </Typography>
      </Box>
    </>
  );
};

export default ContactPage;
