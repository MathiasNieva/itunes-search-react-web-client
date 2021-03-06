import { Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SearchResult from '../SearchResult/SearchResult'
import "./Search.css"

const iTunesURL = "https://itunes.apple.com/search?"

export default function Searchbar() {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)

    useEffect(() =>{
        if (!search) return setSearchResults([])
        let cancel = false

        axios.get(`${iTunesURL}term=${search}&limit=25&media=music&entity=song`).then(res => {
            if (cancel) return

            setSearchResults(res.data.results.map(item => {
               let minutes = Math.floor((item.trackTimeMillis/1000)/60)
               let seconds = Math.floor((item.trackTimeMillis/1000)%60)
               seconds = (seconds < 10) ? "0" + seconds : seconds;
               let price = (item.trackPrice < 0) ? "-----" : item.trackPrice;

               return {
                   artist: item.artistName,
                   song: item.trackName,
                   album: item.collectionName,
                   art: item.artworkUrl100,
                   id: item.trackId,
                   preview: item.previewUrl,
                   songPrice: price,
                   currency: item.currency,
                   songDuration: minutes + ":" + seconds
               }
           }))
        }).catch(err => {console.log(err)})

        return () => cancel = true
    }, [search])

    return(   
        <Container className="d-flex flex-column py-2 search-container">
            <Form.Control
                type="search"
                placeholder="Enter song title"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2 overflow">
                {searchResults.map(item => (
                    <SearchResult item={item} key={item.id}/>
                ))}
            </div>
        </Container>  
    )
}