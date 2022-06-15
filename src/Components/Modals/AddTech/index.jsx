import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdAddBox } from 'react-icons/md';
import Button from './../../Button';
import { Header, Main } from './style';
import { useForm } from "react-hook-form";

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

export default function AddTech({ setAddTech, setUser, user }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({})

  const formData = (data) => {
    setAddTech(data)
  }

  React.useEffect(() => {
    setUser(user)
  }, [setAddTech])

  React.useEffect(() => {
    reset({
      title: "",
      status: "Selecione um status"
    })
  }, [isSubmitSuccessful])

  return (
    <div>
      <MdAddBox onClick={handleOpen} className='addBtn' />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header>
            <h3>Cadastrar Tecnlogia</h3>
          </Header>
          <Main>
            <form action="" onSubmit={handleSubmit(formData)}>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder='Typescript' {...register("title")} />
              <label htmlFor="">Selecionar status</label>
              <select {...register("status")}>
                <option>Selecione um status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <Button color="pink" type='submit'>Cadastrar Tecnologias</Button>
            </form>
          </Main>
        </Box>
      </Modal>
    </div>
  );
}
