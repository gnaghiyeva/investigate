import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { ROUTES } from './routes/routes';
import { InvestigationContextProvider } from './context/InvestigationContext';

function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
    <InvestigationContextProvider>
     <RouterProvider router = {routes}>

     </RouterProvider>
     </InvestigationContextProvider>
    </>
  );
}

export default App;
