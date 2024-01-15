import {Component, ReactNode} from 'react';
import {LayoutAnimation, Platform, Text, UIManager, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
// import { View } from "react-native-reanimated/lib/typescript/Animated";
import {styles} from '../../styles/accordian_flatlist';
// import { Icon } from "react-native-vector-icons/Icon";
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Item {
  key: string;
  value: boolean;
}

interface AccordianFlatListProps {
  title: string;
  data: Item[];
}

interface AccordianFlatListState {
  data: Item[];
  expanded: boolean;
}

export default class AccordianFlatList extends Component<
  AccordianFlatListProps,
  AccordianFlatListState
> {
  constructor(props: AccordianFlatListProps) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render(): ReactNode {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Icon name={this.state.expanded ? 'arrow-up' : 'arrow-down'} />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={{}}>
            <FlatList
              data={this.state.data}
              numColumns={1}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity
                    style={[
                      styles.childRow,
                      styles.button,
                      item.value ? styles.btnActive : styles.btnInActive,
                    ]}
                    onPress={() => this.onClick(index)}>
                    <Text style={[styles.font, styles.itemInActive]}>
                      {item.key}
                    </Text>
                    <Icon
                      name={'check-circle'}
                      color={item.value ? Colors.GREEN : Colors.LIGHTGRAY}
                    />
                  </TouchableOpacity>
                  <View style={styles.childHr} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }

  onClick = (index: number) => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({data: temp});
  };
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}
