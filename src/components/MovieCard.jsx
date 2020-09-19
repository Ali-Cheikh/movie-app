import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Rating from 'react-rating'


export default function MovieCard({ details }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={details.image} height={200} />
            <Card.Body>
                <Card.Title> {details.title} </Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem> {details.year} </ListGroupItem>
                <ListGroupItem>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        fractions={2}
                        readonly
                        initialRating={details.rating}
                    />
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}
