import {FaPlus, FaMinus} from 'react-icons/fa'
import Button from "./Button"
import { useState } from "react"
import { useEffect } from 'react'

function Counter({title, min, max, onChange, name, id}) {
    const [count, setCount] = useState(0)
    // console.log(count)

    useEffect(()=>{
        onChange(count,id, name)
        // eslint-disable-next-line
    },[count])

    const decrement = ()=>{
        setCount(prev=>{
            if(prev <= min) return count;
            return prev-1
        })
    }
    const increment = ()=>{
        setCount(prev=>{
            if(prev >= max) return count;
            return prev+1
        })
    }

    // console.log('counter is rendered')
    
    return (
        <>
            <div className="title">{title}</div>
            <div className="counter">
                <Button onClick={decrement} type="button" version='counter'><FaMinus/></Button>
                
                {/* <input type={'number'} value={count} min={min} max={max}/>   */}
                <div className="count">{count}&nbsp; years </div>
                <Button onClick={increment} type="button" version='counter'><FaPlus/></Button>
            </div>
        </>
    )
}

export default Counter
