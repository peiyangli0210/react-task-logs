import BackDrop from "../BackDrop/BackDrop"
import "./ConfirmModal.css"

const ConfirmModal = (props) => {
    return <BackDrop>    
        <div className="confirmModal">
            <div className="confirmText"> 
                <p>{props.confirmText}</p>
            </div>
            <div className="confirmButton">
                <button onClick={props.onOK} className="ok-button"  >Confirm</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
    
        </div>
    </BackDrop>

};

export default ConfirmModal