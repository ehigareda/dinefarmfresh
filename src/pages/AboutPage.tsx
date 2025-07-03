
export default function About() {
    return (
      <div className="flex flex-col items-center min-h-screen font-secondary">
        <div className="text-center mt-8 w-full max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
          2450 Park Blvd, Palo Alto
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            Hours:
          </h3>
          <p className="text-l mb-4">
          Monday - Friday: 7:00AM - 9:00PM
          </p>
          <p className="text-l mb-4">
          Saturday - Sunday: 8:00AM - 9:00PM
          </p>
          <img className = "mb-4"src="images/home-image-3-min.jpg" alt="The Farm Building Photo"></img>
        </div>
      </div>
    )
  }