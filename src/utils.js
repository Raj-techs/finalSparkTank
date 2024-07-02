import { useEffect, useState } from "react";

function GetApiData (url){
    const [data,setData]=useState({})
 
    useEffect(_=>{
      getData()
    },[])
      async function getData(){
        let res = await fetch(url);
        let apidata = await res.json()
        console.log(apidata)
        setData(apidata)
      }
      return data
}
export default GetApiData