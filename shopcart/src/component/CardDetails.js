import React from 'react'
import Table from 'react-bootstrap/Table';
const CardDetails = () => {
  return (
    <div class="container mt-3 ">
      <>
      <h4 >Product Details</h4>
      </>
      <section className='container mt-3'>
<div className='itemdetails d-flex card-body'>
  <div className='items-img'style={{height:"10rem"}}>
    <img src='https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp'/>
  </div>
  <div className='details '>
    <Table >
      <tr>
        <td>
          <p><strong>Restaurant: </strong> Merchi</p>
          <p><strong>Price : </strong> ₹.339</p>
          <p><strong>Dishes: </strong> Indian</p>
          <p><strong>Total: </strong> ₹.3339</p>
        </td>
        <td>
            <p><strong>Rating: </strong><span style={{backgroundColor:"green",color:"#ffffff",marginLeft:10,padding:"5px 5px",borderRadius:"4px"}}>4.5★</span></p>
            <p><strong>Order Review: </strong><span style={{color:"#000000",marginLeft:10,padding:"5px 5px",borderRadius:"4px"}}>+1243 orders Place recently</span></p>
           <p><strong>Remove Item:</strong><span><i className='fas fa-trash' style={{color:"#d50000",fontSize:"16px",cursor:"pointer"}}></i></span></p>
            </td>
      </tr>
      
       
    </Table>

  </div>
</div>

      </section>
    </div>
  )
}

export default CardDetails