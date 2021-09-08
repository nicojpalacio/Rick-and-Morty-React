import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

export const Character = ({ pj }) => {
    return (

        <Card className="m-2 d-flex" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pj.image} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>{pj.name}</Card.Title>
                <span className="m-3">Species:{pj.species}</span>
                
                {
                    pj.status === "Alive" && <Badge pill bg="success">
                        Alive
                    </Badge>}
                {pj.status === "Dead" && <Badge pill bg="danger">
                    Dead
                </Badge>
                }
                {
                    pj.status=== "unknown" && <Badge pill bg="secondary">
                    Unknown
                </Badge>
                    // pj.status === "Alive" ?   <Badge/> : ( pj.status === "Dead" ? <Badge/> : <Badge/>)
                }


                {/* <Button variant="primary">Episodes</Button> */}
            </Card.Body>
        </Card>

    )
}
