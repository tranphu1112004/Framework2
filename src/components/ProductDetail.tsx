import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../interface/Product";
import "../css/ProductDetail.css";
import { CartContext } from "../context/cartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const context = useContext(CartContext);

  if (!context) {
    return <p>Error</p>;
  }

  const { addToCart } = context;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
        setSelectedImage(response.data.image);
      } catch (error) {
        console.error("LOIIIIII", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const phantramsale = product.sale
    ? ((product.price - product.salePrice) / product.price) * 100
    : 0;

  const giamsoluong = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const tangsoluong = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const saotb =
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length;

  const sosao = [1, 2, 3, 4, 5].map(
    (star) => product.reviews.filter((review) => review.rating === star).length
  );

  const soluongsaodanhgia = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <i key={i} className="fa fa-star" style={{ color: "#3b4047" }}></i>
        );
      } else {
        stars.push(
          <i key={i} className="fa fa-star" style={{ color: "#e4e5e9" }}></i>
        );
      }
    }
    return stars;
  };

  return (
    <div className="detail">
      <div className="in4">
        <div className="image">
          <div className="top">
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="imgmini">
            {[product.image, product.image2, product.image3].map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index}`}
                  className={selectedImage === img ? "selected" : ""}
                  onClick={() => handleImageClick(img)}
                />
              )
            )}
          </div>
        </div>
        <div className="thongtin">
          <p className="uppercase">
            <span>{product.category}</span>
          </p>
          <h3>{product.name}</h3>
          <p className="discription">{product.discription}</p>
          <div className="pr">
            <span className="price">
              {product.sale ? `$${product.salePrice}` : `$${product.price}`}
            </span>
            {product.sale && (
              <>
                <div>
                  <p className="price-old">${product.price}</p>
                  <p className="discount">{phantramsale.toFixed(2)}%</p>
                </div>
              </>
            )}
          </div>
          <div className="tinh">
            <div className="quantity-controls">
              <button onClick={tangsoluong} disabled={quantity <= 1}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={giamsoluong}>+</button>
            </div>
            <div>
              <button
                className="btn-add-cart"
                onClick={() => addToCart(product, quantity)}
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="danhgia">
        <div className="chitetsanpham">
          <h3>Discription</h3>
          <p>{product.discription}</p>
          <h3>About</h3>
          <p>{product.about}</p>
        </div>
        <div className="danhgiasanpham">
          <div className="dau">
            <img src={product.image} alt={product.name} />
            <div className="star-rating">
              <span className="tb">{soluongsaodanhgia(Math.round(saotb))}</span>
              <p>
                {saotb.toFixed(1)}
                <span className="sl">({product.reviews.length})</span>
              </p>
            </div>
          </div>
          <div className="rating-summary">
            {sosao.map((count, index) => (
              <div key={index} className="star-bar">
                <span>
                  {index + 1}
                  <i className="fa fa-star" style={{ color: "#3b4047" }} />
                </span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{
                      width: `${(count / product.reviews.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <span>({count})</span>
              </div>
            ))}
          </div>
          <div className="reviews">
            <div className="cmt"></div>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <span className="review-user">{review.user}</span>
                  <span className="review-rating">
                    {soluongsaodanhgia(review.rating)}
                  </span>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
