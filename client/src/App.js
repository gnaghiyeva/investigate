import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { ROUTES } from './routes/routes';

function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
     <RouterProvider router = {routes}>

     </RouterProvider>
    </>
  );
}

export default App;
