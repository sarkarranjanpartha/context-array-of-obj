import React from "react";
import { useAppContext } from "./AppContext";

export const ValueUpdater: React.FC = () => {
  const { items, updateValue } = useAppContext();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="number"
            value={item.value}
            onChange={(e) => updateValue(item.id, Number(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};
