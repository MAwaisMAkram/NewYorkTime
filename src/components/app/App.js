import './App.css';
import Header  from "../header/Header";
import Stories from '../stoires/Stories';
import Jobslider from "../jobSlider/JobSlider";

function App() {
    return (
        <div className="container">
            <Header />
            <Stories />
            <Jobslider />
        </div>
    )
}

export default App;
