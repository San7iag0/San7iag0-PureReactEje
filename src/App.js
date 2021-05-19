import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import RendArray from './components/rendering/RendArray';
// import ObjArrays from './components/rendering/Obj_arrays';
// import DayTime from './components/rendering/DayTime';
// import Gatitos from './components/rendering/gatitos/Gatitos';
// import Jokes from './components/rendering/Joke/Joke';
// import compProds from './components/rendering/Products/compProds';
// import Prod from './components/rendering/Products/products';
// import ToDo from './components/rendering/todo/ToDo';
// import Penguins from './components/statefulCom/Penguins'
// import Person from './components/statefulCom/Person'
import Poeple from './components/statefulCom/People/People';
// import Header from './components/statefulCom/welcome/WelcomeComp';
// import StatePractive from './components/statefulCom/StatePractive';

function App() {

  return (
    <div >
      <body className="app-body">
        <Poeple />
      </body>
    </div>
  );
}

export default App;
