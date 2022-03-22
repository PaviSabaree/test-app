import React from 'react'
import {Bar} from 'react-chartjs-2'

function Graph() {
  return (
    <div>
<Bar 
data ={{
labels:['Colleges','University','School','Acedemy'],
}}
height={400}
width={600}
options={{maintainAspectRatio:false}}
/>

    </div>
  )
}

export default Graph