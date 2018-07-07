import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { NavigationActions } from '../../utils/index';
import { Touchable } from '../../components/index';
import comStyle from './comstyle';

const { width, height } = Dimensions.get('window');

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }
  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }));
  }
  showActionSheet = () => {
    this.ActionSheet.show();
  }
  render() {
    console.log(styles);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={comStyle.flexRow}>
            <Image
              style={comStyle.headPortrait}
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
            />
            <View>
              <Text>小红</Text>
              <Text>13小时前</Text>
            </View>
          </View>
          <Touchable onPress={() => { this.showActionSheet(); }}><Icon name="ellipsis-h" size={12} color="#f5f5f5" /></Touchable>
        </View>
        <View style={styles.content}>
          <Text>
            妮妮您女女女女女女女女女女女女女女女女女女女女女女女女女女女女女
            斤斤计较军军军军军军军军军军军军军军
            斤斤计较军军军军军军军军军军军军军
          </Text>
        </View>
        <View style={styles.bottom}>
          <View style={comStyle.flexRowStart}>
            <View style={{ width: '40%' }}><Icon name="eye" size={15} color="#fff"><Text>100</Text></Icon></View>
            <View style={{ width: '20%' }}><Icon name="share" size={15} color="#f5f5f5"><Text>分享</Text></Icon></View>
            <View style={{ width: '20%' }}><Icon name="comment" size={15} color="#f5f5f5"><Text>100</Text></Icon></View>
            <View style={{ width: '20%' }}><Icon name="thumbs-o-up" size={15} color="#f5f5f5"><Text>100</Text></Icon></View>
          </View>
        </View>
        <ActionSheet
          title="Which one do you like ?"
          ref={(o) => { this.ActionSheet = o; }}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { console.log(index); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    padding: '4% 1% 2%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    flexWrap: 'wrap',
  },
  content: {
    flex: 9,
    flexWrap: 'wrap',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width,
    backgroundColor: 'red',
  },
});

export default Detail;
