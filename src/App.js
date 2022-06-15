import MyRoutes from "./routes";
import GlobalStyle from './Styles/global'
import styled from 'styled-components'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`


function App() {
  return (
    <Div className="App App-header">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MyRoutes />
    </Div>
  );
}

export default App;
