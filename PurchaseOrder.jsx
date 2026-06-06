import { useState } from "react"

function PurchaseOrder() {
  const [pos] = useState([
    {id:"PO-001", vendor:"XYZ Trading", product:"Dell Laptop", qty:10, price:42000, tax:18, date:"2026-06-06", status:"Active"},
    {id:"PO-002", vendor:"ABC Supplies", product:"Office Chair", qty:20, price:7500, tax:18, date:"2026-06-05", status:"Active"},
  ])
  const [selectedPO, setSelectedPO] = useState(null)

  const subtotal = selectedPO ? selectedPO.qty * selectedPO.price : 0
  const taxAmount = selectedPO ? (subtotal * selectedPO.tax) / 100 : 0
  const total = subtotal + taxAmount

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <h1 style={{color:"#333",marginBottom:"20px"}}>Purchase Orders & Invoices</h1>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
        <div>
          <h3 style={{color:"#667eea"}}>Purchase Orders</h3>
          {pos.map((po,i)=>(
            <div key={i} onClick={()=>setSelectedPO(po)}
              style={{background:"white",padding:"16px",borderRadius:"12px",marginBottom:"12px",cursor:"pointer",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:selectedPO?.id===po.id?"2px solid #667eea":"2px solid transparent"}}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4 style={{margin:0,color:"#333"}}>{po.id}</h4>
                <span style={{color:"#26de81",fontSize:"12px",fontWeight:"bold"}}>{po.status}</span>
              </div>
              <p style={{margin:"4px 0",color:"#888",fontSize:"13px"}}>{po.vendor} — {po.product}</p>
              <p style={{margin:0,fontWeight:"bold",color:"#667eea"}}>₹{(po.qty*po.price).toLocaleString()}</p>
            </div>
          ))}
        </div>

        {selectedPO && (
          <div style={{background:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
            <div style={{borderBottom:"2px solid #667eea",paddingBottom:"12px",marginBottom:"16px"}}>
              <h2 style={{margin:0,color:"#667eea"}}>INVOICE</h2>
              <p style={{margin:"4px 0",color:"#888",fontSize:"13px"}}>Invoice #INV-{selectedPO.id.split("-")[1]}</p>
              <p style={{margin:0,color:"#888",fontSize:"13px"}}>Date: {selectedPO.date}</p>
            </div>
            <p><strong>Vendor:</strong> {selectedPO.vendor}</p>
            <p><strong>Product:</strong> {selectedPO.product}</p>
            <table style={{width:"100%",borderCollapse:"collapse",marginBottom:"16px"}}>
              <thead>
                <tr style={{background:"#f5f6fa"}}>
                  <th style={{padding:"8px",textAlign:"left"}}>Item</th>
                  <th style={{padding:"8px",textAlign:"right"}}>Qty</th>
                  <th style={{padding:"8px",textAlign:"right"}}>Price</th>
                  <th style={{padding:"8px",textAlign:"right"}}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding:"8px"}}>{selectedPO.product}</td>
                  <td style={{padding:"8px",textAlign:"right"}}>{selectedPO.qty}</td>
                  <td style={{padding:"8px",textAlign:"right"}}>₹{selectedPO.price.toLocaleString()}</td>
                  <td style={{padding:"8px",textAlign:"right"}}>₹{subtotal.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div style={{borderTop:"1px solid #eee",paddingTop:"12px"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}>
                <span>Subtotal:</span><span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}>
                <span>GST ({selectedPO.tax}%):</span><span>₹{taxAmount.toLocaleString()}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",fontWeight:"bold",fontSize:"18px",color:"#667eea"}}>
                <span>Total:</span><span>₹{total.toLocaleString()}</span>
              </div>
            </div>
            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
              <button onClick={()=>window.print()}
                style={{flex:1,padding:"10px",background:"linear-gradient(135deg,#667eea,#764ba2)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
                🖨️ Print Invoice
              </button>
              <button style={{flex:1,padding:"10px",background:"#26de81",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
                📧 Email Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PurchaseOrder