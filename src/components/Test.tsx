import { useEffect } from "react";

function Test() {
    const url = 'http://localhost:8080/swagger-ui/index.html#/video/list';
    // async function logJSONData() {
    //     const response = await fetch("http://example.com/movies.json");
    //     const jsonData = await response.json();
    //     console.log(jsonData);
    //   }
      
    // "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    useEffect(()=> {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    },[])
    return (  
        <>
        </>
    );
}

export default Test;