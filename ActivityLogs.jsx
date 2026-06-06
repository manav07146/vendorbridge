function ActivityLogs() {
  const logs = [
    {id:1, action:"RFQ Created", detail:"Office Laptops RFQ created", user:"John", time:"10:30 AM", type:"rfq"},
    {id:2, action:"Quotation Received", detail:"ABC Supplies submitted quote ₹450,000", user:"Vendor", time:"11:00 AM", type:"quote"},
    {id:3, action:"Approval Granted", detail:"Office Laptops PO approved", user:"Manager", time:"11:30 AM", type:"approval"},
    {id:4, action:"PO Generated", detail:"PO-001 generated for XYZ Trading", user:"John", time:"12:00 PM", type:"po"},
    {id:5, action:"Invoice Created", detail:"INV-001 created ₹495,600", user:"John", time:"12:30 PM", type:"invoice"},
    {id:6, action:"Vendor Added", detail:"PQR Solutions registered", user:"Admin", time:"09:00 AM", type:"vendor"},
  ]
  const colors = {rfq:"#667eea",quote:"#fd9644",approval:"#26de81",po:"#764ba2",invoice:"#ff6b6b",vendor:"#26de81"}

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <h1 style={{color:"#333",marginBottom:"20px"}}>Activity Logs & Notifications</h1>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
        <div>
          <h3 style={{color:"#667eea"}}>Recent Activities</h3>
          {logs.map((log,i)=>(
            <div key={i} style={{background:"white",padding:"16px",borderRadius:"12px",marginBottom:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",borderLeft:`4px solid ${colors[log.type]}`}}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4 style={{margin:0,color:"#333"}}>{log.action}</h4>
                <span style={{color:"#888",fontSize:"12px"}}>{log.time}</span>
              </div>
              <p style={{margin:"4px 0",color:"#888",fontSize:"13px"}}>{log.detail}</p>
              <span style={{fontSize:"12px",color:colors[log.type],fontWeight:"bold"}}>by {log.user}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{color:"#667eea"}}>Notifications</h3>
          {[
            {msg:"New quotation received from ABC Supplies",time:"11:00 AM",color:"#fd9644"},
            {msg:"PO-001 approved by Manager",time:"11:30 AM",color:"#26de81"},
            {msg:"Invoice INV-001 generated",time:"12:30 PM",color:"#667eea"},
            {msg:"New vendor PQR Solutions added",time:"09:00 AM",color:"#26de81"},
          ].map((n,i)=>(
            <div key={i} style={{background:"white",padding:"16px",borderRadius:"12px",marginBottom:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
              <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <div style={{width:"10px",height:"10px",borderRadius:"50%",background:n.color}}></div>
                <p style={{margin:0,color:"#333",fontSize:"14px"}}>{n.msg}</p>
              </div>
              <p style={{margin:"4px 0 0 20px",color:"#888",fontSize:"12px"}}>{n.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityLogs 