export default function number(){
    const numberList = [
        1, 2, 3, 4, 5, 6, 7
    ]
    const list = numberList.map((num) => 
        <li key={num.toString()}></li>
    )

    return (
        <div>

            { list }
            
        </div>
    )
}
