import React from "react";
import Carousel from 'react-bootstrap/Carousel'
function NewMeal() {
    return (
        <div className="container-lg py-3">
            <Carousel touch={true}>
                <Carousel.Item>
                    <img
                        className="w-75 mx-auto d-block"
                        src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/46b02e1a792d4d3084d68fee2982dbf9.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75 mx-auto d-block"
                        src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/46b02e1a792d4d3084d68fee2982dbf9.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75 mx-auto d-block"
                        src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/46b02e1a792d4d3084d68fee2982dbf9.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default NewMeal;