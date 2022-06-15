import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import logo from './../../imgs/Logo.svg'
import { Main } from './style'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../assets';
import { toast } from 'react-toastify';

const Login = ({ authenticated, setAuthenticated }) => {

  const schema = yup.object().shape({
    email: yup.string().required('Email inválido').email('Email inválido'),
    password: yup.string().min(6)
  })

  const navigate = useNavigate();
  const toCadaster = (e) => {
    e.preventDefault();
    return navigate("/cadaster")
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const formData = (data) => {
    api.post("/sessions", data)
      .then(resp => {
        localStorage.setItem("KenzieHubToken", resp.data.token);
        localStorage.setItem("KenzieHubIdUser", resp.data.user.id)
        localStorage.setItem("KenzieHubData", JSON.stringify(resp.data.user))
        setAuthenticated(true)
        toast.success('Aproveite a aplicação')
        navigate("/dashboard")
      })
      .catch(err => {
        const error = err.response.data.message
        toast.error(error)
      })
  }

  if (authenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <Main>
      <img src={logo} alt="Logo - Kenzie Hub" />
      <section>
        <h2>Login</h2>
        <form action="#" onSubmit={handleSubmit(formData)}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='email' {...register("email")} />
          <span>{errors.email?.message}</span>
          <label htmlFor="">Senha</label>
          <input type="password" placeholder='password' {...register("password")} />
          <span>{errors.password?.message}</span>
          <Button color="pink" type="submit">Entrar</Button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Button onClick={(e) => toCadaster(e)}>Cadastre-se</Button>
      </section>
    </Main>
  )
}

export default Login