import react, { Component } from 'react';

class Content extends Component{
  render() {
    var list = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      var content = 
        <tr key={data[i].id}>
        <td>{data[i].title}</td>
        <td>
          <a
            href={"/map/" + data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onPageClick(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].loc}
          </a>
          </td>
        </tr>
    list.push(content);
      i++;
    }  
    return (
      <table>
        <thead>
          <tr>
            <th>상호명</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
          {list}    
        </tbody>
      </table>
    )
  }
}

export default Content;
