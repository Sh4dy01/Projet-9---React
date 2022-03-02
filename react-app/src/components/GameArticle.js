import React from 'react';
import {Card, Button} from 'react-bootstrap';

function GameArticle() {
    return (
        <div>
            <Card style={{ width: '30%' }}>
                <Card.Title className="text-center">Card Title</Card.Title>
                <Card.Img className="fluid" variant="top" src="/fb_image.png" />
                <Card.Body>
                    <Card.Text className='text-center'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GameArticle;