function Dashboard() {
  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <div style={{background:"linear-gradient(135deg,#667eea,#764ba2)",padding:"20px",borderRadius:"12px",marginBottom:"20px"}}>
        <h1 style={{color:"white",margin:0}}>VendorBridge Dashboard</h1>
        <p style={{color:"rgba(255,255,255,0.8)",margin:"5px 0 0"}}>Welcome back!</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
        {[
          {title:"Pending Approvals",value:"5",color:"#ff6b6b"},
          {title:"Active RFQs",value:"12",color:"#667eea"},
          {title:"Purchase Orders",value:"8",color:"#26de81"},
          {title:"Invoices",value:"15",color:"#fd9644"}
        ].map((card,i)=>(
          <div key={i} style={{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",borderLeft:`4px solid ${card.color}`}}>
            <p style={{color:"#888",fontSize:"12px",margin:"0 0 8px"}}>{card.title}</p>
            <h2 style={{margin:0,color:card.color,fontSize:"32px"}}>{card.value}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard