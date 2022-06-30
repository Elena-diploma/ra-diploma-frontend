import { useState, useEffect } from 'react';

export default function useStorage(storage, key, jsonify = false) {
  const [value, setValue] = useState(
    jsonify ? JSON.parse(storage.getItem(key)) : storage.getItem(key)
  );
  useEffect(() => {
    // console.log('useStorage_useEffect_value: ', value);
    if (value === null) {
      storage.removeItem(key);
      return;
    }
    storage.setItem(key, jsonify ? JSON.stringify(value) : value);
  }, [value, storage, key, jsonify]);
  // console.log('useStorage_returned_state_value: ', value);
  return [value, setValue];
}
