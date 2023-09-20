import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PaginaInicial() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState({});

  useEffect(() => {
    if (cep.length === 8) {
      buscarCep();
    }
  }, [cep]);

  async function buscarCep() {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      setDados(response.data);
      preencherCamposEndereco(response.data);
    } catch (erro) {
      // Trate o erro aqui
    }
  }

  function preencherCamposEndereco(dadosEndereco) {
    const { neighborhood, city, state, street } = dadosEndereco;// Desestruturação de objeto
    document.getElementById("bairro").value = neighborhood || "";  // Se neighborhood for undefined, atribui string vazia
    document.getElementById("cidade").value = city || "";  // Se city for undefined, atribui string vazia
    document.getElementById("uf").value = state || "";  // Se state for undefined, atribui string vazia
    document.getElementById("rua").value = street || ""; // Se street for undefined, atribui string vazia
  }

  function setarCep(evento) {
    const novoCep = evento.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setCep(novoCep);
  }

  return (
    <>
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">CEP</label>
          <input type="text" className="form-control" value={cep} onChange={setarCep}/>
        </div>
        <div className="col-md-6">
          <label className="form-label">RUA</label>
          <input type="text" className="form-control" id="rua" />
        </div>
        <div className="col-md-6">
          <label className="form-label">BAIRRO</label>
          <input type="text" className="form-control" id="bairro" />
        </div>
        <div className="col-md-6">
          <label className="form-label">CIDADE</label>
          <input type="text" className="form-control" id="cidade" />
        </div>
        <div className="col-md-2">
          <label className="form-label">NUMERO</label>
          <input type="text" className="form-control" id="numero" />
        </div>
        <div className="col-md-2">
          <label className="form-label">UF</label>
          <input type="text" className="form-control" id="uf" />
        </div>
      </form>
    </div>
    </>
  );
}
