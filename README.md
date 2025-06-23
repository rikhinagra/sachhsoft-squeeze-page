# Sachhsoft Squeeze Page

A modern, responsive landing page built for Sachhsoft - showcasing IT services, custom development, and consulting solutions with an elegant design and seamless user experience.

![Sachhsoft Landing Page](https://img.shields.io/badge/Next.js-14.2.30-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-pink?style=for-the-badge&logo=styled-components)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.18.1-purple?style=for-the-badge&logo=framer)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

## 🚀 Live Demo

**🌐 Visit the live website**: [Sachhsoft Landing Page](https://www.mailsachhsoft.com/)

_Deployed and hosted on Vercel for optimal performance and reliability_

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

## ✨ Features

### 🎨 Modern Design

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and glassmorphism effects
- **Interactive Carousel**: Auto-playing service showcase with manual navigation controls

### 💼 Business Features

- **Service Showcase**: Interactive carousel displaying 6 core services
- **Lead Generation Form**: Comprehensive form with validation and Formspree integration
- **Client Testimonials**: Logos and statistics section showing company credibility
- **Call-to-Action**: Strategic CTAs directing users to Calendly booking
- **Privacy Compliance**: GDPR-compliant privacy policy and consent management

### 🔧 Technical Features

- **Next.js 14**: Latest version with App Router
- **Styled Components**: CSS-in-JS with theme support
- **Form Validation**: React Hook Form with comprehensive validation
- **Performance Optimized**: Image optimization, lazy loading, and SEO-friendly
- **Type Safety**: Proper prop validation and error handling

## 🛠 Tech Stack

| Technology            | Version | Purpose                            |
| --------------------- | ------- | ---------------------------------- |
| **Next.js**           | 14.2.30 | React framework with App Router    |
| **React**             | 18      | UI library                         |
| **Styled Components** | 6.1.19  | CSS-in-JS styling                  |
| **Framer Motion**     | 12.18.1 | Animation library                  |
| **React Hook Form**   | 7.58.1  | Form handling and validation       |
| **Formspree**         | -       | Form submission service            |
| **Calendly**          | -       | Appointment scheduling integration |
| **Vercel**            | -       | Deployment and hosting platform    |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rikhinagra/sachhsoft-squeeze-page.git
   cd sachhsoft-squeeze-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your environment variables (see [Environment Variables](#-environment-variables))

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sachhsoft-squeeze-page/
├── src/
│   ├── app/
│   │   ├── fonts/           # Custom fonts (Geist)
│   │   ├── lib/            # Styled components registry
│   │   ├── favicon.ico     # Site favicon
│   │   ├── globals.css     # Global CSS styles
│   │   ├── layout.js       # Root layout component
│   │   ├── page.js         # Home page
│   │   └── page.module.css # Page-specific styles
│   ├── components/
│   │   ├── Header.js           # Navigation header
│   │   ├── HeroSection.js      # Hero section with carousel
│   │   ├── LeadGenerationForm.js # Contact form
│   │   ├── ClientLogos.js      # Client testimonials
│   │   └── CTAAndFooter.js     # Call-to-action and footer
│   └── styles/
│       └── GlobalStyles.js     # Styled-components global styles
├── public/
│   └── images/            # Static images and logos
├── jsconfig.json         # JavaScript configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🧩 Components Overview

### Header.js

- Sticky navigation with company logo
- Responsive design with mobile optimization
- Smooth hover animations

### HeroSection.js

- **Interactive Service Carousel**: Auto-rotating showcase of 6 services
- **Progress Indicator**: Visual progress bar showing carousel timing
- **Manual Navigation**: Dots navigation for user control
- **Responsive Design**: Adapts to all screen sizes
- **Call-to-Action**: Direct integration with Calendly

### LeadGenerationForm.js

- **Multi-field Form**: Name, email, phone, designation, company
- **Real-time Validation**: Comprehensive form validation with error messages
- **Privacy Compliance**: Consent checkbox with privacy policy link
- **Formspree Integration**: Secure form submission
- **Success Handling**: User feedback and confirmation messages

### ClientLogos.js

- **Client Showcase**: Display of actual client logos
- **Technology Partners**: Major cloud and tech partners
- **Certifications**: Industry certifications and standards
- **Statistics**: Company metrics and achievements
- **Animated Elements**: Floating animations and hover effects

### CTAAndFooter.js

- **Primary CTA**: Calendly integration for consultations
- **Social Links**: LinkedIn and other social media
- **Legal Links**: Privacy policy and compliance
- **Company Information**: Copyright and contact details

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Formspree Configuration
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id

# Optional: Analytics and Tracking
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Required Variables:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Your Formspree form endpoint for contact form submissions

## 🌐 Deployment

### Live Production Site

**🚀 Currently Deployed on Vercel**: [https://www.mailsachhsoft.com/](https://www.mailsachhsoft.com/)

This project is **live and running** on Vercel's production environment, providing:

- ⚡ **Global CDN**: Ultra-fast loading times worldwide
- 🔒 **Automatic HTTPS**: SSL certificates and security
- 🔄 **Continuous Deployment**: Auto-deploys from GitHub repository
- 📊 **Performance Analytics**: Built-in performance monitoring
- 🌍 **Edge Functions**: Server-side rendering at the edge

### Deployment Process

The site automatically deploys when changes are pushed to the main branch:

1. **Code Push** → GitHub Repository
2. **Automatic Trigger** → Vercel detects changes
3. **Build Process** → `npm run build` executed
4. **Deploy** → Live on [mailsachhsoft.com](https://www.mailsachhsoft.com/)
5. **Global Distribution** → Content distributed via Vercel's Edge Network

### Vercel Configuration

The project includes optimized Vercel configuration:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Environment Variables**: Configured in Vercel dashboard

## 🎯 Key Features in Detail

### Service Carousel

- **6 Core Services**: Startup IT, Mobile/Desktop Apps, Cloud Computing, White Label, E-commerce, Digital Marketing
- **Auto-rotation**: 4-second intervals with smooth transitions
- **Manual Control**: Click dots to navigate manually
- **Responsive Images**: Optimized images for all screen sizes
- **Progress Tracking**: Visual progress bar showing carousel timing

### Lead Generation

- **Form Validation**: Real-time validation with helpful error messages
- **Data Collection**: Name, email, phone, designation, company
- **Privacy Compliance**: GDPR-compliant consent management
- **Success Tracking**: Form submission confirmation and user feedback
- **CRM Integration**: Ready for Salesforce, HubSpot, or other CRM systems

### Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **SEO Optimization**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG 2.1 compliant design patterns
- **Vercel Edge**: Enhanced performance through edge computing

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Write meaningful commit messages
- Test your changes across different screen sizes
- Ensure accessibility standards are maintained
- Update documentation for new features

## 👨‍💻 Author

**Chandan Gupta** - Full Stack Developer

- 🌐 **LinkedIn**: [chandangupta-devs](https://www.linkedin.com/in/chandangupta-devs)
- 🐙 **GitHub**: [Chandan-devs-tech](https://github.com/Chandan-devs-tech)
- 💼 **Portfolio**: Building scalable web applications with modern technologies

### About the Developer

Chandan is a passionate full-stack developer specializing in React, Next.js, and modern web technologies. With expertise in creating responsive, user-friendly applications, he focuses on delivering high-quality solutions that drive business growth.

## 📞 Support

If you have any questions or need support:

1. **Visit Live Site**: [mailsachhsoft.com](https://www.mailsachhsoft.com/)
2. **Create an Issue**: [GitHub Issues](https://github.com/rikhinagra/sachhsoft-squeeze-page/issues)
3. **Contact Sachhsoft**: Visit [Sachhsoft.com](https://sachhsoft.com)
4. **Schedule a Consultation**: [Book via Calendly](https://calendly.com/sachhsoft)

## 📄 License

This project is proprietary software owned by Sachhsoft. All rights reserved.

---

<div align="center">

**🚀 Live at [mailsachhsoft.com](https://www.mailsachhsoft.com/)**

**Built with ❤️ by [Chandan Gupta](https://github.com/Chandan-devs-tech)**

**For [Sachhsoft](https://sachhsoft.com) - Transforming Ideas into Digital Solutions**

**Powered by [Vercel](https://vercel.com) ⚡**

</div>
