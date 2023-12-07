'use client'
import {
  Hero,
  ImageUpload,
  AnalysedData,
  CountryEstimation,
} from '@/components/dentalSnap'
import { useState } from 'react'
import { analyzeImage, analyzeCountryEstimation } from '../../services/openAI'

export default function DentalSnap() {
  const [imageBase64, setImageBase64] = useState(null)
  const [analysedData, setAnalysedData] = useState(null)
  const [countryWiseEstimation, setCountryWiseEstimation] = useState(null)
  const [isImage, setIsImage] = useState(false)
  const [isEstimation, setIsEstimation] = useState(false)

  const handleImageUpload = async (base64) => {
    setImageBase64(base64)
    setIsImage(true)
    try {
      const result = await analyzeImage(base64)
      setAnalysedData(result)
      setIsImage(false)
    } catch (error) {
      console.log('Error : ', error)
    }
  }

  const handleCountryEstimation = async (country) => {
    if (analysedData !== null) {
      setIsEstimation(true)
      try {
        const result = await analyzeCountryEstimation(country, analysedData)
        setCountryWiseEstimation(result)
        setIsEstimation(false)
      } catch (error) {
        console.log('Error in handleCountryEstimation: ', error)
      }
    } else {
      console.log(
        'analysedData is null or undefined, skipping country estimation.',
      )
    }
  }

  return (
    <>
      <Hero />
      <ImageUpload onImageUpload={handleImageUpload} isImage={isImage} />
      {analysedData && <AnalysedData analysedData={analysedData} />}
      {analysedData && (
        <CountryEstimation
          handleCountryEstimation={handleCountryEstimation}
          countryWiseEstimation={countryWiseEstimation}
          isEstimation={isEstimation}
        />
      )}
    </>
  )
}