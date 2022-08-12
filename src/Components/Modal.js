
const Modal = ({totalPrice,emails,setModlaShow,postName,postquantity,off,setPostName,setPostquantity,setOff,setTotoalPrice}) => {
  
  return (
    <div onClick={()=>setModlaShow(false)} className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='p-2'>
 
  <div className="row mt-2">
    <div className="col">
      <input type="text" value={postName} onChange={e=>setPostName(e.target.value)} className="form-control p-1" placeholder="Post name"/>
    </div>
    <div className="col">
        <input type="number" value={totalPrice} onChange={e=>setTotoalPrice(e.target.value)} className="form-control p-1" placeholder="Total Price"/>
    </div>
    <div className="col">
        <input type="number" value={off} onChange={e=>setOff(e.target.value)} className="form-control p-1" placeholder="OFF"/>
    </div>
    <div className="col">
      <input type="number" value={postquantity} onChange={e=>setPostquantity(e.target.value)}  className="form-control p-1" placeholder="Quantity"/>
    </div>
  </div>
  <div className="row mt-2">
  <div className="col">
    <label for="exampleFormControlFile1">Chose Image for Post</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col">
    <label for="exampleFormControlTextarea1">Details</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
   </div>
  </div>
</form>
      </div>
      <div className="col">
      <h4>Emails who are wwating to order exist</h4>
      <ul>
        {emails.map(email=>(
            <li key={email.id}>{email.email}</li>
        ))}
      </ul>
      <button className="btn btn-primary">SEND EMAIL</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal