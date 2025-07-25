"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { trackButtonClick } from "../utils/gtm";

const HeroContainer = styled.section`
  display: flex;
  min-height: 80vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');

    opacity: 0.3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;

  width: 460px;
  height: 575px;
  perspective: 1000px;

  @media (max-width: 1024px) {
    width: 402px;
    height: 518px;
  }

  @media (max-width: 768px) {
    width: 368px;
    height: 483px;
  }

  @media (max-width: 480px) {
    width: 345px;
    height: 460px;
  }

  @media (max-width: 375px) {
    width: 322px;
    height: 437px;
  }
`;

const EbookCard = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  overflow: hidden;
  background: white;
`;

const ImageSection = styled.div`
  flex: 0 0 60%;
  background-image: ${(props) => `url(${props.$bgImage})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

const EbookTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 0.85rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 375px) {
    font-size: 1.25rem;
  }
`;

const EbookSubtitle = styled.p`
  color: #6b7280;
  font-size: 1.05rem;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CarouselNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.$active ? "#f59e0b" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f59e0b;
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
  }

  button {
    width: 100%;
    max-width: 350px;

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 100%;
      max-width: 300px;
    }
  }
`;

const FormTitle = styled(motion.h1)`
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    line-height: 1.15;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
    line-height: 1.1;
  }
`;

const FormSubtitle = styled(motion.p)`
  color: #6b7280;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
`;

const ProgressIndicator = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #f97316);
  border-radius: 2px;
`;

const ArrowIcon = styled(motion.span)`
  font-size: 1.2rem;
`;

const services = [
  {
    id: 1,
    title: "Startup IT services/ Custom development/ Consulting",
    subtitle:
      "Empower your startup with tailored IT solutions and expert consulting to transform ideas into scalable, high-impact products.",
    bgImage: "/images/startup-IT-services-custom-development-consulting.webp",
    value: "Expert Solutions for Startups",
  },
  {
    id: 2,
    title: "Desktop and Mobile application",
    subtitle:
      "Create seamless, intuitive applications across desktop and mobile platforms that elevate user experiences and drive business growth.",
    bgImage: "/images/desktop-mobile-application.webp",
    value: "Cross-Platform Excellence",
  },
  {
    id: 3,
    title: "Cloud Computing",
    subtitle:
      "Leverage cloud computing to achieve agility, cost-efficiency, and secure scalability for your business operations.",
    bgImage: "/images/cloud-computing.webp",
    value: "Scalable Cloud Solutions",
  },
  {
    id: 4,
    title: "White label product development",
    subtitle:
      "Launch your own branded product effortlessly with our comprehensive white label development services.",
    bgImage: "/images/white-label-product-development.webp",
    value: "Your Brand, Our Expertise",
  },
  {
    id: 5,
    title: "E-commerce and Modern Web services",
    subtitle:
      "Build dynamic, high-conversion e-commerce platforms and modern websites optimized for performance and user engagement.",
    bgImage: "/images/e-commerce-modern-web-services.webp",
    value: "Convert Visitors to Customers",
  },
  {
    id: 6,
    title: "Digital Marketing",
    subtitle:
      "Boost your brand's visibility and engagement with innovative digital marketing strategies tailored for measurable success.",
    bgImage: "/images/digital-marketing.webp",
    value: "Drive Growth & Engagement",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    let progressTimer;

    if (isPlaying) {
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 2.5;
        });
      }, 100);

      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
        setProgress(0);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [currentSlide, isPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);

    trackButtonClick("carousel_dot_click", {
      slide_index: index,
      service_title: services[index].title,
      section: "hero_carousel",
      action: "manual_navigation",
    });
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    trackButtonClick("carousel_toggle", {
      action: isPlaying ? "pause" : "play",
      current_slide: currentSlide,
      service_title: services[currentSlide].title,
      section: "hero_carousel",
    });
  };

  const handleCalendlyClick = () => {
    trackButtonClick("hero_calendly_button", {
      button_text: "Book your call today",
      section: "hero",
      action: "calendly_redirect",
      current_service: services[currentSlide].title,
      service_id: services[currentSlide].id,
      slide_position: currentSlide + 1,
      total_slides: services.length,
    });

    window.open(
      "https://calendly.com/rikhi-sachhsoft/30min?month=2025-06",
      "_blank"
    );
  };

  const renderCard = () => {
    const currentService = services[currentSlide];

    return (
      <EbookCard
        key={currentSlide}
        initial={{
          opacity: 0,
          rotateY: 90,
          scale: 0.8,
          z: -100,
        }}
        animate={{
          opacity: 1,
          rotateY: 0,
          scale: 1,
          z: 0,
        }}
        exit={{
          opacity: 0,
          rotateY: -90,
          scale: 0.8,
          z: -100,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          opacity: { duration: 0.6 },
          scale: { duration: 0.8 },
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 },
        }}
        onClick={() => {
          trackButtonClick("service_card_click", {
            service_title: currentService.title,
            service_id: currentService.id,
            action: "toggle_play_pause",
            section: "hero_carousel",
          });
          setIsPlaying(!isPlaying);
        }}
      >
        <ImageSection $bgImage={currentService.bgImage} />
        <TextSection>
          <EbookTitle>{currentService.title}</EbookTitle>
          <EbookSubtitle>{currentService.subtitle}</EbookSubtitle>
        </TextSection>
      </EbookCard>
    );
  };

  return (
    <HeroContainer>
      <LeftSection>
        <CarouselContainer>
          <AnimatePresence mode="wait">{renderCard()}</AnimatePresence>
        </CarouselContainer>

        <CarouselNavigation>
          <SliderDots>
            {services.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentSlide}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </SliderDots>
        </CarouselNavigation>
      </LeftSection>

      <RightSection>
        <FormContainer>
          <FormTitle
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>You&apos;ve got questions?</span>
            <br />
            <span>We&apos;ve got answers!</span>
          </FormTitle>

          <motion.button
            type="button"
            onClick={handleCalendlyClick}
            style={{
              width: "100%",
              padding: "1rem",
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book your call today
            <ArrowIcon
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </ArrowIcon>
          </motion.button>
        </FormContainer>
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;
