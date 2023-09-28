import { useState } from 'react'
import { BiChevronDown} from 'react-icons/bi'

const CustomDropdown = ({varName, handleVarChange, optionArray, defaultValue}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (data) => {
        setIsOpen(prev => !prev)
        if(data === 'clear'){
          handleVarChange('')
          return
        }
        handleVarChange(data)
    }

  return (
    <div className="relative">
      <div className="bg-white w-40 rounded-md p-3 flex justify-between items-center gap-4">
        <h1 className="capitalize">
          {varName ? varName : <span className='text-gray-400'>{defaultValue}</span>}
        </h1>
        <BiChevronDown
          onClick={() => setIsOpen((prev) => !prev)}
          className={`text-2xl cursor-pointer ${isOpen && "rotate-180"}`}
        />
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 p-4 z-50 items-center top-[105%] left-0 right-0 shadow-lg absolute bg-white rounded-md">
          {optionArray.map((item) => (
            <div
              key={item}
              className={`cursor-pointer capitalize rounded-md ${
                varName === item ? "bg-prm text-white w-full p-2" : "w-full p-2"
              }`}
              onClick={() => handleChange(item)}
            >
              {item}
            </div>
          ))}
          {/* <div
            className={`cursor-pointer rounded-md ${
              sort === "Ascending"
                ? "bg-prm text-white w-full p-2"
                : "w-full p-2"
            }`}
            onClick={() => handleChange("Ascending")}
          >
            Ascending
          </div>
          <div
            className={`cursor-pointer rounded-md ${
              sort === "Descending"
                ? "bg-prm text-white w-full p-2"
                : "w-full p-2"
            }`}
            onClick={() => handleChange("Descending")}
          >
            Descending
          </div> */}
        </div>
      )}
    </div>
  )
}
export default CustomDropdown