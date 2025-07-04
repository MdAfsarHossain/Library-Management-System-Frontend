export const Stats = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-24  container mx-auto">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">1,200+</p>
            <p className="text-gray-600">Books Available</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-500">350+</p>
            <p className="text-gray-600">Books Borrowed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">50+</p>
            <p className="text-gray-600">Genres Covered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600">99%</p>
            <p className="text-gray-600">Availability Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};
