import { useState } from 'react' 
import axios from 'axios' 

export default function UploadImage() {
  const [image, setImage] = useState(null) 
  const [result, setResult] = useState(null) 

  const handleUpload = async (e) => {
    const file = e.target.files[0] 
    setImage(URL.createObjectURL(file)) 

    const formData = new FormData() 
    formData.append('image', file) 

    try {
      const response = await axios.post('http://localhost:3000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }) 
      setResult(response.data) 
    } catch (error) {
      console.error('Error sending image:', error) 
    }
  } 

  return (
    <div className="mb-4 text-center">
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && <img src={image} alt="Preview" className="mx-auto mt-4 max-w-xs" />}
      {result && <p className="mt-2 text-green-600 font-semibold">Prediction: {result.prediction} ({result.confidence}%)</p>}
    </div>
  ) 
}