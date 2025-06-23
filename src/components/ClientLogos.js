"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const LogosSection = styled.section`
  background: #f8f9fa;
  padding: 4rem 2rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 3.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0.75rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    overflow-x: hidden;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const LogoRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 1.75rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const LogoCard = styled(motion.div)`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 100px;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
    background: white;
  }

  img {
    max-width: 120px;
    max-height: 60px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: brightness(0.8) contrast(1.2);

    &.databahn-logo {
      filter: brightness(0.6) contrast(1.5) saturate(1.2);
    }
  }

  @media (max-width: 1024px) {
    min-width: 160px;
    min-height: 90px;
    padding: 1.75rem;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    min-height: 80px;
    padding: 1.5rem;

    img {
      max-width: 100px;
      max-height: 50px;
    }
  }

  @media (max-width: 480px) {
    min-width: 130px;
    min-height: 70px;
    padding: 1.25rem;
    border-radius: 8px;

    img {
      max-width: 90px;
      max-height: 40px;
    }
  }
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.25rem;
  }
`;

const StatsContainer = styled(motion.div)`
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 2.5rem 1.75rem;
    margin-top: 3.5rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-top: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin-top: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    border-radius: 12px;
  }
`;

const StatItem = styled(motion.div)`
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    letter-spacing: 0.3px;
  }
`;

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const actualClients = [
    {
      name: "Phonecheck",
      logoPath: "/images/phonecheck-logo.svg",
      alt: "Phonecheck Logo",
    },
    {
      name: "RenewRx",
      logoPath: "/images/renewrx-logo.svg",
      alt: "RenewRx Logo",
    },
    {
      name: "Rizzarr",
      logoPath: "/images/rizzarr-logo.svg",
      alt: "Rizzarr Logo",
    },
    {
      name: "Databahn",
      logoPath: "/images/databahn-logo.avif",
      alt: "Databahn Logo",
    },
    {
      name: "R",
      logoPath: "/images/r-logo.svg",
      alt: "R Logo",
    },
  ];

  const techPartners = [
    { name: "Microsoft", color: "#5e5e5e" },
    { name: "AWS", color: "#ff9900" },
    { name: "Google Cloud", color: "#4285f4" },
    { name: "Salesforce", color: "#00a1e0" },
    { name: "Oracle", color: "#c74634" },
  ];

  const certifications = [
    { name: "ISO 27001", color: "#0066cc" },
    { name: "CMMI Level 5", color: "#8b0000" },
    { name: "Microsoft Gold", color: "#ffd700" },
    { name: "AWS Advanced", color: "#ff9900" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <LogosSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <SectionTitle variants={itemVariants}>
            Trusted by Industry Leaders
          </SectionTitle>

          <SectionSubtitle variants={itemVariants}>
            Partnering with Fortune 500 companies and leading organizations
            worldwide to deliver cutting-edge technology solutions
          </SectionSubtitle>

          <LogosContainer>
            <motion.div variants={itemVariants}>
              <CategoryTitle
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Clients
              </CategoryTitle>
              <LogoRow
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {actualClients.map((client, index) => (
                  <LogoCard
                    key={client.name}
                    variants={logoVariants}
                    animate={floatingAnimation}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image
                      src={client.logoPath}
                      alt={client.alt}
                      width={120}
                      height={60}
                      className={
                        client.name === "Databahn" ? "databahn-logo" : ""
                      }
                      style={{
                        maxWidth: "120px",
                        maxHeight: "60px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </LogoCard>
                ))}
              </LogoRow>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CategoryTitle
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Technology Partners
              </CategoryTitle>
              <LogoRow
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {techPartners.map((partner, index) => (
                  <LogoCard
                    key={partner.name}
                    variants={logoVariants}
                    animate={floatingAnimation}
                    style={{
                      animationDelay: `${(index + 5) * 0.2}s`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <LogoText style={{ color: partner.color }}>
                      {partner.name}
                    </LogoText>
                  </LogoCard>
                ))}
              </LogoRow>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CategoryTitle
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Certifications & Standards
              </CategoryTitle>
              <LogoRow
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {certifications.map((cert, index) => (
                  <LogoCard
                    key={cert.name}
                    variants={logoVariants}
                    animate={floatingAnimation}
                    style={{
                      animationDelay: `${(index + 10) * 0.2}s`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <LogoText style={{ color: cert.color }}>
                      {cert.name}
                    </LogoText>
                  </LogoCard>
                ))}
              </LogoRow>
            </motion.div>
          </LogosContainer>

          <StatsContainer
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <StatNumber>10+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </motion.div>
            </StatItem>

            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <StatNumber>$100M+</StatNumber>
                <StatLabel>Revenue Generated</StatLabel>
              </motion.div>
            </StatItem>

            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <StatNumber>50+</StatNumber>
                <StatLabel>Global Clients</StatLabel>
              </motion.div>
            </StatItem>

            <StatItem
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <StatNumber>99%</StatNumber>
                <StatLabel>Client Satisfaction</StatLabel>
              </motion.div>
            </StatItem>
          </StatsContainer>
        </motion.div>
      </Container>
    </LogosSection>
  );
};

export default ClientLogos;
