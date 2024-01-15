import React, {useCallback} from 'react';
import {Text, View, SafeAreaView, SectionList} from 'react-native';
import {PlantCategoriesProps} from '../navigation/types';
import {styles} from '../../styles/categories';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {selectJsonData} from '../redux-store/jsonSlice';
import {selectDarkMode} from '../redux-store/reducers';

export default function PlantCategoriesScreen({
  navigation,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
}: PlantCategoriesProps) {
  const jsonData = useSelector(selectJsonData).data.kategorie;
  const handleCategoryPress = (category: any) => {
    navigation.navigate('PlantTypeScreen', {category});
  };

  const formattedData = useCallback(() => {
    // Przekształć dane na format SectionList
    return jsonData.map(kategoria => ({
      title: kategoria.nazwa,
      data: kategoria.typ.map(roslina => roslina.rodzaj),
    }));
  }, [jsonData]);
  const darkMode = useSelector(selectDarkMode);
  //console.log(sections);
  const customStyles = styles(darkMode);
  return (
    <SafeAreaView style={customStyles.container}>
      <SectionList
        sections={formattedData()}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <View style={customStyles.sectionitem}>
            <Text style={customStyles.section_title}>{section.title}</Text>
          </View>
        )}
        renderItem={({item, index, section}) => (
          <View
            style={[
              customStyles.item,
              index === 0 && customStyles.itemFirst,
              index === section.data.length - 1 && customStyles.itemLast,
            ]}>
            <TouchableOpacity
              onPress={() => handleCategoryPress({title: section.title, item})}>
              <Text style={customStyles.item_title}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
