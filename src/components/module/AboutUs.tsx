import AboutUsImage1 from "../../assets/about-us-1.avif";

export const AboutUs = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
            <span className="text-blue-500">About</span> Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to{" "}
            <span className="font-semibold text-blue-500">Library System</span>{" "}
            — your digital gateway to a world of knowledge and inspiration. We
            are passionate about bringing books, stories, and learning resources
            to everyone, everywhere.
          </p>
          <p className="text-base text-gray-600">
            Whether you're a student, a curious reader, or a lifelong learner,
            our mission is to empower you through access to the best content
            across genres and generations.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Over 50,000+ books and growing</li>
            <li>Personalized recommendations</li>
            <li>Digital and physical access options</li>
            <li>Community-driven reading goals</li>
          </ul>
        </div>

        {/* Image or Illustration */}
        <div className="h-full w-full">
          <img
            src={AboutUsImage1}
            // src="https://plus.unsplash.com/premium_photo-1681681082009-a2dbaf3deaa4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us Illustration"
            className="h-fit w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
