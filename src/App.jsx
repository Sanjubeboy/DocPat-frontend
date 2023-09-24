import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import HomeLayout from "./pages/Layouts/HomeLayout"
import DoctorLayout from "./pages/Layouts/DoctorLayout"
import PatientLayout from "./pages/Layouts/PatientLayout"
import AllPatients from "./components/Doctors/AllPatients"
import Appointments from "./components/General/Appointments"
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes"
import HandleDefault from "./pages/Layouts/HandleDefault"
import AllDoctors from "./components/General/AllDoctors"
import UserDetails from "./components/General/UserDetails"
import BookAppointment from "./components/Patients/BookAppointment"
import Dashboard from "./components/General/Dashboard"
import { useSelector } from "react-redux"
import ProtectDoctorLayout from "./protectedRoutes/ProtectDoctorLayout"
import ProtectPatientLayout from "./protectedRoutes/ProtectPatientLayout"
import Notfound from "./errors/Notfound"

function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      errorElement:<Notfound/>,
      path: "/",
      element: (
        <ProtectedRoutes>
          <HomeLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <HandleDefault />,
        },
        {
          path: "doctor",
          element: (
            <ProtectDoctorLayout>
              <DoctorLayout />
            </ProtectDoctorLayout>
          ),
          children: [
            {
              path: "allpatients",
              element: <AllPatients />,
            },
            {
              path: "allpatients/:id",
              element: <UserDetails />,
            },
            {
              path: "appointments",
              element: <Appointments />,
            },
            {
              path: "alldoctors",
              element: <AllDoctors />,
            },
            {
              path: "alldoctors/:id",
              element: <UserDetails />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
        {
          path: "patient",
          element: (
            <ProtectPatientLayout>
              <PatientLayout />
            </ProtectPatientLayout>
          ),
          children: [
            {
              path: "alldoctors",
              element: <AllDoctors />,
            },
            {
              path: "alldoctors/:id",
              element: <UserDetails />,
            },
            {
              path: "appointments",
              element: <Appointments />,
            },
            {
              path: "bookappointment/:docID",
              element: <BookAppointment />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
