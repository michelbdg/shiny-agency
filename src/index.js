import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey'
import Header from './Components/Header'
import ClientForm from './Components/ClientForm'
import FreelanceForm from './Components/FreelanceForm'
import Error from './Components/Error'
import Freelances from './pages/Freelances'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<Error />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="/client" element={<ClientForm />} />
          <Route path="/freelance" element={<FreelanceForm />} />
        </Routes>
      </GlobalStyle>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
