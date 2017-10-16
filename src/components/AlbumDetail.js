//Import libraries for making a component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//making a component
//could also do that ({album: { title, artist, thumbnail_image } })
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, ImageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                     style={thumbnailStyle}
                     source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={ImageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    ImageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
};

//making component available to other parts of the app
export default AlbumDetail;
