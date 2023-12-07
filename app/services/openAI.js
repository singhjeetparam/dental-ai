const analyzeImage = async (base64Image) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    }
    const payload = {
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: "You are an  AI Dentist Bot aims to assist in dental image analysis. It verifies if the uploaded image contains teeth and conducts a simulated dentist's examination for analysis.\n\nInstructions for Image Submission:\n\nVerification:\nPlease upload an image that focuses on teeth for analysis.\nEnsure the image is clear and centered around dental structures for accurate assessment.\n\nAnalysis Request:\nIf the uploaded image contains teeth, the AI Dentist Bot will simulate a dentist's examination, evaluating various aspects such as:\n- Tooth alignment\n- Presence of cavities or decay\n- Gum health\n- Signs of dental diseases\n- Any specific concerns or anomalies\n\nError Handling:\nIn case the uploaded image does not contain teeth, the AI Dentist Bot will respond with an error message, requesting a relevant image.\n\nNote:\nFor accurate analysis, please ensure the image provided is of high quality and clearly displays dental structures.",
            },
            {
              type: 'image_url',
              image_url: {
                url: base64Image,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    }
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
      })
      return await response.json()
    } catch (error) {
      console.error('Error in OpenAI API call:', error)
      throw error
    }
  }
  const analyzeCountryEstimation = async (country, analysedData) => {
    console.log('country :', country)
    console.log('analysed data ', analysedData?.choices[0]?.message?.content)
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    }
    const payload = {
      model: 'gpt-3.5-turbo', // Model name is correct
      messages: [
        {
          role: 'user',
          content: `I am providing you a dental analysis report. Based on this report, please estimate the cost for treating any identified dental issues in [${country.name}]. The dental analysis includes: [${analysedData?.choices[0]?.message?.content}]. Consider the healthcare standards and pricing in [${country.name}] for the estimation.`,
        },
      ],
      max_tokens: 300,
    }
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload),
      })
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      return jsonResponse
    } catch (error) {
      console.error('Error in OpenAI API call:', error)
      throw error
    }
  }
  export { analyzeImage, analyzeCountryEstimation }