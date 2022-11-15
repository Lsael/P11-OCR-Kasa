import SwitchBar from "../components/SwitchBar";
import Layout from "./Layout"
import aboutBanner from "../assets/about-banner.png"
import aboutBannerMobil from "../assets/about-banner-mobil.png"


const About = () => {
    return (
      <Layout>
        <section className="about">
          <div className="banner banner__about">
            <picture>
              <source media="(max-width: 550px)" srcSet={aboutBannerMobil}/>
              <img src={aboutBanner} alt="" />
            </picture>
          </div>
          <div className="standard-box">
            <SwitchBar title="Fiabilité" />
            <p className="box">
            Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements,
            et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </p>
          </div>
          <div className="standard-box">
            <SwitchBar title="Respect" />
            <p className="box">
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
          <div className="standard-box">
            <SwitchBar title="Service" />
            <p className="box">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          </div>
          <div className="standard-box">
            <SwitchBar title="Sécurité" />
            <p className="box">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
            chaque logement correspond aux critères de sécurité établis par nos services.
              En laissant une note aussi bien à l'hôte qu'au locataire, 
              cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </section>
      </Layout>
    )
  }
  
  export default About;