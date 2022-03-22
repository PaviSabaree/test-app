import React from 'react'
import './SubHead.css'
import { Nav} from 'react-bootstrap'

function SubHead() {
  return (
    <div className='subHead'>

<Nav fill variant="tabs" defaultActiveKey="/home">
<Nav.Item>
    <Nav>Ashirwad</Nav>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/home">Market Analysis</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Comp.Analysis</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">TG Analysis</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Media Plan</Nav.Link>
  </Nav.Item>
</Nav>
    </div>
  )
}

export default SubHead