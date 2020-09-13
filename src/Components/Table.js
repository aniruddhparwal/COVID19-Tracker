import React from 'react'

function Table({ countries }) {
    console.log("Sss>", countries)
    return (
        <div className="table">
            {countries.map(({ country, cases }) => (
                <tr>
                    <td>{country}</td>
                    <td>{cases}</td>
                </tr>
            ))}
        </div >
    )
}

export default Table
