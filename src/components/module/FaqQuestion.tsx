export const FaqQuestion = () => {
  return (
    <div>
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl uppercase text-blue-500 font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-600">
                How do I borrow a book?
              </h4>
              <p className="text-gray-700">
                Just click the "Borrow" button on any available book and fill in
                your quantity and due date.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">
                Can I edit a book entry later?
              </h4>
              <p className="text-gray-700">
                Yes, go to the "Books" list, click "Edit", update the fields,
                and hit "Update".
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">
                How is availability calculated?
              </h4>
              <p className="text-gray-700">
                The system sets availability to true only if the number of
                copies is greater than zero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
