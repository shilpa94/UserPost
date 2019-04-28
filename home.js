import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { Button } from 'react-native';
import Post from './post';
import { Container, Header, List, Title, ListItem, Left, Body, Right, Icon } from 'native-base';
import { Avatar } from 'react-native-elements';


type Props = {};
class Home extends Component {
  constructor(props) {
    super(props);
    userContext = this;
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

  renderRow ({ item }) {
    return (
      <ListItem avatar key={item.id}>
        <Avatar rounded title={(item.name).match(/\b(\w)/g).join('')} overlayContainerStyle={{backgroundColor: 'blue'}} />
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" onPress={() => userContext.props.navigation.navigate('Post', { useritem: item})}/>
        </Right>
      </ListItem>
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
              <FlatList
                data={user}
                renderItem={this.renderRow}
                keyExtractor={item => item.id.toString()}
              />
            </List>
          </Container>
        );
      }
  }
}

export default Home;
