import { useState } from "react"

function RFQ() {
  const [rfqs, setRfqs] = useState([
    {id:1, title:"Office Laptops", product:"Dell Laptop", qty:10, deadline:"2026-06-15", vendor:"ABC Supplies", status:"Open"},
    {id:2, title:"Office Chairs", product:"Ergonomic Chair", qty:20, deadline:"2026-06-20", vendor:"XYZ Trading", status:"Closed"},
  ])
  const [showForm, setShowForm] = useState(false)
  const [newRFQ, setNewRFQ] = useState({title:"",product:"",qty:"",deadline:"",vendor:""})

  const addRFQ = () => {
    setRfqs([...rfqs, {...newRFQ, id:rfqs.length+1, status:"Open"}])
    setShowForm(false)
    setNewRFQ({title:"",product:"",qty:"",deadline:"",vendor:""})
  }

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
        <h1 style={{color:"#333",margin:0}}>RFQ Management</h1>
        <button onClick={()=>setShowForm(!showForm)}
          style={{padding:"10px 20px",background:"linear-gradient(135deg,#667eea,#764ba2)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
          + Create RFQ
        </button>
      </div>

      {showForm && (
        <div style={{background:"white",padding:"20px",borderRadius:"12px",marginBottom:"20px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
          <h3 style={{marginTop:0}}>Create New RFQ</h3>
          {[
            {key:"title",label:"RFQ Title"},
            {key:"product",label:"Product/Service"},
            {key:"qty",label:"Quantity"},
            {key:"vendor",label:"Vendor Name"}
          ].map(f=>(
            <input key={f.key} placeholder={f.label}
              value={newRFQ[f.key]}
              onChange={e=>setNewRFQ({...newRFQ,[f.key]:e.target.value})}
              style={{width:"100%",padding:"10px",marginBottom:"10px",border:"1px solid #ddd",borderRadius:"8px",boxSizing:"border-box"}}/>
          ))}
          <input type="date"
            value={newRFQ.deadline}
            onChange={e=>setNewRFQ({...newRFQ,deadline:e.target.value})}
            style={{width:"100%",padding:"10px",marginBottom:"10px",border:"1px solid #ddd",borderRadius:"8px",boxSizing:"border-box"}}/>
          <button onClick={addRFQ}
            style={{padding:"10px 20px",background:"#26de81",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
            Submit RFQ
          </button>
        </div>
      )}

      <div style={{background:"white",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead>
            <tr style={{background:"linear-gradient(135deg,#667eea,#764ba2)"}}>
              {["Title","Product","Qty","Deadline","Vendor","Status"].map(h=>(
                <th key={h} style={{padding:"12px",color:"white",textAlign:"left"}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rfqs.map((r,i)=>(
              <tr key={r.id} style={{background:i%2===0?"#f9f9f9":"white"}}>
                <td style={{padding:"12px"}}>{r.title}</td>
                <td style={{padding:"12px"}}>{r.product}</td>
                <td style={{padding:"12px"}}>{r.qty}</td>
                <td style={{padding:"12px"}}>{r.deadline}</td>
                <td style={{padding:"12px"}}>{r.vendor}</td>
                <td style={{padding:"12px"}}>
                  <span style={{padding:"4px 10px",borderRadius:"20px",fontSize:"12px",background:r.status==="Open"?"#e8f8f0":"#ffe8e8",color:r.status==="Open"?"#26de81":"#ff6b6b"}}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RFQ