import React, { useState } from 'react';
import {
  Home, Phone, ChevronRight, Search, X, Lock,
  ArrowLeft, MessageCircle, Youtube, Loader2, Zap, ShieldCheck
} from 'lucide-react';

// Dados dos dispositivos e serviços
const initialDevices = [
  // Antigos
  { id: 'samsung_antigo_frp', title: 'Samsung Antigo - Conta Google (FRP)', price: 'R$ 20,00', description: 'Remoção de Conta Google (FRP) em modelos Samsung mais antigos (J-series, A0x). Serviço rápido e preço promocional.', brand: 'Samsung', deviceType: 'old' },
  { id: 'motorola_antigo_frp', title: 'Motorola Antigo - Conta Google (FRP)', price: 'R$ 20,00', description: 'Remoção de Conta Google (FRP) em modelos Motorola mais antigos (Moto G/E).', brand: 'Motorola', deviceType: 'old' },
  { id: 'lg_antigo_frp', title: 'LG Antigo - Conta Google (FRP)', price: 'R$ 20,00', description: 'Remoção de Conta Google (FRP) em modelos LG antigos.', brand: 'LG', deviceType: 'old' },
  // Modernos
  { id: 'samsung_moderno_payjoy', title: 'Samsung - PayJoy/Google (Moderno)', price: 'R$ 300,00', description: 'Desbloqueio de bloqueio de fábrica e conta Google (FRP) em modelos Samsung modernos. Serviço completo e garantia.', brand: 'Samsung', deviceType: 'new', category: 'PayJoy/FRP' },
  { id: 'motorola_moderno_payjoy', title: 'Motorola - PayJoy/Google (Moderno)', price: 'R$ 250,00', description: 'Desbloqueio de bloqueio de fábrica e conta Google (FRP) em modelos Motorola modernos.', brand: 'Motorola', deviceType: 'new', category: 'PayJoy/FRP' },
  { id: 'outros_moderno_senha', title: 'Xiaomi/Outros - Senha/Padrão', price: 'Sob Consulta', description: 'Remoção de senhas, padrão ou PIN em diversos modelos modernos (Xiaomi, etc).', brand: 'Outros', deviceType: 'new', category: 'Senha' },
];

// URLs de Contato
const WHATSAPP_URL = 'https://wa.me/5581997158496';
const YOUTUBE_URL = 'https://www.youtube.com/@araujop.o.s9247';

