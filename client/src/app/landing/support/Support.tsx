import StickyNavbar from "../../components/StickyNavbar";

const Support = () => {
  return (
    <div className="bg-[#0F111A] text-white min-h-screen">
      <StickyNavbar />

      <div className="max-w-4xl mx-auto space-y-10 py-16 px-4 sm:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold">Support</h1>

        {/* Intro paragraph */}
        <p className="text-gray-300">
          We at StarkFantasy League are dedicated to providing you with an exceptional experience. 
          If you encounter any issues or have any feedback, please don’t hesitate to reach out to us at 
          <a
            href="mailto:starkfantasyleague@gmail.com"
            className="text-orange-400 hover:underline ml-1"
          >
            starkfantasyleague@gmail.com
          </a>. 
          Our team is eager to assist you and ensure your satisfaction.
        </p>

        {/* Are you a contributor? */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Are you a contributor?</h2>
          <p className="text-gray-300 mb-4">
            As a continuously evolving project, StarkFantasy League thrives on community contributions. 
            If you’re interested in lending your expertise, we warmly invite you to explore our 
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mx-1"
            >
              Github repository
            </a>.
            Here, you’ll find opportunities to collaborate and help shape the future of our platform.
          </p>
          <p className="text-gray-300">
            Effective coordination is key to our collective success. To facilitate seamless communication 
            among contributors, we encourage you to join our active channels on
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mx-1"
            >
              Telegram
            </a>
            and
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mx-1"
            >
              Discord
            </a>.
            By participating in these communities, you’ll stay informed, share ideas, and work alongside fellow 
            enthusiasts to enhance StarkFantasy League.
          </p>
        </section>

        {/* Are you ready? */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Are you ready?</h2>
          <p className="text-gray-300 mb-4">
            Let’s dive into the thrilling and unpredictable world of fantasy sports — where every move counts 
            and the stakes are anything but ordinary. Welcome to StarkFantasy League.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition">
            Start Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Support;
