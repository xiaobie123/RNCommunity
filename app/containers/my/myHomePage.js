import React, { Component } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Touchable } from '../../components';

import { createAction, NavigationActions } from '../../utils';

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  // 登录
  onLogin = () => {
    this.props.dispatch(createAction('app/login')());
  }
  gotoAccount = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Account' }));
  }
  // 页面关闭按钮
  onClose = () => {
    this.props.dispatch(NavigationActions.back());
  }

  render() {
    const { fetching } = this.props;
    return (
      <View style={styles.container}>
        <Button text="返回" onPress={this.gotoAccount} />
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
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
});

export default Login;
