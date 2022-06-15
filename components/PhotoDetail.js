import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//Manzano Javier - legajo:73261

const PhotoDetail = ({title, imageUrl}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;
  
  return (
    <View style={{width:'50%'}}>
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: imageUrl}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>See {title}</Button>
      </CardSection>
    </Card>
    </View>
  );
};

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  imageStyle: {
    height: 150,
    flex:1,
    borderRadius: 5,
    borderWidth: 1,
  },
};

export default PhotoDetail;
