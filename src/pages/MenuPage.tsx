// import MenuSection from '../components/menu/section';

// interface MenuPageProps {
//   menuData: {
//     appetizers: { id: string; name: string; description: string; price: string }[];
//     mains: { id: string; name: string; description: string; price: string }[];
//     desserts: { id: string; name: string; description: string; price: string }[];
//   };
// }

// export default function MenuPage({ menuData }: MenuPageProps) {
//   return (
//     <div className = "min-h-screen">
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl text-center font-semibold mb-8">Our Menu</h1>
        
//         {Object.keys(menuData).map((sectionKey) => {
//           const section = sectionKey as keyof typeof menuData;
//           return <MenuSection key={section} title={section} items={menuData[section]} />;
//         })}
//       </div>
//     </div>
//   );
// }
// Menu Page Component
export default function MenuPage() {
  // In a real application, these would be actual images from your project
  const menuImages = [
    'the-farm-menu1.jpg',
    'the-farm-menu2.jpg',
  ];
  
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 mb-8 text-center">
        <h1 className="text-4xl font-bold text-black-900 mb-4">Our Menu</h1>
        <p className="text-xl text-black-800 max-w-2xl mx-auto">
          Browse our selection of handcrafted beverages, lunch and dinner options, and delectable desserts.
        </p>
      </div>
      
      {/* Menu Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {menuImages.map((src, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={src} 
              alt={`Menu page ${index + 1}`}
              className="w-full h-auto object-contain rounded"
            />
          </div>
        ))}
      </div>
      
      {/* Download Option - For future implementation */}
      {/* <div className="mt-12 text-center">
        <p className="text-black-800 mb-2">Want to take our menu with you?</p>
        <button className="bg-black hover:bg-blue-800 text-white py-2 px-6 rounded-lg text-lg font-medium transition">
          Download Menu (PDF)
        </button>
      </div> */}
    </div>
  );
}

