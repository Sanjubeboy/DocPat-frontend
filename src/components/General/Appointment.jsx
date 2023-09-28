import { useMutation } from "@tanstack/react-query"
import { useState, useSyncExternalStore } from "react"
import { CiCircleMore } from "react-icons/ci"
import Loader from "./Loader"
import GeneralError from "../../errors/GeneralError"
import { deleteAppointment } from "../../query-utils/queryFunctions"
import { toast } from "react-toastify"

const Appointment = ({ time, _id, doctorId, patientId, role, authToken, ParentMutate, sort }) => {
    const [isOpen, setIsOpen] = useState(false)

    const {mutate, data, error, isError, isLoading} = useMutation(deleteAppointment)

    const handleDeleteAppointment = () => {
      console.log('working')
      // return
      mutate({ apiBody:{appointmentId : _id}, role, authToken},{
        onSuccess: () => {
          toast.success('Deleted successfully')
          ParentMutate({role, authToken, sort})
        }
      })
      
    }
  
    // if(isLoading){
    //   return <Loader/>
    // }

    // if(isError){
    //   console.log(error)
    //   return <GeneralError/>
    // }


  const date = new Date(time)
  return (
    <div className="grid grid-cols-4 p-3 even:bg-transparent even:text-black odd:bg-white odd:text-gray-500 rounded-md px-4 hover:bg-gray-200 transition-all duration-100">
      <h1 className="capitalize">
        {role === "patient" ? doctorId.name : patientId.name}
      </h1>
      <h1>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h1>
      <h1>{date.getHours()}:00</h1>
      <div className="flex items-center gap-20">
        <button onClick={handleDeleteAppointment} className="bg-red-300 text-red-600 px-2 py-[1px] rounded-full">
          cancel
        </button>
        <button className="bg-yellow-300 text-yellow-600 px-2 py-[1px] rounded-full">
          update
        </button>
        <CiCircleMore
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div
        className={`col-span-4  transition-all duration-300 ${
          isOpen ? "h-auto mt-8 " : "h-0 overflow-hidden mt-0"
        }`}
      >
        <h1 className="text-prm text-lg">{role==='patient'? 'Doctor Details': 'Patient Details'}</h1>
        <h1>
          Name:{" "}
          <span className="capitalize">
            {role === "patient" ? doctorId.name : patientId.name}
          </span>
        </h1>
        {role === "patient" ? (
          <h1>
            Specialization:{" "}
            <span className="capitalize">{doctorId.specialization}</span>
          </h1>
        ) : (
          <h1>
            Gender:{" "}
            <span className="capitalize">{patientId.sex}</span>
          </h1>
        )}
      </div>
    </div>
  )
}
export default Appointment
