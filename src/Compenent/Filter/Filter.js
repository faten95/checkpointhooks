import React from 'react';
import {Navbar, Button, Form, FormControl} from 'react-bootstrap';


const Filter = ({setSearch}) => {
 
  const handleChange= (e) => {
    setSearch(e.target.value);
  }
    
    return (
        <div>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home" style={{marginRight:"850px", color:"#1B1BB1"}}>MovieTime</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange}/>
      <Button variant="outline-info" style={{marginRight:"10px"}}>Search</Button>
    </Form>
  </Navbar>

        </div>
    );
}

export default Filter;
