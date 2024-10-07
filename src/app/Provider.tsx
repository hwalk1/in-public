import { NextUIProvider } from "@nextui-org/react";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
}
