import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const button = { 
    backgroundColor: '#5B4287', 
    flex: 1, 
    marginHorizontal: 10, 
    alignItems: 'center', 
    padding: 10, 
    borderRadius: 5 
};

export default class Control extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={button} onPress={this.props.onRemove}>
                    <Text style={{ color: '#fff' }}>Xoa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button} onPress={this.props.onUpdate}>
                    <Text style={{ color: '#fff' }}>Sua</Text>
                </TouchableOpacity>
            </View>          
        );
    }
}
