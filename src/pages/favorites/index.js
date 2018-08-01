import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FavoriteItem from './component/FavoriteItem'

export default class Favorites extends Component{
    static navigationOptions = {
        title: 'Meus Favoritos',
    };
    state = {
        favorites: [],
    };
    renderList = () => (
        <FlatList 
          data={this.state.favorites}
          keyExtractor= {items => String(item.id)}
          renderItem={ ({item}) => <FavoriteItem favorite={item} />}/>
    );
    render(){
        return(
            <View style={styles.container}>
                {!this.state.favorites.length
                ?<Text style={styles.empty}> Opss nada por aqui...</Text> 
                : this.renderList()}
            </View>
        );
    }
}

