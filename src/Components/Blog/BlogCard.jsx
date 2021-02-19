import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
import styled from 'styled-components';


class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    render() {
        const { name, title, info, img, category, link } = this.props.blog;
        const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        `;
        const Wrapper2 = styled.div`
        padding: 4%;
        `;
        const StyledHR = styled.hr`
        padding: 4%;
        `;
        return (
            <div className="blog-card">
                <Wrapper className='blog-content'>
                    <img className='blog-img' width="450rem" src={img} alt={name} />
                    <Wrapper2>
                        <h5>{category}</h5>
                        <h2 className='blog-card-header' >{name}</h2>
                        <Link to={link} className='blog-card-share'
                        ><p>Share</p></Link>
                        <p className="work-content">{title}</p>

                    </Wrapper2>
                </Wrapper>
            </div>
        )
    }
}

export default BlogCard;