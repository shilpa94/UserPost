import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';
import Post from './post';
import { Container, Header, Content, List, Title, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';
import { Avatar} from 'react-native-elements';


type Props = {};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: [],
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
           <Container>
        <Header noLeft>
          <Left/>
          <Body>
            <Title>User Details</Title>
          </Body>
        </Header>
     
          <List>
          {user.map(u =>(
            <ListItem avatar key={u.id}>
              <Avatar rounded title={(u.name).match(/\b(\w)/g).join('')} overlayContainerStyle={{backgroundColor: 'blue'}} />
              <Body>
                <Text>{u.name}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate('Post', { useritem: u})}/>
              </Right>
            </ListItem>
            ))}
          </List>
           </Container>
        );
      }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

export default Home;
