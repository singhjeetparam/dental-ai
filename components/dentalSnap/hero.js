export  function Hero() {
    return (
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-[#0061ff]">Dental Snap</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Upload Your Dental Images & Get Preliminary Analysis</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Capture clear, well-lit images of your teeth using a smartphone or camera. Ensure sharp focus, multiple angles, and close-ups of specific areas if needed. Minimize blur or distortion for precise analysis. Include any concerns or relevant details in the images. Use the secure upload form to submit your images for a thorough AI analysis. Clarity and detail in your images aid in our accurate assessment of your dental health
          </p>
        </div>
      </div>
    )
  }
  