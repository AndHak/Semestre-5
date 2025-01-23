import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './FirstApp.jsx'
import MyName from './MyName.jsx'
import { Fragmento } from './Fragment.jsx'
import { EnviarObjeto } from './EnviarObjeto.jsx'
import Intro from './intro.jsx'
import { Props } from './Props.jsx'
import { DefaultProps } from './DefaultProps.jsx'
import { CounterApp } from './CounterApp.jsx'

// importar css 
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro/>
    {/* <App/>
    <MyName/>
    <Fragmento/>
    <EnviarObjeto/> */}
    {/* <Props title='AndHak'/> */}
    {/* <DefaultProps title='Default Prop'/> */}
    <CounterApp value={0}/>


  </React.StrictMode>
)