import React, { useEffect, useState } from 'react';
import {Text, View, Image, Linking, Moment, ImageBackground} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios';

//Manzano Javier - legajo:73261

const AlbumDetail = ({navigation, title, albumId, countPhotos, countVideos, countViews}) => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    previewContentStyle,
    previewInfoStyle,
    textInfoStyle,
  } = styles;

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const getPhoto = async () => {
      let response;
      try {
        response = await axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${albumId}&user_id=137290658%40N08&per_page=1&format=json&nojsoncallback=1`,
        );
        setPhoto(response.data.photoset.photo[0]);
      }
      catch (error) {
        console.log(error);
      }
    }
    getPhoto();
  }, []);

  const getURL = () => {
    if(!photo){return "https://us.123rf.com/450wm/jabkitticha/jabkitticha1607/jabkitticha160700270/60102905-foto-icono.jpg?ver=6"}
    else{return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
  }

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>
      <CardSection>
      <View style={[previewContentStyle,{flexDirection:'column'}]}>
          <ImageBackground  
            style={[imageStyle]} 
            source={{uri:`${getURL()}`}}>
          </ImageBackground>
          <View style={[previewContentStyle]}>
            <View style={[previewContentStyle,{justifyContent:'flex-end', alignItems:'flex-start'}]}>
              <View style={[previewInfoStyle, { marginLeft:5, position:'absolute'}]}>
                <Text style={[textInfoStyle,{fontSize:20}]}> {countViews}</Text>
                <Image style={{height:25, width:25, marginHorizontal:5}} source={{uri:'data:image/png;base64,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'}} />
                
              </View>
            </View>
            <View style={[previewContentStyle,{justifyContent:'flex-end', alignItems:'flex-end', marginRight:5}]}>
              <View style={[previewInfoStyle,{marginBottom:5}]}>
                {(countPhotos!==0)&&
                <View style={{flexDirection:'row'}}>
                  <Text style={textInfoStyle} > {countPhotos}</Text>
                  <Image style={{height:15, width:15, marginHorizontal:5}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLShMldBrrKpsm78VJn7bJHl16CZitWfg9uM_3TaeK49XbHo-OxLNH-XZXnIiKSOaN7I&usqp=CAU'}} />
                </View>}
                {(countVideos!==0)&&
                <View style={{flexDirection:'row'}}>
                  <Text style={textInfoStyle} > {countVideos}</Text>
                  <Image style={{height:15, width:15, marginHorizontal:5}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzW8e31xSK9DVK7QpeszAkGEx9oySwF2qyHHzBghUMDLKBOgXEYZx23ZJNHH6KL8pwKY0&usqp=CAU'}} />
                </View>}
              </View>
            </View>
          </View>
        </View>
      </CardSection> 
      <CardSection>
        <Button
          onPress={() => navigation.navigate('photoList', {albumId: albumId})}>
          Open {title}
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 20,
  },
  headerTextInfoStyle: {
    fontSize:10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewContentStyle:{
    height: 200,
    flex:1,
  },
  imageStyle: {
    height: 200,
    position: 'relative',
    width:'100%',
    borderRadius: 5,
    borderWidth: 1,
  },
  textInfoStyle:{
    fontSize:12,
    color:'#D1D1D1',
  },
  previewInfoStyle:{
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
    borderColor:'#D1D1D1',
    backgroundColor:'black',
    borderRadius: 5,
    borderWidth: 1,
  },
};

export default AlbumDetail;