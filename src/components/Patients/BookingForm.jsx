import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const BookingForm = ({ handleSubmit, timeSlots }) => {
  const navigate = useNavigate()
  const [date, setDate] = useState("")
  const [newTime, setNewTime] = useState('')

  const handleTimeChange = (e) => {
    setNewTime(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }


  return (
    <form className="bg-white w-[40%] mx-auto p-16 rounded-md shadow-md flex flex-col gap-12 items-center transition-all duration-300 ease-linear">
      <h1 className="text-3xl text-prm">Enter Booking details</h1>

      <div className="flex flex-col w-[95%] gap-6">
        <label htmlFor="date" className="text-xl">
          Date
        </label>

        <input
          type="date"
          className="border-b border-b-prm h-12 outline-none"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div
        className={`w-[95%] text-xl flex flex-col gap-6 transition-all duration-1000 ${
          date === "" ? "h-[0px] overflow-hidden" : ""
        }`}
      >
        <h1>Enter slot</h1>
        <div className="flex custom-time">
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 09:00`).toString()
              )}
              value={"09:00"}
              name="newTime"
              id="09:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="09:00">9 to 10(FN)</label>
          </div>
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 10:00`).toString()
              )}
              value={"10:00"}
              name="newTime"
              id="10:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="10:00">10 to 11(FN)</label>
          </div>
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 11:00`).toString()
              )}
              value={"11:00"}
              name="newTime"
              id="11:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="11:00">11 to 12(FN)</label>
          </div>
        </div>
        <div className="flex custom-time">
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 12:00`).toString()
              )}
              value={"12:00"}
              name="newTime"
              id="12:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="12:00">12 to 13(FN)</label>
          </div>
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 13:00`).toString()
              )}
              value={"13:00"}
              name="newTime"
              id="13:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="13:00">13 to 14(AN)</label>
          </div>

          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 14:00`).toString()
              )}
              value={"14:00"}
              name="newTime"
              id="14:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="14:00">14 to 15(AN)</label>
          </div>
        </div>
        <div className="flex custom-time">
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 15:00`).toString()
              )}
              value={"15:00"}
              name="newTime"
              id="15:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="15:00">15 to 16(AN)</label>
          </div>
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 16:00`).toString()
              )}
              value={"16:00"}
              name="newTime"
              id="16:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="16:00">16 to 17(AN)</label>
          </div>
          <div>
            <input
              type="radio"
              disabled={timeSlots.includes(
                new Date(`${date}, 17:00`).toString()
              )}
              value={"17:00"}
              name="newTime"
              id="17:00"
              onChange={handleTimeChange}
            />
            <label htmlFor="17:00">17 to 18(AN)</label>
          </div>
        </div>
      </div>

     

      <div className="flex gap-12 w-[95%]">
        <button
          className="btn-sec w-[50%]"
          type="button"
          onClick={() => navigate(-1)}
        >
          cancel
        </button>
        <button
          className="btn-prm w-[50%]"
          onClick={() => handleSubmit({ date, time: newTime })}
          type="button"
        >
          confirm
        </button>
      </div>
    </form>
  )
}
export default BookingForm
