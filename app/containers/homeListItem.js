import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import { Touchable } from '../components';

const { width, height } = Dimensions.get('window');

@connect()
class listItem extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  }
  render() {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />);
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.icon}
            source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
          />
          <View>
            <Text>小红</Text>
            <Text>13小时前</Text>
          </View>
          <Touchable><Icon name="rocket" size={30} color="#900" /></Touchable>
        </View>
        <TouchableHighlight>
          <Text onPress={() => { this.props.gotoDetail(); }}>fdfdf</Text>
        </TouchableHighlight>
        <Text onPress={() => { this.showActionSheet(); }}>你后门好你们呢噩耗你们豪华房或或或或或或或或或或或或或或或发挥好或或或或</Text>
        <View>
          <Text><Icon name="rocket" size={30} color="#900" /></Text>
          <Text><Icon name="rocket" size={30} color="#900" /></Text>
          <Text><Icon name="rocket" size={30} color="#900" /></Text>
          <Text><Icon name="rocket" size={30} color="#900" /></Text>
        </View>
        <ActionSheet
          title="Which one do you like ?"
          ref={(o) => this.ActionSheet = o}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
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
    padding: '4% 1% 2%',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width,
    backgroundColor: 'red',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default listItem;
