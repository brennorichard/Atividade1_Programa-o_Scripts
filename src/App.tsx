import { ContextoProvider } from "./contexts/Contexto";
import Principal from "./pages/Principal";

function App() {
  return <ContextoProvider><Principal/></ContextoProvider> 
}

export default App;
