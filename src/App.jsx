import logo from '../src/image/Logoooo.png';
import './App.css'; // Убедитесь, что вы импортируете файл стилей

function App() {
    return (
        <div className="flex flex-col items-center pt-1">
            <p className="text-1xl  text-center">Summer sale up to 50% off</p>
            <img src={logo} alt="Logo" className="mt-6" />
        </div>
    );
}

export default App;