import React from 'react'
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';


const RenderItem = ( {item} ) => {
    return (
        <div>
            <Card>
            <CardImg width="10%"src={item.image} alt="Card image cap" />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : <div /> }
            <CardText>{item.description}</CardText>
            </CardBody>
      </Card>
        </div>
    )
}

const Home = ( {dish, promotion, leader} ) => {
    return (
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderItem item={dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderItem item={promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderItem item={leader} />
                </div>
            </div>
        </div>
    )
}

export default Home
