import React, { Component } from 'react';
import {
    Platform,TouchableOpacity,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    Alert
} from 'react-native';
import axios from 'axios';

var { width, height } = Dimensions.get('window');

export default class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFeed: [],
        }
    }

    componentWillMount() {
        const url = "http://colorme.vn:8000/products"
        axios
            .get(url)
            .then(response => {
                let data = response.data;
                this.setState({
                    newFeed: data.products
                })
            })
            .catch(() => {
                Alert.alert("Bài này", "Lỗi rồi nhé")
            })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ddbebe"}}>
                <FlatList
                    keyExtractor={(value, index) => { return (index + "") }}
                    data={this.state.newFeed}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, marginTop: 30, alignItems: 'center', borderRadius: 3, backgroundColor: "#ceafaf"}}>
                                <View style={{  marginLeft: 30, marginBottom: 10, alignItems: 'center' }}>
                                    <Text style={{color: "black"}}>{item.title}</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: "row", marginBottom: 10}}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
                                        <Image style={{ width: 40, height: 40 }} source={{ uri: "http://d1j8r0kxyu9tj8.cloudfront.net/webs/logo1.jpg" }} />
                                </View>
                                <View style={{ flexDirection: 'column', flex: 3 }}>
                                    
                                    <View style={{ alignItems: 'flex-start', justifyContent:"center" }}>
                                        <Text style={{fontSize: 30, fontWeight: 'bold', color: "black"}}>{item.author.name}</Text>
                                        <Text style={{fontSize: 15, fontWeight: 'bold', color: "black"}}>{item.author.phone}</Text>
                                        
                                    </View>
                                </View>
                                </View>                                
                                <View style={{marginBottom: 10}}>
                                    <Image style={{ width: width, height: width / 2 }} source={{ uri: item.url }} />
                                    <Text style={{color: "black"}}>{item.created_at}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}

