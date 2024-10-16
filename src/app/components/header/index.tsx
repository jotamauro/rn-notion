import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

export const Header = () => {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{ uri: "https://github.com/jotamauro.png" }}
      />
      <View style={s.user}>
        <Text style={s.name}>Jota Mauro</Text>
        <Text style={s.email}>josemaurodl@gmail.com</Text>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  );
};
