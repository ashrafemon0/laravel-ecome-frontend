import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from "react-router-dom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SugestedProduct from "./SugestedProduct.jsx";

const ProductDetails = (props) => {

    const [prevImage,setPrevImage] = useState('0')


    const ChangeImg = (event) => {
        let imgSrc = event.target.getAttribute('src');
        setPrevImage(imgSrc)

    };

    const PriceOption = (price,special_price) => {
      if (special_price == 'na'){
          return(
              <p className="product-price-on-card2">Price :{price} </p>
          )
      }else{
          return (
              <p className="product-price-on-card2">Price:
                  <del className="text-secondary">${price}</del>&nbsp;${special_price}
              </p>
          )
      }
    }

    let AllProductData = props.data;
    let title = AllProductData['productList'][0]['product_title']
    let product_image = AllProductData['productList'][0]['product_image']
    let price = AllProductData['productList'][0]['price']
    let special_price = AllProductData['productList'][0]['special_price']
    let category = AllProductData['productList'][0]['category']
    let subcategory = AllProductData['productList'][0]['subcategory']
    let remark = AllProductData['productList'][0]['remark']
    let brand = AllProductData['productList'][0]['brand']
    let star = AllProductData['productList'][0]['star']
    let product_code = AllProductData['productList'][0]['product_code']


    let sortDescription = AllProductData['productDetails'][0]['short_description']
    let image_one = AllProductData['productDetails'][0]['image_one']
    let image_two = AllProductData['productDetails'][0]['image_two']
    let image_three = AllProductData['productDetails'][0]['image_three']
    let image_four = AllProductData['productDetails'][0]['image_four']
    let color = AllProductData['productDetails'][0]['color']
    let size = AllProductData['productDetails'][0]['size']
    let long_description = AllProductData['productDetails'][0]['long_description']
    let product_id = AllProductData['productDetails'][0]['product_id']

    if (prevImage === "0"){
        setPrevImage(image_one)
    }

    let ColorDiv = 'd-none';

    if (color != 'na'){
        let ColorArray = color.split(',');
        var ColorOption = ColorArray.map((ColorList,i)=>{
            return <option key={i.toString()} value="ColorList">{ColorList}</option>
        })
        ColorDiv = ''
    }else{
        ColorDiv='d-none'
    }

    let SizeDiv = 'd-none';

    if (size != 'na'){
        let SizeArray = size.split(',');
        var SizeOption = SizeArray.map((SizeList,i)=>{
            return <option key={i.toString()} value="SizeList">{SizeList}</option>
        })
        SizeDiv = ''
    }else{
        SizeDiv='d-none'
    }

    return (
        <div>
            <Container  className="BetweenTwoSection">
                <div className="bradcome-body">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productcategory/" +category}>{category}</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productcategory/" +category+"/"+subcategory}>{subcategory}</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productdetails/" +product_id}>{title}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                        <Row>
                            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                {/*<img id="previewImg" className="w-100 bigImage" src={image_one} />*/}
                                <InnerImageZoom className="detailimage" src={prevImage} zoomScale={1.8} zoomType={"hover"} zoomSrc={prevImage} />
                                <Container  className="my-3">
                                    <Row>
                                        <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                                            <img onClick={ChangeImg} className="w-100 smallImage product-sm-img" src={image_one} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img onClick={ChangeImg} className="w-100 smallImage product-sm-img" src={image_two} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img onClick={ChangeImg} className="w-100 smallImage product-sm-img" src={image_three} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img onClick={ChangeImg} className="w-100 smallImage product-sm-img" src={image_four} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                <h5 className="Product-Name">{title}</h5>
                                <h6 className="section-sub-title">{sortDescription}</h6>
                                <div className="input-group">
                                   {PriceOption(price, special_price)}
                                </div>

                                <div className="input-group">
                                    <div className="Product-price-card d-block">Category: <b>{category}</b></div>
                                    <div className="Product-price-card d-block">SubCategory: <b>{subcategory}</b></div>
                                    <div className="Product-price-card d-block ">Brand: <b>{brand}</b></div>
                                    <div className="Product-price-card d-block">Product Code: <b>{product_code}</b></div>
                                </div>
                                <div className={ColorDiv}>
                                    <h6 className="mt-2">Choose Color</h6>
                                    <select className="form-control form-select">
                                        <option >Choose Color</option>
                                        {ColorOption}
                                    </select>
                                </div>

                                <div className={SizeDiv}>
                                    <h6 className="mt-3">Choose Size</h6>
                                    <select className="form-control form-select">
                                        <option >Choose Size</option>
                                        {SizeOption}
                                    </select>
                                </div>



                                <h6 className="mt-3">Quantity</h6>
                                <input  className="form-control text-center w-50" type="number" />

                                <div className="input-group mt-3">
                                    <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                    <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                    <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="" md={6} lg={6} sm={12} xs={12}>
                                <h6 className="mt-2">DETAILS</h6>
                                <p>{long_description}</p>
                            </Col>
                            <Col className="" md={6} lg={6} sm={12} xs={12}>
                                <h6 className="mt-2">REVIEWS</h6>
                                <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <SugestedProduct subcategory={subcategory}/>
        </div>
    );
};

export default ProductDetails;