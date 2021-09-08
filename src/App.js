import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Characters } from './Components/Characters';
import { Tarjeta } from './Components/Tarjeta';
import { TheNav } from './Components/TheNav';

function App() {
  
  let tittle = "Heroes";
  // let tittle2 = "Villanos";
  
  let heroes = [
    {
    id:1,
    nombre: "Goku",
    img: "https://pbs.twimg.com/profile_images/1231286916194226177/VNbJ8fGm_400x400.jpg"
  },
  {
    id:2,
    nombre: "Krillin",
    img: "https://i.pinimg.com/736x/d9/f1/7c/d9f17c704ba6b9b5314d87334da03b4b.jpg"
  }
]
  
  // let producto2 = {
  //   id:2,
  //   nombre: "Vegeta",
  //   img: "https://elcomercio.pe/resizer/_iQJZcSjAOQr33gBUukGvnPz23Y=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/M3TZZ7RWA5EAHDVRV5PZUBNSCU.jpg"
  // }
  return (
    <div className="text-center">
      <TheNav/>
      <h1>Rick & Morty</h1>
      <Characters/>
      {/* <Tarjeta tittle={tittle} heroes={heroes} />
      <Tarjeta tittle={tittle2} producto={producto2} /> */}
    </div>
  );
}

export default App;
