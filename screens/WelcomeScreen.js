import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

const SCREEN_WIDTH =Dimensions.get('window').width;
const SLIDE_DATA = [
    {title: 'Step:1', text: 'aaa', uri: require('../assets/welcome_screen1.jpg')},
    {title: 'Step:2', text: 'bbb', uri: require('../assets/welcome_screen2.jpg')},
    {title: 'Step:3', text: 'ccc', uri: require('../assets/welcome_screen3.jpg')}
];

class WelcomeScreen extends React.Component{
    renderSlides(){
        return SLIDE_DATA.map((slide, index) => {
            return (
                <View 
                key={index}
                style={styles.slideStyle}>
                    <View
                    style={styles.containerStyle}
                    >
                        <Text>{slide.title}</Text>
                        <Text>{slide.text}</Text>
                    </View>
                    <Image style={{flex:2 }}
                    resizeMode="contain"
                    source={slide.uri} />
                    <View style={styles.containerStyle}>
                        <Text>{index + 1}</Text>
                    </View>
                </View>
            )
        })
    }
    render(){
        return(
            <ScrollView
            horizontal={true}
            pagingEnabled={true}
            style={{ flex: 1 }}
            >
            {this.renderSlides()}
            </ScrollView>
        );
    }
} 

const styles = StyleSheet.create({
    slideStyle: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        width: SCREEN_WIDTH
    },
    containerStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WelcomeScreen;