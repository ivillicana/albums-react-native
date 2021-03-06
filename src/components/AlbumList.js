import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then(resp => resp.json())
    .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
