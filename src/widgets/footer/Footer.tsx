export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-base text-gray-700 mb-6">
            Мы являемся партнерами <strong className="font-semibold text-gray-900">Twin</strong>.
          </p>
          <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
            <p>
              Twin — резидент Сколково, включен в реестр российских программ для вычислительных машин и баз данных Минкомсвязи номер 11009.
            </p>
            <p>
              Состоит в реестре операторов, осуществляющих обработку персональных данных Роскомнадзор номер 66-21-007184.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

