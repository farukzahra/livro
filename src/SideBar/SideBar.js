import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Left,
  Body,
  Right, 
  Switch
} from "native-base";
const routes = [ {titulo:"Home", icone:"home", navi : "Home"}, 
                 {titulo:"Criar Livro", icone:"book" , navi : "Livro"}, 
                 {titulo:"Escrever Página", icone:"text" , navi : "Pagina"}];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button icon
                  onPress={() => this.props.navigation.navigate(data.navi)}
                >
                  <Left>
                    <Icon name={data.icone} style={{fontSize: 20, color: 'black'}}/>
                  </Left>
                  <Body>
                    <Text>{data.titulo}</Text>
                  </Body>
                  <Right>                    
                  </Right>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
