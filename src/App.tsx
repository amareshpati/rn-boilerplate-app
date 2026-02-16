import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#000000"
            }}> App Home Screen</Text>
        </View>
    )
}

export default App;
