import React, { useState} from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstname: Firstname,
        lastName: lastName,

      },
      email: email,
      password: password
    });


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  // useEffect(() => {
  //   if (userData) {
  //     console.log(userData); // This will log whenever userData changes
  //   }
  // }, [userData]);
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-base font-medium mb-3'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              className='bg-[#eeeeee] w-1/2  rounded px-3 py-2 border  text-base placeholder:text-sm '
              type="text"
              required
              placeholder='Firstname'
              value={Firstname}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-2 border  text-base placeholder:text-sm'
              type="text"
              required
              placeholder='Secoundname'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}

            />
          </div>

          <h3 className='text-base font-medium mb-3'>What's your email </h3>

          <input
            className='bg-[#eeeeee] mb-5 w-full rounded px-3 py-2 border  text-base placeholder:text-base'
            type="email"
            required
            placeholder='email@mail.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}

          />
          <h3 className='text-lg  font-medium mb-3'>Enter password</h3>
          <input className='bg-[#eeeeee] mb-5 rounded px-3 py-2 border w-full text-base placeholder:text-base'
            type="password"
            required
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-3 py-2  w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>Alrey exists? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          veritatis. Ipsa modi nulla ex dolor! Doloribus nulla, consectetur delectus
          accusantium dolorem incidunt,
          modi aliquam!</p>
      </div>
    </div>
  )
}

export default Captainsignup
