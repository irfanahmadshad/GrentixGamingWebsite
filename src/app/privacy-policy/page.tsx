import Head from "next/head";
import Header from "@/components/Header";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Stealth Viper</title>
        <meta
          name="description"
          content="Privacy Policy of Stealth Viper."
        />
      </Head>

      <Header />

      {/* Privacy Policy Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          At Stealth Viper, we value your privacy. This Privacy Policy
          explains the types of data we collect, why we collect it, and the
          choices you have regarding your personal information.
        </Typography>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          Your Consent
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          By downloading and playing our games or using our Services, you agree
          to the collection, use, and disclosure of your data as described in
          this Privacy Policy. If you do not wish to share this information, you
          may opt out by uninstalling our games or discontinuing the use of our
          Services.
        </Typography>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          Children’s Privacy
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We are committed to protecting children’s privacy online and comply
          with regulations such as the Children’s Online Privacy Protection Act
          (COPPA).
        </Typography>
        <ul>
          <li>
            Our games and apps are not intended for children under 13 without
            parental or legal guardian consent.
          </li>
          <li>
            If you are a parent or guardian and believe your child has provided
            us with personal data without your consent, please contact us
            immediately.
          </li>
          <li>
            We may use third-party services that collect non-personal
            information and persistent device identifiers for analytics and ad
            personalization.
          </li>
        </ul>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          Information We Collect
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          1. Personal Information (PII)
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This includes data that can identify you, such as:
        </Typography>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Payment details (for purchases)</li>
          <li>
            Profile information from social media (if you log in using
            third-party accounts)
          </li>
        </ul>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          2. Device & Usage Information (DII)
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We automatically collect non-personal information when you use our
          Services, such as:
        </Typography>
        <ul>
          <li>Device type, OS version, and screen size</li>
          <li>
            Unique device identifiers (e.g., IDFA, Android Advertising ID)
          </li>
          <li>IP address and general location data</li>
          <li>Gameplay statistics, preferences, and interactions</li>
          <li>Crash reports and performance logs</li>
        </ul>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          How We Use Your Information
        </Typography>
        <ul>
          <li>Provide and improve our Services</li>
          <li>Enhance gameplay experiences and personalize content</li>
          <li>Ensure security and prevent fraud</li>
          <li>Comply with legal requirements</li>
          <li>Offer customer support and respond to inquiries</li>
        </ul>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          Your Rights & Choices
        </Typography>
        <ul>
          <li>Request access, updates, or deletion of your personal data</li>
          <li>Opt out of personalized ads through your device settings</li>
          <li>
            Contact us if you have concerns about how your information is used
          </li>
        </ul>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          If you have any questions about this Privacy Policy, please reach out
          to us at:
        </Typography>
        <Typography variant="body1">
          📧 Email: contact@stealthviper.click
        </Typography>
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

export default PrivacyPolicy;
