import './App.css';
import BottomNav from './Components/BottomNav';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
      {/* console.log(window.innerWidth)
      <Sidebar />
      <BottomNav /> */}
    </div>
  );
}

export default App;