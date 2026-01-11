
export default function VisitUs() {
    return (

        <div className="font-secondary  container mx-auto px-4 py-12 space-y-12">
          <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Hours & Location</h2>
          <div className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="The Farm Location"
              src="https://maps.google.com/maps?q=2450%20Park%20Blvd,%20Palo%20Alto,%20CA%2094306+(The%20Farm)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </section>
                <section className="grid md:grid-cols-2 gap-6 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Address</h3>
          <p>2450 Park Blvd<br />Palo Alto, CA 94306</p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Contact</h3>
          <a href="tel:6506569831" className="block">Phone: 650-656-9831</a>
          <a href="mailto:dinefarmfresh@gmail.com" className="block">Email: dinefarmfresh@gmail.com</a>

        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Hours of Operation</h3>
          <ul className="space-y-1">
            <li>Monday - Tuesday: 7:30 AM - 6:00 PM</li>
            <li>Wednesday - Friday: 7:30 AM - 8:00 PM</li>
            <li>Saturday: 8:00 AM - 8:00 PM</li>
            <li>Sunday: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </section>
        </div>
    )
  }
