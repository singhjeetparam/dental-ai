import { Eye, Users, Cpu } from 'lucide-react'
import Image from 'next/image'
const features = [
  {
    name: 'Our Vision',
    description:
      'At DentalCare.ai, we envision a world where everyone can take proactive steps toward better dental health. We strive to provide accurate, reliable, and convenient preliminary dental analyses, empowering individuals to prioritize their oral well-being.',
    icon: Eye,
  },
  {
    name: 'Team Expertise',
    description:
      'Meet our dedicated team of professionals passionate about merging healthcare with technology. With expertise in AI, dentistry, and user experience, we ensure top-notch analysis and a user-friendly platform.',
    icon: Users,
  },
  {
    name: 'Technology Behind DentalCare.ai',
    description:
      'We leverage GPT-4-v technology, a cutting-edge AI model, to perform in-depth analyses of dental images. Our AI is trained to identify common dental issues and reassure users about their dental health.',
    icon: Cpu,
  },
]

export function Hero() {
  return (
    <main className='relative isolate'>
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0061ff] to-[#60efff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About DentalCare.ai
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to DentalCare.ai, where we merge cutting-edge technology
              with dental care to create a comfortable and accessible
              experience. Our mission is to revolutionize dental health by
              offering preliminary analyses through AI-powered solutions, making
              dental visits less daunting.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="/about.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-[#0061ff]"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  )
}