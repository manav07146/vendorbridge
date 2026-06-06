import { useState } from "react"

function Approval() {
  const [approvals, setApprovals] = useState([
    {id:1, rfq:"Office Laptops", vendor:"XYZ Trading", amount:420000, requestedBy:"John", status:"Pending", date:"2026-06-06"},
    {id:2, rfq:"Office Chairs", vendor:"ABC Supplies", amount:150000, requestedBy:"Sarah", status:"Pending", date:"2026-06-05"},
    {id:3, rfq:"Printers", vendor:"PQR Solutions", amount:80000, requestedBy:"Mike", status:"Approved", date:"2026-06-04"},
  ])
  const [remark, setRemark] = useState("")

  const handleAction = (id, action) => {
    setApprovals(approvals.map(a => a.id===id ? {...a, status:action} : a))
  }

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <h1 style={{color:"#333",marginBottom:"20px"}}>Approval Workflow</h1>
      {approvals.map((a,i)=>(
        <div key={i} style={{background:"white",borderRadius:"12px",padding:"20px",marginBottom:"16px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"}}>
            <div>
              <h3 style={{margin:0,color:"#333"}}>{a.rfq}</h3>
              <p style={{margin:"4px 0",color:"#888",fontSize:"13px"}}>Vendor: {a.vendor} | Requested by: {a.requestedBy} | Date: {a.date}</p>
            </div>
            <span style={{padding:"6px 14px",borderRadius:"20px",fontSize:"13px",fontWeight:"bold",
              background:a.status==="Approved"?"#e8f8f0":a.status==="Rejected"?"#ffe8e8":"#fff8e8",
              color:a.status==="Approved"?"#26de81":a.status==="Rejected"?"#ff6b6b":"#fd9644"}}>
              {a.status}
            </span>
          </div>
          <div style={{display:"flex",gap:"20px",marginBottom:"12px"}}>
            <div style={{background:"#f5f6fa",padding:"12px 20px",borderRadius:"8px"}}>
              <p style={{margin:0,color:"#888",fontSize:"12px"}}>Total Amount</p>
              <p style={{margin:0,fontWeight:"bold",fontSize:"18px",color:"#667eea"}}>₹{a.amount.toLocaleString()}</p>
            </div>
          </div>
          {a.status==="Pending" && (
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <input placeholder="Add remark..." value={remark}
                onChange={e=>setRemark(e.target.value)}
                style={{flex:1,padding:"8px 12px",border:"1px solid #ddd",borderRadius:"8px"}}/>
              <button onClick={()=>handleAction(a.id,"Approved")}
                style={{padding:"8px 20px",background:"#26de81",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
                ✅ Approve
              </button>
              <button onClick={()=>handleAction(a.id,"Rejected")}
                style={{padding:"8px 20px",background:"#ff6b6b",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
                ❌ Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Approval