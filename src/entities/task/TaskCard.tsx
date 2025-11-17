interface TaskCardProps {
  title: string;
  description: string;
}

export const TaskCard = ({ title, description }: TaskCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200 h-full flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

