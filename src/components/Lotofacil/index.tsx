import React from "react";
import { useContexto } from "../../hooks";

function Lotofacil(){

    const {lotofacil} = useContexto();

    return (
    <div id="homebody"> 
        <hr/>
        <div id="space"></div>
        <div id="img"><img src={require("../../assets/trevo-lotofacil.png")}/></div>
        <div id="primaria-loto">
            <table>
                <tr>
                    <td id="tituloloto">LOTOFACIL</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td>Estimativa do prêmio do próximo <br/> concurso. Sorteio em {lotofacil.dataProximoConcurso}:</td>
                </tr>
                <tr>
                    <td id="td-valor-loto">R$ {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR')}</td>
                </tr>
            </table>
        </div>
        
        <div id="secundaria-loto">
            <table>
                <tr>
                <td>{lotofacil.dezenas.map((dezena, index) => (
                            <React.Fragment key={index}>
                    <td id="dezenasloto">{dezena}</td>
                    {(index + 1) % 5 === 0 && <br />}
                    </React.Fragment>
                ))}</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id ="txtganhador">{lotofacil.quantidadeGanhadores} GANHADORES</td>
                </tr>
                <tr>
                    <td>Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso} </td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default Lotofacil;