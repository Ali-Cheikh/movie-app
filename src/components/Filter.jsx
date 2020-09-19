import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Filter({onValuesChange}) {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
        onValuesChange(e.target.value, rating)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
        onValuesChange(title, e.target.value)
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Film title</Form.Label>
                <Form.Control type="text" placeholder="Enter film title" value={title} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" placeholder="Rating here" max={5} min={0} step={0.5} onChange={handleRatingChange} />
            </Form.Group>
        </Form>
    )
}
