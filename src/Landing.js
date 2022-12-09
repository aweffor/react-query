import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import apiRequests from "./apiRequests"

function Cart(){
    const [produqtebi, setProduqtebi] = useState([])
    const [value, setValue] = useState('')
    const inputRef = useRef()  

    const {data, isLoading} = useQuery("/users?page=1", () => apiRequests('GET', "/users?page=1"))
    // პირველი პარამეტრი არის ქვერის ქი, რომელიც დაიქეშება და მეორე პარამეტრი არის ფუნქცია რომელიც უნდა სესრულდეს

    useEffect(() =>{
        if(data){
            setProduqtebi(data)
        }
    },[data]) 

    useEffect(() =>{
        inputRef.current.focus();
    }, [])
    function damateba(e){
        e.preventDefault();
        const newItems = [
            ...produqtebi,
            {
                first_name: value,
                last_name: ""

            },
        ]
        setProduqtebi(newItems)
        setValue("")

        apiRequests("POST","/users",{
            "name": value
        }).then(response => console.log(response.data) )
        .catch(error => console.log(error))   
    }
    function removeItem(itemId){
        const newItems = produqtebi.filter(item => item.id !== itemId)
        setProduqtebi(newItems);
    }
    return <div  className="friends">
        <form action ="" onSubmit={damateba}>
            <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)}
            ref ={inputRef}
            />
        </form>
        {
            isLoading ? <div className="loader-container"></div> : (
            <ul> 
                {
                produqtebi.map(item =>( 
                    <li key={item.id}  > 
                    {item.first_name+ " "+ item.last_name}
                    <button onClick={() => removeItem(item.id)}> Remove</button> 
                    </li>   
                ))
                }
            </ul>
            )
        }
         
    </div>
}

export default Cart;
