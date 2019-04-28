import React, { Component } from 'react';
import {Card, CardItem,Text, Button, Left } from 'native-base';

class PostCard extends Component {
  render() {
    var post = this.props.post; 
    return (
      <Card>
        <CardItem cardBody>
        <Text style={{padding:8}}>{post.title}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={() => postContext.props.navigation.navigate('Comment',{ postId: post.id})}>
              <Text>Comments</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default PostCard;
