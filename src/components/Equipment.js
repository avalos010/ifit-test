import React, { useState } from 'react'

const Equipment = () => {

    const [equipments, setEquipments] = useState([
        { name: 'Treadmills' },
        { name: 'Bikes' },
        { name: 'Ellipticals' },
        { name: 'Strength' }
    ])
    return (
        <>
            <h2 className="equipment-container-heading text-center mt-3">Interested in our exciting iFit-enabled equipment?</h2>
            <div className="equipment-container d-flex flex-row flex-wrap justify-content-center pb-5">
                {equipments.map((item, i) => (
                    <div className="equipment-item d-flex flex-column align-items-center justify-content-center">
                        <img width={184} height={258} src={`https://i.picsum.photos/id/${i}/184/258.jpg`} alt={`${item.name}-image`} />

                        <h2 className="mt-1">{item.name}</h2>

                    </div>
                ))}

            </div>
        </>
    )
}

export default Equipment;