import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';

import { Button } from '../../components';

import { createAction, NavigationActions } from '../../utils';

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = { // 配置标题bar
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) => ( // 底部tab标签的图标
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/person.png')}
      />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
  }
  gotomyhomepage = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'MyHomePage' }));
  }
  logout = () => {
    this.props.dispatch(createAction('app/logout')());
  }

  render() {
    const { login } = this.props;
    return (
      <View style={styles.container}>
        <Button text="Goto Login" onPress={this.gotomyhomepage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Account;
