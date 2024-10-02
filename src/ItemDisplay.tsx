import React from "react";
import { useAppContext } from "./AppContext";

export const ItemDisplay: React.FC = () => {
  const { items } = useAppContext();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Value: {item.value}</p>
        </div>
      ))}
    </div>
  );
};
