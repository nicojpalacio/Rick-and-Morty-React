import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Tarjeta = ({ tittle, heroes }) => {    
    
    return (
        <>
            <h2>{tittle}</h2>
            <div className="d-flex flex-wrap">
                {heroes.map((heroe) => (
                    <Card className="m-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={heroe.img} />
                        <Card.Body>
                            <Card.Title>{heroe.nombre}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}
