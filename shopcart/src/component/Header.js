import React, { useState, useDispatch } from 'react';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';

function Header(props) {
    let getdata = useSelector((state) => state.cartReducer.carts);
    console.log(getdata);

    const history = useNavigate("");
    // console.log(history);

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dlt = (e) => {
        dispatch(DLT(e))
        toast.error("Iteam Remove from Your Cart", {
            position: "top-center",
            autoClose: 3000,
        });
        history("/")
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">Add to Cart</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link to="/" >Add to Cart</Nav.Link>
                        <Nav.Link to="/">Home</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >

                        <i class="fa-solid fa-cart-circle-exclamation text light" style={{ paddingleft: 15, fontSize: 26, cursor: "pointer" }} ></i>
                        <i class="bi bi-cart-fill" style={{ cursor: "pointer, paddingleft:16" }}></i>
                        <i class="fa-solid fa-cart-shopping text light" style={{ cursor: "pointer" }}></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                //     MenuListProps={{
                //         'aria-labelledby': 'basic-button',
                //     }}
                >
                    {
                        getdata.length ?

                            <div className="card_details" style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}><img src={e.imgdata} style={{ width: "5rem", height: "5rem", cursor: "pointer" }} alt="" /></NavLink>

                                                            </td>
                                                            <td><p>{e.rname}</p>
                                                                <p>{e.price}</p>
                                                                <p
                                                                    style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                                                                    onClick={() => dlt(e.id)}
                                                                ><i class="fas fa-trash smalltrash"></i></p>
                                                            </td>
                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                                                                onClick={() => dlt(e.id)}
                                                            ><i class="fas fa-trash largetrash"></i></td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            : <div className="card_details d-flex align-items-center justify-content-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className="fas fa-close smallclose"
                                    onClick={handleClose}

                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}>
                                </i>
                                <p style={{ fontSize: 22 }}>Your cart is Empty</p>
                                <img src="./cart.gif" style={{ width: "5rem", padding: 10 }} className='emptycart_img' />
                            </div>
                    }
                </Menu>

            </Navbar>
        </>
    );
}

export default Header;