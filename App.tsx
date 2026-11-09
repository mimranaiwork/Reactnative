import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StorybookUIRoot from './.rnstorybook';
import { Button } from './components/Button';

// Set EXPO_PUBLIC_STORYBOOK_ENABLED=true (e.g. `npm run storybook`) to render Storybook
// instead of the app. When it is not set, Metro strips Storybook from the bundle.
const isStorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function MainApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.tsx to start working on your app!</Text>
      <Button label="Hello" onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return isStorybookEnabled ? <StorybookUIRoot /> : <MainApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    textAlign: 'center',
  },
});
