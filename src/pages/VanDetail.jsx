import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id]) // rerun this effect when the id changes
  return (
    <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img alt="vanimage" src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
    </div>
  )
}
