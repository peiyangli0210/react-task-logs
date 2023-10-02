import "./LogItem.css"
import "./dateStyle.css"
import Card from '../UI/Card/Card';
import { useState } from "react";
import ConfirmModal from "../UI/ConfirmModal/ConfimModal";
const LogItem = (props) => {
    const [showConfirm,setShowConfirm] = useState(false);
    const okHandler = () => {
        console.log("aha")
        props.onDelLog();
        setShowConfirm(false)
    }
    const cancelHandler = () => {
        setShowConfirm(false)
        
        
    }

    const deleteItemHandler = () => {
       // alert("do u want to delete it?")
        // const isDel = window.confirm("Do u want to delete it?")
        // if(isDel){
        //     props.onDelLog();
        // }
        setShowConfirm(true)
    };
    return <div className="item">
        {showConfirm && <ConfirmModal confirmText="This action is irreservable." onOK={okHandler} onCancel={cancelHandler} />}
        <div className="date">
            <div className="month">
                {props.date.toLocaleString('zh-CN',{month:'long'})}
            </div>
            <div className="day">
            {props.date.getDate()}
            </div>
        </div>

        <div className="content">
            <h2 className="task">{props.task}</h2>
            <div className="time">
                {props.time}
            </div>
            
        </div>
        <div>
            <div className="delete" onClick={deleteItemHandler}>×</div>
        </div>
    </div>
}

export default LogItem