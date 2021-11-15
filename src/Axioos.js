import axios from "axios";
import { useEffect } from "react";

const AxiosUse = () => {

    const fetchData =()=>{

        const firstApi = axios.get("http://fakeapi.jsonparseronline.com/posts");
        const secondApi = axios.get("https://gorest.co.in/public/v1/posts");

        axios.all([firstApi,secondApi]).then(
            axios.spread((...allData)=>{
                const newFirst = allData[0].data;
                const newSecond = allData[1].data.data;

                console.log(newFirst);
                console.log(newSecond);
            })
        );
    }

    useEffect(()=>{
        fetchData();
    },[])


  return <>
    <p>Hello this is Axios Use</p>
  </>;
}

export default AxiosUse;
