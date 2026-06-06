function Reports() {
  const vendors = [
    {name:"ABC Supplies",orders:8,value:850000,rating:4.5,onTime:"95%"},
    {name:"XYZ Trading",orders:12,value:1200000,rating:4.0,onTime:"88%"},
    {name:"PQR Solutions",orders:5,value:450000,rating:4.8,onTime:"98%"},
  ]
  const monthly = [
    {month:"Jan",amount:200000},
    {month:"Feb",amount:350000},
    {month:"Mar",amount:280000},
    {month:"Apr",amount:420000},
    {month:"May",amount:380000},
    {month:"Jun",amount:495600},
  ]
  const max = Math.max(...monthly.map(m=>m.amount))

  return (
    <div style={{minHeight:"100vh",background:"#f5f6fa",padding:"20px"}}>
      <h1 style={{color:"#333",marginBottom:"20px"}}>Reports & Analytics</h1>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px",marginBottom:"20px"}}>
        {[
          {title:"Total Spending",value:"₹25,00,000",color:"#667eea"},
          {title:"Total Orders",value:"25",color:"#26de81"},
          {title:"Active Vendors",value:"3",color:"#fd9644"},
        ].map((c,i)=>(
          <div key={i} style={{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",borderLeft:`4px solid ${c.color}`}}>
            <p style={{color:"#888",fontSize:"13px",margin:"0 0 8px"}}>{c.title}</p>
            <h2 style={{margin:0,color:c.color}}>{c.value}</h2>
          </div>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
        <div style={{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
          <h3 style={{color:"#333",marginTop:0}}>Monthly Spending Trend</h3>
          <div style={{display:"flex",alignItems:"flex-end",gap:"12px",height:"150px"}}>
            {monthly.map((m,i)=>(
              <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"}}>
                <div style={{width:"100%",background:"linear-gradient(135deg,#667eea,#764ba2)",borderRadius:"4px 4px 0 0",height:`${(m.amount/max)*130}px`}}></div>
                <span style={{fontSize:"11px",color:"#888"}}>{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"white",padding:"20px",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}>
          <h3 style={{color:"#333",marginTop:0}}>Vendor Performance</h3>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead>
              <tr style={{background:"#f5f6fa"}}>
                {["Vendor","Orders","Value","Rating","On Time"].map(h=>(
                  <th key={h} style={{padding:"8px",textAlign:"left",fontSize:"12px",color:"#888"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vendors.map((v,i)=>(
                <tr key={i} style={{borderBottom:"1px solid #f0f0f0"}}>
                  <td style={{padding:"8px",fontSize:"13px",fontWeight:"bold"}}>{v.name}</td>
                  <td style={{padding:"8px",fontSize:"13px"}}>{v.orders}</td>
                  <td style={{padding:"8px",fontSize:"13px",color:"#667eea"}}>₹{v.value.toLocaleString()}</td>
                  <td style={{padding:"8px",fontSize:"13px",color:"#fd9644"}}>⭐{v.rating}</td>
                  <td style={{padding:"8px",fontSize:"13px",color:"#26de81"}}>{v.onTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports