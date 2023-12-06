import { Dot } from 'lucide-react'

export function AnalysedData({ analysedData }) {
console.log('analysedData :', analysedData);
  const res = analysedData?.choices[0]?.message?.content

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#0061ff]">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unlocking Dental Insights
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Insights from AI-Powered Assessment
            </p>
          </div>
          <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 rounded-xl mt-16">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <div className="mx-auto">
                <p className='text-gray-900  text-center text-xl'>{res}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}