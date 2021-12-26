/* App.js */
import React from 'react';

// 컴포넌트 연결
import Main from './Components/Main';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import Service from './Components/Service';
import Howtouse from './Components/Howtouse';
import Postsurvey from './Components/Postsurvey';
import Mypage from './Components/Mypage';
import Post from './Components/Post';
import Classification from './Components/Classification';

// 라우터
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
