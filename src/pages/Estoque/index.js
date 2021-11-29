import React, { useEffect, useState } from 'react';
import Navegation from '../Navegação';
import './style.css'




const Estoque = () => {
  const [estoque, setEstoque] = useState([]);

  useEffect (()=>{
    fetch("http://localhost:3333/produtos").then(resposta => resposta.json().then(json => setEstoque(json)))

},[])


  return (
    <div>
        <Navegation />
        <div className="lista-produtos">
        {estoque.map(produto => <div className="produto" title={produto.descrição}> 
            <img className="img-produto" src={produto.url} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p> {produto.custo}</p>
            <p>{produto.fornecedor}</p>
            <p>{produto.grupo}</p>
        </div> )} 
        </div> 
    </div>
  );
};

export default Estoque;