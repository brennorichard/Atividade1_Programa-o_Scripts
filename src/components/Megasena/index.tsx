import { useContexto } from "../../hooks";

function Megasena(){

    const {megasena} = useContexto();

    return (
        <div id="homebody">
            <div id="img"><img src={require("../../assets/trevo-megasena.png")}/></div>
            <div id="primaria-mega">
                <table>
                    <tr>
                        <td id="titulomega">MEGA-SENA</td>
                    </tr>
                    <div id="space"></div>
                    <tr>
                        <td>Estimativa do prêmio do próximo <br/> concurso. Sorteio em {megasena.dataProximoConcurso}:</td>
                    </tr>
                    <tr>
                        <td id="td-valor-mega">R$ {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR')}</td>
                    </tr>
                </table>
            </div>

            <div id="secundaria-mega">
                <tr>
                    <td>{megasena.dezenas.map( dezena => ( <td id="dezenasmega" > {dezena} </td>))}</td>
                </tr>
                <div id="space"></div>
                <tr>
                    <td id="txtganhador">{megasena.acumulado ? "ACUMULOU!": "Não Acumulado"}</td>
                </tr>
                <tr>
                    <td>Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}</td>
                </tr>
           </div>
        </div>
    )
}

export default Megasena;