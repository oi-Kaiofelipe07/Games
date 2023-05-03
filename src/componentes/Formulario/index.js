import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");
  const [Imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      nota,
      Imagem,
      time

    })
    setNome('')
    setNota('')
    setImagem('')
    setTime('')
 
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Prencha os dados para criar seu Card personalizados</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do jogo"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Nota"
          placeholder="Digite a nota do jogo"
          valor={nota}
          aoAlterado={(valor) => setNota(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço de imagem"
          valor={Imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
         obrigatorio={true} 
         label="Gênero" 
         itens={props.times} 
         valor={time}
         aoAlterado={valor => setTime (valor)}
         />
        <Botao>criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
