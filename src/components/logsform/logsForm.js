import React from 'react';
import { useRef,useState } from 'react';
import Card from '../UI/Card/Card';
import "./logsForm.css"

const LogsForm = (props) =>{


    const descRef = useRef();
    const [inputDate,setInputDate] = useState('');
    const [inputDesc,setInputDesc] = useState('');
    const [inputTime,setInputTime] = useState('');
    // const [formData,setFormData] = useState({
    //     inputDate:'',
    //     inputDesc:'',
    //     inputTime:''
    // })
    // let inputDate = ""
    // let inputDesc = ""
    // let inputTime = 0

    const descChangeHandler = (e) =>{
       // console.log(descRef.current.value);
        console.log(e)
        setInputDesc(e.target.value);
        // setFormData({
        //     ...formData,
        //     inputDesc:e.target.value
        // });
    }
    const dateChangeHandler = (e) =>{
       // console.log(descRef.current.value);
        console.log(e)
        setInputDate(e.target.value);
        // setFormData({
        //     ...formData,
        //     inputDate:e.target.value
        // });
    }
    const timeChangeHandler = (e) =>{
       // console.log(descRef.current.value);
        console.log(e)
        setInputTime(e.target.value);
        // setFormData({
        //     ...formData,
        //     inputTime:e.target.value
        // });
    }


    const formSubmitHandler = (e) => {
        // console.log("data update!")
        e.preventDefault();
        
        // const newLog = {
        //     date: new Date(formData.inputDate),
        //     desc: formData.inputDesc,
        //     time:+formData.inputTime
        // }
        const newLog = {
            date: new Date(inputDate),
            task: inputDesc,
            time:+inputTime
        }
        //clear
        setInputDate('')
        setInputDesc('')
        setInputTime('')
        props.onSaveLog(newLog)
        //console.log(newLog);
        

        // setFormData({
        //     inputDate:'',
        //     inputDesc:'',
        //     inputTime:''
        // })

    }
    return (
        <Card className = "logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className='form-item'>
                    <label htmlFor='date'>Date</label>
                    {/* <input id = "date" value={formData.inputDate} onChange={dateChangeHandler} type='date'></input> */}
                    <input id = "date" value={inputDate} onChange={dateChangeHandler} type='date'></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>Content</label>
                    {/* <input id = "desc" ref={descRef} value={formData.inputDesc} onChange={descChangeHandler} type='text'></input> */}
                    <input id = "desc" ref={descRef} value={inputDesc} onChange={descChangeHandler} type='text'></input>
                    
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>Time</label>
                    {/* <input id = "time" value={formData.inputTime} onChange={timeChangeHandler} type='number'></input> */}
                    <input id = "time" value={inputTime} onChange={timeChangeHandler} type='number'></input>
                </div>
                <div className='form-btn'>
                    <button>add log</button>
                </div>

            </form>
        </Card>

    )

}
export default LogsForm;