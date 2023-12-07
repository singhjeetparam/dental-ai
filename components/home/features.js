import { Bot, Smile, CircleDollarSign, Users } from 'lucide-react'

const features = [
  {
    name: 'Cutting-Edge AI Analysis',
    description:
      'Our platform employs state-of-the-art GPT-4-v technology to conduct meticulous analyses of your dental images, providing insightful preliminary assessments with accuracy and efficiency.',
    icon: Bot,
  },
  {
    name: 'User-Friendly Interface',
    description:
      'With a design focused on simplicity and warmth, navigating through our platform is intuitive and stress-free, ensuring a comfortable experience for every user.',
    icon: Smile,
  },
  {
    name: 'Personalized Cost Estimates',
    description:
      'Gain insights into potential dental procedure costs customized to your location, empowering you with informed decisions about your dental health.',
    icon: CircleDollarSign,
  },
  {
    name: 'Accessibility for Everyone',
    description:
      'Engineered for ease of use, our platform caters to varying levels of tech-savviness, ensuring accessibility and convenience for all users.',
    icon: Users,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Advanced Features for Your Dental Peace of Mind
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover the Innovations Redefining Dental Care Accessibility
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0061ff]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}