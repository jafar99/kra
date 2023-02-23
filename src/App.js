
import './App.css';
import kra from '../src/kra.png';
import {Row,Col,Space} from 'antd';

function App() {
  return (
    <div className="App">
        <Space>
        <Row>
        <Col  className="kra">
          <img  src={kra} alt="" className='img'></img>
        </Col>
        <Col  className="marq" >

            <marquee  >
            <div className="marquee" ><span className='text'>Gold 24KT - RS.5677.20 Per Gm</span></div>
            <div  className="marquee1"><span className='text'>Gold 24KT - RS.5283.70 Per Gm</span></div>
            <div  className="marquee"><span className='text'>Gold 24KT - RS.4496.80 Per Gm</span></div>
            <div  className="marquee1"><spa className='text'>Pune Sliver - Rs.6680 per Gm</spa></div>

            </marquee>
          
        </Col>
        </Row>
        </Space>
    </div>
  );
}

export default App;
