"use client";

import styled from "styled-components";
import Image from "next/image";

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  padding: 1.2rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 1024px) {
    padding: 1.1rem 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  height: 45px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    height: 42px;
  }

  @media (max-width: 768px) {
    height: 38px;
  }

  @media (max-width: 480px) {
    height: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Image
            src="/images/sachhsoft_logo_white.png"
            alt="Sachhsoft"
            width={160}
            height={32}
            priority
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </LogoContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
