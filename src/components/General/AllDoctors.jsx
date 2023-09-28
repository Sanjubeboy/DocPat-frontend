import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useMutation } from "@tanstack/react-query"
import { getDoctors } from "../../query-utils/queryFunctions"
import DoctorsTable from "./DoctorsTable"
import CustomDropdown from "./CustomDropdown"

let initialRender = true

const AllDoctors = () => {
  const authToken = useSelector((state) => state.auth.authToken)
  const [name, setName] = useState("")
  const [special, setSpecial] = useState("")

  const {
    mutate,
    data: doctors,
    error,
    isError,
    isLoading,
  } = useMutation(getDoctors)

  useEffect(() => {
    mutate({ body: {}, authToken })
  }, [])

  useEffect(() => {
    if(!initialRender){
    const timeoutId = setTimeout(() => {
      mutate({
        body: { filter: { name: { $regex: name, $options: "i" } } },
        authToken,
        special
      })
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }
  initialRender = false

    
  }, [name, special])

  const handleSpecialChange = (data) => {
    setSpecial(data)
  }

  return (
    <div className={`  flex flex-col gap-8`}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Doctors</h1>
        <div className="flex gap-8 items-center">
          <h1 className="text-xl">Filters:</h1>
          <CustomDropdown varName={special} defaultValue="Specialization" handleVarChange={handleSpecialChange} optionArray={['immunology', 'cardiology', 'pediatrics', 'gastro','clear']}/>
          <input
            type="text"
            placeholder="Search for doctor"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 rounded-md border outline-none text-xl px-4 text-gray-500"
          />
        </div>
      </div>
      <DoctorsTable doctors={doctors} isLoading={isLoading} isError={isError} />
    </div>
  )
}
export default AllDoctors
