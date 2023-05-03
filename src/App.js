import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Colaborador from './componentes/Colaborador';

function App() {

  const times = [{
    nome:  'Ação e Aventura',
    corPrimaria:'#57C278',
    corSecundaria:'#D9F7E9'
  },


{
  nome:'Terror',
  corPrimaria:'#DB6EBF',
  corSecundaria:'#F4E9F5'
},


{
  nome:'RPG',
  corPrimaria:'#A6D157',
  corSecundaria:'#F0F8E2'
},


{
  nome:'Corrida', 
  corPrimaria:'#82CFFA',
  corSecundaria:'#E8F8FF'
},


{
  nome:'Esporte',
  corPrimaria:'#E06B69',
  corSecundaria:'#FDE7E8'
}
]

  const[colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])

  }
  return (  
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}

    </div>
  );
}

export default App;
