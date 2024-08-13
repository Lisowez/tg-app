import Main from "./pages/Main/Main";
import telega from "./telegram/telegram";

function App() {
  telega();
  return <Main />;
}

export default App;
