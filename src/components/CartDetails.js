import React from 'react';
import img from "../images/original.png"
import likeImg from "../images/Vector.png"
import cardImg from "../images/product_Item.png"
import ebo from "../images/ebo.png"
import IMG1 from "../images/1.png"
import IMG2 from "../images/2.png"
import IMG3 from "../images/3.png"
import IMG4 from "../images/4.png"
const CardDetails = () => {
    return (
        <div>
        <div className='row p-4 m-0'    >
            <section className=' col p-2'>
            <div className=''>
              <img src={img} className='original_img'/>
              <img src={likeImg} className='vector_img'/>
            </div>
            </section>
            <section className='col p-2'>
                <div className=''>
                <p className='Anniversary-text'>Anniversary Decor Header-test</p>
                <p className='decorator-text'>Purple Anniversary Decor with Occassion lighting</p>
                <p className='border border-bottom'></p>
                <p className='d-flex justify-content-start'><span className='discount-price'>₹ 2500 </span><span className='original-price mt-1'>₹ 3500</span><span className='off-price'>20% off</span></p>
                <button className='btn-add'>Add</button>
                </div>
                <div className=' my-2 p-2 border border-2'>
                    <div className='d-flex justify-content-start'>
                    <div className='btn-radius'>Balloons</div>
                    <div className='btn-radius'>Foil Balloons</div>
                    <div className='btn-radius' style={{backgroundColor:"#2136D4",color:"white"}}>LIGHTS</div>
                    </div>
                    <div className='my-2 d-flex'>
                        {[1,2,3].map((data)=>(
                        <div key={data} className='cart-size mx-1'>
                            <img src={cardImg} className='card-item d-flex' height="106px" width="131px " />
                            <p className="cart-desc p-1">50 Additional Balloons </p>
                            <p className="cart-sub-desc p-1">Matching to the Decor Theme</p>
                            <p className='cart-org-price ml-1 mb-0'>₹ 320  </p>
                            <div className='d-flex justify-content-between p-1'>
                                <p className='cart-dis-price'>₹ 100  </p>
                                <button className='cart-add-btn'>Add</button>
                            </div>
                        </div>
                        ))}
                    </div>
                        <p className='cart-footer p-1'>Lights that Glow up the area. 
All lights will be on rent, to be returned the next day.</p>
                 
                </div>

                <div className=''>

                </div>
                        
            </section>
            <section className='col p-2'>
                <div className='border border-3'>
                    <div className='border m-3 p-2 border-2 d-flex justify-contet-between'>
                        <p className='desc-bold'>Celebrating on Fri, 27 January</p>
                        <p className='desc-blue'>Check available time slot</p>
                    </div>
                    <p className='desc-bold mx-4 mb-1 '>Please add to proceed</p>
                    <button className='view-cart-btn mx-4 text-white'>View Cart</button>
                    <div className='border border-bottom mx-2 my-2'></div>
                    <p className='desc-bold mx-4 m '>Browse through special Offers</p>
                    <div className='border m-2 d-flex flex-column p-2'>
                        
                        <p className='off-text'><span><img src={ebo} height="15px" width="20px"
                        /></span>Flat 10% off on all orders above 1999 <span className='bg-light p-1 rounded-circle' style={{fontSize:"10px"}}>&gt; </span></p>
                    {/* <p className='mt-0 border border-danger off-text'> USE EBONOW</p> */}
                    </div>
                    <p className='desc-bold text-center' style={{fontSize:"8px"}}>Get additional discount in payment section</p>

                    <p className='desc-blue mt-0 text-center' style={{fontSize:"8px"}}>view all offers &gt;</p>
                    <div className='border border-bottom mx-4'></div>
                    <div className='d-flex p-2 justify-content-center'>
                        <div>
                        <img src={IMG4} height={"40"} width={"47"}/> 
                        <p style={{fontSize:"8px",fontWeight:"bold"}} className='text-center'>Quality Assurance</p>
                        </div>
                        <div>
                        <img src={IMG3} height={"40"} width={"47"}/> 
                        <p style={{fontSize:"8px",fontWeight:"bold"}} className='text-center'>Professional Service</p>
                        </div>
                        <div>
                        <img src={IMG2} height={"40"} width={"47"}/> 
                        <p style={{fontSize:"8px",fontWeight:"bold"}} className='text-center'>Value for Money</p>
                        </div>
                        <div>
                        <img src={IMG1} height={"40"} width={"47"}/> 
                        <p style={{fontSize:"8px",fontWeight:"bold"}} className='text-center'>Variety of Designs</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default CardDetails;
