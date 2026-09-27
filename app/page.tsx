import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Doors from "@/components/Doors";
import FreshDrops from "@/components/FreshDrops";
import MadeForPeople from "@/components/MadeForPeople";
import PartnerAndNewsletter from "@/components/PartnerAndNewsletter";
import MeetAndReviews from "@/components/MeetAndReviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Doors />
        <FreshDrops />
        <MadeForPeople />
        <PartnerAndNewsletter />
        <MeetAndReviews />
      </main>
      <Footer />
    </>
  );
}