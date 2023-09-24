import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

const Content = ({items, setItems, handleCheck, handleDelete}) => {
  // console.log(items);
  
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map(item => (
            <li className='item'key={item.id}>
              <input 
                type="checkbox" 
                checked={item.checked}
                onChange={ ()=> handleCheck(item.id)}
              />
              <label
                style={(item.checked) ? {textDecoration: "line-through"} : null} 
                onDoubleClick={ () => handleCheck(item.id) }
              >
                {item.item}
              </label>
              <FaTrashAlt 
                role='button'
                tabIndex='0'
                onClick={ () => handleDelete(item.id) }
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{
          marginTop: "40px",
          color: "red",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Your list is Empty!
        </p>
      )
        
      }
    </main>
  )
}

export default Content
