import React, { Component } from 'react';
import {Text, View,} from 'react-native';
import { Item } from 'native-base';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comments: []
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const postId = navigation.getParam('postId');
    console.log(postId);
    fetch("https://jsonplaceholder.typicode.com/comments?postId="+ postId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            comments: result
          });
        },
    )
  }

  render() {
    const { comments } = this.state; 
    return comments.map(function(cmt) {
      return(
        <Item rounded key={cmt.id} style={{marginTop:10, backgroundColor:"#DCFAEE"}}>
          <Text style={{padding:8}}>{cmt.body}</Text>
        </Item>
      )
    });
  }
}

export default Comment;
