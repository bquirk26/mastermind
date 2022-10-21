import ButtonDot from './ButtonDot'

const Input = ({handler}) => {
    const arrays = new Array(1, 2, 3, 4, 5, 6)
    return (
        <div>
            {arrays.map(n => <ButtonDot n = {n} handler = {handler}></ButtonDot>)}
        </div>
    )
}

export default Input