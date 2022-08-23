
import{BrowserRouter , Route} from 'react-router-dom'
import {Navbar, Home, CreatePost, PostDetail } from './';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Route  exact path='/' component={Home} />
        <Route  exact path='/post/:postId' component={PostDetail} />
        <Route   path='/create-post' component={CreatePost} />
        </BrowserRouter>
 
    </div>
  );
}

export default App;
