import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Client-side Stripe
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// Server-side Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia', // Using stable API version
});

// Product configuration matching ArthroGel structure
export const products = {
  single: {
    name: 'Opti-15 Gel - Single Tube',
    tubes: 1,
    originalPrice: 19.95,
    salePrice: 19.95,
    priceId: process.env.STRIPE_PRICE_ID_SINGLE!,
    description: 'Try Opti-15 Gel risk-free with our 90-day money-back guarantee'
  },
  triple: {
    name: 'Opti-15 Gel - Triple Pack (Buy 2, Get 1 FREE)',
    tubes: 3,
    originalPrice: 59.85,
    salePrice: 37.45,
    priceId: process.env.STRIPE_PRICE_ID_TRIPLE!,
    description: 'Most popular option - perfect for extended relief'
  },
  'six-pack': {
    name: 'Opti-15 Gel - Six Pack (Buy 3, Get 3 FREE)',
    tubes: 6,
    originalPrice: 119.70,
    salePrice: 59.70,
    priceId: process.env.STRIPE_PRICE_ID_SIX_PACK!,
    description: 'Best value - maximum savings for long-term comfort'
  },
  'cbd-patches': {
    name: 'High Strength (16mg) CBD Patches - 18 days supply',
    quantity: 18,
    originalPrice: 29.95,
    salePrice: 14.95,
    priceId: process.env.STRIPE_PRICE_ID_CBD_PATCHES!,
    description: 'High strength 16mg CBD patches for enhanced pain relief'
  }
} as const;

export type ProductKey = keyof typeof products;