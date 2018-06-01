import React, { Component } from 'react';
import {
  Platform,Button,
  StyleSheet,TextInput,
  Text,
  View,Alert
} from 'react-native';
import axios from "axios";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            Email: "",
            Password: "",
            isLogging: false
        }
    }
    login = () => {
        this.setState({ isLogging: true });
    
        const url = "http://api.keetool.xyz/login";
        axios
          .post(url, {
            email: this.state.Email,
            password: this.state.Password
          })
          .then(response => {
            this.setState({ isLogging: false });
            this.props.navigation.navigate("NewFeedScreen");
          })
          .catch(() => {
            this.setState({ isLogging: false });
            Alert.alert("Đăng nhập", "Lỗi rồi")
          });
      };
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderWidth: 2, borderRadius: 5, borderColor: "red", margin: 10, padding: 20}}>
          <TextInput
            style={{width: 200, height: 60}}
            placeholder="Email"
            onChangeText={(value)=>{
                this.setState({Email: value})
            }}
            />
        </View>
        <View style={{ borderWidth: 2, borderRadius: 5, borderColor: "red", margin: 10, padding: 20}}>
        <TextInput
            style={{width: 200, height: 60}}
            placeholder="Password"
            onChangeText={(value)=>{
                this.setState({Password: value})
            }}
        />
        </View>
        <View style={{borderRadius: 5, margin: 10, padding: 20}}>
            <Button
                style={{width: 200, height: 60}}
                onPress={this.login}
                disabled={this.state.isLogging}
                title={this.state.isLogging ? "Logining" : "Login"}
            />
        </View>
        <View>
            <Button
            style={{width: 200, height: 60}}
            onPress={()=>{
              this.props.navigation.navigate("RegisterScreen")
            }}
            title="Đăng ký tài khoản"
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});