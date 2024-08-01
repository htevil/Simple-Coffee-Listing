import React from 'react';
import Star_fill from "../../asset/Star_fill.svg"
import Star from "../../asset/Star.svg"

const Card = ({ value }) => {
    return (
        <div className="container2">
            {value.map(item => (
                <div className="card" id={item.id} key={item.id}>
                    <div className='poster' style={{ backgroundImage: `url(${item.image})` }}>
                        {item.popular && <span>Popular</span>}
                    </div>
                    <div  style={{ display: 'flex', justifyContent: "space-between", marginBottom: "8px"}} >
                        <div className='name' style={{ fontSize: "16px" }}>{item.name}</div>
                        <div className='price'>{item.price}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}} >
                        { (item.votes > 0) ? 
                        <div style={{ display: 'flex', alignItems: "center"}} >
                            <img src={Star_fill} alt="Star_fill.logo"/>
                            <span>{item.rating}</span><span style={{ color: "#6F757C"}}>({item.votes})</span>
                        </div> : 
                        <div style={{ display: 'flex', alignItems: "center"}} >
                            <img src={Star} alt="star.logo"/>
                            <span style={{ color: "#6F757C"}}>No rating</span>
                        </div> }
                        {!item.available && <span style={{ color: "#ED735D"}}>sold out</span>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;