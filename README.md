# Opti-15 Gel - E-commerce Website

A complete e-commerce website for Opti-15 Gel, a natural pain relief product. Built with Next.js, TypeScript, and Tailwind CSS, featuring Stripe integration for secure payments.

## Features

- 🎨 **Exact Replica Design** - Mirrors the ArthroGel website structure and styling
- 💳 **Stripe Integration** - Secure payment processing with multiple product tiers
- 📱 **Responsive Design** - Mobile-first approach with perfect desktop experience
- ⚡ **Performance Optimized** - Next.js 15 with Turbopack for lightning-fast development
- 🎯 **SEO Ready** - Proper metadata and OpenGraph tags
- 🛡️ **TypeScript** - Full type safety throughout the application

## Product Tiers

- **Single Tube** - £19.95 (Try Opti-15)
- **Triple Pack** - £37.45 (Buy 2, Get 1 FREE) - Most Popular
- **Six Pack** - £59.70 (Buy 3, Get 3 FREE) - Best Value

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Update `.env.local` with your Stripe keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
   STRIPE_SECRET_KEY=sk_live_your_key_here
   STRIPE_PRICE_ID_SINGLE=price_your_single_price_id
   STRIPE_PRICE_ID_TRIPLE=price_your_triple_price_id
   STRIPE_PRICE_ID_SIX_PACK=price_your_six_pack_price_id
   NEXT_PUBLIC_SITE_URL=https://optigel.co.uk
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID_SINGLE`
- `STRIPE_PRICE_ID_TRIPLE`
- `STRIPE_PRICE_ID_SIX_PACK`
- `NEXT_PUBLIC_SITE_URL`

## Stripe Setup

1. Create a Stripe account
2. Create products with the following structure:
   - Single tube: £19.95
   - Triple pack: £37.45 (3 tubes)
   - Six pack: £59.70 (6 tubes)
3. Copy the price IDs to your environment variables

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── success/           # Order success page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── IngredientsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── PricingSection.tsx
│   ├── FAQSection.tsx
│   └── Footer.tsx
└── lib/                   # Utilities
    └── stripe.ts          # Stripe configuration
```

## Technologies Used

- **Next.js 15** - React framework with app router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Stripe** - Payment processing
- **Google Fonts** - Assistant font family

## Company Information

- **Company**: Medical Technology Ltd
- **Product**: Opti-15 Gel
- **Domain**: optigel.co.uk
- **Support**: support@optigel.co.uk
- **Phone**: 0800 470 0316

## Features Implemented

✅ Header with navigation and cart  
✅ Hero section with product showcase  
✅ Features and benefits section  
✅ Detailed ingredients information  
✅ Customer testimonials  
✅ Pricing with Stripe integration  
✅ Comprehensive FAQ section  
✅ Footer with company information  
✅ Success page after purchase  
✅ Responsive design  
✅ SEO optimization  

## License

Copyright © 2025 Medical Technology Ltd. All rights reserved.
