'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function UpsellSection() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Clear any leftover sessionStorage on mount to ensure upsell starts hidden
    sessionStorage.removeItem('selectedProduct');
    
    // Listen for custom event when product is selected
    const handleProductSelected = (event: CustomEvent) => {
      setSelectedProduct(event.detail.productKey);
      setIsVisible(true);
    };

    window.addEventListener('productSelected', handleProductSelected as EventListener);

    return () => {
      window.removeEventListener('productSelected', handleProductSelected as EventListener);
    };
  }, []);

  const handleUpsellChoice = (includeUpsell: boolean) => {
    const baseUrl = `/cart?selectedProduct=${selectedProduct}`;
    router.push(`${baseUrl}&upsell=${includeUpsell}`);
  };

  if (!isVisible || !selectedProduct) {
    return null;
  }

  return (
    <section id="upsell" className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-black mb-2">
              High Strength (16mg) CBD Patches - 18 days supply
            </h2>
            <p className="text-sm text-gray-600 mb-4">Act Now and Get...</p>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              CBD Patches for 50% OFF!
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Product image */}
            <div className="flex justify-center">
              <div className="max-w-xs">
                <Image
                  src="/axxess16mg.webp"
                  alt="High Strength CBD Patches"
                  width={300}
                  height={400}
                  className="object-contain rounded-lg "
                />
              </div>
            </div>

            {/* Right side - Offer details */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-4">
                A <strong>18 day supply</strong> of these <strong>high strength 16mg CBD patches!</strong><br/>
                Try now with an extended <strong>90 day money back guarantee.</strong>
              </p>
              
              <div className="mb-4">
                <div className="text-red-500 line-through text-lg">£29.95</div>
                <div className="text-sm text-gray-600">Special Add-on Price = <strong>£14.95!</strong></div>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleUpsellChoice(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  YES, GET MY 50% SAVINGS!
                </button>
                
                <button 
                  onClick={() => handleUpsellChoice(false)}
                  className="w-full text-blue-500 hover:text-blue-700 text-sm underline"
                >
                  No Thank You
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}