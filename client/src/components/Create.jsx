import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postDog, getTemperaments } from '../redux/action'
import styles from '../css/Create.module.css'

export default function CreateNewDog() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);

    const [input, setInput] = useState({
        name: "",
        weight: "",
        height: "",
        life_span: "",
        image: "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg",
        temperament: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postDog(input))
        alert("Created suscessfully")
        setInput({
            name: "",
            weight: "",
            height: "",
            life_span: "",
            image: "",
            temperament: []
        })
    }

    useEffect(() => {
        dispatch(getTemperaments());
    }, [])

    return (
        <div className={styles.createform}>
            <h2>Complete the form to add a new breed of dog</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className={styles.inputformcreate}>
                    <input type="text" placeholder='Name' value={input.name} name='name' onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <div className={styles.inputformcreate}>
                        <input type="number" placeholder='Min height' value={input.height} name='height' onChange={(e)=>handleChange(e)}/>
                    </div>
                    {/* <div>
                        <input type="number" placeholder='Max height' value={input.height} name='maxheight' onChange={(e)=>handleChange(e)}/>
                    </div> */}
                </div>
                <div>
                    <div className={styles.inputformcreate}>
                        <input type="number" placeholder='Min weight' value={input.weight} name='weight' onChange={(e)=>handleChange(e)}/>
                    </div>
                    {/* <div>
                        <input type="number" placeholder='Max weight' value={input.weight} name='maxweight' onChange={(e)=>handleChange(e)}/>
                    </div> */}
                </div>
                <div className={styles.inputformcreate}>
                    <input type="text" placeholder='Life Span' value={input.life_span} name='life_span' onChange={(e)=>handleChange(e)}/>
                </div>
                <div className={styles.inputformcreate}>
                    <select onChange={(e) => handleSelect(e)}>
                        <option disabled selected>Select temperament</option>
                        {temperaments.map((tem) => {
                            <option value={tem.name}>{tem.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button type='submit'>Create Dog</button>
                </div>
            </form>
            <Link to='/home'><p>Back to home</p></Link>
        </div>
    )
}