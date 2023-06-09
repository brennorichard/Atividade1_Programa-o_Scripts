import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import Loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({children}:any){
    const [megasena,setMegasena] = useState({} as Props);
    const [lotofacil,setlotofacil] = useState({} as Props);

    useEffect(()=>{
        ( async ()=>{
            const resp = await Loteria.get();
            setMegasena(resp.megasena);
            setlotofacil(resp.lotofacil);
        } )();
    },[]);

    return (
      <Contexto.Provider value = {{megasena, lotofacil}}>
        {children}
      </Contexto.Provider>
    );
  }

  export { Contexto, ContextoProvider };