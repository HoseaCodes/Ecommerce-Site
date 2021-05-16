import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import './Blog.css'


class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    render() {
        const { name, title, info, img, category, link, _id } = this.props.blog;
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
                    <Wrapper2 className="blog-card-wrapper">
                        <h5>{category}</h5>
                        <Link to={`/specificBlog/${_id}`}>
                            <h2 className='blog-card-header' >{name}</h2>
                        </Link>
                        <Link to={link} className='blog-card-share'
                        ><span>Share</span></Link>
                        <p className="work-content">{title}</p>

                    </Wrapper2>
                </Wrapper>
            </div>
        )
    }
}

export default BlogCard;