import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCharacters = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCharacters();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00b0c8" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/character/${item.id}`} asChild>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text
                                style={[
                                    styles.status,
                                    {
                                        color:
                                            item.status === "Alive"
                                                ? "#4CAF50"
                                                : item.status === "Dead"
                                                    ? "#F44336"
                                                    : "#FFC107",
                                    },
                                ]}
                            >
                                {item.status}
                            </Text>
                        </TouchableOpacity>
                    </Link>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f0f0f0",
    },
    item: {
        backgroundColor: "#b3b3b3",
        padding: 16,
        marginBottom: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00000",
    },
    status: {
        fontSize: 14,
        fontWeight: "500",
    },
});