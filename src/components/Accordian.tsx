import React, {Component, ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {createAccordionStyles} from '../../styles/accordian';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface AccordianProps {
  title: string;
  data: string;
  expanded?: boolean;
  darkMode: boolean;
}

interface AccordianState {
  data: string;
  expanded: boolean;
}

export default class Accordian extends Component<
  AccordianProps,
  AccordianState
> {
  constructor(props: AccordianProps) {
    super(props);
    this.state = {
      data: props.data,
      expanded: props.expanded || false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  accordian = React.createRef<TouchableOpacity>();
  render(): ReactNode {
    const styles = createAccordionStyles(this.props.darkMode);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Icon
            name={this.state.expanded ? 'arrow-up' : 'arrow-down'}
            size={28}
            color={styles.icon.color}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text style={styles.childText}>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}
