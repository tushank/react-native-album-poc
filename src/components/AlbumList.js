//Import libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//making a component
class AlbumList extends Component {

    state = { album: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ album: response.data }));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

//making component available to other parts of the app
export default AlbumList;

