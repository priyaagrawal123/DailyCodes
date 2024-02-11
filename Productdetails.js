
import React from 'react';
import Button from './Button';


let productCount= 0;

function displayFormattedProductCount(){
  return productCount > 0 ? productCount:'zero';
}

function Productdetails(props){    
  let badgeclass="badge-margin-left-48 badge";
badgeclass += props.isAvailable ? 'bgsuccess' :'bgdanger'; 
 
// return(
//     <div className="d-flex align-items-center justify-content-start mt-1">
//     <div className="font-weight-bold my-2">${props.price}</div>
//   <button className ="btn btn-primary">-</button>    
//   {/* this is new btn btn-primary ,primary means blue color,btn means button class used with the element*/}
//       <span style={ {padding:'8px 18px ', 'font-size':13}}>
//         {displayFormattedProductCount()} 
//         </span> {/*this is new span*/}
//       <button className="btn btn-primary">+</button>
//       <span className="badge bg-success">{props.isAvailable?'Available':'UnAvailable'}</span>  {/*this is new*/}
//     {props.children}
//      </div>
// )
return React.createElement('div',{className:'d-flex align-items-center justify-content-start mt-1'},
React.createElement('h6',{className:'font-weight-bold my-2',style:{marginRight:30}},"$"+props.price),
React.createElement('Button',{className:'btn btn-primary'},"-"),
React.createElement('span',{style:{padding:'8px 14px','font-size':13}},displayFormattedProductCount()),
React.createElement('Button',{className:'btn btn-primary'},"+"),
React.createElement('span',{className:badgeclass},props.isAvailable?'Available':'UnAvailable'), /*this is new*/
  
)
}
export default Productdetails;
