import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert, Button } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Button, Touchable } from '../../components';

import { createAction, NavigationActions } from '../../utils';

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: '修改信息',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title={"保存"}
      />
    ),
  };
  // 登录
  onLogin = () => {
    this.props.dispatch(createAction('app/login')());
  }
  // 页面关闭按钮
  onClose = () => {
    this.props.dispatch(NavigationActions.back());
  }
  gotoAccount = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Account' }));
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
