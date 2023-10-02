import LogItem from "./LogItem"
import "./Logs.css"
import Card from "../UI/Card/Card"
import { useState } from "react"
import LogFilter from "./LogFilter/LogFilter"

const Logs = (props) => {
    const [year,setYear] = useState(2023);
    // year filter
    let filterData = props.logsData.filter(item => item.date.getFullYear()===year);
    let logsItems = filterData.map((item) => <LogItem  onDelLog={()=>props.onDelLog(item.id)} key={item.id} date={item.date} task={item.task} time = {item.time}/>)

    const changeYearHandler = (newyear) => {
        setYear(newyear);
    }
    return <Card className="logs">
        <LogFilter year={year} onYearChange={changeYearHandler}/>
        {
        logsItems.length!==0?logsItems:<p className="no-logs">no logs</p>}
        
        </Card>
}

export default Logs