import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {
  Button,
  Header,
  SocialIcon,
  Avatar
} from 'react-native-elements';
import HomeScreen from './Views/HomeScreen';
import Login from './Views/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.logIn = this.logIn.bind(this);
    //this.setTimeout = this.setTimeout.bind(this);
  }

  logIn(){
    this.setState({ loggedIn: true });
  }

  componentDidMount(){
    setTimeout(() => this.logIn(), 4000);
  }

  renderHeaderIcon() {
    return (<Image
      source={require('./images/logo-light.png')}
      style={{ height: 30, width: 120 }}
      resizeMode="contain"
    />)
  }
  
  renderAvatar() {
    return (<Avatar
      small
      rounded
      source={{ uri: "https://secure.gravatar.com/avatar/490c29b2c7ba07577535f81e8f8df397" }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />)
  }
  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={this.renderHeaderIcon()}
            rightComponent={this.renderAvatar()}
          />
        </View>
        {!this.state.loggedIn ?
          <Login style={styles.content} logIn={this.logIn}/>
        :
        <HomeScreen />
        }
        <View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    width: Dimensions.get('window').width * .60,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
