import React from "react";
 // requires a loader


function Product() {
   
  return(
      
      <div>
        
        <section className="slider_section">
    <div className="slider_bg_box">
      <img src="images/slider-bg.jpg" alt />
    </div>
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-lg-6 ">
                <div className="detail-box">
                  <h1>
                    <span>
                      Sale 20% Off
                    </span>
                    <br />
                    On Everything
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <div className="btn-box">
                    <a href className="btn1">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-lg-6 ">
                <div className="detail-box">
                  <h1>
                    <span>
                      Sale 20% Off
                    </span>
                    <br />
                    On Everything
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <div className="btn-box">
                    <a href className="btn1">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-lg-6 ">
                <div className="detail-box">
                  <h1>
                    <span>
                      Sale 20% Off
                    </span>
                    <br />
                    On Everything
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <div className="btn-box">
                    <a href className="btn1">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to={0} className="active" />
          <li data-target="#customCarousel1" data-slide-to={1} />
          <li data-target="#customCarousel1" data-slide-to={2} />
        </ol>
      </div>
    </div>
  </section>
  <section className="inner_page_head">
    <div className="container_fuild">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <h3>Product Grid</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* end inner page section */}
  {/* product section */}
  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our <span>products</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Men's Shirt
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p1.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Men's Shirt
              </h5>
              <h6>
                $75
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p2.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Men's Shirt
              </h5>
              <h6>
                $80
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p3.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Women's Dress
              </h5>
              <h6>
                $68
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p4.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Women's Dress
              </h5>
              <h6>
                $70
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p5.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Women's Dress
              </h5>
              <h6>
                $75
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p6.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Women's Dress
              </h5>
              <h6>
                $58
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p7.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Women's Dress
              </h5>
              <h6>
                $80
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p8.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Men's Shirt
              </h5>
              <h6>
                $65
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p9.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Men's Shirt
              </h5>
              <h6>
                $65
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p10.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Men's Shirt
              </h5>
              <h6>
                $65
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p11.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Men's Shirt
              </h5>
              <h6>
                $65
              </h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href className="option1">
                  Add To Cart
                </a>
                <a href className="option2">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src="images/p12.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Women's Dress
              </h5>
              <h6>
                $65
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href>
          View All products
        </a>
      </div>
    </div>
  </section>  
</div>


  )
  
};

 export default Product;