# YatharthLens - AI Resume Verification Platform

<div align="center">
  <img src="https://via.placeholder.com/1200x400/4f46e5/FFFFFF?text=YatharthLens" alt="YatharthLens Banner" width="100%" />
  <p><em>AI-powered resume verification for authentic hiring decisions</em></p>
</div>

## 📋 Overview

YatharthLens is an advanced AI-powered platform designed to verify the authenticity of resumes and professional bios. Using cutting-edge machine learning algorithms, it helps hiring managers detect exaggeration, plagiarism, and AI-generated content, enabling more informed hiring decisions.

## ✨ Key Features

- **🤖 AI Content Detection**: Identifies AI-generated content with 95% accuracy
- **🔍 Plagiarism Check**: Cross-references against millions of online documents
- **📊 Trust Score Algorithm**: Proprietary scoring system for resume authenticity
- **📄 Multiple Format Support**: Seamlessly handles PDF, DOCX, and other formats
- **🔒 Enterprise Security**: End-to-end encryption for data processing and storage
- **⚡ Rapid Analysis**: Complete verification results in under 30 seconds

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) with React 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth, engaging animations
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons
- **State Management**: React's built-in hooks
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/yatharthlens.git
cd yatharthlens
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## 🏗️ Project Structure

```
yatharthlens/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles with smooth scrolling
│   ├── layout.tsx        # Root layout with ScrollProgress
│   └── page.tsx          # Home page component
│
├── components/           # React components
│   ├── CTA.tsx           # Call-to-action section
│   ├── FAQ.tsx           # Accordion-style FAQ section
│   ├── Features.tsx      # Features showcase grid
│   ├── Footer.tsx        # Site footer with links
│   ├── Hero.tsx          # Hero section with animations
│   ├── HowItWorks.tsx    # Step-by-step process
│   ├── Navbar.tsx        # Responsive navigation
│   ├── Problem.tsx       # Problem statement cards
│   ├── ScrollProgress.tsx # Scroll indicator and back-to-top
│   └── Testimonials.tsx  # Customer testimonials
│
├── hooks/                # Custom React hooks
│   └── useScrollAnimation.ts # Scroll-triggered animation hook
│
├── public/               # Static assets
│
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## ✨ Animation Features

YatharthLens uses Framer Motion to create an engaging user experience:

### Scroll-Triggered Animations

- Components animate into view as the user scrolls down the page
- Custom `useScrollAnimation` hook for controlled animations
- Staggered animations for related elements (cards, lists)

### Interactive Elements

- Hover and tap animations for buttons and cards
- Smooth transitions between states
- Micro-interactions that enhance user experience

### Smooth Scrolling

- CSS-based smooth scrolling for navigation links
- Scroll progress indicator at the top of the page
- Back-to-top button that appears after scrolling

## 🧩 Component Breakdown

### Navbar
- Responsive design with mobile hamburger menu
- Smooth scroll navigation to page sections
- Scroll-aware styling changes

### Hero
- Animated headline and description
- Interactive CTA buttons with hover effects
- Floating illustration with subtle animations

### Features
- Grid layout with animated feature cards
- Icon animations on hover
- Staggered reveal animations

### How It Works
- Step-by-step process visualization
- Numbered steps with connecting elements
- Animated icons and content

### Testimonials
- Customer testimonial cards with ratings
- Hover effects for enhanced engagement
- Staggered animation sequence

### FAQ
- Accordion-style questions and answers
- Smooth expand/collapse animations
- Accessible keyboard navigation

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push your code to a GitHub repository
2. Import the project into [Vercel](https://vercel.com/new)
3. Follow the deployment steps
4. Your site will be live at your Vercel domain

### Manual Deployment

Build the project for production:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Website**: [yatharthlens.com](https://yatharthlens.com)
- **Email**: contact@yatharthlens.com
- **LinkedIn**: [YatharthLens](https://linkedin.com/company/yatharthlens)

---

<div align="center">
  <p>Built with ❤️ for trust and authenticity in hiring</p>
</div>
