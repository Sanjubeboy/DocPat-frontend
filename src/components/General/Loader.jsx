import loading from '../../assets/loading.svg'

const Loader = () => {
  return (
    // <div className="border-8 border-prm border-b-gray-200 rounded-full animate-spin h-20 w-20 my-4 mx-auto">

    // </div>
    <div className="flex justify-center ">
      <img src={loading} className="w-20 h-20 bg-[#F5F6FA]" />
    </div>
  )
}
export default Loader