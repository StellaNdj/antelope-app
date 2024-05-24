import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAntelope = async () => {
      try {
        const response = await axios.get('http://localhost:4000/proxy');
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAntelope();
  }, [])

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;
