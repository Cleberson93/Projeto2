import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Navegation from "../../pages/Navegação";
import './style.css';

const FormProduto = () => {
    const history = useHistory();

    const [url, setUrl] = useState("");
    const [nome, setNome] = useState("");
    const [custo, setCusto] = useState("");
    const [descrição, setDescrição] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [grupo, setGrupo] = useState("");
    const [fornecedores, setFornecedores] = useState([]);
    const [grupos, setGrupos] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (url.length === 0) {
            alert("Preencha o URL da Imagem!");
            return;
        }
        if (nome.length === 0) {
            alert("Preencha o Nome do Produto!")
            return;
        }
        e.preventDefault();
        if (custo.length === 0) {
            alert("Preencha o Custo Unitário!");
            return;
        }
        e.preventDefault();
        if (descrição.length === 0) {
            alert("Preencha a Descrição do Produto!");
            return;
        }
        e.preventDefault();
        if (fornecedor.length === 0) {
            alert("Preencha o Fornecedor!");
            return;
        }
        e.preventDefault();
        if (grupo.length === 0) {
            alert("Preencha o Grupo!");
            return;
        }
        await fetch ("http://localhost:3333/produtos",{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              url,
              nome,
              custo,
              descrição,
              fornecedor,
              grupo,
            })
          })
          alert("Produto cadastrado com sucesso!")
          if (window.confirm ("Deseja cadastrar outro Produto?"))
          {
              setUrl("");
              setNome("");
              setCusto("");
              setFornecedor("");
              setGrupo("");
          }
          else history.push("/Mapa")
        
    }
    useEffect (()=>{
        fetch("http://localhost:3333/fornecedores").then(resposta => resposta.json().then(json => setFornecedores(json)))
        fetch("http://localhost:3333/categorias").then(resposta => resposta.json().then(json => setGrupos(json)))
    },[])

    return (
        <div>
            <Navegation />
            <div>
                <form class='form-produtos' onSubmit={handleSubmit}>
                    <h1>Novo Produto</h1>
                    <label> URL da imagem </label>
                    <div><input type='text' value={url} onChange={(e) => setUrl(e.target.value)} /></div>
                    <label>Nome </label>
                    <div><input type='text' value={nome} onChange={(e) => setNome(e.target.value)} /></div>
                    <label> Custo Unitário </label>
                    <div><input type='text' value={custo} onChange={(e) => setCusto(e.target.value)} /></div>
                    <label> Descrição </label>
                    <div><input type='text' value={descrição} onChange={(e) => setDescrição(e.target.value)} /></div>
                    <label> Fornecedor </label>
                    <div><select value={fornecedor} onChange={(e) => setFornecedor(e.target.value)}>
                        <option value=""></option>
                        {fornecedores.map(item => <option value={item}>{item}</option>)}
                    </select></div>
                    <label> Grupo </label><select value={grupo} onChange={(e) => setGrupo(e.target.value)}>
                        <option value=""></option>
                        {grupos.map(item => <option value={item}>{item}</option>)}
                    </select>
                    <div><button type="submit"> Salvar </button> <button onClick={()=> history.push("/Mapa")}> Cancelar </button> </div>
                </form>

            </div>
        </div>
    );
};

export default FormProduto;