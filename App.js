/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Index.android.js - place code in here for android

// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
    return (
        <View>
          <Header headerText={'Albums'} />
          <AlbumList />
        </View>
    );
};


// export the component
export default App;
