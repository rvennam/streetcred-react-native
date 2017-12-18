import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


class Badges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placesList: []
        }
    }

    static navigationOptions = {
        title: 'Badges',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                type='simple-line-icon'
                name='badge' />
        ),
    };



    render() {
        const { navigate } = this.props.navigation;
        const users = [
            {
                name: 'FOODIE',
                avatar: 'https://b.zmtcdn.com/data/user_profile_pictures/460/eec831f852bef2744cb763cfa2c3d460.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A'
            },
            {
                name: 'HIKER',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            }
        ];
        return (
            <ScrollView>
                <View style={styles.hero}>
                    <Icon color="white" name="whatshot" size={62} type="material" />
                    <Text style={styles.heading}>Your Badges</Text>
                </View>
                <Card
                    title='FOODIE'
                    image={{ uri: 'https://cdn.pixabay.com/photo/2017/11/22/10/51/asian-2970211_1280.jpg'}}>
                    <Text style={{ marginBottom: 10 }}>
                        
                    </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HIKER'
                    image={{ uri: 'https://cdn.pixabay.com/photo/2016/01/19/17/47/hiker-1149898_1280.jpg' }}>
                    <Text style={{ marginBottom: 10 }}>

                    </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 10,
        fontSize: 22,
    },
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: "#dcd7d4",
    },
});

export default Badges;