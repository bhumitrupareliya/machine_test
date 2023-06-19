
import './App.css';
import './Styles/main.css'
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Chart from './Component/Chart';

function App() {
  return (
    <div className="main_wrap">
      <Sidebar />
      <div className="main_wrap_inner">
        <Header />
        <Chart />
      </div>
    </div>
  );
}

export default App;
