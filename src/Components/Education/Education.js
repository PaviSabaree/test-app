import React from 'react'
import {Card} from 'react-bootstrap'
import './Education.css'


function Education() {
  return (
    <div className='Education'>
   
   <div className='row'>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Subtitle>No. of Schools</Card.Subtitle>
    <Card.Title className="mb-2 text-muted">13</Card.Title>
    <Card.Text>
     CBSC
    </Card.Text>
    <Card.Text>
     International
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Subtitle>No. of Colleges</Card.Subtitle>
    <Card.Title className="mb-2 text-muted">09</Card.Title>
    <Card.Text>
     Engineering
    </Card.Text>
    <Card.Text>
     Medical
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Subtitle>No. of University</Card.Subtitle>
    <Card.Title className="mb-2 text-muted">11</Card.Title>
    <Card.Text>
     Govt
    </Card.Text>
    <Card.Text>
     Deemed
    </Card.Text>
  
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Subtitle>No. of Kindergarden</Card.Subtitle>
    <Card.Title className="mb-2 text-muted">02</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Card.Text>
     
    </Card.Text>
  
  </Card.Body>
</Card>
      </div>
 

    </div>
  )
}

export default Education