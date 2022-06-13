import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navegation from "../../pages/Navegação";
import './style.css'


const MapComp = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect (()=>{
    fetch("http://localhost:3333/empresas").then(resposta => resposta.json().then(json => setEmpresas(json))) 
},[])

  return (
    <div>
      <Navegation /> 
      <div className="container-map">
        <MapContainer center={[-15.7217175, -48.0774443]} zoom={4} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {empresas.map(empresa => <Marker position={[empresa.latitude,empresa.longitude]}>
            <Popup>
              <p>Razão Social: {empresa.social}</p>
              <p>Nome Fantasia: {empresa.fantasia}</p>
              <p>CNPJ: {empresa.cnpj}</p>
              <p>Email: {empresa.email}</p>
            </Popup>
          </Marker>)}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComp;