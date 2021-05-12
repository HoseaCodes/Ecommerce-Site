import React, { useEffect, useState } from 'react';
import './Blog.css'
import BlogCard from './BlogCard';
import { blogData } from './BlogData';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';

function Blog(props){
    const [search, setSearch] = useState('')
    const [blogs, setBlogs] = useState()
    const [status, setStatus] = useState("active")
    const [items, setItems] = useState(Array.from({ length: 2 }))
    const [groupItems, setGroupItems] = useState(2)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [articles, setArticles] = useState([])

    async function reqBlogs(){
        try{
            const response = await axios.get('/api/getBlogs')
            console.log(response);
            setBlogs(response.data.blogData)
            setIsLoading(false)
            return
        }catch(err){
            console.log(err); return setIsLoading(false)
        }
    }

    useEffect(()=>{
        reqBlogs()
    },[])

    // function fetchMoreData(){
    //     // a fake async api call like which sends
    //     // 20 more records in 1.5 secs
    //     /* NEEDS TO BE CHANGED: getting the blogs from the api should be done here */
    //     setTimeout(() => {
    //         setItems(blogs.concat(Array.from({ length: 2 })))
    //     }, 1500);
    // };

    return (
        <div className='blog-container'>
            {isLoading && 
                <div>...Loading</div>
            }
            {!isLoading &&
            <>
                {!blogs &&
                    <div>No Blogs Yet...</div>
                }
                {blogs &&
                    <>
                        <div id="blogs">
                            <div className="blog-box">
                                <section /*ref="myscroll"*/
                                    className='blogList'>
                                    {blogs.map((blog, idx) => (<>
                                            <BlogCard blog={blog}
                                                key={blog._id}
                                            />
                                        </>
                                        ))}
                                    {/* <InfiniteScroll
                                        dataLength={items.length}
                                        next={fetchMoreData}
                                        hasMore={true}
                                        loader={<h4>Loading...</h4>}
                                    >
                                        
                                    </InfiniteScroll> */}
                                </section>
                            </div>
                        </div>
                        <div>
                            <p>Yp</p>
                        </div>
                    </>
                }
            </>
            }
        </div>
    )
    
}
export default Blog;

// class Blog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             search: "",
//             blogs: blogData,
//             status: "active",
//             items: Array.from({ length: 2 }),
//             groupItems: 2,
//             isLading: false,
//             isLoaded: false,
//             articles: []

//         }
//     }

//     fetchMoreData = () => {
//         // a fake async api call like which sends
//         // 20 more records in 1.5 secs
//         setTimeout(() => {
//             this.setState({
//                 items: this.state.blogs.concat(Array.from({ length: 2 }))
//             });
//         }, 1500);
//     };


//     render() {
//         const { blogs } = this.state;

//         return (
//             <div className='blog-container'>
//                 <div id="blogs">
//                     <div className="blog-box">
//                         <section ref="myscroll"
//                             className='blogList'>
//                             <InfiniteScroll
//                                 dataLength={this.state.items.length}
//                                 next={this.fetchMoreData}
//                                 hasMore={true}
//                                 loader={<h4>Loading...</h4>}
//                             >
//                                 {blogs.map((blog, idx) => (<>
//                                     <BlogCard blog={blog}
//                                         key={blog.id}
//                                     />
//                                 </>
//                                 ))}
//                             </InfiniteScroll>


//                         </section>
//                     </div>
//                 </div>
//                 <div>
//                     <p>Yp</p>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Blog;