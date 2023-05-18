import "./App.css";
//import Exemplo01 from "./hooks/Exemplo01_useState";
//import Exemplo02 from "./hooks/Exemplo02_useState";
//import Exemplo03 from "./hooks/Exemplo03_useState";
//import Exemplo04 from "./hooks/Exemplo04_useState";
//import Exemplo05 from "./hooks/Exemplo05_useEffect";
//import Exemplo06 from "./hooks/Exemplo06_useEffect";
//import Exemplo07 from "./hooks/Exemplo07_useContext";
//import Exemplo08 from "./hooks/Exemplo08_useRef";
//import Exemplo09 from "./hooks/Exemplo09_useReducer";
//import Exemplo10 from "./hooks/Exemplo10_useMemo";
import Exemplo11 from "./hooks/Exemplo11_useCallback";
import { AppContext } from "./hooks/Context";

function App() {
  return (
    <>
      <AppContext>
        <Exemplo11 />
      </AppContext>
    </>
  );
}

export default App;
