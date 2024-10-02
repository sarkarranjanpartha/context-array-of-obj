import React from "react";
import { useAppContext } from "./AppContext";

export const NameUpdater: React.FC = () => {
  const { items, updateName } = useAppContext();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <input
            value={item.name}
            onChange={(e) => updateName(item.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
