import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { Touchable } from '../../components/index';

const { width } = Dimensions.get('window');

@connect()
class listItem extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  }
  render() {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />);
    return (
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <View style={styles.flexRow}>
            <Image
              style={styles.headPortrait}
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
            />
            <View>
              <Text>小红</Text>
              <Text>13小时前</Text>
            </View>
          </View>
          <Touchable onPress={() => { this.showActionSheet(); }}><Icon name="ellipsis-h" size={12} color="#f5f5f5" /></Touchable>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>你后门好你们呢噩耗你们豪华房或你们豪华房或或你们豪华房或或你们豪华房或或你们豪华房或或你们豪华房或或或或或或或或或或或或或或或或发挥好或或或或fdfddffffffffffffffffffffff</Text>
        </View>
        <ActionSheet
          ref={(o) => { this.ActionSheet = o; }}
          options={['举报', '取消']}
          cancelButtonIndex={1}
          // destructiveButtonIndex={1}
          onPress={(index) => { console.log(index); }}
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
    padding: 10,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexRowStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  iconRW: {
    flex: 1,
    marginRight: 10,
  },
  headPortrait: {
    width: 30,
    height: 30,
  },
  itemTop: {
    flex: 1,
    flexDirection: 'row',
  },
  PersonalInformation: {
    flex: 1,
    flexDirection: 'row',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width,
    backgroundColor: 'red',
  },
});

export default listItem;
