import { useEffect } from 'react'
import './Field.css'

function Field(props){

    useEffect(()=>{
        
        return ()=>{
            console.log("Unmounting");
        };
    },[])


    const handleSelected = (e) => {
        if(props.onChooseCountry){
            props.onChooseCountry(e.target.value)
        }
    }    

    return(
        <div className="field">
            <label>{props.label}</label>

            <select onChange={handleSelected} className='select'>

                {props.options.map((item) => {
                    return <option value={item.label} key={item.label}>{item.label}</option>
                })}

                {/* [<option value='1'>1</option>,
                <option value='2'>2</option>] */}
                </select>
        </div>
    )
}

export default Field;