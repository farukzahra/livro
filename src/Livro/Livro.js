import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label,
  Form
} from "native-base";
import HomeScreen from "../HomeScreen";

export default class Livro extends React.Component {

  cadastrarLivro(){
    
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Livro</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item>
              <Input placeholder="Título" />
            </Item>
            <Item>
               <Input
                placeholder="Descrição"
                multiline={true}
                numerOfLine={5}
                style={{ height: 200,marginBottom:20 }}
                onPress={() => cadastrarLivro()}/>
            </Item>
            <Button full><Text> Cadastrar </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
