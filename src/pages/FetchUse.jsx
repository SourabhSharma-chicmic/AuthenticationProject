import { useEffect, useState } from "react";

const FetchUse = () => {



  const [data, setData] = useState([{}]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((data) => {
        const obj = data.map((item) => {
          return {
            id: item.userId,
            title: item.title,
            body: item.body,
            img: "",
          };
        });
        console.log('before updating ',obj)
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((res) => res.json())
          .then((data) => {
             
              const finalObj  = obj.map(items=>{
                  data.filter(item=> {
                      
                    if(item.id==items.id )
                    {
                        items.img = item.url;
                    }   
                 
                });
                //  items.img = newObj.url;
                 return items;
              })

              console.log('after updating',finalObj);
          });
      })
      .catch((error) => console.log(error));
  };
  // const getData= async()=>{
  //      const firstUrl = 'https://jsonplaceholder.typicode.com/posts';
  //      const response = await fetch(firstUrl);
  //      const finalData  = await response.json();

  // }
  console.log(Array.isArray(data));
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("chainig", data);
  }, [data]);




 
  return (
    <>
      {data.map((item) => item.userId)}
      <h4>Use of fetch</h4>
    </>
  );
};

export default FetchUse;
