import React, { useEffect, useState } from 'react';
import './AddBlog.css'
import NavBar from '../../../Components/NavBar/NavBar';
import axios from 'axios'

const AddBlog = ()=>{
	/* controlling inputs */
	const [category, setCategory] = useState()
	const [name, setName] = useState()
	const [date, setDate] = useState()
	const [img, setImg] = useState()
	const [imgName, setImgName] = useState()
	const [title, setTitle] = useState()
	const [type, setType] = useState()
	const [info, setInfo] = useState()
	const [subHeading, setSubHeading] = useState()
	const [tags, setTags] = useState()
	const [link, setLink] = useState()
	
	/* for showing errors */
	const [isError, setShowError] = useState(false)
	const [errorName, setErrorName] = useState('')

	/* for handling the image upload */
	function handleImg(event){
		setShowError(false)
		if(event.target.files.length>2){
			setShowError(true)
			setErrorName('Only 1 image is allowed')
			return
		}
		setImgName(event.target.files[0].name)
		setImg(event.target.files[0])
	}

	/* for handling the subheading */
	const [unEditedSubheading, setUnEditedSubheading] =useState()
	/* seperating the subheading by commas */
	function handleSubheading(e){
		setUnEditedSubheading(e.target.value)
		const editedSubheading = unEditedSubheading.split(', ').filter( function(e) { return e.trim().length > 0; } );
		setSubHeading(editedSubheading)
		console.log(subHeading)
	}
	/* for handling the tags */
	const [unEditedTags, setUnEditedTags] =useState()
	/* seperating the tags by commas */
	function handleTag(e){
		setUnEditedTags(e.target.value)
		const editedTags = unEditedTags.split(', ').filter( function(e) { return e.trim().length > 0; } );
		setTags(editedTags)
	}

	/* HANDLING THE CATEGORY */
	/* getting the created Categories */
	const [createdCategories, setCreatedCategories] = useState()
	/* this state is used for updating the categories when a user creates a new category  */
	const [newCategory, setNewCategory] = useState()
	useEffect(()=>{
		axios.get('/api/category')
			.then((foundCategories)=>{console.log(foundCategories.data); return setCreatedCategories(foundCategories.data)})
			.catch((err)=>{ setShowError(true); setErrorName('There was an error in searching for the categories'); return console.log(err)})
	}, /* getting the category data again when a user creates a new category*/ [newCategory])
	/* handling the category change */
	function handleCategory(event){
		setCategory(event.target.value)
	}
	/* creating category */
	const [inputCategory, setInputCategory] = useState()
	function handleInputCategory(event){
		setInputCategory(event.target.value)
	}
	/* submitting the category */
	const [categoryLoading, setCategoryLoading] = useState(false)
	function submitCategory(event){
		event.preventDefault()
		if(categoryLoading || !inputCategory){
			return
		}
		setCategoryLoading(true)
		axios.post('/api/category', {name:inputCategory})
			.then(()=>{setNewCategory(inputCategory); setCategory(inputCategory); setInputCategory(''); return setCategoryLoading(false)})
			.catch((err)=>{console.log(err); setShowError(true); setCategoryLoading(false); return setErrorName('an error occured creating the category, try again')})
	}


	/* loading state for disabling submit when loading */
	const [isLoading, setLoading] = useState(false)


	/* for handling the submit */
	async function handleSubmit(event){
		event.preventDefault()
		/* returning if form is loading */
		if(isLoading){
			return
		}
		setShowError(false)
		if(!name || !category || !date || !img || !title || !type || !info || !subHeading || !tags || !link){
			setShowError(true)
			return setErrorName('Missing input, try again.')
		}
		setLoading(true)
		/* in order to upload the image it must be converted to form data */
		const formData = new FormData();
		formData.append('file', img);
		/* uploading image first then getting the url to be saved on the db */
		const imageUrlReq = await axios.post('/api/upload', formData)
		if(!imageUrlReq){
			setShowError(true)
			return setErrorName('An error occured uploading the image, try again')
		}
		try{
			const data = {
				category: category,
				name: name,
				date: date,
				img: imageUrlReq.data.result.url,
				title: title,
				type: type,
				info: info,
				subHeading: subHeading,
				tags: tags,
				link: link
			}
			const apiResponse = await axios.post('/api/postBlog', data)
			console.log(apiResponse)
			return setLoading(false)
		}catch(err){
			setLoading(false)
			setShowError(true)
			setErrorName(err)
			console.log(err)
		}
	}
	return(
		<div>
			<NavBar />
			<div>
				<div className='error-container' style={{display:isError?'none':'flex'}}>
					<h3 style={{color:'red'}}>{errorName}</h3>
				</div>
				<form onSubmit={handleSubmit}>
					<select required onChange={handleCategory} value={category}>
						<option value="" disabled selected>select or create a category</option> 
						{createdCategories && createdCategories.map((categoryData)=>{
							return <option value={categoryData.name}>{categoryData.name}</option>
						})}
					</select>
					<input required onChange={((e)=>{setName(e.target.value)})} value={name} placeholder='Name' />
					<input required onChange={((e)=>{console.log(e.target.value);setDate(e.target.value)})} value={date} placeholder='Date' type='date'/>
					<div>
						<label htmlFor='imgInput' style={{cursor:'pointer', padding:'10px', border:'solid 2px black'}}>Upload Image | Current Image: {imgName?imgName:'No Image Selected'}</label>
						<input required style={{display:'none'}} id='imgInput' onChange={handleImg} placeholder='Upload Image' type='file' accept="image/*"/>
					</div>
					<input required onChange={((e)=>{setTitle(e.target.value)})} value={title} placeholder='Title' />
					<input required onChange={((e)=>{setType(e.target.value)})} value={type} placeholder='Type' />
					<textarea required onChange={((e)=>{setInfo(e.target.value)})} value={info} placeholder='Info' />
					<input required onChange={handleSubheading} value={unEditedSubheading} placeholder='SubHeading' />
					<input required onChange={handleTag} value={unEditedTags} placeholder='Tags' />
					<input required onChange={((e)=>{setLink(e.target.value)})} value={link} placeholder='Link' />
					<button disabled={isLoading}>Post</button>
				</form>
				
				<div>
					<h3>Create Category</h3>
					<input required disabled={categoryLoading} onChange={handleInputCategory} value={inputCategory}/>
					<button onClick={submitCategory}>Create Category</button>
				</div>
			</div>
		</div>
	)
}
export default AddBlog;