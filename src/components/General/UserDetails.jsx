import defaultProfile from "../../assets/default-profile.png"
import { FaUserDoctor } from "react-icons/fa6"
import { GoNumber } from "react-icons/go"
import { AiFillStar } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { PiGenderFemaleFill } from "react-icons/pi"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import { getUserDetail } from "../../query-utils/queryFunctions"
import Loader from "./Loader"
import GeneralError from "../../errors/GeneralError"

const UserDetails = () => {
  const navigate = useNavigate()
  const authToken = useSelector((state) => state.auth.authToken)
  const userRole = useSelector((state) => state.auth.role)
  const [searchParams] = useSearchParams()
  const { id } = useParams()
  const fetchRole = searchParams.get("role")

  const {
    data: user,
    error,
    isError,
    isLoading,
  } = useQuery(["userDetail", id, fetchRole, authToken], getUserDetail)

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    console.log(error)
    return <GeneralError />
  }

  if (!user) {
    return
  }

  //custom classes
  const cardContainer = "p-6 bg-white shadow-md rounded-lg flex flex-col gap-8"
  const cardHeader = "flex gap-4 items-center justify-center pb-3 border-b"
  const head = "text-xl"
  const icon = "text-xl text-prm"
  const data = " text-lg text-gray-500 text-center"

  return (
    <div className="flex flex-col items-center gap-8">
      <img
        src={defaultProfile}
        className="h-40 w-40 object-cover rounded-full "
      />
      <h1 className="text-3xl font-mono text-prm capitalize">{user.name}</h1>

      <div className="grid grid-cols-4 w-full mt-6 p-4 gap-4">
        <div className={`${cardContainer}`}>
          <div className={`${cardHeader}`}>
            <div className="relative">
              <h1 className={`${head}`}>Position</h1>
              <div className=" absolute -left-8 top-1">
                <FaUserDoctor className={`${icon}`} />
              </div>
            </div>
          </div>
          <h1 className={`${data} capitalize`}>{fetchRole}</h1>
        </div>
        <div className={`${cardContainer}`}>
          <div className={`${cardHeader}`}>
            <div className="relative">
              <h1 className={`${head}`}>Age</h1>
              <div className=" absolute -left-8 top-1">
                <GoNumber className={`${icon}`} />
              </div>
            </div>
          </div>
          <h1 className={`${data}`}>{user.age}</h1>
        </div>
        {fetchRole === "doctor" ? (
          <div className={`${cardContainer}`}>
            <div className={`${cardHeader}`}>
              <div className="relative">
                <h1 className={`${head}`}>Specialization</h1>
                <div className=" absolute -left-8 top-1">
                  <AiFillStar className={`${icon}`} />
                </div>
              </div>
            </div>
            <h1 className={`${data} capitalize`}>{user.specialization}</h1>
          </div>
        ) : (
          <div className={`${cardContainer}`}>
            <div className={`${cardHeader}`}>
              <div className="relative">
                <h1 className={`${head}`}>Gender</h1>
                <div className=" absolute -left-8 top-1">
                  <PiGenderFemaleFill className={`${icon}`} />
                </div>
              </div>
            </div>
            <h1 className={`${data} capitalize`}>{user.sex}</h1>
          </div>
        )}
        <div className={`${cardContainer}`}>
          <div className={`${cardHeader}`}>
            <div className="relative">
              <h1 className={`${head}`}>E-Mail</h1>
              <div className=" absolute -left-8 top-1">
                <IoMdMail className={`${icon}`} />
              </div>
            </div>
          </div>
          <h1 className={`${data}`}>{user.email}</h1>
        </div>
      </div>

      <div className="flex gap-8">
        <button className="btn-sec" onClick={() => navigate(-1)}>
          Go Back
        </button>
        {/* {userRole === "patient" && (
          <button
            onClick={() => navigate(`/patient/bookappointment/${id}`)}
            className="btn-prm px-4"
          >
            Book Appointment
          </button>
        )} */}
      </div>
    </div>
  )
}
export default UserDetails
