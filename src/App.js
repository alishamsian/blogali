import Navbar from './components/navbar/Navbar'
import Home from './page/Home'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Create from './page/Create';
import BlogDetails from './components/blog-details/BlogDetails';
function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>
          <Route path="/create">
             <Create />
          </Route>
          <Route path="/blogs/:id">
             <BlogDetails />
          </Route>
        </Switch>
        
      </div>
      </div>
    </Router>
  );
}

export default App;
