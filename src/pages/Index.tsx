import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addressBarUrl, setAddressBarUrl] = useState('https://maxбраузер.рус');
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const russianRegex = /^[а-яА-ЯёЁ0-9\s.,!?;:()-]*$/;

    if (!russianRegex.test(value)) {
      const cleanedValue = value.replace(/[a-zA-Z]/g, '');
      setSearchQuery(cleanedValue);
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    } else {
      setSearchQuery(value);
      setShowWarning(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const yandexUrl = `https://yandex.ru/search/?text=${encodeURIComponent(searchQuery)}`;
      window.open(yandexUrl, '_blank');
      setAddressBarUrl(yandexUrl);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleGosuslugi = () => {
    window.open('https://gosuslugi.ru', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a237e] to-[#283593] text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center pb-8 border-b border-white/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2196F3] to-[#21CBF3] flex items-center justify-center shadow-lg shadow-blue-500/40">
              <span className="text-2xl font-bold">M</span>
            </div>
            <h1 className="text-3xl font-bold">MAX Браузер</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-[#64FFDA] transition-colors font-medium">
              Главная
            </a>
            <a href="#features" className="hover:text-[#64FFDA] transition-colors font-medium">
              Возможности
            </a>
            <a href="#" className="hover:text-[#64FFDA] transition-colors font-medium">
              Скачать
            </a>
            <a href="#" className="hover:text-[#64FFDA] transition-colors font-medium">
              Поддержка
            </a>
          </nav>
        </header>

        <section className="flex flex-col items-center text-center py-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#64FFDA] to-[#18FFFF] bg-clip-text text-transparent">
            MAX Браузер - Только русский язык
          </h2>
          <p className="text-xl max-w-3xl mb-12 leading-relaxed text-white/90">
            Новый уникальный браузер для комфортного и безопасного просмотра на русском языке. Без английских надписей и с удобной интеграцией с Госуслугами.
          </p>

          <Card className="w-full max-w-5xl bg-[#2c3e50] border-0 overflow-hidden shadow-2xl">
            <div className="bg-[#1a237e] p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm text-white/80 flex items-center gap-2">
                <Icon name="Lock" size={16} />
                <span>{addressBarUrl}</span>
              </div>
            </div>

            <div className="p-12 bg-[#ecf0f1] min-h-[500px]">
              <h3 className="text-3xl font-bold text-[#1a237e] mb-8 text-center">
                Добро пожаловать в MAX Браузер
              </h3>

              <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2 flex items-center gap-2 mb-6">
                <Icon name="Search" size={24} className="ml-4 text-gray-500" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Введите запрос на русском языке..."
                  className="flex-1 border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-800 placeholder:text-gray-400"
                />
                <Button
                  onClick={handleSearch}
                  className="bg-[#2196F3] hover:bg-[#1E88E5] rounded-full px-8 text-white font-semibold"
                >
                  Найти
                </Button>
              </div>

              {showWarning && (
                <div className="text-center">
                  <p className="text-[#e53935] font-bold text-lg animate-pulse">
                    ⚠️ Внимание: Ввод текста на английском языке заблокирован!
                  </p>
                </div>
              )}

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                  <Icon name="Newspaper" size={32} className="mx-auto mb-2 text-[#2196F3]" />
                  <p className="text-sm font-medium text-gray-700">Новости</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                  <Icon name="Mail" size={32} className="mx-auto mb-2 text-[#2196F3]" />
                  <p className="text-sm font-medium text-gray-700">Почта</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                  <Icon name="Video" size={32} className="mx-auto mb-2 text-[#2196F3]" />
                  <p className="text-sm font-medium text-gray-700">Видео</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                  <Icon name="ShoppingBag" size={32} className="mx-auto mb-2 text-[#2196F3]" />
                  <p className="text-sm font-medium text-gray-700">Покупки</p>
                </Card>
              </div>
            </div>
          </Card>
        </section>

        <section id="features" className="py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-0 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Безопасность</h3>
              <p className="text-white/80 leading-relaxed">
                Максимальная защита ваших данных и конфиденциальность в интернете
              </p>
            </Card>

            <Card className="bg-white/10 border-0 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-6">🚫</div>
              <h3 className="text-2xl font-bold mb-4">Только русский</h3>
              <p className="text-white/80 leading-relaxed">
                Никакого английского языка. Все интерфейсы и поддержка только на русском
              </p>
            </Card>

            <Card className="bg-white/10 border-0 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Высокая скорость</h3>
              <p className="text-white/80 leading-relaxed">
                Мгновенная загрузка страниц и плавная работа даже на слабых устройствах
              </p>
            </Card>
          </div>
        </section>

        <Button
          onClick={handleGosuslugi}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#2196F3] to-[#1E88E5] hover:from-[#1E88E5] hover:to-[#1976D2] shadow-lg shadow-blue-500/40 rounded-full px-6 py-6 flex items-center gap-3 text-lg font-semibold hover:-translate-y-1 transition-transform duration-300"
        >
          <img 
            src="https://avatars.mds.yandex.net/i?id=0fcdf4d48d3a175f5051ec677cbc60f4_l-5603780-images-thumbs&n=13" 
            alt="Госуслуги" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>Войти через Госуслуги</span>
        </Button>

        <footer className="text-center py-12 mt-16 border-t border-white/20">
          <p className="text-white/70">© 2023 MAX Браузер. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;