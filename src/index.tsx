import ReactDOM from 'react-dom/client'
import App from './App'
import { Routes, Route, HashRouter } from 'react-router-dom'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <HashRouter>
 <RouterProvider router={router} />
</HashRouter>

  // </React.StrictMode>,
)
