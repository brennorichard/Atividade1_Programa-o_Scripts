import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";
import "../css/estilos.css";
import Lotofacil from "../components/Lotofacil";

function Principal() {
    const { megasena } = useContexto();
    const {lotofacil} =useContexto();
    return (
        <>
            {megasena.numeroDoConcurso ?
                <div> <Megasena /> </div>
                
                :
                <div> Carregando... </div>
            }       
         {lotofacil.numeroDoConcurso ?
                <div> <Lotofacil /> </div>
                
                :
                <div> Carregando... </div>
            }
        </>
    )
}

export default Principal;
//<div><Lotofacil/></div>