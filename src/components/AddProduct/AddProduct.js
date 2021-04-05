import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'



const AddProduct = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl,setImgUrl] = useState('')

    const handelImgUpload = event => {
        // console.log(event.target.files[0]);
        const imgData = new FormData()
        imgData.set('key', '19693cb30f09ee1ec72107c86aa67582');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onSubmit = data => {
        const product = {
            name:data.name,
            price:data.price,
            productImg:imgUrl
        }
        fetch('https://vast-everglades-82847.herokuapp.com/addProduct',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    };

    return (
        <div>
            <h2 className="mb-4">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" {...register("name", { required: true })} /> <br/>
                {errors.name && <small>This field is required</small>} <br/>
                <input placeholder="Product Price" {...register("price", { required: true })} /> <br/>
                {errors.price && <small>This field is required</small>} <br/>
                <input name="file" type="file" onChange={handelImgUpload}/><br/> <br/>
                
                <input className="p-2 btn btn-success" type="submit" value="Save"/>
            </form>
        </div>
    );
};

export default AddProduct;