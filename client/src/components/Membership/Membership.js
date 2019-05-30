import React from 'react';
import { Spring } from  'react-spring/renderprops';
import {Form, Col, Button} from 'react-bootstrap';



const Membership = () => {
   
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <Spring
                        from={{ opacity:0, marginTop:-5000}}
                        to={{opacity: 1,marginTop:-700 }}
                        config={{ delay: 80, duration:1000 }}
                        >
                        { props => (
                        <div style={props}>
                        {/* Insert below */}
                        <h1 style={{textAlign:'center', marginTop:'30px', fontFamily:'Didact Gothic'}}>Sign Up For Memberhsip !</h1>
                        </div>
                        ) }
                    </Spring>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                    <Spring
                        from={{ opacity:0, marginTop:-5000}}
                        to={{opacity: 1,marginTop:-550 }}
                        config={{ delay: 80, duration:1500 }}
                        >
                        { props => (
                        <div style={props}>
                        {/* Insert below */}
                        <div style={{backgroundColor:'rgb(204,19,64,0.7)', paddingLeft:'10px', paddingRight:'10px', paddingTop:'10px', paddingBottom:'10px', borderRadius:'10px'}}>
                        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                        </div>
                        
                        </div>
                        ) }
                    </Spring>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;


