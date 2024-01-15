import {useCallback} from 'react';
import {SectionList, Text, View} from 'react-native';

interface PlantSectionListProps {
  data: PlantsJsonData;
}

interface Section {
  title: string;
  data: string[];
}

const PlantSectionList: React.FC<PlantsJsonData> = ({kategorie}) => {
  const formattedData = useCallback(() => {
    // Przekształć dane na format SectionList
    return kategorie.map(kategoria => ({
      title: kategoria.nazwa,
      data: kategoria.typ.map(roslina => roslina.rodzaj),
    }));
  }, [kategorie]);
  return (
    <SectionList
      sections={formattedData()}
      keyExtractor={(item, index) => item + index.toString()}
      renderSectionHeader={({section: {title}}) => (
        <View style={{backgroundColor: 'lightgrey', padding: 10}}>
          <Text>{title}</Text>
        </View>
      )}
      renderItem={({item}) => (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            padding: 10,
          }}>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};
