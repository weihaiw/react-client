import React from 'react'
import axios from 'axios'
class Dellist extends React.Component{
  handleClick(){
    axios.delete(`http://express-api.haoqicat.com/post/${this.props.id}`).then(res => {
      console.log(res.data.message)
      this.props.removePosts(this.props.id)
      this.props.handleDel(false)
    })
  }
  render(){
    return(
      <div className="del">
       <div className="delBox">
         <p>确定删除?</p>
         <div>
           <div className="left" onClick={this.handleClick.bind(this)}>确定</div>
           <div className="right" onClick={() => {this.props.handleDel(false)}}>取消</div>
         </div>
       </div>
      </div>
    )
  }
}
export default Dellist
