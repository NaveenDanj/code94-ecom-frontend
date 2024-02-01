import React, { useState } from 'react';
import LoadingDialog from '../../components/LoadingDialog';
import Toast from '../../components/Toast';
import api from '../../api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

  const handleRegister = async () => {
    try{

        setError('')
        setLoading(true)

        const res = await api.post('auth/register' , {
            fullname: name,
            email : email,
            password : password
        })

        dispatch(setUser(res.data.user))
        setLoading(false)
        navigate('/auth/login')

    }catch(err){
        console.log(err)
        setError(err.response.data.message)
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="min-h-screen tw-h-[100vh] tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-py-12 tw-px-4 tw-sm:px-6 tw-lg:px-8">
        <LoadingDialog isOpen={loading} />
        <Toast open={error != ''} message={error} />
      
      <div className="tw-max-w-md tw-w-full tw-space-y-8">
        <div>
          <h2 className="tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold tw-text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="tw-mt-8 tw-space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4">
            <div>
              <label htmlFor="Name" className="tw-sr-only">
                Name
              </label>
              <input
                style={{ border : '1px solid rgba(0,0,0,0.7)' }}
                type="text"
                autoComplete="given-name"
                required
                className="tw-input tw-bg-white tw-w-full"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="tw-sr-only">
              Email address
            </label>
            <input
                style={{ border : '1px solid rgba(0,0,0,0.7)' }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="tw-input tw-bg-white tw-w-full"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="tw-sr-only">
              Password
            </label>
            <input
                style={{ border : '1px solid rgba(0,0,0,0.7)' }}
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="tw-input tw-bg-white tw-w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="tw-group tw-relative tw-w-full tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border border-transparent tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;