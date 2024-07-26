import React, { useState } from 'react'
const ColorCardForm = ({handleSubmit}) => {
const formSchema = {
    colors: 4,
    time: 'timestamp'
}
const initialState = {
    time: '',
    color_1: '',
    color_2: '',
    color_3: '',
    color_4: '',
}
const [formValues, setFormValues]=useState(initialState)
const ColorsInputs = []
for (let i = 1; i <= formSchema.colors; i = i + 1) {

    ColorsInputs.push(
        <div key={i}>
            <label htmlFor={'color_' + 1}>color {i}</label>
            <input type="text" name={'color_' + 1} id={'color_' + 1} value={formValues['color_' + i]} onChange={handleChangeForValue}/>
        </div>
    )

}
const handleChangeForValue =(e)=>{
    const valueToChange = e.target.name
    const newValue =e.target.value 

/* [valueToChange] los []permite que no se interprete como variable */
    setFormValues({...formValues, [valueToChange]:newValue})
}

    return (<form onSubmit={(e)=>handleSubmit (e,{...formValues})}>
        <h2>FORMULARIO PARA CREAR UNA COLOR CARD</h2>
        {ColorsInputs}
        <div>
        <label htmlFor="time">fecha</label>
        <input type={formSchema.time} name="time" id="time" onChange={handleChangeForValue} value={formValues.time} />
        </div>
        <button type='submit'>enviar</button>
    </form>

    )
}

export default ColorCardForm