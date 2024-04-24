import MainLayout from "@/layout";
import PrivateContent from "@/layout/privateContent";
import LandingUI from "@/ui";

export default function Home() {
  return (
    <PrivateContent>
      <MainLayout>
        <LandingUI />
      </MainLayout>
    </PrivateContent>
  );
}
