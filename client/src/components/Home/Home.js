import React from 'react';
import { Spring } from  'react-spring/renderprops';
import Carousel from '../Carousel/Carousel';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Home = () => {
   
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <Spring
                        from={{ opacity:0, marginTop:-5000}}
                        to={{opacity: 1,
                            marginTop:-650}}
                        config={{ delay: 100, duration:1000 }}
                        >
                        { props => (
                        <div style={props}>
                        {/* Insert below */}
                    <p style={{textAlign:'center', fontSize:'40px', fontFamily:'Didact Gothic'}}>Lyfe Organizer</p>
                        </div>
                        ) }
          </Spring>
                        
                    </div>
                </div>
                <Spring
                        from={{ opacity:0, marginTop:-5000}}
                        to={{opacity: 1,marginTop:-450 }}
                        config={{ delay: 80, duration:1500 }}
                        >
                        { props => (
                        <div style={props}>
                        {/* Insert below */}
                    <div className="row">
                    <div className="col-lg-12" style={{textAlign:'center'}}>
                        {/* <Carousel style={{textAlign:'center', marginLeft:'50px'}}/> */}
                        <Button variant="light" style={{fontFamily:'Sawarabi Gothic'}}>Sign Up</Button>
                    </div>
                </div>
                        </div>
                        ) }
          </Spring>
                


            </div>
        </div>
    );
};

export default Home;
