import axios from "axios"

export const getAppointments = ({ role, authToken, sort }) => {

  const sortOption = sort==='Ascending'? 'a' : 'd'

  if (role === "patient") {
    return axios.post(
      `${import.meta.env.VITE_BASE_URL}/${role}/getPatientAppointments?sort=${sortOption}`,
      {},
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    )
  } else {
    return axios.get(
      `${import.meta.env.VITE_BASE_URL}/${role}/patients?sort=${sortOption}`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    )
  }
}

export const getDoctors = ({ body, authToken, special }) => {

  if(special !== '' && body.filter){
    body.filter.specialization = special
  }
  return axios.post(
    `${import.meta.env.VITE_BASE_URL}/patient/getDoctors`,
    body,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  )
}


export const getPatients = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/patient/list`)
}

export const getUserDetail = async ({ queryKey }) => {
  const [_, id, fetchRole, authToken] = queryKey
  let url = ""
  if (fetchRole === "patient") {
    url = `${import.meta.env.VITE_BASE_URL}/doctor/patient/${id}`
  } else {
    url = `${import.meta.env.VITE_BASE_URL}/doctor/${id}`
  }
  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${authToken}` },
  })
  return res.data
}


export const getDoctorForBooking = async ({ queryKey }) => {
  const [_, docID, authToken] = queryKey
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/doctor/${docID}`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  )
  return res.data
}

export const getDoctorAppointments = async ({ queryKey }) => {
  const [_, docID, authToken] = queryKey
  const res2 = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/patient/getDoctorAppointments`,
    { doctorId: docID },
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  )
  // console.log(res2)
  const newFormProps = res2.data.futureAppointments.map((item) => new Date(item.time).toString())
  return newFormProps
}


export const submitAppointment = ({ apiBody, authToken }) => {
  return axios.post(
    `${import.meta.env.VITE_BASE_URL}/patient/setAppointment`,
    apiBody,
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  )
}

export const deleteAppointment = ({apiBody, role, authToken}) => {
  return axios.delete(
    `${import.meta.env.VITE_BASE_URL}/${role}/deleteAppointment/${apiBody.appointmentId}`,
    {
      headers: { Authorization: `Bearer ${authToken}` },
      
    }
  )
}