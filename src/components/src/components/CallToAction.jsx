import { Button } from "@material-tailwind/react"

export default function CallToAction() {
  return (
    <section className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Experience the power of our product risk-free. Sign up now and transform the way you work.
        </p>
        <Button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
          Get started
        </Button>
      </div>
    </section>
  )
}

