import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';
import CommentItem from './commentItem';

const { width, height } = Dimensions.get('window');
export default class homeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onload=() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      alert('加载成功');
    }, 1500);
  }
  refreshing= () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      alert('刷新成功');
    }, 1500);
  }
  separator = () => {
    return <View style={{ height: 2, backgroundColor: '#eee' }} />;
  }
  renderItem = (item) => {
    return (
      <View>
        <CommentItem />
      </View>
    );
  }
  render() {
    const data = [];
    for (let i = 0; i < 10; i += 1) {
      data.push({ key: i, title: `${i}` });
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            ref={(e) => { this.flatList = e; }}
            ItemSeparatorComponent={this.separator}
            onRefresh={this.refreshing}
            refreshing={false}
            onEndReachedThreshold={0}
            onEndReached={
              this.onload
            }
            renderItem={this.renderItem}
            data={data}
          />
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  content: {
    width,
    height,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    height: 100,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
  },
  txt: {
    // textAlignVertical: 'center',
    // color: 'white',
    // fontSize: 30,
  },

});
