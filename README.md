# Evil Eye Remedy 🧿

> Authentic spiritual healing platform providing traditional evil eye remedies and protection services - Ancient wisdom meets modern technology

[![Next.js](https://img.shields.io/badge/Next.js-14.1-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2-purple.svg)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-15.4-blue.svg)](https://stripe.com/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Available Scripts](#available-scripts)
- [Build & Deployment](#build--deployment)
- [Payment Integration](#payment-integration)
- [Performance](#performance)
- [Security & Privacy](#security--privacy)
- [RSS Integration](#rss-integration)
- [Testing](#testing)
- [Team](#team)
- [License](#license)

## 🎯 About

**Evil Eye Remedy** is an authentic spiritual healing platform that provides traditional remedies and protection services for those affected by the evil eye. Built with modern web technologies, this platform bridges ancient wisdom with contemporary digital experiences, offering users access to authentic spiritual healing practices through a secure, user-friendly interface.

The platform combines time-honored spiritual traditions with cutting-edge technology to deliver personalized healing services, educational content, and protective remedies to users worldwide seeking relief from negative energies and spiritual afflictions.

## ✨ Features

### Spiritual Services
- **Authentic Evil Eye Remedies**: Traditional healing prayers and rituals
- **Personalized Protection Services**: Customized spiritual guidance
- **Prayer Requests**: Submit personal prayer intentions
- **Spiritual Consultation**: One-on-one guidance sessions
- **Protection Rituals**: Ancient ceremonies for spiritual cleansing
- **Healing Assessments**: Evaluate spiritual well-being

### Platform Features
- **Secure Payment Processing**: Stripe integration for service payments
- **User Authentication**: Secure account management
- **Service Booking**: Schedule consultations and healing sessions
- **Progress Tracking**: Monitor spiritual healing journey
- **Educational Content**: Learn about evil eye traditions and remedies
- **Testimonials**: Read authentic user experiences

### Technical Features
- **Responsive Design**: Optimized for all devices and screen sizes
- **Progressive Web App**: App-like experience with offline capabilities
- **Smooth Animations**: Framer Motion for spiritual, calming interactions
- **RSS Feed Integration**: Latest spiritual insights and content
- **SEO Optimized**: Reach those seeking spiritual guidance
- **Fast Performance**: Lightning-fast loading for urgent spiritual needs
- **Secure Transactions**: PCI-compliant payment processing

## 🛠️ Tech Stack

### Core Framework
- **Framework**: [Next.js](https://nextjs.org/) 14.1.0
- **UI Library**: [React](https://reactjs.org/) 18.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.0

### State Management
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) 2.2.2
- **React Integration**: [React Redux](https://react-redux.js.org/) 9.1.0
- **Middleware**: [Redux Thunk](https://github.com/reduxjs/redux-thunk) 3.1.0
- **DevTools**: [@redux-devtools/extension](https://github.com/reduxjs/redux-devtools) 3.3.0

### UI & Interactions
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 11.2.6
- **Modals**: [React Modal](https://reactcommunity.org/react-modal/) 3.16.1
- **Smooth Scrolling**: [React Scroll](https://github.com/fisshy/react-scroll) 1.9.0

### External Services
- **HTTP Client**: [Axios](https://axios-http.com/) 1.7.2
- **Payment Processing**: [Stripe](https://stripe.com/) 15.4.0, [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js) 3.3.0
- **RSS Parser**: [RSS Parser](https://www.npmjs.com/package/rss-parser) 3.13.0
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/) 0.33.4

### Development Tools
- **CSS Processing**: [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Linting**: [ESLint](https://eslint.org/) with Next.js config

## 📋 Prerequisites

Before setting up Evil Eye Remedy, ensure you have:

### Required Software
- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Latest version (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

### Required Service Accounts
- **Stripe Account**: For payment processing and service bookings
- **Email Service**: For appointment confirmations and notifications
- **Domain & Hosting**: For production deployment
- **SSL Certificate**: For secure HTTPS connections

### Optional Services
- **Google Analytics**: For tracking and insights
- **Social Media APIs**: For content sharing and engagement
- **SMS Service**: For appointment reminders
- **CDN Service**: For global content delivery

### Development Tools (Recommended)
- **VS Code**: With React, TypeScript, and Tailwind extensions
- **Redux DevTools**: Browser extension for state debugging
- **Postman**: For API testing
- **Figma**: For design collaboration

## 🚀 Installation

1. **Clone the repository**
   ```bash
   https://github.com/Airly-Studio/evil-eye
   cd evil-eye
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
   Configure all required environment variables (see [Environment Configuration](#environment-configuration)).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variable Descriptions

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key for payment processing | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key for server-side operations | ✅ |
| `DATABASE_URL` | Database connection string for user data | ✅ |
| `SMTP_*` | Email configuration for notifications | ✅ |
| `RSS_FEED_URL` | RSS feed for spiritual content | ⚠️ |
| `NEXTAUTH_SECRET` | NextAuth.js secret for secure sessions | ✅ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics for tracking | ⚠️ |

## 🏃 Running the Application

### Development Mode

```bash
# Start development server with hot reload
npm run dev

# Access at http://localhost:3000
```

Features in development mode:
- Hot module replacement for instant updates
- Redux DevTools integration for state debugging
- Detailed error messages and stack traces
- Source maps for easier debugging

### Production Mode

```bash
# Build for production
npm run build

# Start production server on port 4000
npm start

# Access at http://localhost:4000
```

### Development Utilities

```bash
# Run linting
npm run lint

# Type checking (if TypeScript is added)
npx tsc --noEmit

# Analyze bundle size
npm run analyze

# Generate sitemap
npm run sitemap
```

## 🏗️ Project Structure

```
├── public/                     # Static files
│   ├── images/                # Spiritual symbols, healing imagery
│   │   ├── evil-eye/         # Evil eye protection symbols
│   │   ├── healing/          # Healing and spiritual images
│   │   └── testimonials/     # User testimonial photos
│   ├── icons/                # App icons and favicons
│   ├── audio/                # Healing sounds and prayers
│   ├── manifest.json         # PWA manifest
│   └── robots.txt            # SEO configuration
│
├── src/
│   ├── app/                  # Next.js 14 App Router
│   │   ├── (auth)/          # Authentication pages
│   │   │   ├── login/       # User login
│   │   │   ├── register/    # User registration
│   │   │   └── reset/       # Password reset
│   │   ├── (services)/      # Service booking pages
│   │   │   ├── remedies/    # Evil eye remedy services
│   │   │   ├── consultation/ # Spiritual consultation
│   │   │   ├── protection/  # Protection rituals
│   │   │   └── booking/     # Service booking flow
│   │   ├── (account)/       # User account management
│   │   │   ├── profile/     # User profile settings
│   │   │   ├── orders/      # Service history
│   │   │   ├── appointments/ # Scheduled sessions
│   │   │   └── billing/     # Payment management
│   │   ├── (content)/       # Educational content
│   │   │   ├── about/       # About evil eye traditions
│   │   │   ├── blog/        # Spiritual insights blog
│   │   │   ├── testimonials/ # User experiences
│   │   │   └── faq/         # Frequently asked questions
│   │   ├── api/             # API routes
│   │   │   ├── auth/        # Authentication endpoints
│   │   │   ├── payments/    # Stripe webhook handlers
│   │   │   ├── bookings/    # Service booking APIs
│   │   │   └── rss/         # RSS feed generation
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   │
│   ├── components/           # Reusable components
│   │   ├── ui/              # Base UI components
│   │   │   ├── Button/      # Custom button component
│   │   │   ├── Modal/       # Spiritual-themed modals
│   │   │   ├── Card/        # Service and content cards
│   │   │   ├── Input/       # Form input components
│   │   │   └── Loading/     # Loading indicators
│   │   ├── layout/          # Layout components
│   │   │   ├── Header/      # Site navigation
│   │   │   ├── Footer/      # Site footer
│   │   │   ├── Sidebar/     # Navigation sidebar
│   │   │   └── Navigation/  # Mobile navigation
│   │   ├── services/        # Service-related components
│   │   │   ├── ServiceCard/ # Individual service display
│   │   │   ├── BookingForm/ # Service booking form
│   │   │   ├── PaymentFlow/ # Payment processing UI
│   │   │   └── Testimonial/ # Customer testimonials
│   │   ├── spiritual/       # Spiritual-specific components
│   │   │   ├── EvilEyeSymbol/ # Animated evil eye symbols
│   │   │   ├── PrayerRequest/ # Prayer submission form
│   │   │   ├── HealingProgress/ # Healing journey tracker
│   │   │   └── ProtectionRitual/ # Ritual guidance
│   │   └── content/         # Content components
│   │       ├── BlogPost/    # Blog post display
│   │       ├── RSSFeed/     # RSS content integration
│   │       └── ContentGrid/ # Content layout grid
│   │
│   ├── store/               # Redux store configuration
│   │   ├── index.ts         # Store configuration
│   │   ├── slices/          # Redux slices
│   │   │   ├── authSlice.ts # Authentication state
│   │   │   ├── servicesSlice.ts # Services and bookings
│   │   │   ├── paymentSlice.ts # Payment processing state
│   │   │   ├── contentSlice.ts # Blog and RSS content
│   │   │   └── uiSlice.ts   # UI state management
│   │   └── middleware/      # Custom middleware
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts       # Authentication utilities
│   │   ├── usePayment.ts    # Payment processing hooks
│   │   ├── useBooking.ts    # Service booking logic
│   │   ├── useRSS.ts        # RSS feed management
│   │   └── useSpiritual.ts  # Spiritual service utilities
│   │
│   ├── types/               # TypeScript definitions
│   │   ├── user.ts          # User and authentication types
│   │   ├── services.ts      # Spiritual services types
│   │   ├── payment.ts       # Payment and billing types
│   │   ├── content.ts       # Blog and content types
│   │   └── api.ts           # API response types
│   │
│   ├── lib/                 # Utility libraries
│   │   ├── api.ts           # API client configuration
│   │   ├── auth.ts          # Authentication utilities
│   │   ├── payment.ts       # Stripe integration helpers
│   │   ├── rss.ts           # RSS parsing utilities
│   │   ├── validation.ts    # Form validation schemas
│   │   └── utils.ts         # General utility functions
│   │
│   ├── styles/              # Styling files
│   │   ├── components.css   # Component-specific styles
│   │   ├── spiritual.css    # Spiritual-themed styles
│   │   └── utilities.css    # Custom Tailwind utilities
│   │
│   └── constants/           # Application constants
│       ├── routes.ts        # Route definitions
│       ├── services.ts      # Service types and pricing
│       ├── spiritual.ts     # Spiritual symbols and texts
│       └── config.ts        # App configuration
│
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── .eslintrc.json          # ESLint configuration
└── package.json            # Dependencies and scripts
```

## 🔄 State Management

### Redux Store Structure

### Key Redux Slices

#### Services Slice

#### Payment Slice

#### Content Slice

### Redux Integration Example

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server on port 4000
npm run lint             # Run ESLint

# Additional Commands
npm run clean            # Clean build cache
npm run update           # Update dependencies
npm run type-check       # TypeScript type checking
npm run analyze          # Bundle size analysis
```

### Custom Scripts

```bash
# Content Management
npm run rss:update       # Update RSS feeds
npm run content:sync     # Sync blog content
npm run testimonials:update # Update testimonials

# Deployment
npm run deploy:staging   # Deploy to staging
npm run deploy:prod      # Deploy to production
```

## 🚀 Build & Deployment

### Production Build

This creates an optimized `.next` folder ready for deployment on port 4000.

## ⚡ Performance

### Optimization Features

- **Next.js 14**: App Router for optimal performance and SEO
- **Image Optimization**: Built-in Next.js Image component with Sharp
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for faster loading
- **API Routes**: Efficient server-side API handling
- **Framer Motion**: Optimized animations for spiritual interactions
- **Redux Toolkit**: Efficient state management with minimal boilerplate

### Performance Targets

- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1
- **Core Web Vitals**: All metrics in green

## 🔐 Security & Privacy

### Security Features

- **Secure Payment Processing**: PCI-compliant Stripe integration
- **HTTPS Encryption**: End-to-end encrypted communications
- **JWT Authentication**: Secure token-based user sessions
- **Data Protection**: Encrypted storage of sensitive user information
- **Input Validation**: Comprehensive form and API validation
- **Rate Limiting**: API abuse prevention
- **CORS Protection**: Controlled cross-origin resource sharing
- **XSS Protection**: Cross-site scripting prevention

### Privacy Compliance

- **User Data Protection**: Secure handling of personal information
- **Payment Security**: PCI DSS compliant payment processing
- **Session Management**: Secure cookie handling
- **Data Encryption**: At-rest and in-transit encryption
- **GDPR Compliance**: European privacy regulation adherence
- **User Consent**: Clear privacy policy and consent mechanisms

### Best Practices

1. **Secure Environment Variables**: All secrets stored securely
2. **HTTPS Enforcement**: SSL/TLS certificates in production
3. **Regular Security Audits**: Dependency and code security checks
4. **User Data Minimization**: Collect only necessary information
5. **Secure Authentication**: Strong password requirements
6. **Payment Security**: Never store credit card information
7. **Regular Backups**: Automated data backup procedures
8. **Incident Response**: Security incident handling procedures


## 📄 License

This project is proprietary software. All rights reserved.

**© 2024 Evil Eye Remedy.**

This software and its documentation are proprietary and protected by copyright law. Unauthorized copying, distribution, or modification is strictly prohibited.

## 👥 Team

**Developed by Airly Studio**

- **[Taraqul Islam Rony](https://github.com/TIRony)** - *Full Stack Engineer*
- **[Shams Shahriar Bhuiyan](https://github.com/Shams000)** - *Developer*

## 🙏 Acknowledgments

- Next.js team for the powerful React framework
- Stripe for secure and reliable payment processing
- Redux Toolkit team for simplified state management
- Framer Motion for beautiful, spiritual animations
- Tailwind CSS for utility-first styling approach
- Sharp for optimized image processing
- RSS Parser community for content syndication
- Ancient spiritual traditions and wisdom keepers
- Mental health and spiritual wellness advocates
- Open source community for foundational tools


## 📞 Support & Contact

- **Website**: [Evil Eye Remedy](https://evileyeremedy.com/)
- **Company**: [Airly Studio](https://airlystudio.com)
- **Email**: hello@airlystudio.com

For technical support, API documentation, security concerns, or HIPAA compliance questions, contact our development team.

---

⚡ **Secure, Scalable, Engineered by Airly Studio**
