import '../styles/globals.css';

// importando componentesss
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// importando o hook useRouter do Next.js para gerenciar as rotas
import { useRouter } from 'next/router';

// importando animacoes do framer motion
import { AnimatePresence, motion } from 'framer-motion';

// função MyApp que é a base do aplicativo
function MyApp({ Component, pageProps }) {
  // obtendo o objeto de roteamento do useRouter()
  const router = useRouter();

  return (
    // renderizando o componente Layout, conteudo da pagina etc
    <Layout>
      {/* utilizando animate do framer */}
      <AnimatePresence mode='wait'>
        {/* usando motion.div para aplicar animations */}
        <motion.div key={router.route} className='h-full'>
          {/* renderizando o componente transition */}
          <Transition />
          {/* renderizando o componente da página atual */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
