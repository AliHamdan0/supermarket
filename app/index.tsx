import { Redirect } from "expo-router";

export default function Page() {
  let startPath = "/shop" as never;

  return <Redirect href={startPath} />;
}
