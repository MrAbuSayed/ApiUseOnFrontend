import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[product,setProduct]=useState([]);

  useEffect(() => {
   fetch('http://localhost:2025/products')
   .then((res)=>{
        if (!res.ok) {
          throw new Error("Failed Fetch");
        }
        return res.json();
    }
      )
      .then((result)=> setProduct(result))
      .catch((err)=>{
        console.error(err);
      })

  }, []);
  
  // console.log(product);

  return (
    <div className="App">

        {
          product.map((pr)=>{
            return(
              <div className="product" key={pr.id}>
                <h2>Product:{pr.name}</h2>
                <h3>Title:{pr.title}</h3>
                <p>Description :{pr.detail}</p>
                <h3>Price: ${pr.price} </h3>
                <h4>Brand: {pr.brand} </h4>
                <button>Buy Now</button>
              </div>
            );
          })
        }

    </div>
  );
}

export default App;
