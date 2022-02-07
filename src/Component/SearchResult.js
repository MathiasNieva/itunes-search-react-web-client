import React from "react";

export default function SearchResult( {item} ) {
    return <div className="d-flex m-2 p-2 align-items-center" style={{ border: '2px solid white'}}>
        <img src={item.art} alt="No image"></img>
        <div className="ms-3 w-50">
            <div>SONG: {item.song}</div> 
            <div>ARTIST: {item.artist}</div>
            <div>ALBUM: {item.album}</div>
        </div>
        <div className="ms-3">
            <div>Price: {item.songPrice} {item.currency}</div> 
            <div>Duration: {item.songDuration}</div>
        </div>
        <div className="d-flex ms-3">
            <audio controls>
                <source src={item.preview}></source>
            </audio>    
        </div>     
    </div>
}