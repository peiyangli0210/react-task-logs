import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App.js"
// const App = <div>
//     <h1>this is a react project</h1>
//     <p>react webpage content</p>
// </div>;
// const App = <div className="logs">
//     <div className="item">
//         <div className="date">
//             <div className="month">
//                 September
//             </div>
//             <div className="day">
//                 12th
//             </div>
//         </div>

//         <div className="content">
//             <h2 className="task">React</h2>
//             <div className="time">
//                 5h
//             </div>
            
//         </div>
//     </div>
// </div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(App);

// 函数式组件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);