import AboutSection from "@/components/AboutSection"
import Banner from "@/components/Banner"
import FAQSection from "@/components/FaqSection"
import TeamSection from '@/components/TeamSection'

const AboutPage = () => {
  return(
    <div>
      <Banner pageTitle={"About Us"} />
      <AboutSection />
      <TeamSection itemsLimit={4} />
      <FAQSection itemsLimit={5} />
    </div>
  )
}

export default AboutPage