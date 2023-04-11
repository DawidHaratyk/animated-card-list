import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Card from './src/Card';

const cards = [
  {
    heading: 'heading 1',
    description: 'descriptoin 1',
    id: 0,
  },
  {
    heading: 'heading 2',
    description: 'descriptoin 2',
    id: 1,
  },
  {
    heading: 'heading 3',
    description: 'descriptoin 3',
    id: 2,
  },
  {
    heading: 'heading 4',
    description: 'descriptoin 4',
    id: 3,
  },
];

const range = 100;

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
});
