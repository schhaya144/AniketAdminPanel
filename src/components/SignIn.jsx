import React from 'react'

function SignIn() {
   
    
  return (
    <div>
        <h2 className="text-center bg-primary m-0 pt-4 text-light text-underline">Aniket Enterprises</h2>
        <div className="container-fluid d-flex justify-content-center align-item-center bg-primary form-cont" >
           
                
                    
                
          
        <div className="form-container bg-white border rounded-4 p-4 m-4 form-cont01">
          <h2 className="form-title text-center card-heading">
            <span className="about-text">Sign in </span>
          </h2>
          <form>
          <div className="mb-3">
              <label for="mobile" className="form-label input-headings">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control input-custom"
                id="mobile"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-3">
              <label for="pswd" className="form-label input-headings">
                Password
              </label>
              <input
                type="password"
                className="form-control input-custom"
                id="pswd"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label for="checkbox" className="form-label input-headings">
              <input className="form-check-input " type="checkbox" value="" aria-label="Checkbox for following text input"/>
               &nbsp; Remember me
              </label>
             
            </div>
            

            <button type="submit" className="btn btn-custom btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
