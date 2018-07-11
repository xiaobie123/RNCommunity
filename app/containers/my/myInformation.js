import React, { Component } from 'react';
import { StyleSheet, View, Image, SectionList, Button, Text } from 'react-native';
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
        title="保存"
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
  // 去哪个页面
  goTo = (routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName }));
  }
  renderItem = (info) => {
    if (info.section.key === 'head') {
      return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', color: '#5C5C5C', padding: 20 }}>
          <View style={{ flex: 1 }}>
            <Image
              style={[styles.header]}
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
            />
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', color: '#5C5C5C', padding: 16 }}>
        <Text style={{ height: 25, fontSize: 15 }}>
          <Icon name="home" size={18} color="#5C5C5C" />
          <Text>&nbsp;{info.item.title}</Text>
        </Text>
        <Text><Icon name="chevron-right" size={15} color="#5C5C5C" /></Text>
      </View>
    );
  }
  render() {
    const sections = [
      { key: 'head',
        data: [{ router: 'MyInformation' }],
      },
      { key: 'my',
        data: [{ icon: 'home', title: '我的主页', router: 'MyHomePage' }, { icon: 'xx', title: '我的消息' }, { icon: 'xx', title: '我的话题' }, { icon: 'xx', title: '我的回收站' }],
      },
      { key: 'system', data: [{ icon: 'xx', title: '隐私' }, { icon: 'xx', title: '关于' }] },
    ];
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          stickySectionHeadersEnabled={false}
          renderSectionHeader={this.sectionComp}
          renderItem={this.renderItem}
          sections={sections}
          // ItemSeparatorComponent={() => <View><Text></Text></View>}
          // ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
          // ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
        />
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
    width: 30,
    height: 30,
  },
  header: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
});

export default Login;
