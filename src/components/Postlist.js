import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Dellist from './Dellist.js'
class Postlist extends React.Component {
  constructor(){
    super()
    this.state={
      posts:[],
      del:false,
      id:""
    }
  }
  handleClick(id){
    this.setState({del:!(this.state.del)})  
    this.setState({id:id})
  }
  handleDel(del){
    this.setState({del:del})
  }
  componentDidMount(){
    let self = this;
    axios.get('http://express-api.haoqicat.com/posts')
      .then(function (response) {
        self.setState({posts:[...response.data.posts]})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  filterPosts(id){
    const posts = this.state.posts.filter((post) => post._id !== id )
    this.setState({posts:posts})
  }
  render() {
    console.log(this.state.del)
    return (
      <div>
        <Link to="/post/new" className="button">写文章</Link>
        {this.state.posts.map((item,index) => (
          <div key={item._id} className="post" >
            <div style={{"fontSize":"1.2rem"}}>{item.title}</div>
            <div style={{"position": "absolute","bottom": "16px","right": "16px"}}>
              <Link to={`/post/${item._id}/Showlist`} className="new-a">查看</Link>
              <Link to={`/post/${item._id}/edit`} className="new-a">编辑</Link>
              <a onClick={this.handleClick.bind(this,item._id)} className="new-a">删除</a>
            </div>
          </div>
        ))}
        {(this.state.del===true) ? <Dellist del={this.state.del} removePosts={this.filterPosts.bind(this)} handleDel={this.handleDel.bind(this)} id={this.state.id}/> : ""}
      </div>
    );
  }
}

export default Postlist
