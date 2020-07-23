import React from 'react'
import instance from '../../../Modules/instances'
import { Modal } from '@material-ui/core';

export default function Participant(props){
    const [data,setData] = React.useState([]);
    const [showInfo,setShowInfo] = React.useState({show : false, idx : ''})
    const [send,setSend] =React.useState(false);
    
    const countTotalSold = () => {
        let count = 0; 
        data.forEach(el=>{
            count += parseInt(el.qty)
        })
        return count
    }
    
    function setStatusColor(status){
        if(status === 'ATTENDED') {
            return 'text-success'
        } else {
            return 'text-danger'
        }
    }
    const handleUpdateStat = (ev) =>{
        let target = ev.target.id.split('-')
        instance.post('/participant/status.php',{
            status : target[0],
            id : target[1],
        }).then(res=>{
            if(res.data === 'OK')
                setSend(!send)
        })
    }
    function fetchData(){
        instance.get('/participant/getParticipant.php?id='+props.match.params.id).then(res=>{
            setData(res.data);
        })
    }
    React.useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    },[send])
    function showProfile() {
        let profile = data[showInfo.idx]
        return (
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={showInfo}
            onClose={()=>setShowInfo(false)}
            >
            <div
                className="modal-dialog"
                role="document"
                style={{top:"15%"}}
            >
                <div className="modal-content">
                    <div className="modal-body">
                        <h2>{profile.name}</h2>
                        <ul>
                            <li>Email : {profile.email}</li>
                            <li>Phone : {profile.phone}</li>
                            <li>instagram : {profile.phone}</li>
                            <li>Gender : {profile.gender}</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Modal>
        )
    }
    function renderParticipant(){
        let element = [];
        data.forEach((el,idx)=>{
            element.push(
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.id}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.qty}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.name}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.email}</td>                   
                    <td className={'font-weight-bold '+setStatusColor(el.status)}>{el.status}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.payment_method}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.biller_name}</td>
                    <td onClick={()  => setShowInfo({show : true,idx})}>{el.biller_email}</td>
                    {
                        renderAction(el.status,el)
                    }                    
                </tr>
            )
        })
        return element
    }
    const renderAction = (status,el) =>{
        if(status.toUpperCase() === 'ATTENDED')
            return (<td><button className='btn partic-btn bg-danger text-white' id={'NOT ATTENDED-'+el.id} onClick={handleUpdateStat}>Cancel</button></td>)
        else if(status.toUpperCase() === 'WAITING CONFIRMATION')
            return (<td><button className='btn partic-btn bg-warning text-white' id={'NOT ATTENDED-'+el.id} onClick={handleUpdateStat}>Confirm</button></td>)
        else if(status.toUpperCase() === 'NOT ATTENDED')
            return (<td><button className='btn partic-btn bg-success text-white' id={'ATTENDED-'+el.id} onClick={handleUpdateStat}>ATTEND</button></td>)
        else
            return (<td><button className='btn btn-primary' disabled>Confirm</button></td>)
    }
    return (
        <React.Fragment>
            {showInfo.show && showProfile()}
            <div className="row my-3">
                <h2><b>Participant</b></h2>                
                
            </div>
            <p>Ticket Sold : {countTotalSold()}</p>
            <p>Total Ticket : {data.length}</p>
            <div className="row">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Qty</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Payment Method</th>
                            <th>Biller Name</th>
                            <th>Biller Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderParticipant()}
                    </tbody>
                </table>
            </div>
            {/* <div className="row float-right my-3">
                <button className="btn partic-btn partic-blue-bg py-2 px-5">Convert to .Xls</button>
            </div> */}
        </React.Fragment>
    )
}