import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let [alert, setAlert] = useState(true);
  useEffect(()=>{
    setTimeout(() => { setAlert(false) }, 2000);
  },[]);
  
  let [count, setCount] = useState(0);

  
  let {id} = useParams();
  
  let findData = props.shoes.find(function(x){
    return x.id == id;
  });
  
    return(
      <div className="container">
        {
          alert == true 
          ? <div className="alert alert-warning">
            2초이내 구매시 할인
            </div> 
            : null
        }
        <button onClick={()=>{setCount(count+1)}}>버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id)+1) + ".jpg"} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findData.title}</h4>
            <p>{findData.content}</p>
            <p>{findData.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
}

export default Detail;