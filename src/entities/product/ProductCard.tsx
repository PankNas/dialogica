interface ProductCardProps {
  title: string;
  description: string;
  icon?: string;
}

export const ProductCard = ({ title, description, icon }: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      {icon && (
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <span className="text-3xl">{icon}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

