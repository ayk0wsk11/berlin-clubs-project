import axios from "axios"
import { useEffect } from "react"
import { API_URL } from "../config"

const AllClubsPage = () => {
useEffect(()=>{
const fetchClubs = async ()=> {
    try {
        const {data} = await axios.get(`${API_URL}/clubs/1`);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchClubs()

},[])


  return (
    <div>
        <h1>All clubs:</h1>
    </div>
  )
}
export default AllClubsPage