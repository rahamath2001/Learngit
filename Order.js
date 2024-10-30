import React, { useState } from 'react';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';

import './Order.css'; 
const Order = () => {
  const [reportType, setReportType] = useState('');
  const [reportprice,setReportprice]=useState(0);
  const [deliveryOption, setDeliveryOption] = useState('');
  const [deliveryprice,setdeliveryprice]=useState(0);
  const [dprice,setdprice]=useState(0);
  const [rprice,setrprice]=useState(0);

  const reportOptions = [
    { label: 'STANDARD', price: 35 },
    { label: 'EXPANDED', price: 35 },
    { label: 'CLAIMS', price: 35 },
  ];

  const deliveryOptions = [
    { label: 'RUSH', price: 15 },
    { label: 'NORMAL FREE', price: 0 },
  ];
 // const reportselect=(label)=>{
   // setReportType('${label}x1');
   // setReportprice("$35");
  //};

   const reportselect=(label)=>{
   if (label==="STANDARD"){setReportType("Standard x 1");}
   if(label==="EXPANDED"){setReportType("Expanded x 1");}
   if(label==="CLAIMS"){setReportType("Claims x 1");}
   setReportprice("$35");
   setrprice(35);
  }
  const deliveryselect=(label)=>{
    if(label==="RUSH"){
      setDeliveryOption("Rush x 1");
       setdeliveryprice("$15");
       setdprice(15);}
    else if(label==="NORMAL FREE"){
      setDeliveryOption("Normal Free x 1");
      setdeliveryprice(0);
      setdprice(0);
    }
  };
  
  const EstimatedTotal = rprice + dprice;

  
  return (
    <div>
    <div className="main-container">
     
    <div className="order-form">
      <div className="header">
        <FaHome className="home-icon" />
        <div className="address">
          <div style={{fontSize:"16px",fontWeight:"500"}}>22825 106 PL SE, WOODINVILLE, WA 90877</div>
          <div>47.7896382, -122.0884172</div>
        </div>
      </div>
      
      <hr style={{border:'1px solid #ccc',width:"100%" ,marginTop:'20px'}}/>

      <div className="options">
        <div className="report-type">
          <h4>Pick a Report Type:</h4>
          <div className="report-buttons">
          {reportOptions.map((option) => (
            <div key={option.label}className="report-option">
            <button
              // key={option.label}
              className={`report-button ${reportType.includes(option.label) ? 'selected' : ''}`}
              onClick={() => reportselect(option.label)}>
            
                <div className="button-text">
              {option.label}
              <div>${option.price}</div>
              </div>
              </button>
              <a href="#" className="sample-link"><u>View Sample</u></a>
            
              </div>
          ))}
          </div>
        </div>
  
        <div className="delivery-option">
          <h4>Pick a Delivery Option:</h4>
          <div className="report-buttons">
          {deliveryOptions.map((option) => (
            <div key={option.label} className="delivery-option-items">
            <button
              // key={option.label}
              className={`delivery-button ${deliveryOption.includes(option.label) ? 'selected' : ''}`}
              onClick={() => deliveryselect(option.label)}
            >
                <div className="button-text">
              {option.label}
              <div>{option.price === 0 ?'FREE': `$${option.price}` }</div>
              </div>
              
                </button>
                <FaQuestionCircle className="question-icon" />

            </div>
          ))}
          </div>
        </div>
      </div>

      <hr style={{border:'1px solid #ccc',width:"100%" ,marginTop:'20px'}}/>
      
      <div className="form-section">
        <div className="box">
        <label For="text">
          Notes to Production Team
          <FaQuestionCircle className="question-icon" />
          </label>
          <input type="text" placeholder="Enter notes here" />
          </div>
        
        
         <div className="box">
        <label For="text">
          Send Report to Additional Emails
          <FaQuestionCircle className="question-icon"/>
        </label>
        <input type="email" placeholder="Enter additional email addresses"/>
        </div>
        
        <div className="box">
        <label>
          Claims Number (optional)
          <FaQuestionCircle className="question-icon" />
        </label>
        <input type="text" placeholder="Enter claims number" />
        </div>
        
      </div>
   </div>
   <div className="summary">
        <h3>SUMMARY</h3>
         <div className="order2">{reportType}</div>
         <div className="order">{reportprice }</div>
         <div className="order21">{deliveryOption}</div>
         <div className="order1">{deliveryprice }</div>

         <hr style={{border:'1px solid #ccc',margin:'4px 0'}}/>
          
         <div className='total1'
         style={{ fontWeight: 'bold' }}>Estimated Total</div>
         <div className='total'
         style={{ fontWeight: 'bold' }}>${EstimatedTotal}</div>
         
        <button className="confirm-order-button">Confirm Order</button>
      </div>
   </div>
        
      <div className="order-form1">
      <div className="header">
        <FaHome className="home-icon" />
        <div className="address">
          <div style={{fontSize:"16px",fontWeight:"500"}}>22825 106 PL SE, WOODINVILLE, WA 90877</div>
          <div>47.7896382, -122.0884172</div>
        </div>
      </div>
          
      </div>
      </div>   
    
  );
};
export default Order;
