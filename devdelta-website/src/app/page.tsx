export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Navigation */}
        <nav className="bg-gray-900/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-white">TechSolutions</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#acasa" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Acasă</a>
                  <a href="#servicii" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Servicii</a>
                  <a href="#despre" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Despre</a>
                  <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="acasa" className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Soluții IT Inovatoare pentru <span className="text-blue-400">Afacerea Ta</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transformăm ideile în realitate digitală. Oferim servicii complete de dezvoltare software, consultanță IT și soluții cloud.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Începe Proiectul
                </button>
                <button className="border border-gray-400 text-gray-300 hover:bg-gray-700 font-bold py-3 px-8 rounded-lg transition-colors">
                  Vezi Portofoliu
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicii" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Serviciile Noastre</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/70 transition-colors">
                <div className="text-blue-400 mb-4">
                  <i className="fas fa-code text-4xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Dezvoltare Software</h4>
                <p className="text-gray-300">Aplicații web și mobile personalizate, folosind cele mai noi tehnologii.</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/70 transition-colors">
                <div className="text-blue-400 mb-4">
                  <i className="fas fa-cloud text-4xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Soluții Cloud</h4>
                <p className="text-gray-300">Migrare, implementare și administrare infrastructură cloud.</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700/70 transition-colors">
                <div className="text-blue-400 mb-4">
                  <i className="fas fa-shield-alt text-4xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Securitate IT</h4>
                <p className="text-gray-300">Protejăm datele și sistemele tale împotriva amenințărilor cibernetice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="despre" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Despre Noi</h3>
                <p className="text-gray-300 mb-4">
                  Cu peste 10 ani de experiență în industria IT, suntem partenerul de încredere pentru transformarea digitală a afacerii tale.
                </p>
                <p className="text-gray-300 mb-6">
                  Echipa noastră de experți pasionați lucrează neobosit pentru a livra soluții inovatoare care depășesc așteptările clienților.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-blue-400">50+</h4>
                    <p className="text-gray-300">Proiecte Finalizate</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-blue-400">30+</h4>
                    <p className="text-gray-300">Clienți Mulțumiți</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-8">
                <img src="https://placehold.co/500x400" alt="Echipa noastră" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Contactează-ne</h3>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <input
                      type="text"
                      placeholder="Nume complet"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                <textarea
                    placeholder="Mesajul tău"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Trimite Mesaj
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 TechSolutions. Toate drepturile rezervate.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}