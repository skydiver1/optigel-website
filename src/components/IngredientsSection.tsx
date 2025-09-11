import Image from 'next/image';

export default function IngredientsSection() {
  const ingredients = [
    {
      name: "ARNICA",
      image: "/Arnica.webp",
      description: "Arnica is a herb rich in flavonoids and is an anti-inflammatory preparation. Pharmacological effects have included anti-inflammatory, anti-bacterial, and pain reducing properties."
    },
    {
      name: "ROSEMARY",
      image: "/Rosemary.webp", 
      description: "As a treatment, it is a moderately potent anti-bacterial remove blood and cans. It is traditionally used for tissue repair and also offers."
    },
    {
      name: "HORSE CHESTNUT",
      image: "/chestnut.jpg",
      description: "Help reduce swelling and improve blood circulation - making it effective in treating various conditions such as chronic venous insufficiency and varicose veins."
    },
    {
      name: "PEPPERMINT",
      image: "/Peppermint.webp",
      description: "Peppermint is one of the most popular scents and it has potent effects. It's been to be anti-painful and anti-fatigue and is a known muscle relaxer with pain relief."
    },
    {
      name: "COMFREY ROOT",
      image: "/Arnica.webp", // Using arnica as placeholder for comfrey
      description: "It's commonly used for its ability to accelerate healing and reduce inflammation. It's traditionally used to heal wounds safely and is great for muscle pain."
    },
    {
      name: "ST JOHN'S WORT",
      image: "/St_John_s_Wort.webp",
      description: "It's known for its mood-boosting properties, but it also has healing and anti-inflammatory benefits when it's applied to the skin."
    },
    {
      name: "JUNIPER BERRY",
      image: "/Juniper.webp",
      description: "Juniper can do wonders for acne and other inflammatory conditions. It helps reduce bacterial infections and help stimulate blood circulation."
    },
    {
      name: "EUCALYPTUS",
      image: "/Eucalyptus.webp",
      description: "A strong herbal heat for the skin. Eucalyptus oils and extracts properties. It can control the effects of inflammation and is good against pain of all time."
    }
  ];

  return (
    <section id="ingredients" className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-black mb-8">
            Key Extracts in Opti-15 Gel
          </h2>
        </div>

        {/* Ingredients grid - exactly like ArthroGel with proper mobile sizing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="mb-3">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={60}
                  height={60}
                  className="mx-auto rounded object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-xs mb-2 uppercase">{ingredient.name}</h3>
              <p className="text-gray-600 text-xs leading-tight">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}