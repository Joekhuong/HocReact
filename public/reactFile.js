
{/* create components */}
class Khuong extends React.Component {
  render() {
    return(
      <div>
        <h1 className="color" >Hello</h1>
        <OtherComponent name="I am Khuong" job="IT">I am 35 years old</OtherComponent>  {/* create props and special props */}
        <OtherComponent name="I am Miikka" job="Chef">I am 36 years old</OtherComponent>
      </div>
    );
  }
 }

class OtherComponent extends React.Component{
  render(){
    return(
      <div>
        <h3 className="redColor" >{this.props.name}, I am working as a {this.props.job}. {this.props.children}</h3>{/* use props and special props */}
      </div>
    );
  }
}

{/* render components */}
ReactDOM.render(
  <div>
    <Khuong />
  </div>,
  document.getElementById('root')
);