const App = () => {
  const [devices] = useState(initialDevices);
  const [activeTab, setActiveTab] = useState('home');
  const [flowStep, setFlowStep] = useState('start'); // 'start', 'search', 'results', 'detail'
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length > 2) {
      const results = devices.filter(device =>
        device.title.toLowerCase().includes(term.toLowerCase()) ||
        device.description.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
      setFlowStep('results');
    } else {
      setFlowStep('start');
    }
  };

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
    setFlowStep('detail');
  };

  const DeviceCard = ({ device }) => (
    <div
      onClick={() => handleSelectDevice(device)}
      className="bg-white p-4 rounded-xl shadow-md cursor-pointer hover:bg-gray-50 transition-all duration-200 animate-slide-up"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-800">{device.title}</h3>
        <ChevronRight size={20} className="text-blue-600 flex-shrink-0 ml-2" />
      </div>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{device.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xl font-extrabold text-blue-700">{device.price}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${device.deviceType === 'new' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {device.deviceType === 'new' ? 'Moderno' : 'Antigo'}
        </span>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-4 space-y-6">
            
            {/* CARD PRINCIPAL (A FRASE QUE PRECISAMOS) */}
            {flowStep === 'start' && (
              <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl animate-fade-in">
                <div className="flex items-center space-x-3 mb-3">
                    <ShieldCheck size={32} className="flex-shrink-0" />
                    <h1 className="text-2xl font-extrabold leading-tight">
                      Daercio System Unlock
                    </h1>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Desbloqueio especializado de aparelhos: **PayJoy, Conta Google (FRP), senhas**. Serviço rápido, 100% online e garantido.
                </p>
                <a
                  href={`${WHATSAPP_URL}?text=Olá%20Daercio,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20desbloqueio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full text-center text-sm shadow-lg hover:bg-gray-100 transition duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Fale com o Daercio Agora!</span>
                </a>
              </div>
            )}

            {/* Componente de Busca */}
            <div className="relative">
              <input
                type="text"
                placeholder="Busque pelo modelo do seu celular (Ex: A30, Moto G7, etc)"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {searchTerm && (
                <button onClick={() => handleSearch('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Renderização do Fluxo */}
            {flowStep === 'start' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">Principais Serviços</h2>
                <div className="grid grid-cols-1 gap-4">
                  {initialDevices.slice(3).map(device => ( // Exibe os 3 modernos como destaque
                    <DeviceCard key={device.id} device={device} />
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-700 pt-4">Modelos Antigos</h2>
                <div className="grid grid-cols-1 gap-4">
                  {initialDevices.slice(0, 3).map(device => (
                    <DeviceCard key={device.id} device={device} />
                  ))}
                </div>
                {/* Botão para ver tudo */}
                <button onClick={() => setFlowStep('results')} className="w-full text-center text-blue-600 font-medium py-2 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 transition duration-200">
                  Ver Todos os Serviços
                </button>
              </div>
            )}

            {flowStep === 'results' && (
              <>
                <h2 className="text-xl font-semibold text-gray-700">
                  {searchTerm ? `Resultados da Busca para "${searchTerm}"` : 'Todos os Serviços Disponíveis'}
                </h2>
                {searchResults.length > 0 || !searchTerm ? (
                  <div className="space-y-4">
                    {(searchTerm ? searchResults : devices).map(device => (
                      <DeviceCard key={device.id} device={device} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <Search size={48} className="mx-auto mb-3" />
                    <p>Nenhum serviço encontrado para "{searchTerm}".</p>
                    <p className="mt-2 text-sm">Tente termos mais gerais ou entre em contato direto.</p>
                  </div>
                )}
              </>
            )}

            {flowStep === 'detail' && selectedDevice && (
              <div className="bg-white p-6 rounded-2xl shadow-lg animate-slide-left space-y-6">
                <button
                  onClick={() => setFlowStep(searchTerm ? 'results' : 'start')}
                  className="text-blue-600 font-medium flex items-center space-x-1 hover:text-blue-700"
                >
                  <ArrowLeft size={20} />
                  <span>Voltar aos Serviços</span>
                </button>

                <div className="border-b pb-4">
                  <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">{selectedDevice.title}</h2>
                  <div className="mt-2 flex items-center space-x-3">
                      <Lock size={20} className="text-red-500" />
                      <span className="text-sm font-semibold text-red-600">{selectedDevice.category || 'Desbloqueio Geral'}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedDevice.deviceType === 'new' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {selectedDevice.deviceType === 'new' ? 'Moderno' : 'Antigo'}
                      </span>
                  </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Detalhes do Serviço:</p>
                        <p className="text-gray-700 mt-1">{selectedDevice.description}</p>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg flex justify-between items-center">
                        <span className="text-lg font-semibold text-blue-700">Preço Estimado:</span>
                        <span className="text-3xl font-black text-blue-900">{selectedDevice.price}</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-4 italic">
                      *Preço sujeito a confirmação. Entre em contato para um orçamento exato e garantia.
                    </p>
                </div>
                
                <a
                  href={`${WHATSAPP_URL}?text=Olá%20Daercio,%20tenho%20interesse%20no%20serviço:%20${encodeURIComponent(selectedDevice.title)}%20e%20gostaria%20de%20um%20orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-xl text-center shadow-lg hover:bg-green-600 transition duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Falar sobre {selectedDevice.brand}</span>
                </a>
              </div>
            )}
          </div>
        );

      case 'youtube':
        return (
            <div className="p-4 space-y-4 text-center">
                <Youtube size={64} className="mx-auto text-red-600" />
                <h1 className="text-2xl font-bold text-gray-800">Vídeos dos meus Serviços</h1>
                <p className="text-gray-600">Assista aos vídeos no YouTube para ver exemplos de desbloqueios e tutoriais.</p>
                
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-red-600 text-white font-bold py-3 px-4 rounded-xl text-center shadow-lg hover:bg-red-700 transition duration-200 space-x-2"
                >
                  <Youtube size={20} />
                  <span>Acessar o Canal do YouTube</span>
                </a>

                {/* Placeholder para conteúdo de vídeo futuro */}
                <div className="pt-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Destaques e Tutoriais</h2>
                    <div className="bg-gray-100 p-4 rounded-xl text-gray-500">
                        <Loader2 size={24} className="animate-spin inline-block mr-2" />
                        <p>O catálogo de vídeos será exibido aqui em breve!</p>
                        <p className="text-sm mt-1">Por enquanto, use o botão acima para ir direto ao canal.</p>
                    </div>
                </div>
            </div>
        );

      case 'contato':
        return (
            <div className="p-4 space-y-6 text-center">
                <Phone size={64} className="mx-auto text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">Fale com o Daercio!</h1>
                <p className="text-gray-600">Entre em contato para um orçamento rápido e tire suas dúvidas sobre o desbloqueio do seu aparelho.</p>
                
                <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center space-x-2">
                        <MessageCircle size={24} className="text-green-500" />
                        <span>Contato Principal</span>
                    </h2>
                    
                    {/* WhatsApp */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center bg-green-500 text-white font-bold py-3 px-4 rounded-xl text-center shadow-md hover:bg-green-600 transition duration-200 space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Iniciar Conversa no WhatsApp</span>
                    </a>
                    
                    <p className="text-sm text-gray-500">
                        Envie uma mensagem com o modelo do seu aparelho e o tipo de bloqueio.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center space-x-2">
                        <Zap size={24} className="text-yellow-500" />
                        <span>Agilidade no Atendimento</span>
                    </h2>
                    <p className="text-gray-600">
                        Priorizamos o atendimento via WhatsApp para garantir a rapidez no seu serviço de desbloqueio.
                    </p>
                </div>
            </div>
        );

      default:
        return (
          <div className="p-4 text-center text-red-500">
            <p>Erro: Aba desconhecida.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Área de Conteúdo */}
      <main className="flex-grow pb-24 overflow-y-auto">
        {renderContent()}
      </main>

      {/* Navegação Inferior (Fixed Footer) */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 pb-safe sticky bottom-0 z-40">
        <div className="flex justify-around items-center">
          <button
            onClick={() => { setActiveTab('home'); setFlowStep('start'); }}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            <span className="text-xs font-medium">Início</span>
          </button>
          <button
            onClick={() => setActiveTab('youtube')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'youtube' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Youtube size={24} strokeWidth={activeTab === 'youtube' ? 2.5 : 2} />
            <span className="text-xs font-medium">Vídeos</span>
          </button>
          <button
            onClick={() => setActiveTab('contato')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'contato' ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Phone size={24} strokeWidth={activeTab === 'contato' ? 2.5 : 2} />
            <span className="text-xs font-medium">Contato</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;