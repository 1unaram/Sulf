/* App.js */

// 컴포넌트 연결
import Main from './Components/Main.js';
import Login from './Components/Login.js';
import Aboutus from './Components/Aboutus.js';
import Service from './Components/Service.js';
import Howtouse from './Components/Howtouse.js';
import Postsurvey from './Components/Postsurvey.js';
import Mypage from './Components/Postsurvey.js';
import Post from './Components/Post.js';
import Classification from './Components/Classification.js';

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
        <Route path="/howtouse" element={<Howtouse />} />
        <Route path="/postsurvey" element={<Postsurvey />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/classification" element={<Classification />} />
      </Routes>
    </div>
  );
}

export default App;
