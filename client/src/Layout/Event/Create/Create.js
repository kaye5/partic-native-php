import React from 'react'
import './Create.css'
import instance from '../../../Modules/instances'
export default function Create(){
    const [currency,setCurrency] = React.useState('IDR');
    const [city,setCity] = React.useState({})
    const [cat,setCat] = React.useState({})
    const [data,setData] = React.useState({
        city : '1',
        cat : '1'
    });
    function handleClick(event){
        setCurrency(event.target.id)
    }
    const onChange = (ev) =>{
        setData({...data,[ev.target.name] : ev.target.value})
    }
    const handleImgChange = (ev) => {
        setData({...data,image : ev.target.files[0]});        
    };
    const onSubmit = (ev) => {
        ev.preventDefault();
        let form = new FormData();
        for(let key in data)
            form.set(key,data[key]);
        instance.post('/event/create.php',form,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            if(res.data === 'OK')
                window.location.href = '/events/my'
        })
    }
    
    function renderOption(data){
        let el = [];
        for(let key in data){
            el.push(<option  value={1+parseInt(key)} onChange={onChange}>{data[key]}</option>)
        }
        return el
    }
    function fetchData(){
        instance.get(`/category/get.php`).then(res=>{
            setCat(res.data)      
        })
        instance.get(`/city/get.php`).then(res=>{
            setCity(res.data)
        })
    }
    React.useState(()=>{
        fetchData();
    },[city])
    function imagePre(){
        try {
            return URL.createObjectURL(data.image)
        } catch (error) {
            return "https://via.placeholder.com/1080x1350"
        }
    }
    return(
        <React.Fragment>
            <div className="row font-weight-bold">
                <h2>Create Events</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 font-weight-bold mb-4">
                <form onSubmit={onSubmit}>
                    <div className="create-input">
                        <label>Event name</label>
                        <input className="form-control" type="text" name="name" required onChange={onChange}/>
                    </div>
                    <div className="create-input">
                        <label>Description</label>
                        <textarea className="form-control textarea" name="desc" required maxLength="800" onChange={onChange}/>
                    </div>
                    <div className="create-input">
                        <label>Price</label>
                        <div className="row">
                            <div className="col-4 col-sm-3 col-lg-3 p-0">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currency}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <span className="dropdown-item" onClick={(ev)=>handleClick(ev)} id="IDR">IDR</span>
                                        <span className="dropdown-item" onClick={(ev)=>handleClick(ev)} id="USD">USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-sm-9 col-lg-6 p-0">
                                <input className="form-control" type="number" name="price" required onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input" style={{width:"50%"}}>
                        <label>Slot</label>
                        <input className="form-control" type="number" name="slot" required onChange={onChange} min='0'/>
                    </div>
                    <div className='create-input'>
                        <label>Category</label>
                        
                        <select name='cat' id="category" className="form-control" onChange={onChange}>
                        {renderOption(cat || {})}
                        </select>
                    </div>
                    <div className='create-input'>
                        <label>city</label>                     
                        <select name='city' id="city" className="form-control" onChange={onChange}>
                        {renderOption(city  || {})}
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Date</label></div>
                            <div className="row">
                                <input type="datetime-local"  name="start" required className="partic-date-picker" onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input">
                        <label>Location</label>
                        <input className="form-control" type="text" name="location" required onChange={onChange}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Open Registration</label></div>
                            <div className="row">
                                <input type="date" name="open" required className="partic-date-picker" onChange={onChange}/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 p-0">
                            <div className="row"><label>Close Registration</label></div>
                            <div className="row">
                                <input type="date"  name="end" required className="partic-date-picker" onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5">Create Event</button>
                    </div>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <div className="create-img">
                    <img src={imagePre()} alt="post" width="100%"className="img"/>
                    <input type='file' className="btn partic-btn partic-yellow-bg create-img-text" onChange={handleImgChange}/>
                    </div>                    
                </div>
            </div>                
        </React.Fragment>
    )
}
