import { Drawer } from "expo-router/drawer";
export default function _Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ headerShown: false }} />
    </Drawer>
  );
}
