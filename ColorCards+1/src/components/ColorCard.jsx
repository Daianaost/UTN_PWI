import React from "react";
import { Button, Flex } from 'antd';


const divStyle = {
    width: "200px",
    height: "200px",
}
const divDateStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding:'10px'

}

const ColorCard = (props) => {
    return (
        <div style={{
            flexWrap: "wrap", padding: "10px",
        }}>
            <div style={{
                ...divStyle,
                backgroundColor: props.color1,
                height: '80px',
                borderRadius: '10px 10px 0 0',
            }} />
            <div style={{
                ...divStyle,
                backgroundColor: props.color2,
                height: '40px',

            }} />
            <div style={{
                ...divStyle,
                backgroundColor: props.color3,
                height: '20px',

            }} />
            <div style={{
                ...divStyle,
                backgroundColor: props.color4,
                height: '20px',
                borderRadius: '0 0 10px 10px',
            }}
            />
            <div style={divDateStyle}>
                <button>❤️ {props.likes}</button>
                <Button type="primary" defaultColor="green">Primary Button</Button>
                
                <span>{props.fecha}</span>
            </div>
        </div>



    )

}


export default ColorCard