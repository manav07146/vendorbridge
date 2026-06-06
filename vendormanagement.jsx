import { useState } from "react"

function VendorManagement() {
  const [vendors, setVendors] = useState([
    {id:1, name:"ABC Supplies", category:"Electronics", gst:"GST001", contact:"9876543210", status:"Active"},
    {id:2, name:"XYZ Trading", category:"Hardware", gst:"GST002", contact:"9876543211", status:"Active"},
    {id:3, name:"PQR Solutions", category:"Software", gst:"GST003", contact:"9876543212", status:"Inactive"},
  ])
  const [showForm, setShowForm] = useState(false)
  const [newVendor, setNewVendor] = useState({name:"",category:"",gst:"",contact:""})

  const addVendor = () => {
    setVendors([...vendors, {...newVendor, id:vendors.length+1, status:"Active"}])
    setShowForm(false)
    setNewVendor({name:"",category:"",gst:"",contact:""})
  }

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
        <h1 style={{color:"#333",margin:0}}>Vendor Management</h1>
        <button onClick={()=>setShowForm(!showForm)}
          style={{padding:"10px 20px",background:"linear-gradient(135deg,#667eea,#764ba2)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
          + Add Vendor
        </button>
      </div>

      {showForm && (
        <div style={{background:"white",padding:"20px",borderRadius:"12px",marginBottom:"20px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
          <h3 style={{marginTop:0}}>Add New Vendor</h3>
          {["name","category","gst","contact"].map(field=>(
            <input key={field} placeholder={field.toUpperCase()}
              value={newVendor[field]}
              onChange={e=>setNewVendor({...newVendor,[field]:e.target.value})}
              style={{width:"100%",padding:"10px",marginBottom:"10px",border:"1px solid #ddd",borderRadius:"8px",boxSizing:"border-box"}}/>
          ))}
          <button onClick={addVendor}
            style={{padding:"10px 20px",background:"#26de81",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
            Save Vendor
          </button>
        </div>
      )}

      <div style={{background:"white",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead>
            <tr style={{background:"linear-gradient(135deg,#667eea,#764ba2)"}}>
              {["Name","Category","GST","Contact","Status"].map(h=>(
                <th key={h} style={{padding:"12px",color:"white",textAlign:"left"}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vendors.map((v,i)=>(
              <tr key={v.id} style={{background:i%2===0?"#f9f9f9":"white"}}>
                <td style={{padding:"12px"}}>{v.name}</td>
                <td style={{padding:"12px"}}>{v.category}</td>
                <td style={{padding:"12px"}}>{v.gst}</td>
                <td style={{padding:"12px"}}>{v.contact}</td>
                <td style={{padding:"12px"}}>
                  <span style={{padding:"4px 10px",borderRadius:"20px",fontSize:"12px",background:v.status==="Active"?"#e8f8f0":"#ffe8e8",color:v.status==="Active"?"#26de81":"#ff6b6b"}}>
                    {v.status}
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

export default VendorManagement