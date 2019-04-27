import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,View} from 'native-base';

class PostCard extends Component {

  render() {
    var post = this.props.post; 
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>Name</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
        <Text>{post.title}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={() => postContext.props.navigation.navigate('Comments',{ postitem: post})}>
              <Text>Comments</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default PostCard;
