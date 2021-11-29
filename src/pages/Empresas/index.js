import { useState } from "react";
import { useHistory } from "react-router";
import Navegation from "../Navegação";
import './style.css';


const Empresas = () => {
    const history = useHistory();
    const [social, setSocial] = useState("");
    const [fantasia, setFantasia] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [endereço, setEndereço] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [complemento, setComplemento] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (social.length === 0) {
            alert("Preencha a Razão Social!");
            return;
        }
        if (fantasia.length === 0) {
            alert("Preencha o Nome Fantasia!");
            return;
        }
        if (cnpj.length === 0) {
            alert("Preencha o campo CNPJ!");
            return;
        }
        if (email.length === 0) {
            alert("Preencha o campo EMAIL!");
            return;
        }
        if (cep.length === 0) {
            alert("Preencha o campo CEP!");
            return;
        }
        if (endereço.length === 0) {
            alert("Preencha o Endereço!");
            return;
        }
        if (numero.length === 0) {
            alert("Preencha o Número do Endereço!");
            return;
        }
        if (bairro.length === 0) {
            alert("Preencha o campo BAIRRO!");
            return;
        }
        if (cidade.length === 0) {
            alert("Preencha o campo CIDADE!");
            return;
        }
        if (latitude.length === 0) {
            alert("Preencha a LATITUDE!");
            return;
        }
        if (longitude.length === 0) {
            alert("Preencha a LONGITUDE!");
            return;
        }
        await fetch("http://localhost:3333/empresas", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                social,
                fantasia,
                cnpj,
                email,
                cep,
                endereço,
                numero,
                bairro,
                cidade,
                complemento,
                latitude,
                longitude
            })
        })

        alert("Empresa cadastrada com sucesso!")
        if (window.confirm("Deseja cadastrar outra Empresa?")) {
            setSocial("");
            setFantasia("");
            setCnpj("");
            setEmail("");
            setCep("");
            setEndereço("");
            setNumero("");
            setBairro("");
            setCidade("");
            setLatitude("");
            setLongitude("");
        }
        else history.push("/Mapa")

    };
    return (
        <div>
            <Navegation />
            <div className="corpo">
                <form class='form-empresas' onSubmit={handleSubmit}>
                    <h1>Cadastro de Empresas</h1>
                    <div><label> Razão Social </label>
                    <input type='text' placeholder='Supermercado Dev LTDA.' value={social} onChange={(e) => setSocial(e.target.value)} />
                    <label> Nome Fantasia </label>
                    <input type='text' placeholder='Supermercado DevinHouse' value={fantasia} onChange={(e) => setFantasia(e.target.value)} /></div>
                    <div><label> CNPJ </label>
                        <input type='text' placeholder='00.000.000/0000-00' value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <label> Email </label>
                        <input type='email' placeholder='SuperDevinHouse@hotmail.com' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    <div><label> CEP </label>
                        <input type='text' placeholder='00.000-000' value={cep} onChange={(e) => setCep(e.target.value)} />
                        <label> Endereço </label>
                        <input type='text' placeholder='Rodovia dos Desenvolvedores' value={endereço} onChange={(e) => setEndereço(e.target.value)} /> </div>
                    <div><label> Número </label>
                        <input type='text' placeholder='000' value={numero} onChange={(e) => setNumero(e.target.value)} />
                        <label> Bairro </label>
                        <input type='text' placeholder='Centro' value={bairro} onChange={(e) => setBairro(e.target.value)} /></div>
                    <div><label> Cidade </label>
                        <input type='text' placeholder='Florianópolis' value={cidade} onChange={(e) => setCidade(e.target.value)} /> 
                    <label> Complemento </label>
                    <input type='text' placeholder='ponto de referência' value={complemento} onChange={(e) => setComplemento(e.target.value)} /></div>
                    <div><label> Latitude </label>
                        <input type='text' placeholder='-00.0000' value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                        <label> Longitude </label>
                        <input type='text' placeholder='-00.0000' value={longitude} onChange={(e) => setLongitude(e.target.value)} /></div>
                    <div><button type="submit"> Salvar </button> 
                    <button onClick={() => history.push("/Mapa")}> Cancelar </button></div>
                </form>
            </div>
        </div>
    );
};

export default Empresas;