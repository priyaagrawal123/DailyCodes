import React, { useState, useEffect } from 'react';

const Product = () => {
    const [product, setProduct] = useState({
        name: '',
        image: '',
        color: '',
        price: '',
        size: '',
        weight: '',
        category: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        validateForm();
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!product.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!product.image.trim()) {
            newErrors.image = 'Image is required';
            valid = false;
        }

        if (!product.color.trim()) {
            newErrors.color = 'Color is required';
            valid = false;
        }

        if (!product.price.trim()) {
            newErrors.price = 'Price is required';
            valid = false;
        } else if (isNaN(product.price)) {
            newErrors.price = 'Price should be a number';
            valid = false;
        }

        if ((product.category === 'Cloths' || product.category === 'Electronics') && !product.size.trim()) {
            newErrors.size = 'Size is required';
            valid = false;
        } else if (product.category === 'Cloths' && isNaN(product.size)) {
            newErrors.size = 'Size should be a number';
            valid = false;
        }

        if (product.category === 'Bakery' && !product.weight.trim()) {
            newErrors.weight = 'Weight is required';
            valid = false;
        } else if (product.category === 'Bakery' && isNaN(product.weight)) {
            newErrors.weight = 'Weight should be a number';
            valid = false;
        }

        if (!product.category) {
            newErrors.category = 'Category is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Submitted Product:', product);
            // Here you can add code to send the product details to your backend
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div>
            <h2>Insert Product Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                        />
                        {errors.image && <p className="error">{errors.image}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        Color:
                        <input
                            type="text"
                            name="color"
                            value={product.color}
                            onChange={handleChange}
                        />
                        {errors.color && <p className="error">{errors.color}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input
                            type="text"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                        {errors.price && <p className="error">{errors.price}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        Size:
                        <input
                            type="text"
                            name="size"
                            value={product.size}
                            onChange={handleChange}
                        />
                        {errors.size && <p className="error">{errors.size}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        Weight:
                        <input
                            type="text"
                            name="weight"
                            value={product.weight}
                            onChange={handleChange}
                        />
                        {errors.weight && <p className="error">{errors.weight}</p>}
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                        >
                            <option value="">Select Category</option>
                            <option value="Cloths">Cloths</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Medicines">Medicines</option>
                            <option value="Grocery">Grocery</option>
                        </select>
                        {errors.category && <p className="error">{errors.category}</p>}
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
export default Product;
//jfjdjd
import React, { useState, useEffect } from 'react';
import './Productdetails.css';
import { Link } from 'react-router-dom';
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Productdetails() {

    const navigate = useNavigate("");
    const handleClick = () => {
        if (!isValidColor || color.length == 0 || !isValidProductname || productname.length === 0 || !isValidPrice || price.length === 0 || !isValidImage || image.length == 0) {
            setError(true);
            return;
        }
        setError(false);
        // navigate('/dashboard');
    };


    const [productname, setProductname] = useState("");
    const [isValidProductname, setIsValidProductname] = useState(true);
    const [color, setColor] = useState("");
    const [isValidColor, setIsValidColor] = useState(true);
    const [price, setPrice] = useState("");
    const [isValidPrice, setIsValidPrice] = useState(true);
    const [error, setError] = useState(false);
    const [image, setImage] = useState(null);
    const [isValidImage, setIsValidImage] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [category, setCategory] = useState('');

    const [size, setSize] = useState('');
    const [newErrors, setNewErrors] = useState("");
    const [weight, setWeight] = useState("")
    const [valid, setValid] = useState("");

    const [product, setProduct] = useState({
        productname: '',
        image: '',
        color: '',
        price: '',
        size: '',
        weight: '',
        category: '',
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        validateForm();
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'category') {
            setProduct((prevProduct) => ({
                ...prevProduct,
                [name]: value,
                size: '',
                weight: '',
            }));
        } else {
            setProduct((prevProduct) => ({
                ...prevProduct,
                [name]: value,
            }));
        }
    };
    const validateForm = () => {
        let valid = true;
        let newErrors = {};
        // const handleCategoryChange = (event) => {
        //     const selectedCategory = event.target.value;
        const handleProductnameChange = (event) => {
            const newProductname = event.target.value;
            setProductname(newProductname);

            setIsValidProductname(validateProductname(newProductname));
        };

        const validateProductname = (productname) => {

            const productnameRegex = /^[a-zA-Z0-9\s]{4,31}$/;

            return productnameRegex.test(productname);

        };
        if ((product.category === 'Cloths' || product.category === 'Electronics') && !product.size.trim()) {
            newErrors.size = 'Size is required';
            valid = false;
        } else if (product.category === 'Cloths' && isNaN(product.size)) {
            newErrors.size = 'Size should be a number';
            valid = false;
        }


        if (product.category === 'Bakery' && !product.weight.trim()) {
            newErrors.weight = 'Weight is required';
            valid = false;
        } else if (product.category === 'Bakery' && isNaN(product.weight)) {
            newErrors.weight = 'Weight should be a number';
            valid = false;
        }


        if (!product.category) {
            newErrors.category = 'Category is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;

    }
    const handleProductnameChange = (event) => {
        const newProductname = event.target.value;
        setProductname(newProductname);

        setIsValidProductname(validateProductname(newProductname));
    };

    const validateProductname = (productname) => {

        const productnameRegex = /^[a-zA-Z0-9\s]{4,31}$/;

        return productnameRegex.test(productname);

    };
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];

        if (selectedImage) {

            const allowedTypes = ['image/jpeg', 'image/png', "image/jpg"];
            if (allowedTypes.includes(selectedImage.type)) {

                const maxSize = 1 * 1024 * 1024; // 1MB in bytes
                if (selectedImage.size <= maxSize) {
                    setImage(URL.createObjectURL(selectedImage));
                    setIsValidImage(true);
                    setErrorMessage('');
                } else {
                    setIsValidImage(false);
                    setErrorMessage('Image size exceeds the limit (1MB).');
                }
            } else {
                setIsValidImage(false);
                setErrorMessage('Invalid image type. Please choose a JPEG or PNG image.');
            }
        }
    };
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);

        setIsValidColor(validateColor(newColor));
    };

    const validateColor = (color) => {

        const colorRegex = /^[a-zA-Za-z\s]{3,15}$/;
        return colorRegex.test(color);

    };

    const handlePriceChange = (event) => {
        const newPrice = event.target.value;
        setPrice(newPrice);

        setIsValidPrice(validatePrice(newPrice));
    };

    const validatePrice = (price) => {

        const priceRegex = /^\d+(\.\d{1,2})?/;
        return priceRegex.test(price);

    };
    // const handleCategoryChange = (event) => {
    //     const selectedCategory = event.target.value;
    //     setCategory(selectedCategory);

    //     setErrors({});
    // };




    //handle submit
    const handleSubmit = (e) => {

        e.preventDefault();

        const validationErrors = {};
        if (category === 'Electronics' && !size) {
            validationErrors.size = 'Size is required for cloths';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        if (setIsValidColor) {

            console.log('Color is valid:', color);
        } else {
            console.error('Invalid color!');
        }
        if (validateForm()) {
            console.log('Submitted Product:', product);
            // Here you can add code to send the product details to your backend
        } else {
            console.log('Form validation failed');
        }



        // if (setIsValidProductname) {

        //     console.log('productname is valid:');
        // } else {
        //     console.error('Invalid productname!');
        // }
        if (!image) {
            setIsValidImage(false);
            setErrorMessage('Image is required.');
        }
    }
    //     if (isValidPrice) {

    //         console.log('price is valid:');
    //     } else {
    //         console.error('Invalid price!');
    //     }





    // };
    // if (!isValidColor || color.length === 0 || !isValidProductname || productname.length === 0 || !isValidPrice || price.length === 0 || !isValidImage || !image || !category.trim()) {
    //     setError(true);
    //     return;
    // }

    // axios.post('http://10.42.0.182:3000/api/Product_Details', {
    //     Name: productname,
    //     Price: price,
    //     Size: category,
    //     Color: color,
    //     Description: "",
    //     Product: image

    // })
    //     .then((response) => {
    //         console.log(response.data);
    //         alert("Successfully signed in");
    //         navigate('/dashboard');
    //     })
    //     .catch((error) => {
    //         console.log(error.response);
    //         if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
    //             alert(error.response.data.error.message);
    //         } else {
    //             alert("Incorrect login or password");
    //         }
    //     });




    return (
        <div className='product'>

            <form onSubmit={handleSubmit}>

                <h1>ProductDetails</h1>
                {/*name of the Product */}
                <div className='inputbox'>
                    <input type='text' onChange={handleProductnameChange} placeholder='Name of Product'></input>

                </div>
                {!isValidProductname ? (
                    <p className='error1' style={{ color: 'red' }}><MdError className='icon' />Invalid Shopname ,it should be in 4-31 characters</p>
                ) : ""}
                {error && (productname.length == 0 && isValidProductname) ?
                    <label className='error2' style={{ color: 'red' }}><MdError className='icon' />Product name is required</label> : ""}


                {/*product photo */}
                <div className='box'>
                    <div className='box2'>
                        <label className="pphoto">(jpg,png,jpeg Only)</label>

                        <div className='file1'>
                            <input type="file" onClick={handleImageChange} ></input>
                        </div>
                    </div>
                </div>

                {!isValidImage && <div style={{ color: 'red' }} className='error3'><MdError className='icon' />{errorMessage}</div>}
                {isValidImage && image && <img className='error5' src={image} alt="Image 2" />}

                <div className='pp'>
                    <select category="category" value={product.category} onChange={handleChange}>

                        <option value="">Category of Shop</option>
                        <option value="category">Bakery</option>
                        <option value="category">Medicines</option>
                        <option value="category">Electronics</option>
                        <option value="category">Grocery</option>
                        <option value="category">Cloths</option>
                        <option value="category">Other</option>
                    </select>
                </div>
                {errors.category && <p className="error">{errors.category}</p>}



                {/* size */}
                <div>
                    <label>
                        Size:
                        <input type="text" value={product.size} onChange={handleChange} />

                        {errors.size && <div className="error">{errors.size}</div>}
                    </label>


                </div>


                {/* //color */}
                <div className='inputbox1'>
                    <input type="type" onChange={handleColorChange} placeholder='Color of the product'></input>

                </div>
                {!isValidColor && (
                    <p className="error6" style={{ color: 'red' }}><MdError className='icon' />Invalid! it should be in 3 to 15char</p>
                )}
                {error && (color.length <= 0 && isValidColor) ?
                    <label className='error7' style={{ color: 'red' }}><MdError className='icon' />Color is required</label>
                    : ""}

                {/* price */}
                <div className='inputbox2'>
                    <input type="type" onChange={handlePriceChange} placeholder='Price of the Product'></input>

                </div>
                {!isValidPrice && (
                    <p className='error8' style={{ color: 'red' }}><MdError className='icon' />Invalid price,₹xx,xxx</p>

                )}
                {error && (price.length <= 0 && isValidPrice) ?
                    <label className='error9' style={{ color: 'red' }}><MdError className='icon' />Price is required</label> : ""}
                <label className='rs'></label>


                {/* weight */}
                {/* //                 <div className='inputbox3'>
                   <input type="texts" placeholder='weight of the Product(Optional)'></input>
                </div>  */}
                <div>
                    <label>
                        Weight:
                        <input
                            type="text" value={product.weight}
                            onChange={handleChange}
                            name="weight"
                        />



                        {errors.weight && <p className="error">{errors.weight}</p>}
                    </label>
                </div>

                <textarea className="textarea" name="Description" placeholder="More details about product" rows="3">Product Details</textarea>
                <button onClick={handleClick} required>Proceed</button>

            </form>
        </div>
    )
}

export default Productdetails;

