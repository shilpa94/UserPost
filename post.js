import React, {Component} from 'react';
import {Text, View} from 'react-native';
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

  render() {
    // const { navigation } = this.props;
    // const userItem = navigation.getParam('useritem');
    const { error, isLoaded, posts, comments } = this.state;
    if (error) {
      return <Text>Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text>Loading...</Text>;
    } else {
        return(
          <View> 
          {posts.map(p =>(
            <View key={p.id}>
              <PostCard key={p.id} post={p} />
            </View>
           ))}
          </View>
        );
      }
  }
}
 export default Post;
