import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdEditNote } from 'react-icons/md';
import Button from './../../Button';
import { Header, Main } from './style';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../../assets';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DellTech({ id, status, title, userTechs, setUserTechs }) {

  const schema = yup.object().shape({})
  const token = localStorage?.getItem("KenzieHubToken")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const formData = (data, e) => {
    const idTech = e.target.id;

    api.put(`/users/techs/${idTech}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => {
        toast.success('Status alterado')
        return resp
      })
      .catch(err => console.log(err))
  }

  const deletar = (e) => {
    e.preventDefault();
    const idTech = e.target.parentNode.id

    api.delete(`/users/techs/${idTech}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => {
        setUserTechs(userTechs.filter(({ id }) => id !== idTech))
        toast.success('Tecnológia deletada com sucesso')
        return resp
      })
      .catch(err => console.log(err))
  }


  // MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MdEditNote onClick={handleOpen} className='addBtn' />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header>
            <h3>Tecnologia Detalhes</h3>
          </Header>
          <Main>
            <form onSubmit={handleSubmit(formData)} id={id}>
              <label>Nome do Projeto</label>
              <input placeholder='Material UI' {...register("title")} value={title} />
              <label>Status</label>
              <select {...register("status")}
                defaultValue={status === "Iniciante" ?
                  "Iniciante" : status === "Intermediário" ? "Intermediário" : "Avançado"}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <div id={id}>
                <Button type="submit" color='pink2'>Salvar alterações</Button>
                <Button onClick={deletar} className="delBtn" color=''>Excluir</Button>
              </div>
            </form>
          </Main>
        </Box>
      </Modal>
    </div>
  );
}
