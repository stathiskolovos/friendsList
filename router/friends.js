const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Exercise 2: Implement the GET method
  // get all the user information using JSON string
  res.send(JSON.stringify(friends,null,4));

  // res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Implement the GET by specific email method:
  // view the user based on email but without using filter method.
  const email = req.params.email;
  res.send(friends[email]);
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Add a new friend
// Exercise 4: Implement the POST method
// add the new user to the JSON/dictionary
router.post("/",(req,res)=>{
      // Check if email is provided in the request body
    if (req.body.email) {
      // Create or update friend's details based on provided email
      friends[req.body.email] = {
          "firstName": req.body.firstName,
          // Add similarly for lastName
          "lastName": req.body.lastName,
          // Add similarly for DOB
          "DOB": req.body.DOB
      };
    }
    // Send response indicating user addition
    res.send("The user" + (' ') + (req.body.firstName) + " Has been added!");
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// Exercise 5
// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Extract email parameter from request URL
  const email = req.params.email;
  let friend = friends[email];  // Retrieve friend object associated with email
  if (friend) {  // Check if friend exists
      let DOB = req.body.DOB;
      // Add similarly for firstName
      let firstName = req.body.firstName;
      // Add similarly for lastName
      let lastName = req.body.lastName;

      // Update DOB if provided in request body
      if (DOB) {
          friend["DOB"] = DOB;
      }
      // Add similarly for firstName
      if (firstName) {
        friend["firstName"] = firstName;
      }
      // Add similarly for lastName
      if (lastName) {
        friend["lastName"] = lastName;
    }
      friends[email] = friend;  // Update friend details in 'friends' object
      res.send(`Friend with the email ${email} updated.`);
  } else {
      // Respond if friend with specified email is not found
      res.send("Unable to find friend!");
  }
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// Exercise 6
// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;

  if (email){
    delete friends[email];
  }

  res.send("Friend with email " + email + " deleted from friends list");
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
