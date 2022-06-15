import React, {useState, useEffect} from 'react';
import {FlatList,ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Manzano Javier - legajo:73261

const AlbumList = (props) => {
  const [photoSets, setPhotoSets] = useState(null);

  useEffect(() => {
    const getAlbums = async () => {
      let response;
      try {
        response = await axios.get(
          'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
        );
        setPhotoSets(response.data.photosets.photoset);
      }
      catch (error) {
        console.log(error);
      }
    }
    getAlbums();
  }, []);

  const renderAlbums= (album) => {
    return (
      <AlbumDetail
        navigation={props.navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
        countPhotos={album.count_photos}
        countVideos={album.count_videos}
        countViews={album.count_views}
      />
    );
  }

  return(
    (!photoSets?
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Text>Loading...</Text>
        </View>
      :
      <View style={{flex: 1}}>
        <FlatList
          data={photoSets}
          renderItem={({item}) =>renderAlbums(item)}
        />
      </View>)
      )
}
export default AlbumList;
