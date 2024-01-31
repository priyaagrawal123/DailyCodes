import React from 'react';
import './app.css';
import Products from './components/products';

const products=[     {                                   /*this is 0 index in array*/
        pID:1 ,
        pName:"freshmilk",
        desc :'fresh milk direct from shed',
        imageUrl:"reactproject\public\images\freshmilk.png",
        isAvailable:true,
        price:70 ,
     },
     {                           /*this is 0 index in array*/
        pID:2 ,
        pName:"butter",
        desc :'butter butter yum butter',
        imageUrl:"images/freshmilk.png",
        isAvailable:false,
        price:30 ,
     },
     {                              /*this is 0 index in array*/
        pID:3 ,
        pName:"cheese",
        desc :'made from full fat milk',
        imageUrl:"reactproject\public\images\cheese.png",
        isAvailable:true,
        price:100 ,
     },
     {                                      /*this is 0 index in array*/
        pID:4 ,
        pName:' paneer',
        desc :'Fresh paneer',
        imageUrl:"reactproject\public\images\paneer.png",
        isAvailable:true,
        price:55 ,
     },

]

function App(){           //function ka 1st letter capital eg:-Products
    // let a="awsome"; 
    // const p=document.createElement('p');
    // p.textContent="This is demo paragraph";
    // return p;

    // return <div>
    //     <h1 className="heading">This is heading</h1>
    //     <p className="paragraph">This is {a}  app componenet</p>
    //     </div>; 

    //aise 2 sentence 1 sath likhe to it shows error so <div></div> container use karna
    return (<div className='row'>
        <div className='col-1g-8 mx-auto'>
         <ul className='list-group-shadow'>
            <Products 
            id={products[0].pID} 
            Name={products[0].pName}
            description={products[0].desc}
            imageUrl={products[0].image}
            isAvailable={products[0].isAvailable}
            price={products[0].price}

            ></Products>
            <Products
             id={products[1].pID} 
             Name={products[1].pName}
             description={products[1].desc}
             imageUrl={products[1].image}
             isAvailable={products[1].isAvailable}
             price={products[1].price}
 ></Products>
            <Products
             id={products[2].pID} 
             Name={products[2].pName}
             description={products[2].desc}
             imageUrl={products[2].image}
             isAvailable={products[2].isAvailable}
             price={products[2].price}
 ></Products>
            <Products
             id={products[3].pID} 
             Name={products[3].pName}
             description={products[3].desc}
             imageUrl={products[3].image}
             isAvailable={products[3].isAvailable}
             price={products[3].price}
 ></Products>
 </ul>
         </div>
    </div>);
}
export default App;