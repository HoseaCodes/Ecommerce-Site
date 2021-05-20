import React, {useEffect, useState} from 'react';

import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import arrowLeft from './icon/arrowLeft.png'
import arrowRight from './icon/arrowRight.png'
import Carousel1 from '../../Images/carousel.png'
import Carousel2 from '../../Images/Carousel2.png'
import Carousel3 from '../../Images/Carousel3.png'
import './Carousel.css'

// const Wrapper = styled.div`
// display: flex;
// flex-direction: row;
// `;
// const Content = styled.div`
// background: white;
// padding: 3%;
// width: 50%;
// color: black;
// z-index: 1;
// `;
// const StyledHr = styled.hr`
// padding: 10px;
// `;
function MainCarousel(){
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
    /* Carousel movement controls */
	const [currentImgIndex, setcurrentImgIndex]= useState(0);
	function moveRight(){
		if(currentImgIndex>group.length-2){
			return setcurrentImgIndex(0)
		}  
		setcurrentImgIndex(currentImgIndex+1)
	}
	function moveLeft(){
		if(currentImgIndex<1){
			return setcurrentImgIndex(group.length-1)
		}
		setcurrentImgIndex(currentImgIndex-1)
	}
    return (
        <>
        <div className="carousel-page-wrapper">
            <div className="carousel-wrapper">
                <button onClick={moveRight} style={{right:'20px'}}><img src={arrowRight} alt=">" /></button>
                <button onClick={moveLeft} style={{left:'20px'}}><img src={arrowLeft} alt="<" /></button>
                <div className="carousel-caption-wrapper">
                    {group.map((item, index)=>{
                        if(index===currentImgIndex){
                            return (
                                <>
                                    <div className="carousel-caption-container" style={{opacity:'1', marginTop:'0px'}} >
                                        <h1>{item.title}</h1>
                                        <p>{item.info}</p>
                                    </div>
                                </>
                            )
                        }
                        if(index===(currentImgIndex+1)){
                            return (
                                <>
                                    <div className="carousel-caption-container" style={{opacity:'0', marginTop:'40px'}} >
                                        <h1>{item.title}</h1>
                                        <p>{item.info}</p>
                                    </div>
                                </>
                            )
                        }
                        if(index===(currentImgIndex-1)){
                            return (
                                <>
                                    <div className="carousel-caption-container" style={{opacity:'0', marginTop:'40px'}} >
                                        <h1>{item.title}</h1>
                                        <p>{item.info}</p>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
                {group.map((item, index)=>{
                    if(index===currentImgIndex){
                        return (
                            <>
                                <div className="carousel-image-wrapper" style={{opacity:'1', background:`url(${item.img})`}}  />
                                <div className="background-image"><img src={item.img} alt={item.title} style={{opacity:'.9'}} /></div>
                            </>
                        )
                    }
                    if(index===(currentImgIndex+1)){
                        return (
                            <>
                                <div className="carousel-image-wrapper" style={{opacity:'0', background:`url(${item.img})`}} />
                                <div className="background-image"><img src={item.img} alt={item.title} style={{opacity:'0'}} /></div>
                            </>
                        )
                    }
                    if(index===(currentImgIndex-1)){
                        return (
                            <>
                                <div className="carousel-image-wrapper" style={{opacity:'0', background:`url(${item.img})`}} />
                                <div className="background-image"><img src={item.img} alt={item.title} style={{opacity:'0'}} /></div>
                            </>
                        )
                    }
                })}
            </div>
        </div>
        {/* <Carousel>
            {group.map((item) => {
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
        </Carousel> */}
        </>
    )
}

export default MainCarousel;