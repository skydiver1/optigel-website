import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET() {
  try {
    // Simple test - just try to retrieve account info
    const account = await stripe.accounts.retrieve();
    
    return NextResponse.json({
      success: true,
      accountId: account.id,
      apiVersion: '2024-09-30.acacia',
      hasSecretKey: !!process.env.STRIPE_SECRET_KEY,
      message: 'Stripe connection successful'
    });
  } catch (error: any) {
    console.error('Stripe test error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      type: error.type,
      code: error.code,
      hasSecretKey: !!process.env.STRIPE_SECRET_KEY,
      secretKeyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 8) + '...'
    }, { status: 500 });
  }
}