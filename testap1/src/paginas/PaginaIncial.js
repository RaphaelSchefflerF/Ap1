import React from "react";
import { useState } from "react";
import axios from "axios";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
export default function PaginaInicial({ }) {
    const[cep, setCep] = useState();
    const[dados, setDados] = useState({});

    function buscarCep() {
        axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(function(resposta){
            setDados(resposta.data);
            setarDados();
          //deu Certo
        })
        .catch(function(erro){
          //deu errado
        });
        console.log(dados);
    }
    
    function setarDados() {
        document.getElementById("bairro").value = dados.neighborhood;
        document.getElementById("cidade").value = dados.city;
        document.getElementById("uf").value = dados.state;
        document.getElementById("rua").value = dados.street;
    }

    function setarCep(evento) {
        if(evento.target.value.length == 8) {
            setCep(evento.target.value);
            return;
        }
    }

    return (
        <>
            <form class="row g-3">
                <div class="col-md-6">
                    <label class="form-label">CEP</label>
                    <input type="text" class="form-control" onChange={setarCep}/>
                </div>
                <div class="col-md-6">
                    <label class="form-label">RUA</label>
                    <input type="text" class="form-control" id="rua"></input>
                </div>
                <div class="col-12">
                    <label class="form-label">NUMERO</label>
                    <input type="text" class="form-control" id="numero"></input>
                </div>
                <div class="col-12">
                    <label class="form-label">BAIRRO</label>
                    <input type="text" class="form-control" id="bairro"></input>
                </div>
                <div class="col-md-6">
                    <label class="form-label">CIDADE</label>
                    <input type="text" class="form-control" id="cidade"></input>
                </div>
                <div class="col-md-2">
                    <label class="form-label">UF</label>
                    <input type="text" class="form-control" id="uf"></input>
                </div>
                <button type = 'button' onClick={buscarCep} >Buscar Cep</button>
            </form>
        </>
    );
}