import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
    return (
<div className="font-secondary  container mx-auto px-4 py-12 space-y-12">
    <section className="py-10">
                        <h2 className="text-center text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        
                <Accordion type="multiple">
                {/* Reservation */}
                <AccordionItem value="reservations">
                    <AccordionTrigger className="text-xl font-bold">
                    Do you take reservations?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg space-y-2">
                    <p>
                        <span className="font-semibold">Morning hours:</span> We do not take reservations between{" "}
                        <span className="font-semibold">7:00 AM - 5:00 PM on weekdays</span> and{" "}
                        <span className="font-semibold">8:00 AM - 5:00 PM on weekends</span>.
                    </p>
                    <p>
                        <span className="font-semibold">Evening hours:</span> We accept{" "}
                        <span className="font-semibold">reservations from 5:00 PM - 9:00 PM</span> for{" "}
                        <span className="font-semibold">parties of 10 or more</span>.
                    </p>
                    <p>
                        <span className="font-semibold">Banquets & private events:</span> We are happy to host larger gatherings! Please{" "}
                        <a
                        href="/BanquetRequestForm.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline font-semibold"
                        >
                        fill out our banquet request form (PDF)
                        </a>{" "}
                        and email it to{" "}
                        <a
                        href="mailto:dinefarmfresh@gmail.com"
                        className="text-blue-600 underline font-semibold"
                        >
                        dinefarmfresh@gmail.com
                        </a>.
                    </p>
                    </AccordionContent>
                </AccordionItem>

                {/* Delivery */}
                <AccordionItem value="delivery">
                    <AccordionTrigger className="text-xl font-bold">
                    Do you offer delivery?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                    <p>We do not deliver directly, but you can order delivery through:</p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 font-semibold">
                        <li>Grubhub</li>
                        <li>DoorDash</li>
                        <li>Uber Eats</li>
                    </ul>
                    </AccordionContent>
                </AccordionItem>

                {/* Catering */}
                <AccordionItem value="catering">
                    <AccordionTrigger className="text-xl font-bold">
                    Do you offer catering?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                    <p>
                        Yes! We offer catering services through{" "}
                        
                        <a
                        href="https://www.ezcater.com/catering-partner/the-farm-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline font-semibold"
                        >
                <span className="font-semibold">EZcater</span>
                        </a>{" "}.
                    </p>
                    </AccordionContent>
                </AccordionItem>

                {/* Dietary options */}
                <AccordionItem value="gluten-vegan">
                    <AccordionTrigger className="text-xl font-bold">
                    Do you offer gluten-free or vegan options?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg space-y-2">
                    <p>Absolutely!</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 font-semibold">
                        <li>
                        Gluten-free pizza crusts are available in a preset{" "}
                        <span className="font-semibold">12-inch size</span>.
                        </li>
                        <li>
                        Vegan cheese (we use{" "}
                        <span className="font-semibold">Miyoko’s oat-based cheese</span>) is available upon request.
                        </li>
                    </ul>
                    </AccordionContent>
                </AccordionItem>

                {/* Half-and-half pizza */}
                <AccordionItem value="half-half">
                    <AccordionTrigger className="text-xl font-bold">
                    Can I get a half-and-half pizza?
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                    <p>
                        Yes, we’re happy to make{" "}
                        <span className="font-semibold">half-and-half pizzas</span> so you can enjoy two flavors in one!
                    </p>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>

        </section>
        </div>
            )
  }