import React from 'react'

const form = () => {
    return (
        <div >
            
            <form>
           
  <div class="form-row pr-370px">
 
      <div class="form-group col-s-4 d-flex  justify-content-center flex-wrap border border-danger rounded mr-1 ml-1">
      
      <label class="w-150" for="inputEmail4">Name</label>
      <input type="Name" class="form-control mr-100" id="inputEmail4" placeholder="Name"></input>
      <label for="inputEmail4">First name</label>
      <input type="First name" class="form-control" id="inputEmail4" placeholder="First name"></input>
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
      <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Your Adress"></input>
    <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"></input>
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>single</option>
        <option>married</option>
        
      </select>
      <button type="submit" class="btn btn-primary">Sign in</button>
      
      
      </div>
    
    
  </div>
  
  
  
 
  
</form>
        </div>
    )
}

export default form
