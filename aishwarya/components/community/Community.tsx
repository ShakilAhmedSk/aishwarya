import Testimonials from "../testimonials/Testimonials";
import CommunityHero from "./CommunityHero";
import CommunityTabs from "./CommunityTabs";
import Curators from "./Curators";
import Neighbour from "./Neighbour";

export default function Community() {
  return(
    // <section className='py-20 text-center'>Community Section</section>
    <>
      <CommunityHero/>
      <Neighbour/>
      <CommunityTabs/>
      <Curators/>
      <Testimonials/>
    </>
  )
   
}
