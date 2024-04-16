import { useState } from "react"

function UploadImage() {
  const [file, setFile] = useState()

  function handleChange(event:any) {
    setFile(event.target.files[0])
    console.log("handled")
  }

  return (
    <div>
      <div className="container mx-auto mt-5 w-3/4 h-[52rem] border-dashed border-2 border-gray-400 mb-5 flex justify-center items-center">
        <div className="border-2 border-gray-400 p-5 flex flex-col justify-center items-center">
          <div className="relative">
            <img className="size-40" src="gallery-icon.webp" alt="Upload Image" />
            <div className="absolute top-0 right-0">
              <label>
                      <img className="cursor-pointer bg-yellow-500 rounded-full" src="plus.svg" alt="Upload Image" />
                      <input type="file" className="hidden" onChange={handleChange}/>
                  </label>
              </div>
          </div>
          <p className="text-xl text-center font-bold mt-3">Drag and drop up to 10 photos <br /> or browse to choose a file</p>
          <p className="text-sm mt-3">JPEG only - Max 50 MB</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-end mt-3">
        <button type="button" className="border rounded-lg px-3 mr-4 hover:bg-black hover:text-white">Cancel</button>
        <button type="button" className="bg-black text-white rounded-lg px-3 mr-4 hover:border hover:bg-white hover:text-black">Submit</button>
      </div>
    </div>
  )
}

export default UploadImage
