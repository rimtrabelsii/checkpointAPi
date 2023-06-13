import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Userlist() {
  
    const [users, setusers] = useState([])
    useEffect(() => { try {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data))
    } catch (error) {
        console.log(error)
    }
     
      
      }
    , [])
    console.log(users);
    
    
    
  return (
    <div className='carte'>
      {users?users.map((el)=>(
        <div >  <Card className='car' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
           {el.email}
          </Card.Text>
          <Card.Text>
           {el.username}
          </Card.Text>
          <Card.Text>
           {el.adress}
          </Card.Text>
          <Button variant="primary">click to see more information</Button>
        </Card.Body>
      </Card>
          </div>
      )):<img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"/>}
    </div>
  )
      }

export default Userlist
