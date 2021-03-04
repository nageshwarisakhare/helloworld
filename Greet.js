import React from 'react'

// function Greet()
// {
//     return <h1>Hello RC TechSystem</h1>
// }

 const Greet = (props) =>{
     console.log(props)
  return (
      <div>
          <h1>
              Hello {props.name} {props.lastName}
          </h1> 
          {props.children}
      </div>
  )
}
 export default Greet