import React from 'react';
import Productdetails from './Productdetails';
// let imageUrl=require("..\images\freshmilk.png"); 

let productcount=0;


function Products(props){   //function ka 1st letter capital eg:-Products     /*object(data/props) and niche ke uske attributes*/
    
    return (
    <li className="list-group-item">
        <div className="media-align-items-lg-center flex-column flex-lg-row p-3">
            <div className="media-body order-2 order-lg-1">
            <h2 className="mt-0 font-weight-bold mb-2">{props.Name}</h2>         {/*<h2 classname="sbsnsmsmmsmsmk">props.Name</h2>   aise likh sakte*/}
            <p className="font-italic text-muted mb-0 small">{props.description}</p>
            <Productdetails price={props.price} isAvailable={props.isAvailable}>
                <p>this is a demo</p>
                </Productdetails>
                </div>
                <img src={(props.imageUrl)} alt="product image"/>   {/*image folder react me always public me banana*/}
            </div>
        </li>
)
}
export default Products;