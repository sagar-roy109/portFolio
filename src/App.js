import {Routes, Route} from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import HeaderComponent from './components/HeaderComponent';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App">
				<AnimatedCursor />
				<HeaderComponent/>
				<Routes>
					<Route path="/" element = {<HomePage/>}/>
					<Route path="about" element={<AboutPage/>}/>
					<Route path='resume' element={<Resume/>}/>
					<Route path='portfolio' element={<Portfolio/>} />
				</Routes>
    </div>
  );
}

export default App;
