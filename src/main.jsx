import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Layout} from './layout'
import { QrCodeGenerator } from "./QrCodeGenerator";
import { QrCodeScanner } from "./QrCodeScanner";
import { Navigation } from "./Navigation";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
