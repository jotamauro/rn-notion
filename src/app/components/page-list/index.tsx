import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Page } from "../page";
import { s } from "./styles";

type PageListProps = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};
export const PageList = ({ data }: PageListProps) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Privado</Text>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color={colors.gray[300]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus" size={20} color={colors.gray[300]} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={s.list}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        renderItem={({ item }) => <Page title={item.title} />}
      />
    </View>
  );
};
