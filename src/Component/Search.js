import { Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Searchbar() {
    const [search, setSearch] = useState("")

    return(
        <Container className="d-flex flex-column py-2 px-5" >
            <Form.Control
                type="search"
                placeholder="Enter song title"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </Container>
    )
}