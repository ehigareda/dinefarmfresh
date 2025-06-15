export default function Footer(){
    return (
      <footer className="bg-black text-white py-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
            <div className="text-sm">
                <p >&copy; 2025 The Farm. All rights reserved.</p>
                {/* <p>
                    Designed by <a 
                        href="https://www.linkedin.com/in/erickhigareda" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-gray-300"
                    >
                        Erick Higareda
                    </a>
                </p> */}
            </div>
            <div className="text-sm space-y-3">
                <p><strong>Contact</strong></p>
                <p>2450 Park Blvd.</p>
                <p>Palo Alto, CA 94306</p>
                <a href="tel:6506569831" className="block">Phone: 650-656-9831</a>
                <a href="mailto:dinefarmfresh@gmail.com" className="block">Email: dinefarmfresh@gmail.com</a>
            </div>
            <div className="text-sm space-y-3">
            <p><strong>Hours</strong></p>
            <p>Mon-Fri: 7am – 9pm</p>
            <p>Sat-Sun: 8am – 9pm</p>
            </div>
            <div className="text-sm space-y-3">
                <p><strong>Socials</strong></p>
                <a href="https://instagram.com/thefarmpaloalto" aria-label="Instagram" className="hover:text-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3" 
                    className="h-6 w-6"
                    >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                    </svg>
                </a>
            </div>
        </div>
      </footer>
    )
  }
  