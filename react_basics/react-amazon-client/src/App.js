import './App.css';
import ProductShowPage from './components/ProductShowPage';
import ProductIndexPage from './components/ProductIndexPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar'


function App() {
  return (
    // <div className="App">
    //   <ProductIndexPage />
    //   <ProductShowPage />
    // </div>
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* /products/12 */}
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={ProductIndexPage} />
        <Route path='/products/:id' component={ProductShowPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
