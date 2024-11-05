
import CircleOption from "../Components/CircleOpition";
import Gallery from "../Components/Gallery";
import AirJordan from "../Components/OfertaEspecial";
import Section from "../Components/Section";
import Layout from "../PageLayout/Layout";



const HomePage = () => {
  return (

    <Layout>

      <main style={{ backgroundColor: '#F5F5F5' }}>
        <div>
          <Section
            title="Coleções em destaque"
            titleAlign="left"
          // link={{ text: 'Show More', href: 'https://redirect.link' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>

              <img style={{ borderRadius: '4px' }} src="public\collection-1.png" alt="collection1" />
              <img style={{ borderRadius: '4px' }} src="public\collection-2.png" alt="collection2" />
              <img style={{ borderRadius: '4px' }} src="public\collection-3.png" alt="collection3" />
            </div>
          </Section>
        </div>

        <div style={{ paddingTop: '100px' }}>
          <Section
            title="Coleções em destaque"
            titleAlign="center">

            <CircleOption />
          </Section>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-betweens', width: '100%' }}>
          <Section
            title="Produtos em alta"
            titleAlign="left"
            link={{ text: 'Ver todos', href: 'https://redirect.link' }}>

          </Section>
        </div>
        <AirJordan />
      </main>

    </Layout>


  );
}

export default HomePage;