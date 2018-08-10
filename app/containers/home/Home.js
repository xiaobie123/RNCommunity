import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import HomeTab from './homeTab';

import { NavigationActions } from '../../utils/index';

const ScreenWidth = Dimensions.get('window').width;
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
    const TabBarProps = {
      tabs: ['最新', '热门', '浅记'],
      containerWidth: ScreenWidth / 2,
      style: { height: 30, width: ScreenWidth / 2, borderWidth: 0, elevation: 1 },
      tabStyle: { height: 29, width: ScreenWidth / 2 / 3 },
    };
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        <ScrollableTabView
          style={styles.scrollableTabViewStyle}
          // renderTabBar={() => <ScrollableTabBar style={{ height: 30, width: ScreenWidth / 2, borderWidth: 0, elevation: 1 }} tabStyle={{ height: 29, paddingLeft: 5, paddingRight: 5 }} />}
          renderTabBar={() => <DefaultTabBar {...TabBarProps} />}
          tabBarUnderlineStyle={styles.lineStyle}
          tabBarActiveTextColor="green"
        >
          <HomeTab style={styles.textStyle} gotoDetail={this.gotoDetail} tabLabel="最新" />
          <HomeTab style={styles.textStyle} gotoDetail={this.gotoDetail} tabLabel="热门" />
          <HomeTab style={styles.textStyle} gotoDetail={this.gotoDetail} tabLabel="浅记" />
        </ScrollableTabView>
        <Icon style={{ position: 'absolute', left: 20, top: 17 }} name="address-book" size={18} color="#e8e8e8" />
        <Icon style={{ position: 'absolute', right: 20, top: 17 }} name="comment" size={18} color="#e8e8e8" />
        {/* <Button text="Goto Detail" onPress={this.gotoDetail} /> */}
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
