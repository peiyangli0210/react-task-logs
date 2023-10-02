import Logs from "./components/logs/Logs";
import Card from "./components/UI/Card/Card";
import LogsForm from "./components/logsform/logsForm";
import { useRef,useState } from 'react';
import "./App.css"
import ConfirmModal from "./components/UI/ConfirmModal/ConfimModal";
import BackDrop from "./components/UI/BackDrop/BackDrop";
import LogFilter from "./components/logs/LogFilter/LogFilter";

const App = () => {
    const [logsData,setLogsData] = useState([        
        {
        id:'001',
        date: new Date(2023,7,16),
        task:'1st pending',
        time:520
        },
        {
            id:'002',
            date: new Date(2023,8,20),
            task:'2nd pending',
            time:80
        },
        {
            id:'003',
            date: new Date(2022,8,20),
            task:'2nd pending',
            time:80
        },
        {
            id:'004',
            date: new Date(2021,8,20),
            task:'2nd pending',
            time:80
        },
        {
            id:'005',
            date: new Date(2021,4,20),
            task:'5th pending',
            time:80
        }
    ])
    // const logsData = [
    //     // {
    //     //     id:'001',
    //     //     date: new Date(2023,7,16),
    //     //     task:'1st rebecca',
    //     //     time:520
    //     // },
    //     // {
    //     //     id:'002',
    //     //     date: new Date(2023,8,20),
    //     //     task:'yuhan in person',
    //     //     time:80
    //     // }
    //     {
    //         id:'001',
    //         date: new Date(2023,7,16),
    //         task:'1st pending',
    //         time:520
    //     },
    //     {
    //         id:'002',
    //         date: new Date(2023,8,20),
    //         task:'2nd pending',
    //         time:80
    //     }
    // ]
    const saveLogHandler = (newLog) => {
        newLog.id = Date.now()+'';
        //logsData.push(newLog)
        setLogsData([...logsData,newLog])
    }
    const delLogByIndex = (index) => {
        setLogsData(prevState => {
           const newLogs = [...prevState] 
           newLogs.splice(index,1);
           return newLogs
        })
    };
    const delLogByID = (id) => {
        setLogsData(prevState => {
           const newLogs = prevState.filter(item => item.id !== id)
           return newLogs
        })
    };

    return <div className="app"><LogsForm onSaveLog={saveLogHandler}/><Card/><Logs logsData={logsData} onDelLog={delLogByID}/></div>
}

export default App;