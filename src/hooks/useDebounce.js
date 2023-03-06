import {useEffect, useState} from "react";


function useDebounce(value, delay) {
  const [debounce, setDebounceValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay)

    return () => clearTimeout(handler)


  }, [value])
  return debounce
}

export default useDebounce;