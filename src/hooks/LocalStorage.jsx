import { useState, useEffect } from "react";

function useLocalStorage(nameItem, initialValue = []) {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(nameItem);
      let parsedItem = !localStorageItem
      ? localStorage.setItem(nameItem, JSON.stringify(initialValue))
      : JSON.parse(localStorageItem)

      setItem(parsedItem);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(nameItem, JSON.stringify(newItem))
    setItem(newItem);
  };
  return {item, saveItem, loading, error};
}

export { useLocalStorage }