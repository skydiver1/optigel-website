import Image from 'next/image';

export default function EasyToUseSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-bold text-black mb-8">
            Opti-15 Gel is so easy to use!
          </h2>
        </div>

        {/* Three steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/Joint_Pain_Icon_1.webp"
                alt="Step 1 - Apply gel"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <h3 className="font-bold text-black text-sm mb-2">STEP 1</h3>
            <p className="text-gray-600 text-sm">
              Apply a small amount of Opti-15 Gel
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/Joint_Pain_Icon_2.webp"
                alt="Step 2 - Massage"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <h3 className="font-bold text-black text-sm mb-2">STEP 2</h3>
            <p className="text-gray-600 text-sm">
              Massage for a few minutes. No mess and non-sticky
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/Joint_Pain_Icon_3.webp"
                alt="Step 3 - Feel relief"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <h3 className="font-bold text-black text-sm mb-2">STEP 3</h3>
            <p className="text-gray-600 text-sm">
              The fast absorbing gel will give you cooling relief immediately
            </p>
          </div>
        </div>

        {/* Money back guarantee section */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="font-bold text-black text-lg mb-4">
            WE'RE SO CONFIDENT THAT YOU'LL LOVE OPTI-15 GEL WE'LL<br />
            GIVE YOU YOUR MONEY BACK IF YOU DON'T!
          </h3>
        </div>
      </div>
    </section>
  );
}