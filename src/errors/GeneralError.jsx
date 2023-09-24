import { useNavigate } from "react-router-dom"
import general from "../assets/general.svg"

const GeneralError = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8 items-center mt-16">
      <img src={general} className="h-[25%] w-[25%]" />
      <h1 className="text-red-500 text-xl">Oops ! Something went wrong</h1>
      <button onClick={() => navigate(0)} className="btn-prm px-4">
        Retry
      </button>
    </div>
  )
}
export default GeneralError
