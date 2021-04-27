import React, {useState  } from 'react'
import "./Autcomplete.css"
import axios from 'axios'
import swal from 'sweetalert';

const Autocomplete = (props) => {

    const [search,setSearch]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [results,setResults]=useState([]);
    const timeoutId = ()=>{setTimeout(() => {
        performSearch();
      }, 1000)}
    const handleSearchChange=(val)=>{
      setSearch(val);
      setIsLoading(true);
      clearTimeout( timeoutId);
      timeoutId();
    // Launch a new request in 1000ms
   
    }
    const performSearch=()=>{
        if(search==="")
        {
            setResults([]);
            setIsLoading(true);
            return;
        }
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ`)
        .then(response => {
        setResults(response.data.features);
        setIsLoading(false);
        })
    }
    const handleItemClicked=(place)=> {
       
        setSearch(place.place_name)
        localStorage.setItem('address',JSON.stringify(place));
        props.onSelect(place);
        setIsLoading(false);
        setResults([]);

    
      }
  return (
    <div className="AutocompletePlace">

      <input className="col-sm-6 col-md-12 form-control Autoinput" type="text" value={search} onChange={(e)=>handleSearchChange(e.target.value)} placeholder="Search location" />
    
<ul className="AutocompletePlace-results">
      {results.map(place => (

        <li
          key={place.id}
          className="AutocompletePlace-items"
          onClick={() => handleItemClicked(place)}
        >
                        <span><i class="fa fa-map-marker " style={{'color':'black','font-size':'20px',padding:'5px'}}aria-hidden="true"> </i> </span>     
{place.place_name}
        </li>
      ))}
      {isLoading && <li className="AutocompletePlace-items">Loading...</li>}
    </ul>
  </div>
  )
}

export default Autocomplete
