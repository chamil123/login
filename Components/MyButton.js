import React from 'react';
import { View } from 'react-native';
import { CustomButton } from './custom-button.js';

export const MyScreen = () => (
    <View>
        <UIButton
            title="Open alert!"
            onPress={() => Alert.alert(`Why you opened me? Go away, it's mine!`)}
            style={{ /* some styles for button */ }}
            textStyle={{ /* styles for button title */ }}
        />
    </View>
);