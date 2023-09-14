import react, { Component } from 'react';
import Content from './components/Content'
import Hold from './components/Hold'
import Subject from './components/Subject'
import KakaoMap from './components/KakaoMap'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selected_content_id: 1,
      subject: {title:'Discovery Climb Squeare Chains'},
      content: [
        {id:1, title:'클라임스퀘어 ICN', loc:'인천 2호선 마전역 2번 출구'},
        {id:2, title:'클라임스퀘어 청라', loc:'인천 청라 국제도시 어딘가'},
        {id:3, title:'클라임스퀘어 구래', loc:'김포 구래동 어딘가'},
        {id:4, title:'클라임스퀘어 송도', loc:'인천 송도 트리플스트리트 D동'}
      ],
      map: [
        {id:1, lat:37.597872, lng:126.667490},
        {id:2, lat:37.533943, lng:126.652925},
        {id:3, lat:37.6427, lng:126.623},
        {id:4, lat:37.378319, lng:126.663044}
      ]
    }
  }
  render() {
    var _lat = this.state.map[0].lat;
    var _lng = this.state.map[0].lng;
    var i = 0;
    while ( i < this.state.map.length) {
      var data = this.state.map[i];
      if (data.id === this.state.selected_content_id) {
        _lat = this.state.map[i].lat;
        _lng = this.state.map[i].lng;
        break;
      }
      i++
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title}></Subject>
        <Content 
          onPageClick={function(id){
            this.setState({
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.content}></Content>
        <KakaoMap lat={_lat} lng={_lng}></KakaoMap>
        <Hold></Hold>
      </div>
    )
  }
}


export default App;
