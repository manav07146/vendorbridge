import { useState } from "react"

function Quotation() {
  const [quotations] = useState([
    {id:1, vendor:"ABC Supplies", product:"Dell Laptop", qty:10, price:45000, total:450000, delivery:"7 days", rating:4.5, status:"Pending"},
    {id:2, vendor:"XYZ Trading", product:"Dell Laptop", qty:10, price:42000, total:420000, delivery:"10 days", rating:4.0, status:"Pending"},
    {id:3, vendor:"PQR Solutions", product:"Dell Laptop", qty:10, price:48000, total:480000, delivery:"5 days", rating:4.8, status:"Pending"},
  ])

  const lowest = Math.min(...quotations.map(q=>q.total))

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <h1 style={{color:"#333",marginBottom:"8px"}}>Quotation Comparison</h1>
      <p style={{color:"#888",marginBottom:"20px"}}>RFQ: Office Laptops — Compare vendor quotes below</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px",marginBottom:"20px"}}>
        {quotations.map((q,i)=>(
          <div key={i} style={{background:"white",borderRadius:"12px",padding:"20px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:q.total===lowest?"3px solid #26de81":"3px solid transparent",position:"relative"}}>
            {q.total===lowest && (
              <div style={{position:"absolute",top:"-10px",right:"10px",background:"#26de81",color:"white",padding:"4px 12px",borderRadius:"20px",fontSize:"12px",fontWeight:"bold"}}>
                ⭐ Lowest Price
              </div>
            )}
            <h3 style={{color:"#667eea",marginTop:0}}>{q.vendor}</h3>
            <div style={{marginBottom:"8px"}}>
              <span style={{color:"#888",fontSize:"13px"}}>Unit Price</span>
              <p style={{margin:"2px 0",fontWeight:"bold",fontSize:"18px"}}>₹{q.price.toLocaleString()}</p>
            </div>
            <div style={{marginBottom:"8px"}}>
              <span style={{color:"#888",fontSize:"13px"}}>Total Amount</span>
              <p style={{margin:"2px 0",fontWeight:"bold",fontSize:"20px",color:q.total===lowest?"#26de81":"#333"}}>₹{q.total.toLocaleString()}</p>
            </div>
            <div style={{marginBottom:"8px"}}>
              <span style={{color:"#888",fontSize:"13px"}}>Delivery</span>
              <p style={{margin:"2px 0",fontWeight:"bold"}}>{q.delivery}</p>
            </div>
            <div style={{marginBottom:"16px"}}>
              <span style={{color:"#888",fontSize:"13px"}}>Rating</span>
              <p style={{margin:"2px 0",fontWeight:"bold",color:"#fd9644"}}>{"⭐".repeat(Math.floor(q.rating))} {q.rating}</p>
            </div>
            <button style={{width:"100%",padding:"10px",background:"linear-gradient(135deg,#667eea,#764ba2)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
              Select Vendor
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quotation