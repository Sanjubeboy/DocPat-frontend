import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import BookingForm from "./BookingForm"
import { useMutation, useQueries } from "@tanstack/react-query"
import Loader from "../General/Loader"
import GeneralError from "../../errors/GeneralError"
import {
  getDoctorAppointments,
  getDoctorForBooking,
  submitAppointment,
} from "../../query-utils/queryFunctions"



const BookAppointment = () => {
  const { docID } = useParams()
  // console.log(docID)
  const authToken = useSelector((state) => state.auth.authToken)
  const navigate = useNavigate()
  const doctorId = docID

  const [
    {
      data: docData,
      isLoading: docLoading,
      error: docError,
      isError: docIsError,
    },
    {
      data: formProps,
      isLoading: formLoading,
      error: formError,
      isError: formIsError,
    },
  ] = useQueries({
    queries: [
      {
        queryKey: ["doctor-data", docID, authToken],
        queryFn: getDoctorForBooking,
      },
      {
        queryKey: ["doctor-schedule", docID, authToken],
        queryFn: getDoctorAppointments,
      },
    ],
  })


  const {mutate, isLoading, error, isError} = useMutation(submitAppointment)
  // console.log(result)

  const handleSubmit = ({ date, time }) => {

    if(!date || time === ""){
      toast.error('Invalid inputs')
      return
    }

    // console.log(date, time)
    const timeString = `${date}, ${time}`
    const apiBody = { time: timeString, doctorId }


    mutate({apiBody, authToken},{
      onSuccess: (data) => {
        if (data.message === "time slot not available - already booked") {
          toast.error(res.data.message)
          return
        }
        toast.success('Booking successful')
        navigate(`/patient/appointments`)
      }
    })
    
  }

  if (docLoading || formLoading || isLoading) {
    return <Loader />
  }

  if (docIsError || formIsError) {
    return <GeneralError />
  }

  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-16 border-b-2 pb-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-[400]">Booking your appointment !</h1>
          <h1 className="text-lg text-gray-400">
            Please select the timing for your appointment.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg">
            Doctor Name:{" "}
            <span className="capitalize  text-prm ml-6">{docData?.name}</span>
          </h1>

          <h1 className="text-lg">
            Specialization:
            <span className="capitalize  text-prm ml-5">
              {docData?.specialization}
            </span>
          </h1>
        </div>
      </div>

      <BookingForm handleSubmit={handleSubmit} timeSlots={formProps} />
    </div>
  )
}
export default BookAppointment
