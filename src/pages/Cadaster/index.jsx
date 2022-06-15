import Button from '../../Components/Button'
import logo from './../../imgs/Logo.svg'
import { MainCadaster } from './style'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../assets';
import { toast } from 'react-toastify';

const Cadaster = () => {

  const schema = yup.object().shape({
    name: yup.string().required('Nome obrigatório').min(4),
    email: yup.string().required('Email obrigatório').email('Formato de e-mail inválido'),
    password: yup.string().required("Campo obrigatório").min(6),
    confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref('password')], "Senhas não conferem"),
    bio: yup.string().required().min(10),
    contact: yup.string().required('Contato obrigatório'),
    course_module: yup.string().required('Módulo obrigatório')
  })

  const navigate = useNavigate()
  const toLogin = (e) => {
    e.preventDefault();
    return navigate("/")
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })


  const formData = (data) => {
    api
      .post("/users", data)
      .then(resp => {
        toast.success('Conta criada com sucesso!')
        navigate("/")
        return resp
      })
      .catch(err => {
        toast.error('Ops! Algo deu errado.');
        console.error(err)
      })
  }

  return (
    <MainCadaster>
      <div>
        <img src={logo} alt="Logo Kenzie Hub" />
        <button onClick={(e) => toLogin(e)}>Voltar</button>
      </div>
      <section>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <form action="" onSubmit={handleSubmit(formData)}>
          <label htmlFor="">Nome</label>
          <input {...register("name")} placeholder='Digite aqui seu nome' type="text" />
          <span>{errors.name?.message}</span>

          <label htmlFor="">Email</label>
          <input {...register("email")} placeholder='Digite aqui seu email' type="text" />
          <span>{errors.email?.message}</span>

          <label htmlFor="">Senha</label>
          <input {...register("password")} placeholder='Digite aqui sua senha' type="password" />
          <span>{errors.password?.message}</span>

          <label htmlFor="">Confirmar Senha</label>
          <input {...register("confirmPassword")} placeholder='Digite aqui sua senha' type="password" />
          <span>{errors.confirmPassword?.message}</span>

          <label htmlFor="">Bio</label>
          <input {...register("bio")} placeholder='Fale sobre você' type="text" />
          <span>{errors.bio?.message}</span>

          <label htmlFor="">Contato</label>
          <input {...register("contact")} placeholder='Opção de contato' type="number" />
          <span>{errors.contact?.message}</span>

          <label htmlFor="">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="">Selecione seu módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          </select>
          <span>{errors.course_module?.message}</span>

          <Button color="pink2" type="submit">Cadastrar</Button>
        </form>
      </section>
    </MainCadaster>
  )
}

export default Cadaster