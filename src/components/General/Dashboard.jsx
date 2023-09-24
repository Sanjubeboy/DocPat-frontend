import logo from "../../assets/logo.svg"
import statistics from '../../assets/statistics.svg'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-24">
      <div>
        <div className="flex items-center">
          <h1 className="text-3xl">Welcome to</h1>
          <img src={logo} className="w-60 -ml-6 -mt-4" />
        </div>
        <h1 className="text-xl text-gray-500">
          The OneCRM for Doctors and Patients <span className="text-2xl">&#128517;</span>
        </h1>
      </div>

      <div className="p-16 bg-white rounded-lg shadow-md flex justify-around gap-20">
        <img src={statistics} className=" w-[30%]" />
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex gap-8 border-b border-b-prm p-4 justify-between items-center">
            <h1 className="text-2xl">Total Appointments this week</h1>
            <h1 className="text-lg bg-green-400 text-green-700 h-12 w-12 flex items-center justify-center rounded-full">
              20
            </h1>
          </div>
          <div className="flex gap-8 border-b border-b-prm p-4 justify-between">
            <h1 className="text-2xl">Appointments Remaining</h1>
            <h1 className="text-lg bg-red-400 text-red-700 h-12 w-12 flex items-center justify-center rounded-full">
              5
            </h1>
          </div>
          <div className="flex gap-8 border-b border-b-prm p-4 justify-between">
            <h1 className="text-2xl">Hours spent this week</h1>
            <h1 className="text-lg text-gray-500">15 hrs</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
