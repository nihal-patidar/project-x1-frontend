import { LightbulbIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Feature 1',
    description: 'Description of feature 1 and how it benefits the user.',
    icon: LightbulbIcon,
  },
  {
    name: 'Feature 2',
    description: 'Description of feature 2 and how it benefits the user.',
    icon: SparklesIcon,
  },
  {
    name: 'Feature 3',
    description: 'Description of feature 3 and how it benefits the user.',
    icon: RocketLaunchIcon,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to [solve problem]
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Brief overview of how your product or service solves the user's problem.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

