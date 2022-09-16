import '../App.css';
import BottomNav from './BottomNav';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <BottomNav />
      <Sidebar />
      {/* {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />} */}
    </div>
  );
}

export default App;
