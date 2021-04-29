import React from 'react'
import Table from 'react-bootstrap/Table'
import ReactToPrint from 'react-to-print'


 const PaymentSuccess = () => {
    return (
    <div className="body" 
     style={{"text-align": "center",
             "padding": "40px 0",
             "background": "#EBF0F5",
             "marginTop" :"3rem"
            }}>
    <div class="card" 
      style={{"background": "white",
              "padding": "60px",
              "border-radius": "4px",
              "box-shadow": "0 2px 3px #C8D0D8",
              "display": "inline-block",
              "margin": "0 auto"
              }}>

    <div 
        style={{"border-radius":"200px", 
        "height":"200px", 
        "width":"200px", 
        "background": "#F8FAF5", 
        "margin":"0 auto"
        }}>

    <i class="checkmark" 
        style={{"color" : "#9ABC66",
                "font-size": "100px",
                "line-height": "200px",
                "margin-left":"-15px"}}>✓</i>
    </div>
        
        <h1 styele={{"color": "#9ABC66",
          "font-family": "Nunito Sans, Helvetica Neue, sans-serif",
          "font-weight": "900",
          "font-size": "40px",
          "margin-bottom": "10px"}}>Order placed</h1> 
        <p style={{   "color": "#404F5E",
          "font-family":"Nunito Sans, Helvetica Neue, sans-serif",
          "font-size":"20px",
          "margin": "0"}}>We received your order request;<br/> we'll be in touch shortly!</p>
      

      <section class="root" 
      style={{"padding": "1rem",
              "border-radius": "5px",}}>

    <figure style={{ "display": "flex"}}>
    <img src="https://image.flaticon.com/icons/svg/970/970514.svg" alt="" 
    style={{"width": "8rem",
            "height": "8rem",
            "border-radius": "15%",
            "border": "1.5px solid #f05a00",
            "margin-right": "1.5rem",
            "padding":"1rem"}}/>
  <figcaption style={{"display": "flex",
  "flex-direction": "column",
  "justify-content": "space-evenly"}}>
      <h4>Tracking Details</h4>
      <h6>Order Number</h6>
      <h2># A61452B</h2>
    </figcaption>
    </figure>
    <div className="bill">
      {/* <ReactToPrint
       trigger={()=>{
return <a href="#">Print Receipt</a>

       }} */}
       
  <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>Total</th>
      <th></th>
      <th>CA$13.38</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Beyond Meat Burger Combo</td>
      <td></td>
      <td>CA$10.98</td>
    </tr>
    <tr></tr>
    <tr>
      <td colSpan="2"></td>
      <td>tax</td>
      <td>CA$1.16</td>
    </tr>
    <tr>
      <td colSpan="2"></td>
      <td>Service fee</td>
      <td>CA$1.24</td>
    </tr>
  </tbody>
</Table>
</div>
</section>
</div>
</div>
       
    )
}
export default PaymentSuccess

