import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const UserDetailScreen = () => {
  const route = useRoute();
  const { id, name, email, phone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vista Detallada</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  contentContainer: {
    backgroundColor: '#e0e0e0', // Color de fondo del contenedor
    borderRadius: 10, // Bordes redondeados
    padding: 15, // Espaciado interno
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default UserDetailScreen;
