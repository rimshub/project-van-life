// Vans list page
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../utility/api'

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const typeFilter = searchParams.get("type")

    const [vans, setVans] = useState([])
    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    // console.log(vans)
    const vanList = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
            to={van.id} 
            state={{ 
                searchHistory: `?${searchParams.toString()}`, 
                type: typeFilter 
            }}

            >
                <img alt="vanimage" src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if(loading) return (<h1>Loading...</h1>)
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={() => setSearchParams({type: "simple"})}
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
                >Simple</button>
                <button 
                    onClick={() => setSearchParams({type: "luxury"})}
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
                >Luxury</button>
                <button 
                    onClick={() => setSearchParams({type: "rugged"})}
                    className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
                >Rugged</button>
                {
                    typeFilter ? 
                    (<button 
                        onClick={() => setSearchParams({})}
                        className="van-type clear-filters"
                    >Clear filter</button>) : null
                }
            </div>
            <div className="van-list">
                {vanList}
            </div>
        </div>
    )
}
