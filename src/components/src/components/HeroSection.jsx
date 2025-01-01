import { Button } from "@material-tailwind/react"
import { Image } from "antd"
export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-2xl mb-8 lg:mb-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Your Product Name</span>
          <span className="block text-indigo-600">Solves Your Problem</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Brief description of your product or service and its main value proposition. Highlight what makes it unique and why customers should care.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
          <div className="rounded-md shadow">
            <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get Started
            </Button>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md">
        <Image
          src=""
          alt="Product illustration"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
        />
      </div>
    </section>
  )
}

