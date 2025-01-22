import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './FirstApp.jsx'
import MyName from './MyName.jsx'
import { Fragmento } from './Fragment.jsx'
import { EnviarObjeto } from './EnviarObjeto.jsx'
import Intro from './intro.jsx'

// importar css 
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro/>
    {/* <App/>
    <MyName/>
    <Fragmento/>
    <EnviarObjeto/> */}
    
  </React.StrictMode>
)