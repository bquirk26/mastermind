

const Result = ({result}) => {
    console.log(result)
    let arr1 = [{border: "0px solid white"}, {border: "0px solid white"}]
    let arr = [...arr1]

    let j = 0;

    for(let i = 0; i < result[0]; i++) {
        if (j > 1) {
            arr1[j-2] = {backgroundColor: 'black'};
        } else {
            arr[j] = {backgroundColor: 'black'}
        }
        j++;
    }
    for (let i = 0; i < result[1]; i++) {
        if (j > 1) {
            arr1[j-2] = {backgroundColor: 'white'}
        } else {
            arr[j] = ({backgroundColor: "white"})
        }
        j++;
    }

    console.log(arr);
    return (
        <div id = "res">
            <div>
                {arr.map(x => <span class = "peg" style = {x}></span>)}
            </div>
            <div>
                {arr1.map(x => <span class = "peg" style = {x}></span>)}
            </div>
        </div>
    )

}

export default Result