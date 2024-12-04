import logo from '../src/image/Logoooo.png';
import tochki from '../src/image/Dots.png'
import brend from '../src/image/Numero.png';
import brend1 from '../src/image/BI.png';
import brend2 from '../src/image/Vector.png';
import brend3 from '../src/image/Vector (1).png';
import brend4 from '../src/image/Vector (2).png';
import rybashka from '../src/image/rubashka.png';
import tetka from '../src/image/ochen krasivay tetka.png'
import paren from '../src/image/muzhik.png'
import text from '../src/image/Frame 3526.png'
import man from '../src/image/muzhik v svitere.png'
import woman from '../src/image/women.png'
import './App.css';

function App() {
  return (
    <>
      <div className="banner">
        <div className="flex  justify-between items-center pt-1 bg-color bg-orange-500">
          <img src={tochki} alt="" />
          <p className="text-1xl text-center ">SUMMER SALE UP TO 50% </p>
          <img src={tochki} alt="" />
        </div>
      </div>
      <div className="header">
        <div className="logo1 justify-center flex items-center">
          <div className='justify-center flex items-center'>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="logo2 flex justify-center items-end mb-[80px] gap-[960px]">
          <div className="w-96 mb-[80px] text-white text-3xl font-bold font-['Inter'] leading-10">Spring Season</div>
          <div className="text-center mb-[80px] text-white text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">view collection</div>
        </div>
      </div>
      <div className="bg-color h-28  justify-center gap-[200px] flex items-center bg-orange-500">
          <img src={brend} alt="" />
          <img src={brend1} alt="" />
          <img src={brend2} alt="" />
          <img src={brend3} alt="" />
          <img src={brend4} alt="" />
        </div>
      <div className="flex justify-center items-center gap-[60px]">
        <div>
          <img src={rybashka} alt=""/>
          <p className="text-1xl" >Shop Shirts</p>
        </div>
        <div>
          <img src={tetka} alt="" className='w-[720px] h-[720px]' />
        </div>
      </div>

      <div className='product1 flex items-center justify-center gap-[58px]'>
        <div>
          <img src={paren} alt="" className='bg-slate-300 rounded-md'/>
        </div>
        <div>
          <img src={text} alt="" />
        </div>
      </div>

      <div className='flex'>
        <div>
          <img src={woman} alt=''/>
        </div>
        <div>
          <img src={man} alt=''/>
        </div>
      </div>





    </>
  );
}

export default App;