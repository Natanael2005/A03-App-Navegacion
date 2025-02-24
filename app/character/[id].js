import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CharacterDetail() {
    const { id } = useLocalSearchParams();
    const [isLoading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null);

    const getCharacter = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const json = await response.json();
            setCharacter(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCharacter();
    }, [id]);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00b0c8" />
            </View>
        );
    }

    if (!character) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Error al cargar el personaje</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.info}>Status: {character.status}</Text>
                <Text style={styles.info}>Species: {character.species}</Text>
                <Text style={styles.info}>Gender: {character.gender}</Text>
                <Text style={styles.info}>Origin: {character.origin.name}</Text>
                <Text style={styles.info}>Location: {character.location.name}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    info: {
        fontSize: 16,
        marginBottom: 8,
    },
});
