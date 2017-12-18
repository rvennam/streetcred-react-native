import React from 'react';
import {
    TabNavigator,
} from 'react-navigation';

import Badges from './Badges';
import SetupScreen from './SetupScreen';
import CheckInScreen from './CheckInScreen';

const HomeScreen = TabNavigator({
    'Main': { screen: Badges, icon: 'badge' },
    'Check In': { screen: CheckInScreen },
    'Setup': { screen: SetupScreen },
});

export default HomeScreen;