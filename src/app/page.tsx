import ClientReviews from "@/components/ClientReviews";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import CoreTechnology from "@/components/CoreTechnology";
import Hero from "@/components/Hero";
import OurTechnology from "@/components/OurTechnology";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <OurTeam />
      <CoreTechnology />
      <OurTechnology />
      <ClientReviews />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
 
