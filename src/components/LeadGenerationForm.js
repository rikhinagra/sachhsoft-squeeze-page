"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const FormSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #3730a3 0%, #1e3a8a 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

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
    min-height: auto;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const UnifiedContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const PhoneSection = styled(motion.div)`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 1024px) {
    order: 1;
    justify-content: center;
  }
`;

const PhoneImage = styled(motion.img)`
  width: 500px;
  height: auto;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3));
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 480px) {
    width: 320px;
  }
`;

const FormSectionContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
    justify-content: center;
  }
`;

const FormContainer = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const FormSubtitle = styled.p`
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
`;

const FormField = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ef4444;
    &:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0.75rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ef4444;
    &:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0.75rem;
  }
`;

const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CheckboxField = styled(motion.div)`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #3b82f6;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.4;
  cursor: pointer;

  a {
    color: #3b82f6;
    text-decoration: underline;

    &:hover {
      color: #2563eb;
    }
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

const ArrowIcon = styled(motion.span)`
  font-size: 1.2rem;
`;

const SuccessMessage = styled(motion.div)`
  background: #10b981;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
`;

const WireConnection = styled.div`
  position: absolute;
  top: 50%;
  left: calc(450px + 1rem);
  right: 0;
  transform: translateY(-50%);
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  z-index: 2;
  border-radius: 2px;

  @media (max-width: 1200px) {
    left: calc(400px + 1rem);
  }

  @media (max-width: 1024px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 3px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -1px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }
`;

const LeadGenerationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError("");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          designation: data.designation,
          company: data.company,
          consent: data.consent,
          source: "Lead Generation Form",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();

        setTimeout(() => {
          console.log("Form submitted successfully");
        }, 2000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);

      if (isSubmitted) {
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    }
  };

  const handlePrivacyClick = () => {
    router.push("/privacy-policy");
  };

  return (
    <FormSection>
      <UnifiedContainer>
        <PhoneSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PhoneImage
            src="/images/faq.webp"
            alt="Sachhsoft Technology Solutions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </PhoneSection>

        <FormSectionContainer>
          <FormContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FormTitle>Get Your Project Planning Kit + Consultation</FormTitle>
            <FormSubtitle>
              Fill out the form below to download your free resources and
              schedule your personalized consultation
            </FormSubtitle>

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: "#ef4444",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {submitError}
              </motion.div>
            )}

            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                🎉 Success! Thank you for your submission. Our team will contact
                you within 24 hours to schedule your consultation and provide
                your free resources.
              </SuccessMessage>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Label htmlFor="name">Name*</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    error={errors.name}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </FormField>

                <FormField
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your work email"
                    error={errors.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <ErrorText>{errors.email.message}</ErrorText>
                  )}
                </FormField>

                <FormField
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Label htmlFor="phone">Phone number*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    error={errors.phone}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <ErrorText>{errors.phone.message}</ErrorText>
                  )}
                </FormField>

                <FormField
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Label htmlFor="designation">Designation*</Label>
                  <Select
                    id="designation"
                    error={errors.designation}
                    {...register("designation", {
                      required: "Please select your designation",
                    })}
                  >
                    <option value="">Select your role</option>
                    <option value="ceo">CEO/Founder</option>
                    <option value="cto">CTO/Technical Lead</option>
                    <option value="manager">Manager</option>
                    <option value="director">Director</option>
                    <option value="developer">Developer</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.designation && (
                    <ErrorText>{errors.designation.message}</ErrorText>
                  )}
                </FormField>

                <FormField
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Label htmlFor="company">Company name*</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    error={errors.company}
                    {...register("company", {
                      required: "Company name is required",
                      minLength: {
                        value: 2,
                        message: "Company name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.company && (
                    <ErrorText>{errors.company.message}</ErrorText>
                  )}
                </FormField>

                <CheckboxField
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <CheckboxWrapper>
                    <CheckboxInput
                      id="consent"
                      type="checkbox"
                      {...register("consent", {
                        required: "Please agree to our terms to continue",
                      })}
                    />
                    <CheckboxLabel htmlFor="consent">
                      I agree to receive communications from Sachhsoft and
                      understand that I can unsubscribe at any time. View our{" "}
                      <a
                        onClick={handlePrivacyClick}
                        style={{ cursor: "pointer" }}
                      >
                        Privacy Policy
                      </a>{" "}
                      for more details.
                    </CheckboxLabel>
                  </CheckboxWrapper>
                  {errors.consent && (
                    <ErrorText>{errors.consent.message}</ErrorText>
                  )}
                </CheckboxField>

                <SubmitButton
                  type="submit"
                  disabled={isLoading}
                  whileHover={isLoading ? {} : { scale: 1.02 }}
                  whileTap={isLoading ? {} : { scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Download Kit + Get Consultation
                      <ArrowIcon
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </ArrowIcon>
                    </>
                  )}
                </SubmitButton>
              </form>
            )}
          </FormContainer>
        </FormSectionContainer>
      </UnifiedContainer>
    </FormSection>
  );
};

export default LeadGenerationForm;
