import App from "@/components/App";

export default function Page() {
  return <App version={process.env.NEXT_PUBLIC_VERSION ?? ""} />;
}
