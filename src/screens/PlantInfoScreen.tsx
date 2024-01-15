/* eslint-disable react/react-in-jsx-scope */
import {Text, TouchableOpacity, View} from 'react-native';
// import { Text, View } from '../components/Themed';
import {PlantScreenProps} from '../navigation/types';
import {ScrollView} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import Accordian from '../components/Accordian';
import {useDispatch, useSelector} from 'react-redux';
import {selectDarkMode} from '../redux-store/reducers';
import {createPlantScreenStyles} from '../../styles/plantInfo';
import {findPlantByName, selectFoundPlantData} from '../redux-store/jsonSlice';
import {
  addPlant,
  isPlantInList,
  removePlant,
} from '../redux-store/plantListSlice';
import {RootState} from '../redux-store/store';

export default function PlantScreen({navigation, route}: PlantScreenProps) {
  const {name, variety_params, rodzaj} = route.params;
  const dispatch = useDispatch();
  if (!variety_params) {
    if (rodzaj) {
      dispatch(findPlantByName({rodzaj, name}));
    }
  }
  const isPlantInUserList = useSelector((state: RootState) =>
    isPlantInList(state, name),
  );
  // const isPlantInUserList = useSelector( isPlantInList(name));
  const darkMode = useSelector(selectDarkMode);
  const styles = createPlantScreenStyles(darkMode);
  const foundOdmiana = useSelector(selectFoundPlantData);
  const variety = variety_params || foundOdmiana;
  return (
    <ScrollView>
      {variety ? (
        <View style={styles.container}>
          <Text style={styles.heading}>{variety.nazwa}</Text>
          {isPlantInUserList ? (
            <TouchableOpacity
              onPress={() => {
                if (rodzaj) {
                  dispatch(removePlant({nazwa: name, kategoria: rodzaj}));
                }
              }}>
              <Text style={styles.addPlantButton}>Usuń z moich roślin</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (rodzaj) {
                  dispatch(addPlant({nazwa: name, kategoria: rodzaj}));
                }
              }}>
              <Text style={styles.addPlantButton}>Dodaj do moich roślin</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.infoText}>
            Mrozoodporność: {variety.mrozoodpornosc}
          </Text>
          <Text style={styles.infoText}>
            Okres przechowywania: {variety.okres_przechowywania}
          </Text>
          <Text style={styles.infoText}>
            Pochodzenie: {variety.pochodzenie}
          </Text>
          <Text style={styles.infoText}>
            Pora kwitnienia: {variety.pora_kwitnienia}
          </Text>
          <Text style={styles.infoText}>
            Samopylność: {variety.samopylnosc}
          </Text>
          <Text style={styles.infoText}>Galeria:</Text>
          <View style={styles.galleryContainer}>
            {variety.galeria.map((image: GalleryItem, index: number) => (
              <FastImage
                key={index}
                source={{uri: image.src}}
                style={styles.galleryImage}
              />
            ))}
          </View>
          <Accordian
            title="Charakterystyka"
            data={variety.charakterystyka}
            expanded={true}
            darkMode={darkMode}
          />
          <Accordian title="Owoc" data={variety.owoc} darkMode={darkMode} />
          <Accordian title="Uprawa" data={variety.uprawa} darkMode={darkMode} />
          <Accordian
            title="Wymagania"
            data={
              'Słoneczne:' +
              variety.wymagania.sloneczne +
              '\nWodne:' +
              variety.wymagania.wodne +
              '\nOdczyn gleby:' +
              variety.wymagania.odczyn_gleby
            }
            darkMode={darkMode}
          />
          <Accordian
            title="Podatność na choroby"
            data={variety.podatnosc_na_choroby}
            darkMode={darkMode}
          />
          <Accordian
            title="Zapylacze"
            data={variety.zapylacze.join(', ')}
            darkMode={darkMode}
          />
          <Accordian title="Cięcie" data={variety.ciecie} darkMode={darkMode} />
          <Accordian
            title="Dojrzałość"
            data={
              'Zbiorcza:' +
              variety.dojrzalosc.zbiorcza +
              '\nKonsumpcyjna:' +
              variety.dojrzalosc.konsumpcyjna
            }
            darkMode={darkMode}
          />
          <Accordian
            title="Rozstawa"
            data={variety.rozstawa}
            darkMode={darkMode}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.noResultsText}>
            Brak rośliny - możliwe że zmieniła nazwę{foundOdmiana} lll
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
