import React from 'react';
import Carousel1 from '../../Images/carousel.png'
import Carousel2 from '../../Images/Carousel2.png'
import Carousel3 from '../../Images/Carousel3.png'
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import './Carousel.css'

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;
const Content = styled.div`
background: white;
padding: 3%;
width: 50%;
color: black;
z-index: 1;
`;
const StyledHr = styled.hr`
padding: 10px;
`;
const mainCarousel = () => {
    const group = [
        {
            img: Carousel1,
            img2: Carousel1,
            title: "First slide label",
            info: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: Carousel2,
            img2: Carousel2,
            title: "Second slide label",
            info: " vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: Carousel3,
            img2: Carousel3,
            title: "Third slide label",
            info: "elit libero, a pharetra augue mollis interdum."
        },
    ]
    return (
        <Carousel>
            {group.map((item) => {
                console.log(item)
                return (<Carousel.Item>
                    <Wrapper>
                        <img
                            className="d-block w-50"
                            src={item.img}
                            alt="First slide"
                        />
                        <StyledHr />
                        <img
                            className="d-block w-50"
                            src={item.img2}
                            alt="First slide"
                        />

                    </Wrapper>
                </Carousel.Item>
                )
            })
            }
            <div>
                {group.map((item) => {
                    return (
                        <Carousel.Caption>
                            <Content>
                                <h3>{item.title}</h3>
                                <p>{item.info}</p>
                            </Content>
                        </Carousel.Caption>
                    )
                })
                }


            </div>
            {/* <Carousel.Item>
                <img
                    className="d-block w-35"
                    src={Carousel2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-35"
                    src={Carousel3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}

export default mainCarousel;