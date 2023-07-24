import { useForm } from 'react-hook-form';
import { loginThunk } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const dispacth = useDispatch();
  const navigate = useNavigate()

  console.log('hi');

  const sumit = data => dispacth(loginThunk(data, navigate));

  return (
    <form onSubmit={handleSubmit(sumit)}>
      <input {...register('user')} type='text' />
      <input {...register('password')} type='password' />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
