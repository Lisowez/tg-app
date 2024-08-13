import Main from "./pages/Main/Main";
import telega from "./telegram/telegram";

function App() {
  const data = telega();
  return (
    <>
      <Main />
      <div>{data}</div>
    </>
  );
}

export default App;
