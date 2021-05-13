import React, { Component, useEffect, useState } from 'react';
import SpecificBlog from '../../Components/Blog/SpecificBlog';
import NavBar from '../../Components/NavBar/NavBar';
import '../../App.css';
import { useParams } from 'react-router';
import axios from 'axios';

export default function SpecificBlogPage() {
    const[open, setOpen] = useState(true)
	const[blogData, setBlogData] = useState()
	const [isLoading, setLoading] = useState(true)

	const params = useParams()
	useEffect(()=>{
		axios.get('/api/getBlog', {params:params.id})
			.then((response)=>{setLoading(false); setBlogData(response.data.blogData) } )
			.catch((err)=>{setLoading(false); return console.log(err)})
	}, [])
	return (
		<div className="app">
			<NavBar/>
			{isLoading &&
				<div>...Loading</div>
			}
			{!isLoading &&
				<>	
					{blogData &&
						<SpecificBlog blog={blogData}/>
					}
					{!blogData &&
						<div>No Such Blog Found</div>
					}
				</>
			}
		</div>
	)
}
