import MenuSection from '../components/menu/section';

interface MenuPageProps {
  menuData: {
    appetizers: { id: string; name: string; description: string; price: string }[];
    mains: { id: string; name: string; description: string; price: string }[];
    desserts: { id: string; name: string; description: string; price: string }[];
  };
}

export default function MenuPage({ menuData }: MenuPageProps) {
  return (
    <div className = "min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-center font-semibold mb-8">Our Menu</h1>
        
        {Object.keys(menuData).map((sectionKey) => {
          const section = sectionKey as keyof typeof menuData;
          return <MenuSection key={section} title={section} items={menuData[section]} />;
        })}
      </div>
    </div>
  );
}

