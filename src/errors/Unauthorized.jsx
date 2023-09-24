import unauthorized from '../assets/unauthorized.svg'

const Unauthorized = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-16">
      <img src={unauthorized} className="h-[25%] w-[25%]" />
      <h1 className="text-red-500 text-5xl">Unauthorized !</h1>
    </div>
  )
}
export default Unauthorized