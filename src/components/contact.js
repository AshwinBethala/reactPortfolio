import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
          <>
           <div><h1>Contact</h1></div>
           
           <div class="row">
           <form class="indent">
             <div class="form-group">
               <label for="exampleInputPassword1">Name</label>
               <input type="password" class="form-control inField" id="exampleInputPassword1" placeholder="John Doe" />
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <input type="email" class="form-control inField" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email" />
               <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
             </div>
             <div class="message-text">
               <textarea id="subject" name="subject" class="inField"></textarea>
             </div>
             <button type="submit" class="btn btn-primary">Submit</button>
           </form>
         </div>
         </>

        )
    }
}

export default Contact; 