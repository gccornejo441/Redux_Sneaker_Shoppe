import { useSelector } from 'react-redux';

export const AddShoe = () => {
    const shoes= useSelector(state => state.shoes);
    console.log(shoes)

    const addedShoe = shoes.map(shoe => {
        return (
            <div>{shoe}</div>
        )
    })

    return (
        <div>
            {addedShoe}
        </div>
    )
}