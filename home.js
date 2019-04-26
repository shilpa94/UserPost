import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';
import Post from './post';

type Props = {};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: [],
      open: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result
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
    const { error, isLoaded, user } = this.state;
    if (error) {
      return <Text>Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text>Loading...</Text>;
    } else {
        return (
          <View style={styles.container}>
            {user.map(u =>(
              <View key={u.id}>
                <Text style={styles.welcome}>{u.name}</Text>
                <Button  title="post"
                  onPress={() => this.props.navigation.navigate('Post', 
                  { useritem: u})}>
                </Button>
              </View>
            ))}
          </View>
        );
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
