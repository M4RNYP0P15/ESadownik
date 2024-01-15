import { Image } from "react-native";

const renderImage = ({item}:{ item:any}) => (
    <Image
      source={{uri: item.uri}}
      style={{width: 100, height:100, margin:5}}
      />
);