import Listing from './components/listing/Listing';
import { RawData } from './mock/raw-data';
import './main.css';


function App() {
  return (
    <div className="App">
      <Listing items={RawData}/>
    </div>
  );
}

export default App;
