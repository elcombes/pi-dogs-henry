import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postDog, getTemperaments } from '../redux/action'

export default function CreateNewDog() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);

    const [input, setInput] = useState({
        name: "",
        weight: "",
        height: "",
        life_span: "",
        image: "",
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

    useEffect(() => {
        dispatch(getTemperaments());
    }, [])

    return (
        <div>
            <p>Acá se crea el nuevo perrito</p>
            <form>
                <div>
                    <input type="text" placeholder='Name' value={input.name} name='name' />
                </div>
                <div>
                    <div>
                        <input type="number" placeholder='Min height' value={input.height} name='minheight' />
                    </div>
                    <div>
                        <input type="number" placeholder='Max height' value={input.height} name='maxheight' />
                    </div>
                </div>
                <div>
                    <div>
                        <input type="number" placeholder='Min weight' value={input.weight} name='minweight' />
                    </div>
                    <div>
                        <input type="number" placeholder='Max weight' value={input.weight} name='maxweight' />
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='Life Span' value={input.life_span} name='life_span' />
                </div>
                <div>
                    <select onChange={(e)=> handleSelect(e)}>
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