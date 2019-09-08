class Khuong extends React.Component {
  render() {
    return(
      <div>
        <h1 className="color" >Hello</h1>
        <OtherComponent/>
      </div>
    );
  }
 }

class OtherComponent extends React.Component{
  render(){
    return(
      <div>
        <h3 className="redColor" >I am Chu Nguyen Khuong</h3>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Khuong/>
  </div>,
  document.getElementById('root')
);
