import React from "react";
import Image from "next/image";
import about from "../../public/Images/about-us.png";
import { Box, Container, Typography } from "@mui/material";

const AboutSection: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box>
        <Image
          src={about}
          alt="About us"
          style={{ width: "100%", height: "500px" }}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", textTransform: "uppercase", mt: 2 }}
        >
          About us
        </Typography>
        <Typography variant="body1">
          Stealth Viper is a passionate game development studio dedicated
          to crafting immersive experiences for mobile gamers. We specialize in
          developing high-quality simulation, role-playing, and diverse game
          genres for both Android and iOS platforms, pushing the boundaries of
          creativity and innovation.
          
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", textTransform: "uppercase", mt: 5 }}
        >
          Our Mission
        </Typography>
        <Typography variant="body1">
          At Stealth Viper, we believe that games should be more than just
          entertainment—they should be engaging, dynamic, and unforgettable. Our
          goal is to create games that captivate players with unique
          storytelling, deep gameplay mechanics, and visually stunning worlds.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", textTransform: "uppercase", mt: 5 }}
        >
          What We Do
        </Typography>
        <Typography variant="body1">
          We develop simulation and role-playing games that offer players an
          interactive and engaging experience. Whether it is managing a bustling
          business, exploring open-world adventures, or experiencing lifelike
          simulations, our games are designed to deliver fun, strategy, and
          realism.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", textTransform: "uppercase", mt: 5 }}
        >
          Our Vision
        </Typography>
        <Typography variant="body1">
          We strive to be a leading name in mobile gaming, constantly innovating
          and refining our craft to deliver top-tier gaming experiences. With
          each game we create, we focus on player satisfaction, intuitive
          gameplay, and immersive storytelling that sets us apart from the rest.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", textTransform: "uppercase", mt: 5 }}
        >
          Join Our Community
        </Typography>
        <Typography variant="body1">
          We love connecting with our players! Your feedback drives us to
          improve and innovate. Stay updated with our latest releases and game
          updates by following us. Let’s build
          unforgettable gaming experiences together! 🚀🎮
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutSection;
