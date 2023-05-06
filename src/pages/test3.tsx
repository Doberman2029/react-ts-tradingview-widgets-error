import { useRouter } from "next/router";

const Test3 = () => {
  const router = useRouter();
  const handleRedirectToTest = () => router.push("/test");
  return (
    <div style={{ background: "lightBlue", height: "5000px" }}>
      <div onClick={handleRedirectToTest}>to page with graph</div>
    </div>
  );
};

export default Test3;
