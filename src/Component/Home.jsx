import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addCartData } from "../redux/Slice";
import Webservice from "../Service/Webservice";
import WebAPI from "../Service/WebAPI";


function Home()
{
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
     loadProducts();  
    },[])

    var loadProducts = async ()=>{
        var resp = await Webservice.getAPICall(WebAPI.productAPI);
        console.log("Data is : "+resp);
        console.log("String Data is : "+JSON.stringify(resp))
        setProductData(resp.data.products);
    }
  return<div className="container">
    <h1 style={{textAlign:'center',color:'red'}}>Home Component Called....</h1>
    <div className="row">
        {productData.map((pData)=>{
              return<div className="col-md-3 well">
                <p><img src={pData.thumbnail} height={100} width={100}/></p>
                <div>
                    <b>Name : {pData.title}</b><br/><br/>
                    <b>Category : {pData.category}</b><br/><br/>
                    <b>Price : {pData.price}</b><br/><br/>
                    <b>Rating : {pData.rating}</b><br/><br/>
                    <b>Discount %: {pData.discountPercentage}</b><br/><br/>
                    <button className="btn btn-success" onClick={()=>dispatch(addCartData(pData))}>Add to Cart</button>
                </div>
              </div>
        })}
    </div>
  </div>
}
export default Home;


