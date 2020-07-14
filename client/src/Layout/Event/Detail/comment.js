import React from 'react'
import instance from '../../../Modules/instances';
const Comment = (props) => {
    const [text,setText] = React.useState('');
    const handleChange = (ev) => {
        setText(ev.target.value)
    }
    const onSubmit = (ev) => {
        ev.preventDefault();
        // props.update()
        instance.post('/comment/create.php',{
            message : text,
            event : props.eventid
        }).then(res=>{
            console.log(res.data);
            if(res.data === 'OK'){
                setText('')
                props.update();
            }
        })
    }
    return (
        <form onSubmit={onSubmit}>
        <div className="cont-search">
            <h2>New Comment</h2>
            <div className="row">                
                <div className="col-12 col-lg-8">
                    <textarea onChange={handleChange} className='w-100' value={text}></textarea>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="row float-right">
                        <button className="btn  partic-yellow-bg" type='submit'>Post Comment</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}
export default Comment