import TradingView from "@/components/TradingView/TradingView";
import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const handleRedirectToTest3 = () => router.push("/test3");
  return (
    <div style={{ background: "lightBlue", height: "5000px" }}>
      <div onClick={handleRedirectToTest3}>To page without graph</div>
      <TradingView />
    </div>
  );
};

export default Test;
