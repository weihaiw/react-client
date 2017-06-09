import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class Form extends Component {
  handleClick(e){
    e.preventDefault();
    console.log(this.props.pathname)
    let category = this.category.value
    let title = this.title.value
    let content = this.content.value
    if(this.props.pathname==="new"){
      axios.post('http://express-api.haoqicat.com/post',{title:title,content:content,category:category})
        .then( res => {
          console.log("res")
          this.props.props.history.push("/")
        })
      // axios.get('http://express-api.haoqicat.com/posts')
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }else{
        this.props.publishPost({category, title, content})
    }
  }
  render() {
    let pathname = this.props.props.match.path
    pathname = pathname.slice(10)
    console.log(this.props)
    return (
      <div>
        <form style={{"padding":"20px 40px"}} onSubmit={this.handleClick.bind(this)}>
          <div style={{"marginButtom":"10px"}}>
            <label style={{"display": "block","fontSize":"0.9em","color":"rgba(0, 0, 0, 0.6)","paddingBottom": "10px"}}>分类</label>
            <input 
              style={{"width": "100%","height":"48px","border":"1px solid rgb(221, 221, 221)","borderRadius":"5px","fontSize":"1em","padding":"10px","boxSizing":"border-box"}} 
              defaultValue={this.props.post ? this.props.post.category : ''}
              ref={(node) => this.category = node}
            />
          </div>
          <div style={{"marginButtom":"10px"}}>
            <label style={{"display": "block","fontSize":"0.9em","color":"rgba(0, 0, 0, 0.6)","paddingBottom": "10px"}}>标题</label>
            <input 
              defaultValue={(pathname==="edit") ? this.props.post.title : ""}
              style={{"width": "100%","height":"48px","border":"1px solid rgb(221, 221, 221)","borderRadius":"5px","fontSize":"1em","padding":"10px","boxSizing":"border-box"}}
              ref={(node) => this.title = node}
            />
          </div>
          <div style={{"marginButtom":"10px"}}>
            <label style={{"display": "block","fontSize":"0.9em","color":"rgba(0, 0, 0, 0.6)","paddingBottom": "10px"}}>内容</label>
            <textarea rows="20" 
              style={{"width":"100%","height":"100%","border":" 1px solid rgb(221, 221, 221)","borderRadius":"5px","fontSize":"1em","padding":"10px","boxSizing": "border-box"}}
              defaultValue={(pathname==="edit") ? this.props.post.content : ""}
              ref={(node) => this.content = node}
              >
              </textarea>        
          </div>
          <div style={{"textAlign":"center"}}>
            <button type="submit" 
              style={{"width": "120px","height":"36px","border":"none", "backgroundColor":"rgb(255, 64, 129)","fontSize":"1em","color":"rgb(255, 255, 255)", "display":"inline-block","margin":"20px auto 0px","borderRadius":"20px"}}
              >{(pathname==="edit") ? "更新文章" : "发布文章"}</button>
            <Link to="/" style={{"display": "inline-block","marginLeft": "15px","fontSize": "1em","color": "rgb(0, 188, 212)", "opacity": "0.8","textDecoration": "none"}}>取消</Link>
          </div>
        </form>     
      </div>
    )
  }
}

export default Form
