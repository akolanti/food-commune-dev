import './rList.css';
import Autocomplete from './Autocomplete'
import RestuarentList from './RestuarentList'

import Selection from './Selection'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import friendimage from './Asserts/friend.svg'
import locationimage from './Asserts/location.svg'
import React ,{useState} from 'react';

const Completepage = () => {
    const [place ,setPlaces]=useState([]);
    const handleSelect=(place)=>{
      setPlaces( place )
    }
  return (
    <div>
         <header className="App-header">
      <Form inline style={{'margin': 0,
    'margin-top': '150px'}}>
      <img src={locationimage} style={{'max-width': '60vh',
    'max-height': '150px'}} alt="image" className="locationimg"/>
      {/* <FormControl type="text" placeholder="Search location" className="mr-sm-6" /> */}
      
      {/* <i class="bi bi-geo-alt-fill"></i> */}
      <span><i class="bs bs-map-marker-alt" style={{'color':'black','font-size':'36px','padding':'5px'}}aria-hidden="true"> </i> </span>     
       <Autocomplete onSelect={handleSelect} />
       {/* {place && <div>Info about the place: <pre>{JSON.stringify(place.place_name)}</pre></div>} */}
      {/* <Button className="Button" variant="outline-info" className="ml-4">Search</Button> */}
    </Form>
      </header>  
      <Jumbotron className="jumbo">
      <img src={friendimage} alt="image" className="float-right img-fluid friendimg"/>
        <h1>Crave it? Get it!</h1>
        <p>
            Search for a favorite restaurant, cuisine, or dish.
            Get $10 off when your friends try Food Commune.
        </p>
        <p>
            <Button variant="primary">Invite Friends</Button>
        </p>
</Jumbotron>
<h1 style={{"text-align":"center",'padding':'40px'}}>Treat Yourself</h1>
<br></br>
<RestuarentList/>
        {/* <Selection /> */}
    
      
    </div>
  )
}

export default Completepage
