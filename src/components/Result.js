

const Result = ({result}) => {
    console.log(result)
    let arr1 = new Array()
    let arr = new Array();

    let j = 0;

    for(let i = 0; i < result[0]; i++) {
        if (j > 1) {
            arr1.push({backgroundColor: 'black'})
        } else {
            arr.push({backgroundColor: "black"})
        }
        j++;
    }
    for (let i = 0; i < result[1]; i++) {
        if (j > 1) {
            arr1.push({backgroundColor: 'white'})
        } else {
            arr.push({backgroundColor: "white"})
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