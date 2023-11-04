import React, { useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const location = useLocation()
    console.log(location)
    const { id } = useParams()

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id]) // rerun this effect when the id changes

    const search = location.state?.searchHistory || ""
    const type = location.state?.type || "all"

  return (
    <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

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
