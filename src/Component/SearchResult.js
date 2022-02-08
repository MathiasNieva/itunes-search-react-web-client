import React from "react";
import Badge from 'react-bootstrap/Badge'

export default function SearchResult( {item} ) {
    return <div className="d-flex m-2 p-2 align-items-center" style={{ border: '2px solid white', borderRadius: "10px"}}>
        <img src={item.art} alt="No image"></img>
        <div className="ms-3 w-50">
            <div>SONG: {item.song}</div> 
            <div>ARTIST: {item.artist}</div>
            <div>ALBUM: {item.album}</div>
            <div>DURATION: {item.songDuration}</div>
        </div>
        <div className="ms-1">
            <h5 className="text-center">Preview:</h5>
        </div>
        <div className="ms-2">
            <audio controls>
                <source src={item.preview}></source>
            </audio>    
        </div>
        <h3 className="ms-4">
            <Badge pill bg="info" className="ms-1">{item.songPrice} {item.currency}</Badge>
        </h3>      
    </div>
}