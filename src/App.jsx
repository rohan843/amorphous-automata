import { useAppState } from "./hooks/useAppState";
import ConfigScreen from "./pages/ConfigScreen";
import InitEditScreen from "./pages/InitEditScreen";
import RunScreen from "./pages/RunScreen";
import { screens } from "./constants";
import Logo from "./components/Logo";

function App() {
  const ctx = useAppState();
  return (
    <div id="app-container">
      {ctx.screen === screens.config && <ConfigScreen />}
      {ctx.screen === screens.initEdit && <InitEditScreen />}
      {ctx.screen === screens.run && <RunScreen />}
      <Logo classname="debug-border" />
    </div>
  );
}

export default App;
