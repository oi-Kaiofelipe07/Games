import './Colaborador.css'

const Colaborador = ({nome, Imagem, nota, corDeFundo}) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={Imagem} alt={nome} />
            

        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{nota}</h5>
        </div>
    </div>)
}

export default Colaborador