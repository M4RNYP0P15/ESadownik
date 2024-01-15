import {useDispatch, useSelector} from 'react-redux';
import {MyPlantsScreenProps} from '../navigation/types';
import {removePlant, selectedUserPlants} from '../redux-store/plantListSlice';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import {selectDarkMode} from '../redux-store/reducers';
import {createMyPlantsStyles} from '../../styles/myPlantsStyles';

export default function MyPlantsScreen({
  navigation,
  route,
}: MyPlantsScreenProps) {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const userPlants = useSelector(selectedUserPlants);

  const handleRemovePlant = (plant: Plant) => {
    dispatch(removePlant(plant));
  };

  const styles = createMyPlantsStyles(darkMode);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('PlantInfoScreen', {
            name: item.nazwa,
            rodzaj: item.kategoria,
          });
        }}>
        <Text style={styles.itemText}>
          {item.nazwa} - {item.kategoria}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemovePlant(item)}>
        <Text style={styles.removeButtonText}>Usuń</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={userPlants.userPlants}
      renderItem={renderItem}
      keyExtractor={item => item.nazwa.toString()}
      ListEmptyComponent={
        <Text style={styles.noResultsText}>
          Brak roślin w kolekcji. Dodaj nowe poprzez Kategorię w szufladzie
        </Text>
      }
      contentContainerStyle={styles.containerStyle}
    />
  );
}
