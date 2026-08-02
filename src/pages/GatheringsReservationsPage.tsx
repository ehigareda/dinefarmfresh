"use client";

export default function GatheringsReservations() {
  return (
    <>
      {/* <section className="font-secondary flex flex-col items-center justify-start">
        <div className="w-full mx-auto">
          <img 
            className="w-full h-72 md:h-144 object-cover" 
            src="images/gatherings-hero.jpg" 
            alt="The Farm Gatherings"
          />
        </div>
      </section> */}

      <section className="w-full bg-white text-black py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-primary font-bold mb-4">
              Catering Services
            </h2>
            <p className="text-lg leading-relaxed font-secondary mb-6">
              We offer catering services with both our regular menu and <a href="/catering-menu" className="text-resedagreen hover:underline font-semibold">catering menu</a>. For parties of 18 or more, please select up to 6 items.
            </p>
            <p className="text-lg leading-relaxed font-secondary mb-6">
              To put in a request for catering services, fill out our <a href="/catering-contract" className="text-resedagreen hover:underline font-semibold">catering contract</a> and email it to <a href="mailto:dinefarmfresh@gmail.com" className="text-resedagreen hover:underline font-semibold">dinefarmfresh@gmail.com</a>.
            </p>
          </div>
      
          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="images/food-photo-5.jpg"
              alt="Catering spread at The Farm"
              className="w-full h-auto max-h-132 md:max-h-188 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-resedagreen py-16 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="images/IMG_0794.jpg"
              alt="Reserved dining at The Farm"
              className="w-full h-auto max-h-108 md:max-h-192 rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-primary font-bold mb-4">
              Reservations
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-secondary mb-6">
              The Farm is open to reservations for parties of all sizes, all hours of the day. We ask that parties of 10 persons or more sign our <a href="/banquet-request-form" className="text-white hover:underline font-semibold">banquet request form</a> and send it back to us at <a href="mailto:dinefarmfresh@gmail.com" className="text-white hover:underline font-semibold">dinefarmfresh@gmail.com</a>.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-secondary">
              Feel free to contact us via email or phone at <a href="tel:+1234567890" className="text-white hover:underline font-semibold">(123) 456-7890</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-primary font-bold mb-6">
            Let Us Help Make Your Event Special
          </h2>
          <p className="text-lg leading-relaxed font-secondary max-w-3xl mx-auto mb-8">
            Whether it's a corporate lunch, family celebration, or intimate gathering, we're here to make your event memorable with fresh, delicious food and warm hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dinefarmfresh@gmail.com"
              className="bg-resedagreen text-white px-8 py-3 rounded-lg font-secondary text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Email Us
            </a>
            <a 
              href="tel:+1234567890"
              className="bg-white text-resedagreen border-2 border-resedagreen px-8 py-3 rounded-lg font-secondary text-lg hover:bg-resedagreen hover:text-white transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}