import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Catalogo from './components/Catalogo'
import Contacto from './components/Contacto'
import Ventas from './components/Ventas'
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Whatsapp from './whatsapp';

function App() {
  return (
    <BrowserRouter>
      <Whatsapp />
      <Navbar />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path={'/productos/'}>
          <Productos />
        </Route>

        <Route path={'/productos/:catId'}>
          <Productos />
        </Route>

        <Route path={'/catalogo'}>
          <Catalogo />
        </Route>

        <Route path={'/quienes-somos'}>
          <About />
        </Route>

        <Route path={'/ventas-mayoristas'}>
          <Ventas />
        </Route>
        
        <Route path={'/contacto-envios'}>
          <Contacto />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
