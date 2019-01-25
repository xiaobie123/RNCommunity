import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, View, ScrollView, Image, Text, StatusBar } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTab from './homeTab';

import { NavigationActions } from '../../utils/index';

const ScreenWidth = Dimensions.get('window').width;
const renderContent = (tab, index) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  };
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    );
  });
  return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '足印', // 配置标题bar
    tabBarIcon: ({ focused, tintColor }) => ( // 底部tab标签的图标
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../../images/house.png')}
      />
    ),
  }
  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
  }
  render() {
    const tabs = [
      { title: '最新' },
      { title: '热门' },
      { title: '浅记' },
    ];
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    return (
      <View style={{ flex: 2 }}>
        <StatusBar backgroundColor="blue" />
        <Tabs tabs={tabs}>
          <HomeTab gotoDetail={this.gotoDetail} />
          <HomeTab gotoDetail={this.gotoDetail} />
          <HomeTab gotoDetail={this.gotoDetail} />
        </Tabs>
        <View style={{ flex: 1 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {renderContent}
          </Tabs>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  scrollableTabViewStyle: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  lineStyle: {
    width: ScreenWidth / 2 / 3,
    height: 0,
    backgroundColor: 'green',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Home;
