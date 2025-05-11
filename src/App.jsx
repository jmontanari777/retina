import UploadImage from './components/uploadimage/UploadImage'
import ResultViewer from './components/resultviewer/ResultViewer'

import './App.css'

function App() {
   

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AI Retina Diagnosis</h1>
      
      <UploadImage />
      <ResultViewer />
  
    </div>
    </>
  )
}

export default App
