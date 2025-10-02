import { useState } from "react";
import { screens, runStates } from "../constants";
import { AppStateContext } from "./AppStateContext";

export function AppStateProvider({ children }) {
  const [screen, setScreen] = useState(screens.config);
  const [deleteModal, setDeleteModal] = useState(false);
  const [runState, setRunState] = useState(runStates.running);

  return (
    <AppStateContext.Provider
      value={{
        screen,
        setScreen,
        deleteModal,
        setDeleteModal,
        runState,
        setRunState,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}
