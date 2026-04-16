import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
           try{
             const response = await fetch(url);
            
             if(!response.ok){
               throw new Error(response.statusText);
             } 
            const result = await response.json();
            setData(result);
            setLoading(false);
            setError("");
           }
              catch(error){ 
                console.error("Error fetching data:", error);
                setError("Failed to fetch data. Please try again later.");
                setLoading(false);
              }
        }
        fetchData();
    }, [url]);

  return { data, loading,error };
}