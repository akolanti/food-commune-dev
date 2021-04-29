import React, { useEffect,useState } from 'react'
import {ProductsContainer,ProductsHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,
ProductTitle,ProductDesc,ProductPrice,ProductButton, PaymentLink} from './ProductElements';
import product3 from '../../Images/tacos.jpg'
import swal from 'sweetalert';

import axios from 'axios'


const Products = ({heading,res,id}) => {

    const [result,setresult]=useState([]);
    useEffect(()=>{
        axios.get(`https://food-commune-dev.herokuapp.com/api/get_restaurant/${id}`)
       .then(response => {
        setresult(response.data);
       })
     },[]);  
     const [cart,setcart]=useState([]);

     const addtocart=(product)=>
     {

         if(JSON.parse(localStorage.getItem('cart'))==null|| JSON.parse(localStorage.getItem('cart'))=='' )
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
                
                // console.log(JSON.parse(localStorage.getItem('cart')));
                setcart(JSON.parse(localStorage.getItem('cart')));
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                swal("Added to cart!", "check cart!", "success")
            }
   
         }
        //  console.log( JSON.parse(localStorage.getItem('cart')));

     }
       return (
       <ProductsContainer>
           {<ProductsHeading>{res.res_name}</ProductsHeading>}
           <ProductWrapper>
               {result.map((product) => {
                   return(
                       <ProductCard className="card col-md-3" key={product._id}>
                       <ProductInfo>
                       <ProductTitle className="card-title">{product.item_name}</ProductTitle>
                       <ProductPrice className="card-text">{product.price}</ProductPrice>
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
