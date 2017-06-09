import React from 'react'
import axios from 'axios'
class Showlist extends React.Component{
  constructor(){
    super()
    this.state={
      post:{}
    }
  }
  componentWillMount(){
    let id = this.props.match.params.id
    let self = this
    axios.get(`http://express-api.haoqicat.com/post/${id}`)
      .then(function (response) {
        // console.log(response);
        self.setState({post:response.data.post})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
    console.log(this.props.match.params.id)
    return(
      <div className="show">
        <div className="category">{this.state.post.category}</div>
        <div className="title">{this.state.post.title}</div>
        <div className="content">{this.state.post.content}</div>
      </div>
    )
  }
}
export default Showlist
