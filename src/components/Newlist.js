import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from './Form.js'
const styles = {
    content: {
      width: '100%',
      maxWidth: '600px',
      margin: '30px auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
    },
    title: {
      fontSize: '1.2em',
      textAlign: 'center',
      paddingTop: '20px'
    }
  }
class Newlist extends React.Component {
  constructor(){
    super()
    this.state={
      post:{}
    }
  }
  componentWillMount(){
    let id = this.props.match.params.id
    let self = this
    if(this.props.location.pathname!=="/post/new"){
      
      axios.get(`http://express-api.haoqicat.com/post/${id}`)
      .then(function (response) {
        self.setState({post:response.data.post})
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(this.props.match.params.id)
    }
  }
  publishPost(data){
    let id = this.props.match.params.id
    let self = this
    axios.put(`http://express-api.haoqicat.com/post/${id}`, data)
    .then(res => {
      console.log(res.data.message);
      this.props.history.push('/');
    })
  }
  render() {
    var pathname = this.props.location.pathname
    pathname = pathname.slice(6)
    // console.log(this)
    return (
      <div style={styles.content}>
        <div style={styles.title}>{(pathname==="new") ? "写文章" : "修改文章"}</div>
        {(pathname==="new") ? <Form props={this.props} pathname={pathname}/> : (Object.keys(this.state.post).length !== 0 ? <Form props={this.props} pathname={pathname} post={this.state.post} publishPost={this.publishPost.bind(this)}/> : "")}
      </div>
    );
  }
}

export default Newlist
