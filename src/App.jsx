import logo from '../src/image/Logoooo.png';
import tetka from './image/siduchiy tetka.png';
import './App.css'; // Убедитесь, что вы импортируете файл стилей

function App() {
    return (
      <>
        <div className="flex flex-col items-center pt-1 bg-color bg-orange-500">
            <p className="text-1xl  text-center ">Summer sale up to 50% off</p>
        </div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
            <img src={tetka} alt="" />
            </div>
            <div className="bg-color bg-orange-500">
              <p>Numero</p>
            </div>
        
      </>
    );
}

export default App;