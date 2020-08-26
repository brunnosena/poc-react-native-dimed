import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, Text, Button, TextInput, FlatList, Image, StyleSheet } from 'react-native';
import api from '../../services/api';
import Input from '../../components/Input';
// import { Title, MessageError, Container, Button, ButtonText } from '../Dashboard/styles';
import { Repository } from '../Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { MessageError } from '../Dashboard/styles';

interface ObjError {
    message: string;
    isError: boolean;
}

export interface GithubUser {
    login: string;
    avatar_url: string;
    url: string;
    repos_url: string;
    name: string;
}

const buildGithubUser = (githubUser: GithubUser): GithubUser => {
    return {
        login: githubUser.login,
        avatar_url: githubUser.avatar_url,
        url: githubUser.url,
        repos_url: githubUser.repos_url,
        name: githubUser.name
    }
}

const styles = StyleSheet.create({
    itemShadowed: {
        flex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        marginTop: 10
    }
});

const DashboardHome: React.FC = () => {

    const [userName, setUserName] = useState('');
    const [inputError, setInputError] = useState<ObjError>({
        message: '',
        isError: false
    });
    const [user, setUser] = useState<GithubUser>();

    const handleAddRepositories = async () => {

        try {
            if (userName) {
                const { data } = await api.get<GithubUser>(`/users/${userName}`);

                console.log(JSON.stringify(data));
                setInputError({
                    message: '',
                    isError: false
                })
                setUser(buildGithubUser(data));
            } else
                setInputError({
                    message: 'Digite um usuário do Github',
                    isError: true
                })
        } catch (error) {
            if (error.response) {
                setInputError({
                    message: 'Usuário não encontrado',
                    isError: true
                })
            }
            if (error.request) {
                setInputError({
                    message: 'Ocorreu um erro, tente novamente',
                    isError: true
                })
            }
        }
    }

    const removeError = () => {
        setInputError({
            message: '',
            isError: false
        })
    }

    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.select({
                ios: 'padding',
                default: undefined
            })}
            enabled>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1, padding: 10 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Digite o usuário Github</Text>
                    <TextInput autoCapitalize='none' onChangeText={setUserName} onFocus={removeError} placeholder='Ex: facebook' />
                    <MessageError>{inputError.message}</MessageError>
                    <Button title='searchButton' onPress={handleAddRepositories}>Pesquisar</Button>
                </View>

                {user && <View style={styles.itemShadowed}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ borderRadius: 25 }} source={{ uri: user.avatar_url, width: 50, height: 50 }} />
                        </View>
                        <Text style={{ marginLeft: 20, flex: 5, alignSelf: "center", fontSize: 20 }}>{user.name}</Text>
                    </View>
                </View>}
                {/* <FlatList data={repos} renderItem={({item}) => <View>{item.toString}</View>}>

                </FlatList> */}

                {/* <Container >
                    <Title>Buscar repositórios</Title>
                    <View>
                        <Input name='dashboard-home-search' placeholder='Digite o usuário do Github' onChangeText={setUserName} error={inputError.isError} />
                    </View>
                    <MessageError>{inputError.message}</MessageError>

                    <Button onPress={handleAddRepositories}>
                        <ButtonText>Adicionar</ButtonText>
                    </Button>

                </Container> */}
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default DashboardHome;