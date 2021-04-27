import React, { useEffect,useState } from 'react'
import {ProductsContainer,ProductsHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,
ProductTitle,ProductDesc,ProductPrice,ProductButton, PaymentLink} from './ProductElements';
import product3 from '../../Images/tacos.jpg'
import swal from 'sweetalert';

import axios from 'axios'

const Products = ({heading,res,id}) => {
    const [result,setresult]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/get_restaurant/${id}`)
       .then(response => {
        setresult(response.data);
       })
     },[]);  
     const [cart,setcart]=useState([]);

     const addtocart=(product)=>
     {
        setcart(JSON.parse(localStorage.getItem('cart')));

       console.log( JSON.parse(localStorage.getItem('cart')));
         if(localStorage.getItem('cart')==null|| JSON.parse(localStorage.getItem('cart'))=='' )
         {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
     
         }
         else
         {
            var ind=JSON.parse(localStorage.getItem('cart')).findIndex((item)=>(item._id==product._id));
            
            if(ind>-1)
            {
                swal({
                    title: "Already in cart",
                    icon: "warning",
                 
                  });
            }
            else{
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                swal("Added to cart!", "check cart!", "success")
            }
   
         }
         console.log( JSON.parse(localStorage.getItem('cart')));

     }
       return (
       <ProductsContainer>
           {<ProductsHeading>{res.res_name}</ProductsHeading>}
           <ProductWrapper>
               {result.map((product) => {
                   return(
                       <ProductCard key={product._id}>
                             <ProductImg src={product3} alt={product.price} />
                       <ProductInfo>
                       <ProductTitle>{product.item_name}</ProductTitle>
                       {/* <ProductDesc>{product.description}</ProductDesc> */}
                       <ProductPrice>{product.price}</ProductPrice>
                       <ProductButton onClick={()=>addtocart(product)}>{'Add to cart'}</ProductButton>
                       </ProductInfo>
                       </ProductCard>
                   )
               })}
           </ProductWrapper>
           <ProductButton><PaymentLink res={cart} to="/cart">Payment</PaymentLink></ProductButton>
       </ProductsContainer>
    )
}

export default Products
