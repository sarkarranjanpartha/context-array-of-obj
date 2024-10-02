import React from "react";
import { AppProvider } from "./AppContext";
import { NameUpdater } from "./NameUpdater";
import { ValueUpdater } from "./ValueUpdater";
import { ItemDisplay } from "./ItemDisplay";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div>
        <h2>Update Names</h2>
        <NameUpdater />
        <h2>Update Values</h2>
        <ValueUpdater />
        <h2>Items</h2>
        <ItemDisplay />
      </div>
    </AppProvider>
  );
};

export default App;
