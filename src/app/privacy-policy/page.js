"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../../components/Header";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const EffectiveDate = styled(motion.p)`
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Paragraph = styled.p`
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
  color: #374151;

  @media (max-width: 480px) {
    padding-left: 1.5rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ContactDetails = styled.div`
  font-size: 1rem;
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    color: #f59e0b;
  }

  a {
    color: #93c5fd;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const BackButton = styled(motion.button)`
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export default function PrivacyPolicy() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <BackButton
          onClick={handleBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back to Home
        </BackButton>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </Title>

        <EffectiveDate
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Effective Date: June 19, 2025
        </EffectiveDate>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Paragraph>
            At <strong>Sachhsoft</strong>, we are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website{" "}
            <a href="https://sachhsoft.com" style={{ color: "#3b82f6" }}>
              https://sachhsoft.com
            </a>
            .
          </Paragraph>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionTitle>1. Information We Collect</SectionTitle>
            <Paragraph>
              We may collect the following types of personal and non-personal
              information when you interact with our website:
            </Paragraph>
            <List>
              <ListItem>
                <strong>Personal Information</strong>: Name, email address,
                phone number, company name, and other details you voluntarily
                submit via contact forms or downloads.
              </ListItem>
              <ListItem>
                <strong>Usage Data</strong>: IP address, browser type, pages
                visited, time spent on pages, and other analytics data collected
                through cookies and third-party tools like Google Analytics.
              </ListItem>
            </List>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SectionTitle>2. How We Use Your Information</SectionTitle>
            <Paragraph>We use the information we collect to:</Paragraph>
            <List>
              <ListItem>Respond to your inquiries or requests.</ListItem>
              <ListItem>Provide and improve our services.</ListItem>
              <ListItem>
                Send newsletters or marketing emails (only with your consent).
              </ListItem>
              <ListItem>
                Analyze website usage and optimize user experience.
              </ListItem>
              <ListItem>
                Maintain security and prevent fraudulent activity.
              </ListItem>
            </List>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SectionTitle>3. Sharing Your Information</SectionTitle>
            <Paragraph>
              We do not sell, rent, or trade your personal information. However,
              we may share it with:
            </Paragraph>
            <List>
              <ListItem>
                <strong>Trusted third-party service providers</strong> (e.g.,
                email marketing or analytics tools) under confidentiality
                agreements.
              </ListItem>
              <ListItem>
                Authorities or regulators, if required by law.
              </ListItem>
            </List>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SectionTitle>4. Cookies and Tracking</SectionTitle>
            <Paragraph>
              Our website uses cookies and similar technologies to enhance your
              browsing experience and analyze site traffic. You can adjust your
              browser settings to refuse cookies if you prefer.
            </Paragraph>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <SectionTitle>5. Your Rights</SectionTitle>
            <Paragraph>
              Depending on your jurisdiction, you may have the right to:
            </Paragraph>
            <List>
              <ListItem>Access the personal data we hold about you.</ListItem>
              <ListItem>Request correction or deletion of your data.</ListItem>
              <ListItem>Withdraw your consent to data processing.</ListItem>
              <ListItem>Opt out of marketing communications.</ListItem>
            </List>
            <Paragraph>
              To exercise these rights, contact us at{" "}
              <strong style={{ color: "#3b82f6" }}>info@sachhsoft.com</strong>.
            </Paragraph>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <SectionTitle>6. Data Security</SectionTitle>
            <Paragraph>
              We implement reasonable technical and organizational measures to
              protect your information from unauthorized access, loss, or
              misuse.
            </Paragraph>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <SectionTitle>7. Third-Party Links</SectionTitle>
            <Paragraph>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
            </Paragraph>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <SectionTitle>8. Changes to This Policy</SectionTitle>
            <Paragraph>
              We may update this Privacy Policy from time to time. All changes
              will be posted on this page with an updated &quot;Effective
              Date.&quot;
            </Paragraph>
          </Section>

          <ContactInfo>
            <ContactTitle>9. Contact Us</ContactTitle>
            <ContactDetails>
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
              <br />
              <br />
              <strong>Sachhsoft</strong>
              Email: <a href="mailto:info@sachhsoft.com">info@sachhsoft.com</a>
              <br />
              Website: <a href="https://sachhsoft.com">https://sachhsoft.com</a>
            </ContactDetails>
          </ContactInfo>
        </motion.div>
      </ContentContainer>
    </PageContainer>
  );
}
