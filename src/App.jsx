import Header from './Components/Header';
import './App.css';

function App() {
  const sections = [
    { title: 'পিরের পরা পানি', url: '#' },
    { title: 'পিরের অলউকিক ফু', url: '#' },
    {title:"পিরের মুরিদ হন ", url: '#' }
  ];
 const title="ডিজিটাল পিরের ডিজিটাল মাঝার";


  return (
    <div className="App">
      <Header sections={sections} title={title}/>
      <img src="" alt="" srcset="" />
    </div>
  )
}

export default App
