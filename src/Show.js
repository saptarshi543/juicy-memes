import React from "react";
// import ReactDOM from "react-dom";

var list=[];
var style={
	width: '315px',
	height: '250px',
	padding: '10px',
	borderRadius: "15px",
	    border:"2px solid #555"
};

class Show extends React.Component{
	importAll(r){
		return r.keys().map(r);
	}
	componentWillMount(){
		list=this.importAll(require.context('./data/', false, /\.(png|jpe?g|svg)$/));
	}
	render(){
		var count=0;
    return(
      <div>
      {
        list.map((image,index)=> <img key={index} src={image} title={++count}  loading="lazy" style={style} alt="info"></img> )
      }
	    <p>Total number of memes: {count}</p>
      </div>
      )
  }
}
export default Show;
