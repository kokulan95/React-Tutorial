import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Personen from "./pages/Personen.jsx";
import Todos from "./pages/Todos.jsx";
import Footer from "./Footer.jsx";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Table from "./pages/Examples/Table.jsx";
import { Routes, Route } from "react-router-dom";


createRoot(document.getElementById('root')).render(

      <BrowserRouter basename='/react-starter'>
          <App />
      </BrowserRouter>

)
