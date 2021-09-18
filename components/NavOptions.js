import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Get a ride",
        image: "https://techcrunch.com/wp-content/uploads/2020/03/uber-atg-2019.png",
    
    screen: "MapScreen",
  },
  {
    id: "456",
    title: " Order food",
    image:
"https://ak.picdn.net/shutterstock/videos/1033269386/thumb/1.jpg",
          screen: "EatsScreen,",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
