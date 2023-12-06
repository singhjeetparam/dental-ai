'use client'
import Image from 'next/image'
import { useState } from 'react'

export function ImageUpload({ onImageUpload, isImage }) {
  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [base64, setBase64] = useState(null)

  const handleChange = (e) => {
    const files = e.target.files
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.svg)$/i
    for (let i = 0; i < files.length; i++) {
      if (!allowedExtensions.exec(files[i].name)) {
        alert('Inavlid file type. Only JPG, PNG and scg files are allowed.')
        e.target.value = ''
      } else {
        setIsLoading(true)
        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onloadend = () => {
          setBase64(reader.result)
          setImageURL(reader.result)
          setIsLoading(false)
        }
        setImage(e.target.files[0])
      }
    }
  }

  const uploadAnotherImage = () => {
    setImage(null)
  }

  const submitImage = () => {
    onImageUpload(base64)
  }

  return (
    <div class="flex items-center justify-center w-full z-10">
      {image === null ? (
        <div className="max-w-2xl w-full m-3">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-[#0061ff] border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-gray-50/50"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-[#0061ff] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-[#0061ff]">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-[#0061ff] dark:text-gray-400">
                SVG, PNG, JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.svg"
            />
          </label>
        </div>
      ) : (
        <div className="max-w-2xl w-full mx-4">
          {isLoading ? (
            <div role="status" className="flex justify-center">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <Image
              src={imageURL}
              height={200}
              width={200}
              className="rounded-xl mx-auto"
            />
          )}
          <button
            onClick={uploadAnotherImage}
            className="text-center bg-[#0061ff] rounded-full px-3 py-2 text-white font-semibold w-full mt-16 "
          >
            {isImage ? 'Analyzing .... ' : 'Upload Another Image'}
          </button>
          {!isImage && (
            <button
              onClick={submitImage}
              className="text-center bg-[#0061ff] rounded-full px-3 py-2 text-white font-semibold w-full mt-8 "
            >
              Analyze Image
            </button>
          )}
        </div>
      )}
    </div>
  )
}