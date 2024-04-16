import { useState } from "react"

function UploadImage() {
  const [file, setFile] = useState()

  function handleChange(event:any) {
    setFile(event.target.files[0])
    console.log("handled")
  }

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="bg-gray-200 rounded-lg pb-5">
          <div className="">
            <h1 className='text-4xl p-5'>Upload Image</h1>
            <hr className="border-gray-400"/>
          </div>
          <div className="grid justify-items-center pt-5">
              <label>
                  <img className="border-dashed border-2 border-gray-400 rounded-lg cursor-pointer" src="upload-icon.png" alt="Upload Image" />
                  <input type="file" className="hidden" onChange={handleChange}/>
              </label>
              {/* <button type="submit" className="bg-blue-500 mt-3 p-2 rounded-lg">Upload</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadImage
