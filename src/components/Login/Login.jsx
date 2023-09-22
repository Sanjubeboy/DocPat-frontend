import logo from '../../assets/logo.svg'

const Login = () => {
  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center ">
      <form className="w-1/3 bg-white p-8 px-12 rounded-md flex flex-col gap-8">
        <div className='flex justify-center ml-12'>
            <img src={logo} className='h-28 w-full'/>
        </div>
        <div className="login-div">
          <label htmlFor="username" className="login-label">Username</label>
          <input type="text" name="username" className="login-inp" />
        </div>
        <div className="login-div">
          <label htmlFor="password" className="login-label">Password</label>
          <input type="password" name="password" className="login-inp" />
        </div>

        <button className="btn-prm mt-6">Login</button>
        <div className="text-center">
          New user? <span className="text-prm underline cursor-pointer">Register here!</span>
        </div>
      </form>
    </div>
  )
}
export default Login