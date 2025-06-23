"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const CTASection = styled.section`
  background: linear-gradient(135deg, #30cff2 0%, #00bcd4 100%);
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CTAContent = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: 2.5rem;
  font-weight: 400;
  color: #1e3a8a;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTAButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CTAText = styled(motion.span)`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e3a8a;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1e40af;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const ArrowIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  background: #000000;
  color: white;
  padding: 2rem 0 1rem 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const FooterLeft = styled.div`
  flex: 0 0 auto;

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    order: 2;
    margin: 1rem 0;
    width: 100%;
  }
`;

const Copyright = styled.span`
  font-size: 0.9rem;
  color: #9ca3af;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`;

const FooterLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    order: 3;
    justify-content: center;
    width: 100%;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #374151;
    transform: translateY(-2px);
  }

  &.facebook:hover {
    background: #1877f2;
  }

  &.instagram:hover {
    background: linear-gradient(
      45deg,
      #f09433,
      #e6683c,
      #dc2743,
      #cc2366,
      #bc1888
    );
  }

  &.linkedin:hover {
    background: #0077b5;
  }

  &.twitter:hover {
    background: #1da1f2;
  }
`;

const SocialIconWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTAAndFooter = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    window.open("https://calendly.com/sachhsoft", "_blank");
  };

  const handlePrivacyClick = () => {
    router.push("/privacy-policy");
  };

  return (
    <>
      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <CTAContent>
            <CTATitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to get started?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Talk to us today
            </CTASubtitle>
          </CTAContent>

          <CTAButtonContainer>
            <CTAText
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hit the connect button
            </CTAText>
            <CTAButton
              onClick={handleCTAClick}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowIcon>
                <IconArrowRight size={24} stroke={2} />
              </ArrowIcon>
            </CTAButton>
          </CTAButtonContainer>
        </CTAContainer>
      </CTASection>

      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterLeft>
            <FooterLinks>
              <FooterLink onClick={handlePrivacyClick}>
                Privacy Policy
              </FooterLink>
            </FooterLinks>
          </FooterLeft>

          <CopyrightContainer>
            <Copyright>Copyright © 2025 Sachhsoft</Copyright>
          </CopyrightContainer>

          <SocialIcons>
            {/* Commenting out Facebook icon
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIconWrapper>
                <IconBrandFacebook size={20} stroke={2} />
              </SocialIconWrapper>
            </SocialIcon>
            */}

            {/* Commenting out Instagram icon
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIconWrapper>
                <IconBrandInstagram size={20} stroke={2} />
              </SocialIconWrapper>
            </SocialIcon>
            */}

            <SocialIcon
              href="https://www.linkedin.com/company/92896939/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIconWrapper>
                <IconBrandLinkedin size={20} stroke={2} />
              </SocialIconWrapper>
            </SocialIcon>

            {/* Commenting out Twitter/X icon
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIconWrapper>
                <IconBrandX size={20} stroke={2} />
              </SocialIconWrapper>
            </SocialIcon>
            */}
          </SocialIcons>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default CTAAndFooter;
