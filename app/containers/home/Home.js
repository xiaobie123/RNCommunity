import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
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
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={styles.container}
          renderTabBar={() => <ScrollableTabBar style={{ height: 40, borderWidth: 0, elevation: 1 }} tabStyle={{ height: 39 }} />}
          tabBarUnderlineStyle={styles.lineStyle}
          tabBarActiveTextColor="#FF0000"
        >
          <HomeTab style={styles.textStyle} gotoDetail={this.gotoDetail} tabLabel="最新" />
          <HomeTab style={styles.textStyle} gotoDetail={this.gotoDetail} tabLabel="热门" />
          <HomeTab style={styles.textStyle} gotoDetail={this.gotoDetail} tabLabel="浅记" />
        </ScrollableTabView>
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
  container: {
    flex: 1,
    marginTop: 20,
  },
  lineStyle: {
    width: ScreenWidth / 4,
    height: 2,
    backgroundColor: '#FF0000',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Home;
