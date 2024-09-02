import Image from 'next/image'

const testimonials = [
  { name: "Alex Johnson", role: "Student", quote: "This AI study assistant has completely transformed my learning experience!", image: "/testimonial1.jpg" },
  { name: "Sarah Lee", role: "Professional", quote: "I've never been more efficient in my continuous learning journey.", image: "/testimonial2.jpg" },
  { name: "Michael Brown", role: "Educator", quote: "An invaluable tool for both students and teachers. Highly recommended!", image: "/testimonial3.jpg" },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={60} 
                  height={60} 
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}