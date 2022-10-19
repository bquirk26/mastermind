const Dot = ({n}) => {
    let color = {backgroundColor: 'blue'}
    if (n === 1) {
        color = {backgroundColor: 'red'}
    } else if (n === 2) {
    color = {backgroundColor: 'blue'}
    } else if (n === 3) {
        color = {backgroundColor: 'yellow'}
    } else if (n === 4) {
        color = {backgroundColor: 'purple'}
    } else if (n === 5) {
        color = {backgroundColor: 'orange'}
    } else {
        color = {backgroundColor: 'aqua'}
    }

    return (
        <span class = "dot" style = {color}></span>
    )
}

export default Dot