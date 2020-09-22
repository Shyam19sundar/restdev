import React , {useState} from "react"
import {DISHES} from './dishes'
import {Link} from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import './DishDetailComponent.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CreateIcon from '@material-ui/icons/Create';
import Breadcrumb from 'react-bootstrap/Breadcrumb'


function DishDetailComponent({match}) {
    const [show, setShow] = useState(false);
    const [client, setclient] = useState("");
    const [clienterr, setclienterr] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit=(e)=>{
        console.log("ss",e);
        e.preventDefault();
        const isValid = formValidation();
    }
    
    const formValidation = () =>{
        const clienterr = {};
        let isValid = true;
    
        if(client.trim().length < 3){
            clienterr.clientShort = "*Name Should Contain atleast 3 Characters";
            isValid = false;
        }

        if(client.trim().length > 15){
            clienterr.clientShort = "*Name Should Contain atmost 15 Characters";
            isValid = false;
        }
    
        setclienterr(clienterr);
        return isValid;
    }

    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/menu" >Menu</Breadcrumb.Item>
                <Breadcrumb.Item active>{match.params.name}</Breadcrumb.Item>
            </Breadcrumb>
          {DISHES.map(dish => {
              if(dish.name === match.params.name){
                  return(
                    <div className="singledetail"> 
                        <div className="singledetail-left"> 
                            <h3>Selected Dish : </h3>
                            <img
                                className="selectedimage"
                                src={`/${dish.image}`}
                            />
                            <p className="selecteddesc">{dish.description}</p>
                        </div>
                        <div className="singledetail-right">
                            <h1 className="singledetail-right">COMMENTS : </h1>
                            {dish.comments.map(commentt => (
                                <div>
                                    <h3 className="singledetail-right">{commentt.comment}</h3>
                                    <p className="singledetail-rightp">    -- {commentt.author}  ,  {commentt.date}</p>
                                </div>
                            ))}
                             <>
                            <Button variant="primary" onClick={handleShow}>
                                <CreateIcon />
                                Submit comment
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                <Modal.Title>Your Comment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                             type="text"
                                             placeholder="Enter your Name" 
                                             value={client}
                                             onChange={(e)=>{setclient(e.target.value)}}
                                        />
                                        {Object.keys(clienterr).map((key) => {
                                            return <div style={{color : "red"}}>
                                                {clienterr[key]}
                                            </div>
                                        })}
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" rows="6" />
                                    </Form.Group>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button onClick={onSubmit} onClick={handleClose} variant="primary">Submit</Button>
                                </Modal.Footer>
                            </Modal>
                            </>
                        </div>
                    </div>
                  )
                }
          })}
        </div>
    )
}


export default DishDetailComponent