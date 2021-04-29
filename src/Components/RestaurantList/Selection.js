import './Selection.css'
import React from 'react'
import Form from 'react-bootstrap/Form'
import selectimage from './Asserts/check.svg'
function Selections(){
    return(
      <div class="row">
      <div class="filter">
      <Form>
          {['checkbox', 'radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />
          </div>
    
          ))}
        </Form>
      </div>
    <div class="main">
      <div className="overflow">
                <img src={selectimage}  className="selectimg"/>
                
            </div>
            
            </div>
</div>
    );
}
export default Selections;