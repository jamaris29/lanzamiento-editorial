import React from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { theme, toggleTheme, lang, setLang } = useAppContext();

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-group">
          <img src="/logo.png" alt="Bookish Alchemy AI Studio" className="brand-logo" />
          <div className="logo-text">
            <h1 className="logo">
              {lang === 'es' ? 'The Bestseller Blueprint' : 'The Bestseller Blueprint'}
            </h1>
            <span className="logo-subtitle">by Bookish Alchemy AI</span>
          </div>
        </div>
        
        <div className="controls">
          <div className="lang-selector">
            <Globe size={18} className="icon" />
            <select value={lang} onChange={handleLangChange}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
