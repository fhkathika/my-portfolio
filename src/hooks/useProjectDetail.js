import { useEffect, useState } from "react"

const useProjectDetail =()=>{
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch('/myproject.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return [details]
}
export default useProjectDetail;