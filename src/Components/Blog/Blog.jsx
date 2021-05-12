import React from 'react';
import './Blog.css'
import BlogCard from './BlogCard';
import { blogData } from './BlogData';
import InfiniteScroll from "react-infinite-scroll-component";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            blogs: blogData.slice(0,2),
            status: "active",
            groupItems: 2,
            articles: []
        }
    }

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                blogs: this.state.blogs.concat( blogData.slice(0,this.state.groupItems+2)),
                groupItems: this.state.groupItems += 2
            });
        }, 1500);
    };


    render() {

        const { blogs } = this.state;

        return (
            <div className='blog-container'>
                <div id="blogs">
                    <div className="blog-box">
                        <section ref="myscroll"
                            className='blogList'>
                            <InfiniteScroll
                                dataLength={this.state.blogs}
                                next={this.fetchMoreData}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                scrollableTarget="scrollableDiv">
                                {blogs.map((blog, idx) => (<>
                                    <BlogCard blog={blog}
                                         key={blog.id}
                                     /> 
                                </>
                                ))}
                            </InfiniteScroll>
                        </section>
                    </div>
                </div>
                <div>
                    <p>Yp</p>
                </div>
            </div>
        )
    }
}
export default Blog;