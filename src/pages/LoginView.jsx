import {useLoginUserMutation} from '../api/apiSlice';
import { useNavigate } from 'react-router-dom';
function Login() {

  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    loginUser({
      usuario: formData.get('usuario'),
      password: formData.get('password')
    })
  }

  if(localStorage.getItem('token')) {
    navigate('/');
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="usuario">Usuario</label>
      <input type="text" name="usuario" required/>

      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login;