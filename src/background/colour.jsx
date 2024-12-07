import {useState } from 'react'
const Background = () => {
    const [color, setBackground] = useState('red')
    const Handle = (e) => {
        setBackground(e.target.value)
    }
    return (
        <>
            <div>
                <input type="text" placeholder="type a color you want" value={color} style={ {color }}
                    onChange={Handle}
                />
            </div>
        </>
    )
}
export default Background
