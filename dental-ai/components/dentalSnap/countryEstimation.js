'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, ChevronsUpDown } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const countries = [
  { id: 1, name: 'China' },
  { id: 2, name: 'India' },
  { id: 3, name: 'United States' },
  { id: 4, name: 'Indonesia' },
  { id: 5, name: 'Pakistan' },
  { id: 6, name: 'Brazil' },
  { id: 7, name: 'Nigeria' },
  { id: 8, name: 'Bangladesh' },
  { id: 9, name: 'Russia' },
  { id: 10, name: 'Mexico' },
  { id: 11, name: 'Japan' },
  { id: 12, name: 'Ethiopia' },
  { id: 13, name: 'Philippines' },
  { id: 14, name: 'Egypt' },
  { id: 15, name: 'Vietnam' },
  { id: 16, name: 'DR Congo' },
  { id: 17, name: 'Turkey' },
  { id: 18, name: 'Iran' },
  { id: 19, name: 'Germany' },
  { id: 20, name: 'Thailand' },
]

const stats = [
  { id: 1, name: 'Average Cost for Basic Procedures', value: '8,000+' },
  { id: 2, name: 'Median Cost for Advanced Treatments', value: '3%' },
  { id: 3, name: 'Regional Cost Differences', value: '99.9%' },
  { id: 4, name: 'Cost Comparison Over Time', value: '$70M' },
]

export function CountryEstimation({ handleCountryEstimation, countryWiseEstimation, isEstimation }) {
  const [selected, setSelected] = useState(countries[3])
  const [isPersonalisedEstimation, setIsPersonalisedEstimation] =
    useState(false)

  return (
    <div className=" py-24 sm:py-32 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <button
            className="bg-[#0061ff] text-white font-semibold rounded-full py-2 px-4 text-xl sm:text-2xl"
            onClick={() => setIsPersonalisedEstimation(true)}
          >
            Get Personalized Dental Cost Estimates !!!
          </button>
        </div>
        {isPersonalisedEstimation && (
          <>
            <div className="py-24 sm:py-32 max-w-md mx-auto">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-xl font-medium leading-6 text-gray-900">
                      Select your country
                    </Listbox.Label>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0061ff] sm:text-sm sm:leading-6">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronsUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {countries.map((country) => (
                            <Listbox.Option
                              key={country.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'bg-[#0061ff] text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                )
                              }
                              value={country}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'block truncate',
                                    )}
                                  >
                                    {country.name}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      )}
                                    >
                                      <Check
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              <div className='text-center'>
              <button className='bg-[#0061ff] text-white font-semibold rounded-full py-2 px-4 text-xl sm:text-2xl mt-8 mx-auto' 
              onClick={() => {handleCountryEstimation(selected)}}>{isEstimation ? 'Estimating ... ' :'Get Estimation'}</button>
              </div>
            </div>
            {countryWiseEstimation &&
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blend=111827&blend-mode=multiply&sat=-100&exp=15"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
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
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h2 className="text-base font-semibold leading-8 text-[#0061ff]">
                    Exploring Dental Procedure Costs
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Estimated Costs for Dental Procedures
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Understanding Potential Expenses for Common Treatments
                  </p>
                </div>
                <dl className="mx-auto text-white font-semibold mt-8">
                  {countryWiseEstimation?.choices[0]?.message?.content}
                </dl>
              </div>
            </div>}
          </>
        )}
      </div>
    </div>
  )
}