import { useOutletContext } from "react-router-dom"
import Appointment from "./Appointment"

const PastAppointments = () => {

    const [propData, role, ParentMutate, authToken, sort] = useOutletContext()
    // console.log(propData)

    if(!propData.pastAppointments.length){
        return <h1 className="my-8 text-red-500 text-xl text-center">No past appointments</h1>
    }
  return (
    <>
      <div className="grid grid-cols-4 bg-prm text-white font-semibold p-3 px-4 rounded-md sticky top-[74px]">
        <h1>{role === "doctor" ? "Patient Name" : "Doctor Name"}</h1>
        <h1>Date</h1>
        <h1>Time</h1>
        <h1></h1>
      </div>

      <div className="flex flex-col gap-1">
        {propData?.pastAppointments?.map((item) => (
          <Appointment
            key={item._id}
            {...item}
            ParentMutate={ParentMutate}
            role={role}
            authToken={authToken}
            sort={sort}
          />
        ))}
      </div>
    </>
  )
}
export default PastAppointments
