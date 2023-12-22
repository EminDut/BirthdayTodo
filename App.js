import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeSetLoading = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(fakeSetLoading);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={75} color="red" />
      ) : (
        <View>
          <Text> BİRTHDAY TODO STARTING '_' </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
