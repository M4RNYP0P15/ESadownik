import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {PlantTypesProps} from '../navigation/types';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {selectJsonData} from '../redux-store/jsonSlice';
import {useState} from 'react';
import {createPlantTypeStyles} from '../../styles/plantTypeScreem';
import {selectDarkMode} from '../redux-store/reducers';

export default function PlantTypeScreen({navigation, route}: PlantTypesProps) {
  const [search, setSearch] = useState('');
  const jsonData = useSelector(selectJsonData).data.kategorie;
  const darkMode = useSelector(selectDarkMode);
  const {category} = route.params;
  const selectedBranch = jsonData
    .find(kategoria => kategoria.nazwa === category.title)
    ?.typ.find(roslina => roslina.rodzaj === category.item)?.odmiany;
  const handleTypePress = (odmiana: any) => {
    navigation.navigate('PlantInfoScreen', {
      name: odmiana.nazwa,
      variety_params: odmiana,
      rodzaj: category.item,
    });
  };

  const filteredData = search
    ? selectedBranch?.filter(item =>
        item.nazwa.toLowerCase().includes(search.toLowerCase()),
      )
    : selectedBranch;

  const styles = createPlantTypeStyles(darkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {category.title} -&gt; {category.item}:
      </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => setSearch(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Wyszukaj"
      />
      {filteredData?.length === 0 ? (
        <Text style={styles.noResultsText}>Brak wyników</Text>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleTypePress(item)}>
              <Text style={styles.itemStyle}>{item.nazwa}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
