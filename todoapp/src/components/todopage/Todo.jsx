import React ,{useState} from 'react';
import './Todo.css'

const Todo = () => {
    const[todo,setTodo] = useState([]);
    const[textContent,setTextContent] = useState('');

    const handleClick = () => {
        if(textContent.trim()){
            setTodo([...todo,textContent])
            setTextContent('')
        }
    }

    const handleKeyPress = (e) => {
            if(e.key==='Enter'){
                handleClick()
            }
    }
    
    return(
        <div className="container">
            <h2>Add your Todo's</h2>
            <div className="input-grp" >
                <input type="text" value={textContent} placeholder="Add here" onChange={(e)=>setTextContent(e.target.value)}  onKeyPress={handleKeyPress}/>
                <button onClick={handleClick}>Add</button>
                <div className="todos">
                    {
                        todo.map((item,index)=>{
                            return <ul key={item}>
                                        <li>{index+1}.{item} <button onClick={()=>{
                                            setTodo(todo.filter((_,i)=>i!==index))
                                        }} 
                                        >-</button></li>
                                    </ul>
                        })
                    }
                </div>
                
            </div>

        </div>
    )
}
export default Todo;