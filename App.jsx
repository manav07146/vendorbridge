import { useState } from "react"
import Dashboard from "./Dashboard"
import VendorManagement from "./VendorManagement"
import RFQ from "./RFQ"
import Quotation from "./Quotation"
import Approval from "./Approval"
import PurchaseOrder from "./PurchaseOrder"

function App() {
  const [page, setPage] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const NavBar = () => (
    <nav style={{background:"linear-gradient(135deg,#667eea,#764ba2)",padding:"12px 20px",display:"flex",gap:"10px",flexWrap:"wrap"}}>
      {[
        {label:"Dashboard",key:"dashboard"},
        {label:"Vendors",key:"vendors"},
        {label:"RFQ",key:"rfq"},
        {label:"Quotations",key:"quotation"},
        {label:"Approvals",key:"approval"},
        {label:"PO & Invoice",key:"po"},
      ].map(btn=>(
        <button key={btn.key} onClick={()=>setPage(btn.key)}
          style={{background:page===btn.key?"rgba(255,255,255,0.4)":"rgba(255,255,255,0.2)",color:"white",border:"none",padding:"8px 16px",borderRadius:"8px",cursor:"pointer",fontWeight:"bold"}}>
          {btn.label}
        </button>
      ))}
    </nav>
  )

  if (page === "dashboard") return <><NavBar/><Dashboard/></>
  if (page === "vendors") return <><NavBar/><VendorManagement/></>
  if (page === "rfq") return <><NavBar/><RFQ/></>
  if (page === "quotation") return <><NavBar/><Quotation/></>
  if (page === "approval") return <><NavBar/><Approval/></>
  if (page === "po") return <><NavBar/><PurchaseOrder/></>

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#667eea,#764ba2)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"white",padding:"40px",borderRadius:"16px",width:"380px",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
        <h1 style={{textAlign:"center",color:"#667eea",marginBottom:"8px"}}>VendorBridge</h1>
        <p style={{textAlign:"center",color:"#888",marginBottom:"30px"}}>Procurement ERP</p>
        <input type="email" placeholder="Email" value={email}
          onChange={e=>setEmail(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"16px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",boxSizing:"border-box"}}/>
        <input type="password" placeholder="Password" value={password}
          onChange={e=>setPassword(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"24px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",boxSizing:"border-box"}}/>
        <button onClick={()=>setPage("dashboard")}
          style={{width:"100%",padding:"12px",background:"linear-gradient(135deg,#667eea,#764ba2)",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",cursor:"pointer",fontWeight:"bold"}}>
          Login
        </button>
        <p style={{textAlign:"center",marginTop:"16px",color:"#888",fontSize:"14px"}}>
          Don't have an account? <span style={{color:"#667eea",cursor:"pointer"}}>Sign Up</span>
        </p>
      </div>
    </div>
  )
}

export default App