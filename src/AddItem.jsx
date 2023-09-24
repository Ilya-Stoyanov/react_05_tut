import React, {useRef} from 'react';
import { FaPlus } from 'react-icons/fa';


const AddItem = ({newItems, setNewItems, HeandlSubmit}) => {
    const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={HeandlSubmit}>
        <input 
            type="text"
            autoFocus
            ref={inputRef}
            id='addForm'
            placeholder='Add item'
            required
            value={newItems}
            onChange={ (e) => setNewItems(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add item'
            onClick={ () => inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem