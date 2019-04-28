import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import { Container, Header, Content, ListItem, Body, Title, List, Left } from 'native-base';
import PostCard from './postCard';

class Post extends Component {
  constructor(props) {
    super(props);
    postContext = this;
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }
  
  componentDidMount() {
    const { navigation } = this.props;
    const userItem = navigation.getParam('useritem');
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userItem.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderPost ({ item }) {
    return (
      <View key={item.id} style={{margin: 6}}>
        <PostCard key={item.id} post={item} />
      </View>
    )
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <Text>Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text>Loading...</Text>;
    } else {
      return(
        <Container>
          <Header noLeft>
            <Left/>
              <Body>
              <Title>Posts</Title>
            </Body>
          </Header>
          <Content>
            <List>
              <FlatList
                data={posts}
                renderItem={this.renderPost}
                keyExtractor={item => item.id.toString()}
              />
            </List>
          </Content>
        </Container>
      );
    }
  }
}
 export default Post;
