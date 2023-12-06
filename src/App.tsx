import Advertisement from './components/Advertisement';
import BreakingNews from './components/BreakingNews';
import Ether from './components/Ether';
import Map from './components/Map';
import Popular from './components/Popular';
import Search from './components/Search';
import TVProgramm from './components/TVProgramm';
import Video from './components/Video';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className='ya-page'>
      <div className='top'>
        <BreakingNews title1='Сейчас в СМИ' title2='в Германии' title3='Рекомендуем' link1='#' link2='#' link3='#'/>
        <Video title='Работа над ошибками'/>
      </div>
      <div className='center'>
        <Search/>
        <Advertisement/>
      </div>
      <div className='bottom'>
        <Weather title='Погода'/>
        <Popular popularTitle='Популярное'/>
        <Map mapText='Карта' scheduleText='Расписание'/>
        <TVProgramm title='Телепрограмма'/>
        <Ether etherTitle='Эфир'/> 
      </div>
    </div>
  );
}

export default App;
