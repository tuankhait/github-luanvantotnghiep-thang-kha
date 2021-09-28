import _ from 'lodash';
import React, {useState, useRef, useEffect} from 'react';
import {
  TextInput,
  ViewPropTypes,
  StyleSheet,
  Animated,
  View,
  Text,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../shared/themes/colors';
import Sizes from '../../shared/themes/size';
import StyledText from '../StyledText';

const TextInputBase = ((props, ref) => {
  const {
    style,
    value,
    placeholder,
    stylePlacehoderAnimate,
    onFocus,
    onEndEditing,
  } = props;
  const animate = useRef(new Animated.Value(0)).current;
  const [placeholderTxt, setPlaceholderTxt] = useState(placeholder);
  const [fontSizeIP, setFontSizeIP] = useState(false); //true: Focus ------ false: End Edit

  useEffect(() => {
    if (value != '') {
      focusInput();
    } else {
      endEditingInput();
    }
  }, [value]);
  function focusInput() {
    setPlaceholderTxt('');
    setFontSizeIP(true);
    Animated.timing(animate, {
      toValue: 1,
      duration: 200,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  }

  function endEditingInput() {
    setPlaceholderTxt(placeholder);
    setFontSizeIP(false);
    if (value == '') {
      Animated.timing(animate, {
        toValue: 0,
        duration: 200,
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    } else {
      setFontSizeIP(true);
    }
  }

  const zIndexs = animate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-1, 0, 1],
    extrapolate: 'clamp',
  });
  const tops = animate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [Sizes.REAL_SIZE_21, Sizes.REAL_SIZE_20, Sizes.REAL_SIZE_10],
    extrapolate: 'clamp',
  });
  const fontSizes = animate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      Sizes.calculationRealSize(17),
      Sizes.REAL_SIZE_14,
      Sizes.REAL_SIZE_12,
    ],
    extrapolate: 'clamp',
  });
  const opacitys = animate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  return (
    <>
      <TextInput
        {...props}
        style={[
          styles.containerTextInput,
          fontSizeIP && {
            fontSize: Sizes.REAL_SIZE_15,
            paddingTop: Sizes.calculationRealSize(18),
          },
          style,
        ]}
        value={value}
        placeholder={placeholderTxt}
        placeholderTextColor={'#B2B8B9'}
        onFocus={() => {
          focusInput();
          onFocus ? onFocus() : null;
        }}
        onEndEditing={() => {
          endEditingInput();
          onEndEditing ? onEndEditing() : null;
        }}
      />
      <Animated.View
        style={[
          styles.styPlaceholder,

          {
            zIndex: zIndexs,
            top: tops,
            opacity: opacitys,
          },
          stylePlacehoderAnimate,
        ]}>
        <Animated.Text
          style={[
            styles.txtPlaceholder,

            {
              fontSize: fontSizes,
            },
          ]}>
          {placeholder}
        </Animated.Text>
      </Animated.View>
    </>
  );
});

const styles = StyleSheet.create({
  styPlaceholder: {
    position: 'absolute',
    top: Sizes.REAL_SIZE_21,
    backgroundColor: 'transparent',
    borderRadius: Sizes.REAL_SIZE_8,
    paddingLeft: Sizes.REAL_SIZE_9,
    zIndex: -1,
  },
  txtPlaceholder: {
    color: '#B2B8B9',
    fontSize: Sizes.calculationRealSize(17),
  },
  containerTextInput: {
    fontSize: Sizes.REAL_SIZE_16,
    color: Colors.TEXT_COLOR,
    height: Sizes.REAL_SIZE_54,
    paddingVertical: Sizes.REAL_SIZE_5,
    borderRadius: Sizes.REAL_SIZE_8,
    borderWidth: 0.5,
    borderColor: '#B2B8B9',
    backgroundColor: Colors.WHITE,
  },
});

TextInputBase.defaultProps = {
  style: styles.container,
};

TextInputBase.propTypes = {
  style: ViewPropTypes.style,
  stylePlacehoderAnimate: ViewPropTypes.style,
  onEndEditing: PropTypes.func,
  onFocus: PropTypes.func,
};

export default TextInputBase;
