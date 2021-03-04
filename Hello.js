import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Everyone</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className:'dummyClass'}, //additional properties of div tag
        React.createElement('h2',null,'Hello Everyone') ) //for additional properties=null
}
export default Hello