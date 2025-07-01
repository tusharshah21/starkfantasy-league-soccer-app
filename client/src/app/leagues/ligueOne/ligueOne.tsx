import StickyNavbar from '../../components/StickyNavbar';
import Footer from '../../components/Footer';
import ligueOneImg from '../../../assets/images/ligueOne/ligueOne.png';
import '../../../index.css';

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
        <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src={ligueOneImg}
            alt="Ligue 1 Stadium"
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
          />
          {/* Overlay para oscurecer */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c2536]/90 to-[#2c2536]/60 z-10" />
          {/* Contenido principal */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full py-16">
            <img
              src={ligueOneImg}
              alt="Ligue 1 Logo"
              className="w-32 h-32 mb-6 drop-shadow-lg rounded-full border-4 border-white bg-white/80"
              style={{objectFit: 'contain'}}
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center drop-shadow-lg">
              Ligue One
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-light mb-2 text-center tracking-widest">
              Welcome to
            </h2>
            <h3 className="text-3xl md:text-4xl text-yellow-400 font-semibold mb-8 text-center tracking-widest">
              Tournament
            </h3>
            <p className="text-white text-lg md:text-xl max-w-2xl text-center">
              Explore the different leagues in the world and compete with your friends!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LigueOne; 