import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  TouchableHighlight,
} from 'react-native';
import HomeListItem from './homeListItem';

const { width, height } = Dimensions.get('window');
export default class homeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  refreshing= () => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      alert('刷新成功');
    },1500);
  }
  _onload=() => {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      alert('加载成功');
    },1500);
  }
  render() {
    var data = [];
    for (var i = 0; i < 20; i++) {
      data.push({key: i, title: i + ''});
    }
    return (
      <View style={{ flex: 1 }}>
        {/* <Button title="滚动到指定位置" onPress={() => { this._flatList.scrollToOffset({ animated: true, offset: 2000 }); }} /> */}
        <View style={{ backgroundColor: '#e8e8e8', height: 1 }} />
        <View style={{ flex: 1 }}>
          <FlatList
            ref={(flatList) => this._flatList = flatList}
            ListHeaderComponent={this._header}
            ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            onRefresh={this.refreshing}
            refreshing={false}
            onEndReachedThreshold={0}
            onEndReached={
              this._onload
            }
            // numColumns={3}
            // columnWrapperStyle={{ borderWidth: 2, borderColor: 'black', paddingLeft: 20 }}
            // getItemLayout={(data, index) => (
            //   { length: 100, offset: (100 + 2) * index, index }
            // )}
            renderItem={this._renderItem}
            data={data}
          />
        </View>

      </View>
    );
  }
  _renderItem = (item) => {
    return (
      <View>
        <HomeListItem gotoDetail={this.props.gotoDetail} />
      </View>
    );
  }
  _header = () => {
    return <View style={{ backgroundColor: '#e8e8e8', height: 0 }} />;
  }
  _footer = () => {
    return <View style={[styles.txt, { backgroundColor: '#e8e8e8' }]} />;
  }
  _separator = () => {
    return <View style={{ height: 2, backgroundColor: '#eee' }} />;
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


// https://www.jianshu.com/p/47a2ad2bf527
// getItemLayout
// 是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的getItemLayout
// 用起来就既高效又简单，类似下面这样：
// getItemLayout={(data, index) => ( {length: 行高, offset: 行高 * index, index} )}注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中。
//
// 作者：mymdeep
// 链接：https://www.jianshu.com/p/47a2ad2bf527
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
