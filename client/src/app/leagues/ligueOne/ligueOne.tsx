import StickyNavbar from '../../components/StickyNavbar';
import Footer from '../../components/Footer';
import '../../../index.css';
import { ligueOneContent } from './content';

// Ajusta la ruta si tienes un Sidebar real
// import Sidebar from 'RUTA_DEL_SIDEBAR';

const LigueOne = () => {
  return (
    <div className="flex min-h-screen bg-[#2c2536]">
      {/* Sidebar (ajusta el import si tienes uno real) */}
      <div className="w-64 bg-[#232323] hidden md:block">
        {/* <Sidebar /> */}
      </div>
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <StickyNavbar />
        {/* Banner principal */}
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-[65px]">
          {/* Imagen de fondo */}
          <img
            src={ligueOneContent.image}
            alt="Ligue 1 Stadium"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          {/* Overlay para oscurecer */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c2536]/100 to-[#2c2536]/10 z-10" />
          {/* Contenido principal */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full py-16">
                        <h2 className="text-2xl md:text-3xl text-white font-light mb-2 text-center tracking-widest">
              {ligueOneContent.subtitle}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center drop-shadow-lg">
              {ligueOneContent.title}
            </h1>
            <h3 className="text-3xl md:text-4xl text-white font-light mb-8 text-center tracking-[50px]">
              {ligueOneContent.tournament}
            </h3>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LigueOne; 