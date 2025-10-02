import { useState } from "react";
import { screens, runStates, gridSizes, cellShapes } from "../constants";
import { AppStateContext } from "./AppStateContext";

export function AppStateProvider({ children }) {
  const [screen, setScreen] = useState(screens.config);
  const [deleteModal, setDeleteModal] = useState(false);
  const [runState, setRunState] = useState(runStates.running);
  const [gridSize, setGridSize] = useState(gridSizes.small);
  const [cellShape, setCellShape] = useState(cellShapes.hexagon);
  const [automataB, setAutomataB] = useState("");
  const [automataS, setAutomataS] = useState("");

  return (
    <AppStateContext.Provider
      value={{
        screen,
        setScreen,
        deleteModal,
        setDeleteModal,
        runState,
        setRunState,
        gridSize,
        setGridSize,
        cellShape,
        setCellShape,
        automataB,
        setAutomataB,
        automataS,
        setAutomataS,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}
