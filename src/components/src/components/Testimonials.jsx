// import Image from 'next/image'

const testimonials = [
  {
    content: "This product has completely transformed how I work. I can't imagine going back to my old workflow.",
    author: "Jane Doe",
    role: "CEO, TechCorp"
  },
  {
    content: "The customer support is outstanding. They went above and beyond to ensure I was satisfied.",
    author: "John Smith",
    role: "Freelance Designer"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What our customers are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <Image
                  src=""
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

