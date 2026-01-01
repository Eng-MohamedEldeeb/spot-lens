import { pic1, pic2, pic3, pic4 } from "../../../../assets";

const Portfolio = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-gray-900">
            Professional real estate consulting, marketing, and sales services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={pic1}
                alt="Top left image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={pic2}
                alt="Bottom left image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={pic3}
              alt="Center portrait image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={pic4}
                alt="Top right image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={pic2}
                alt="Bottom right image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
