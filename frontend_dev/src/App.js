/* App.js */

// 컴포넌트 연결
import Main from './Components/Main.js';
import Login from './Components/Login.js';
import Aboutus from './Components/Aboutus.js';
import Service from './Components/Service.js';

// 라우터
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
