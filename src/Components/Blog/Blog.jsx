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
            blogs: blogData,
            status: "active",
            items: Array.from({ length: 2 }),
            groupItems: 2,
            isLading: false,
            isLoaded: false,
            articles: []

        }
    }

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.blogs.concat(Array.from({ length: 2 }))
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
                                dataLength={this.state.items.length}
                                next={this.fetchMoreData}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                            >
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