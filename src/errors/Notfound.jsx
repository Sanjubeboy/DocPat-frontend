import { useNavigate } from 'react-router-dom'
import notfound from '../assets/notfound.svg'

const Notfound = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8 items-center mt-16">
      <img src={notfound} className="h-[25%] w-[25%]" />
      <h1 className="text-red-500 text-5xl">Oops ! Page not found</h1>
      <button onClick={() => navigate(-1)} className="btn-prm bg-red-500 px-4">Go Back</button>
    </div>
  )
}
export default Notfound