import { FlatList, Text, View } from "react-native";
import { Recent } from "../recent";
import { s } from "./styles";

type RecentListProps = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};
export const RecentList = ({ data }: RecentListProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  );
};
