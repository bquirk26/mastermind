import Dot from "./Dot"

const Guess = ( {guess} ) => {
    console.log(guess)


    return (
        <div>
           {[... guess].map((n => <Dot n = {n}></Dot>))}
        </div>
    )


}

export default Guess