import React, { createContext, useState, useContext } from "react";

interface ContextItem {
  id: number;
  name: string;
  value: number;
}

interface AppContextType {
  items: ContextItem[];
  updateName: (id: number, name: string) => void;
  updateValue: (id: number, value: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ContextItem[]>([
    { id: 1, name: "Item 1", value: 0 },
    { id: 2, name: "Item 2", value: 0 },
  ]);

  const updateName = (id: number, name: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, name } : item))
    );
  };

  const updateValue = (id: number, value: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  return (
    <AppContext.Provider value={{ items, updateName, updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
