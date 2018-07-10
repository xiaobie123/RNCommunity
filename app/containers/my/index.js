import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  SectionList,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  sectionComp = (info) => {
    const txt = info.section.key;
    // return <Text style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>;
    return <View><Text style={{ height: 2 }} /></View>;
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
          <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 14, marginTop: 15 }}>你美你你媚你魅你妹</Text>
            <Text style={{ fontSize: 12, marginTop: 3 }}>慵懒~是一种生活态度</Text>
            <Text style={{ fontSize: 12, marginTop: 3 }}><Text>日记：0</Text>&nbsp;|&nbsp;<Text>浅友：0</Text></Text>
          </View>
          <Text style={{ flex: 1, textAlign: 'right', marginTop: 30 }}><Icon name="chevron-right" size={15} color="#5C5C5C" /></Text>
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
        data: [{ icon: 'xx', title: '我的主页' }],
      },
      { key: 'my',
        data: [{ icon: 'home', title: '我的主页' }, { icon: 'xx', title: '我的消息' }, { icon: 'xx', title: '我的话题' }, { icon: 'xx', title: '我的回收站' }],
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

export default Account;
