import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Top red bar - exactly like ArthroGel */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          <span>🚚 Free 1-2 Day Express UK Shipping on ALL Orders!</span>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            {/* Logo - exactly like ArthroGel */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold text-black">Opti-15</span>
                <span className="text-3xl font-bold text-red-600 ml-1">Gel</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}