import React, { useState } from 'react';
import {
  Home, Phone, ChevronRight, Search, X, Smartphone, Lock,
  ArrowLeft, MessageCircle, Youtube, Loader2
} from 'lucide-react';

const App = () => {
  const [oldDevices] = useState([
    { id: 'samsung_antigo_frp', title: 'Samsung Antigo - Conta Google (FRP)', price: 'R$ 20,00', description: 'Remoção de Conta Google (FRP) em modelos Samsung mais antigos (J-series, A0x). Serviço rápido e preço promocional.', brand: 'Samsung', deviceType: 'old' },
    { id: 'motorola_antigo_frp', title: 'Motorola Antigo - Conta Google (FRP)', price: 'R$ 20,00', description: 'Remoção de Conta Google (FRP) em modelos Motorola mais antigos (Moto G/E).', brand: 'Motorola', deviceType: 'old' },
    { id: 'lg_antigo_frp', title: 'LG Antigo - Conta Google (FRP)', price: 'R$ 20,00', description: 'Remoção de Conta Google (FRP) em modelos LG antigos.', brand: 'LG', deviceType: 'old' },
  ]);

  const [newDevices] = useState([
    { id: 'samsung_moderno_v2', title: 'Samsung - PayJoy/Google (Moderno)', price: 'R$ 300,00', description: 'Desbloqueio de bloqueio PayJoy e remoção de Conta Google (FRP) em modelos Samsung mais recentes (incluindo Android 14/15). Preço fixo: R$ 300,00.', brand: 'Samsung', deviceType: 'new' },
    { id: 'motorola_moderno_v2', title: 'Motorola - PayJoy/Google (A14/A15)', price: 'A partir de R$ 100,00', description: 'Desbloqueio de PayJoy e Conta Google (FRP) em modelos Motorola recentes. **Conta Google A14: R$ 100,00**. **PayJoy A15: R$ 300,00**. **Conta Google A15: R$ 300,00**.', brand: 'Motorola', deviceType: 'new' },
    { id: 'tecno_infinix_moderno', title: 'Tecno / Infinix - Bloqueios Diversos', price: 'R$ 180,00', description: 'Serviços de desbloqueio para Tecno e Infinix. Preços variáveis: R$ 180,00 (bloqueio complexo) / R$ 100,00 (bloqueio simples). Consulte para confirmar o valor exato.', brand: 'Tecno', deviceType: 'new' },
    { id: 'realme_c75', title: 'Realme C75 (A14/A15) - PayJoy/Google', price: 'A partir de R$ 200,00', description: 'Desbloqueio do modelo Realme C75. **Android 14 (PayJoy/Google): R$ 200,00**. **Android 15 (Conta Google): R$ 200,00**. **Android 15 (PayJoy): R$ 260,00**.', brand: 'Realme', deviceType: 'new' },
    { id: 'realme_c67', title: 'Realme C67 (A14/A15) - PayJoy/Google', price: 'A partir de R$ 200,00', description: 'Desbloqueio do modelo Realme C67. **Android 14 (PayJoy/Google): R$ 200,00**. **Android 15 (Conta Google): R$ 200,00**. **Android 15 (PayJoy): R$ 260,00**.', brand: 'Realme', deviceType: 'new' },
    { id: 'realme_c65', title: 'Realme C65 (A14/A15) - PayJoy/Google', price: 'A partir de R$ 150,00', description: 'Desbloqueio do modelo Realme C65. **Android 14 (PayJoy): R$ 200,00**. **Android 15 (Conta Google): R$ 150,00**.', brand: 'Realme', deviceType: 'new' },
    { id: 'realme_c71_etc', title: 'Realme C71, N50, C63, C61 - PayJoy/Google', price: 'A partir de R$ 100,00', description: 'Modelos C71, Note 50, C63, C61 (Preços fixos). **PayJoy: R$ 180,00**. **Conta Google (FRP): R$ 100,00**.', brand: 'Realme', deviceType: 'new' },
  ]);

  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [flowStep, setFlowStep] = useState('start');
  const myNumber = '5581997158496';

  const openWhatsApp = (serviceName, price) => {
    const cleanNumber = myNumber.replace(/\D/g, '');
    const message = `Olá! Gostaria de fazer o serviço: ${serviceName} por ${price}. Podem me chamar?`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const HomeScreen = () => {
    if (flowStep === 'start') {
      return (
        <div className="p-6 flex flex-col items-center justify-center min-h-[80vh] animate-fade-in text-center">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full mb-6 text-white shadow-2xl shadow-blue-300">
            <Lock size={48} />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Desbloqueio Especializado</h1>
          <p className="text-gray-500 mb-10 max-w-xs font-medium">
            PayJoy • Conta Google • Senhas <br /> Serviço rápido e garantido.
          </p>
          <div className="space-y-4 w-full max-w-sm">
            <button
              onClick={() => setFlowStep('type-select')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-blue-300 transform transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Search size={20} /> <span>Verificar Modelo e Preço</span>
            </button>
            <button
              onClick={() => openWhatsApp('Melhores Preços/Consultas', 'Combinar')}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-xl shadow-lg transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Para melhores preços, toque aqui!</span>
            </button>
          </div>
        </div>
      );
    }

    if (flowStep === 'type-select') {
      return (
        <div className="p-6 animate-slide-left">
          <button onClick={() => setFlowStep('start')} className="mb-6 text-gray-500 flex items-center gap-1 text-sm font-semibold hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </button>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Qual o tipo do seu aparelho?</h2>
          <div className="space-y-4">
            <button onClick={() => setFlowStep('list-old')} className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Smartphone size={24} /></div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-800">Aparelhos Antigos ({oldDevices.length} itens)</h3>
                  <p className="text-sm text-gray-500">Modelos mais simples e econômicos</p>
                </div>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-blue-500" />
            </button>
            <button onClick={() => setFlowStep('list-new')} className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><Smartphone size={24} /></div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-800">Aparelhos Modernos ({newDevices.length} itens)</h3>
                  <p className="text-sm text-gray-500">Lançamentos recentes, com preços fixos</p>
                </div>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-blue-500" />
            </button>
          </div>
        </div>
      );
    }

    const deviceList = flowStep === 'list-old' ? oldDevices : newDevices;
    return (
      <div className="p-4 pb-24 animate-slide-left">
        <button onClick={() => setFlowStep('type-select')} className="mb-4 text-gray-500 flex items-center gap-1 text-sm font-semibold hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Voltar
        </button>
        <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">
          {flowStep === 'list-old' ? `Antigos (${deviceList.length} itens)` : `Modelos Modernos (${deviceList.length} itens)`}
        </h2>

        {flowStep === 'list-old' && (
          <div className="bg-green-50 text-green-700 p-3 rounded-xl mb-5 text-sm font-medium text-center border border-green-200 shadow-sm">
            Lista de aparelhos mais antigos com preços promocionais.
          </div>
        )}
        {flowStep === 'list-new' && (
          <div className="bg-blue-50 text-blue-700 p-3 rounded-xl mb-5 text-sm font-medium text-center border border-blue-200 shadow-sm">
            Muitos preços são fixos. Clique para ver detalhes e entrar em contato.
          </div>
        )}

        <div className="space-y-3 px-2">
          {deviceList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedService(item)}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center justify-between active:scale-[0.99] transition-transform cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${item.deviceType === 'old' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                  {item.brand ? item.brand.substring(0,3).toUpperCase() : '??'}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className={`font-bold text-sm ${item.deviceType === 'old' ? 'text-green-600' : 'text-purple-600'}`}>{item.price}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ContactScreen = () => (
    <div className="p-6 animate-fade-in flex flex-col h-full justify-center">
      <div className="text-center mb-10">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <MessageCircle size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Fale Comigo Agora</h2>
        <p className="text-gray-500 mt-2">Dúvidas? Orçamentos especiais? <br /> Estou online para te atender.</p>
      </div>
      <button
        onClick={() => openWhatsApp('Atendimento Geral', 'Orçamento')}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-2xl shadow-green-300 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
      >
        <Phone size={24} /> <span>(81) 99715-8496</span>
      </button>
    </div>
  );

  const YoutubeScreen = () => {
    const youtubeUrl = 'https://www.youtube.com/@araujop.o.s9247';
    return (
      <div className="p-6 animate-fade-in flex flex-col h-full justify-center text-center">
        <div className="text-center mb-10">
          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
            <Youtube size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Conheça Meu Trabalho</h2>
          <p className="text-gray-500 mt-2">Visite meu canal no YouTube para ver vídeos dos serviços realizados e garantir sua confiança.</p>
        </div>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-2xl shadow-red-300 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <Youtube size={24} /> <span>Acessar Canal YouTube</span>
        </a>
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-gray-50 min-h-screen relative shadow-2xl flex flex-col">
        <div className="bg-white p-4 flex justify-center border-b border-gray-200 sticky top-0 z-10">
          <span className="font-bold text-gray-700 text-lg flex items-center gap-2">
            <Lock size={18} className="text-blue-600" /> Daercio Araujo System Unlock
          </span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'home' && <HomeScreen />}
          {activeTab === 'youtube' && <YoutubeScreen />}
          {activeTab === 'contato' && <ContactScreen />}
        </div>

        {selectedService && (
          <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full sm:w-11/12 sm:max-w-md sm:rounded-2xl rounded-t-3xl p-6 shadow-2xl animate-slide-up">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600"><Smartphone size={24} /></div>
                <button onClick={() => setSelectedService(null)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><X size={20} /></button>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedService.title}</h3>
              <p className="text-gray-500 mb-4 leading-relaxed text-sm">{selectedService.description}</p>
              
              <p className="text-center text-xs text-gray-500 italic mb-4">👉 Deslize para cima para ver o botão de contato.</p>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 uppercase font-bold">Valor do Serviço</span>
                  <span className="text-3xl font-bold text-green-600">{selectedService.price}</span>
                </div>
                <button
                  onClick={() => openWhatsApp(selectedService.title, selectedService.price)}
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-green-300 active:scale-[0.98]"
                >
                  <MessageCircle size={24} />
                  <span>{selectedService.price.includes('Consultar') || selectedService.price.includes('Chamar') ? 'Solicitar Orçamento' : 'Fazer esse desbloqueio'}</span>
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">Você será redirecionado para o WhatsApp</p>
              </div>
            </div>
          </div>
        )}

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
              <span className="text-xs font-medium">Vídeos dos meus serviços</span>
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
    </div>
  );
};

export default App;