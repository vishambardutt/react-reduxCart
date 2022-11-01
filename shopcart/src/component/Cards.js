import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardData from './CardData';
import './style.css';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import {ADD} from '../redux/actions/action.js';
import { ToastContainer, toast } from 'react-toastify';


let Cards = () => {

  let [data, setData] = useState(CardData);
  // console.log(data);
  let dispatch = useDispatch();

  let send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
    toast.success("🛒 Iteam Add In Your Cart", {
      position: "top-center",
      autoClose: 4000,
  });
}


  return (
    <div className="container mt-3">
      <h4>Product Listing</h4>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '18rem', border: 'none' }} className='mx-2 mt-4 card_style'>
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "14rem" }} className='mt-3' />
                  <Card.Body>
                    <Card.Title className='d-flex justify-content-center align-items-center'>{element.rname} </Card.Title>
                    <Card.Text>
                      <p className=" d-flex justify-content-center  align-items-center">{element.somedata}</p>
                      <p className=" d-flex justify-content-center">Price: ₹. {element.price}</p>
                    </Card.Text>
                    <div className="button_div  d-flex justify-content-center">
                      <Button variant="danger" className="col-lg-12" onClick={() => send(element)}>ADD TO CART</Button>

                    </div>

                  </Card.Body>
                </Card>
              </>
            )
          })
        }
 <ToastContainer />
      </div>
    </div>
  )
}

export default Cards;
