import { useAppState } from "./hooks/useAppState";
import ConfigScreen from "./pages/ConfigScreen";
import InitEditScreen from "./pages/InitEditScreen";
import RunScreen from "./pages/RunScreen";
import { screens } from "./constants";

function App() {
  const ctx = useAppState();
  return (
    <>
      <h1>Amorphous Automata</h1>
      {ctx.screen === screens.config && <ConfigScreen />}
      {ctx.screen === screens.initEdit && <InitEditScreen />}
      {ctx.screen === screens.run && <RunScreen />}
    </>
  );
}

export default App;
