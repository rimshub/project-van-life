import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img alt="vanimage" src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}