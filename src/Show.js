import React from "react";
import ReactDOM from "react-dom";

var list=[];
var style={
	width: '315px',
	height: '250px',
	padding: '10px',
	borderRadius: "15px"
};

class Show extends React.Component{
	importAll(r){
		return r.keys().map(r);
	}
	componentWillMount(){
		list=this.importAll(require.context('./data/', false, /\.(png|jpe?g|svg)$/));
	}
	render(){
    return(
      <div>
      {
        list.map((image,index)=> <img key={index} src={image} style={myStyle_horizontal} alt="info"></img> )
      }
      </div>
      )
  }
}
export default Show;