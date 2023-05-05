import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    const onInputChange = (e) => {
        setinputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if(value <= 1) return;
        onNewCategory(value)
        setinputValue('')

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar el gifcito"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
