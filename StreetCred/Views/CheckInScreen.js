import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';

class CheckInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placesList: []
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Check In',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                type='simple-line-icon'
                name='check' />
        ),
    };

    componentDidMount() {
        return fetch('https://openwhisk.ng.bluemix.net/api/v1/web/rvennam@us.ibm.com_dev/streetcred/getPlaces?blocking=true&result=true')
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                this.setState({ placesList: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.hero}>
                    <Icon color="white" name="near-me" size={62} type="material" />
                    <Text style={styles.heading}>Nearby</Text>
                </View>
                {this.state.placesList.map((x, i) =>
                    <Card key={i}
                        title={x.name}
                        imageProps={{resizeMode : 'contain'}}
                        image={{ uri: x.icon }}
                        >
                        <Text style={{ marginBottom: 10 }}>

                        </Text>
                        <Button
                            icon={{ name: 'code' }}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='CHECK IN' />
                    </Card>
                )}
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


export default CheckInScreen;