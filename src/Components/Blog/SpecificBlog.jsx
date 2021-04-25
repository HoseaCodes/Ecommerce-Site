import './Blog.css'

export default function SpecificBlog(props){
	const { name, title, info, img, category, link, _id } = props.blog
	return(
		<div>
			<h1>{title}</h1>
			<img className='blog-img' width="450rem" src={img} alt={name}></img>
			<p style={{whiteSpace:'pre-wrap'}}>{info}</p>
		</div>
	)
}