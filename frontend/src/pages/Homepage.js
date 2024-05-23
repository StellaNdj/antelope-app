import { useEffect, useState } from "react";
import axios from 'axios';
import Table from "../components/Table";

const Homepage = () => {
  const [antelopes, setAntelopes] = useState();

  useEffect(() => {
    const fetchAntelope = async () => {
      try {
        const response = await axios.get('http://localhost:4000/proxy');
        console.log(response.data)
        setAntelopes(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAntelope();
  }, [])
  return (
    <>
      <h1>Antelopes</h1>
      {antelopes && <Table antelopesData={antelopes}></Table>}
    </>
  )
}

export default Homepage;
