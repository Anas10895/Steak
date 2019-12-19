import React from 'react'

const Taples = ({name , price , i} ) => {
    return (

        <tr key={"elm._id"}>
            <td>{i}</td>
            <td>{name}</td>
            <td>1</td>
            <td>{price} $</td>
        </tr>

    )
}
export default Taples