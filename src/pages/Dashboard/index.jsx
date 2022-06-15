import logo from './../../imgs/Logo.svg'
import { Main } from './style'
import AddTech from './../../Components/Modals/AddTech';
import DellTech from './../../Components/Modals/DellTech';
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import api from '../../assets';
import { toast } from 'react-toastify';

const Dashboard = ({ setAuthenticated, authenticated }) => {

  const navigate = useNavigate()
  const [addTech, setAddTech] = useState()
  const [user, setUser] = useState({})
  const [userTechs, setUserTechs] = useState([]);
  const token = localStorage?.getItem("KenzieHubToken")
  const idUser = localStorage?.getItem("KenzieHubIdUser")

  const toLogin = (e) => {
    e.preventDefault();
    localStorage.clear();
    toast.success('Deslogado')
    setAuthenticated(false)
    return navigate("/")
  }

  useEffect(() => {
    addTech && api.post("/users/techs", addTech, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => {
        toast.success('Tecnológia adicionada')
        setUserTechs([...userTechs, resp.data])
        return resp
      })
      .catch(err => {
        if (err.request.status == 401) {
          toast.error('Tecnológia já foi adicionada anteriormente')
        } else {
          console.err(err)
        }
      })
  }, [addTech])

  useEffect(() => {
    api.get(`/users/${idUser}`)
      .then(respGet => {
        setUser(respGet.data)
        setUserTechs(respGet.data.techs)
        return respGet
      })
      .catch(err => console.log(err))
  }, [addTech, userTechs])

  if (!authenticated) {
    return <Navigate to="/" />
  }

  return (
    <Main>
      <header>
        <div className='firstHeader'>
          <img src={logo} alt="Logo Kenzie Hub" />
          <button onClick={(e) => toLogin(e)}>Sair</button>
        </div>
        <div className="secondHeader">
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </div>
      </header>
      <section>
        <div className="addTech">
          <h3>Tecnologias</h3>
          <AddTech setAddTech={setAddTech} setUser={setUser} user={user} />
        </div>
        <div className="techs">

          {userTechs.length > 0 ? userTechs.map(({ id, status, title }) => {
            return (
              <div className="tech" key={id}>
                <h3>{title}</h3>
                <div>
                  <h5>{status}</h5>
                  <DellTech id={id} status={status} title={title} userTechs={userTechs} setUserTechs={setUserTechs} />
                </div>
              </div>
            )
          }) : <h4>Você ainda não possui nem uma tecnológia cadastrada</h4>}

        </div>
      </section>

    </Main>
  )
}

export default Dashboard