import { useState, useMemo } from "react";
import { themes, getAllWords } from "./data/vocabulary";
import "./App.css";
import {
  IconBook, IconSearch, IconClose, IconArrowRight, IconArrowLeft,
  IconHome, IconGlobe, IconSparkle, IconNoResults, ThemeIcon
} from "./components/Icons";

/* ======== WORD MODAL ======== */
function WordModal({ word, theme, onClose }) {
  if (!word) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        style={{ "--modal-accent": theme.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><IconClose size={16} /></button>
        <div
          className="modal-theme-tag"
          style={{ background: theme.gradient }}
        >
          <ThemeIcon themeId={theme.id} size={16} />
          {theme.name}
        </div>
        <div className="modal-word">{word.word}</div>
        <div className="modal-pronunciation">{word.pronunciation}</div>
        <div className="modal-type">{word.type}</div>

        {/* Imagen / GIF de la palabra */}
        {word.image && (
          <div className="modal-gif-section">
            <div className="modal-gif-wrap">
              <img
                src={word.image}
                alt={word.word}
                className="modal-gif"
              />
            </div>
          </div>
        )}

        <div className="modal-divider" />
        <div className="modal-translation-label">Spanish Translation</div>
        <div className="modal-translation">{word.translation}</div>
        <div className="modal-example-label">Example Sentence</div>
        <div className="modal-example">"{word.example}"</div>
      </div>
    </div>
  );
}

/* ======== WORD CARD ======== */
function WordCard({ word, theme, delay, onSelect }) {
  return (
    <div
      className="word-card"
      style={{
        animationDelay: `${delay}ms`,
        "--theme-gradient": theme.gradient,
      }}
      onClick={() => onSelect(word)}
    >
      <div className="word-card-top">
        <div className="word-english">{word.word}</div>
        <div className="word-type-badge">{word.type}</div>
      </div>
      <div className="word-pronunciation">{word.pronunciation}</div>
      <div className="word-translation">{word.translation}</div>
      <div className="word-example">"{word.example}"</div>
    </div>
  );
}

/* ======== THEME CARD ======== */
function ThemeCard({ theme, delay, onClick }) {
  return (
    <div
      className="theme-card"
      style={{
        animationDelay: `${delay}ms`,
        "--card-color": theme.color,
        "--card-gradient": theme.gradient,
      }}
      onClick={onClick}
    >
      <div className="theme-card-top">
        <div className="theme-icon-wrap"><ThemeIcon themeId={theme.id} size={32} /></div>
        <div className="theme-word-count-badge">{theme.words.length} words</div>
      </div>
      <div className="theme-name-en">{theme.name}</div>
      <div className="theme-name-es">{theme.nameEs}</div>
      <div className="theme-desc">{theme.description}</div>
      <div className="theme-preview-words">
        {theme.words.slice(0, 4).map((w) => (
          <span key={w.word} className="preview-word-chip">
            {w.word}
          </span>
        ))}
        <span className="preview-word-chip">+{theme.words.length - 4} more</span>
      </div>
      <div className="theme-cta">
        <span className="theme-cta-text">Explore words</span>
        <div className="theme-cta-arrow" style={{ background: theme.gradient }}>
          <IconArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}

/* ======== THEME DETAIL VIEW ======== */
function ThemeDetail({ theme, onBack, onWordSelect }) {
  return (
    <div>
      <button className="back-btn" onClick={onBack}>
        <IconArrowLeft size={16} /> Back to Themes
      </button>
      <div
        className="theme-detail-header"
        style={{ "--theme-gradient": theme.gradient }}
      >
        <div className="theme-detail-icon"><ThemeIcon themeId={theme.id} size={40} /></div>
        <div className="theme-detail-info">
          <div className="es-subtitle">{theme.nameEs}</div>
          <h1 style={{ color: theme.color }}>{theme.name}</h1>
          <p>{theme.description}</p>
        </div>
      </div>
      <div
        className="section-header"
        style={{ marginBottom: 20 }}
      >
        <div className="section-title">All Words</div>
        <div className="section-count">{theme.words.length} entries</div>
      </div>
      <div className="words-grid">
        {theme.words.map((word, idx) => (
          <WordCard
            key={word.word}
            word={word}
            theme={theme}
            delay={idx * 50}
            onSelect={onWordSelect}
          />
        ))}
      </div>
    </div>
  );
}

/* ======== BROWSE ALL VIEW ======== */
function BrowseAll({ onWordSelect }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const allWords = useMemo(() => getAllWords(), []);

  const filtered = activeFilter === "all"
    ? allWords
    : allWords.filter((w) => w.themeId === activeFilter);

  return (
    <div>
      <div className="section-header">
        <div className="section-title">Browse All Words</div>
        <div className="section-count">{filtered.length} entries</div>
      </div>
      <div className="browse-filters">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          style={activeFilter === "all" ? { background: "linear-gradient(135deg,#6C63FF,#A78BFA)" } : {}}
          onClick={() => setActiveFilter("all")}
        >
          <IconGlobe size={15} /> All Topics
        </button>
        {themes.map((t) => (
          <button
            key={t.id}
            className={`filter-btn ${activeFilter === t.id ? "active" : ""}`}
            style={activeFilter === t.id ? { background: t.gradient } : {}}
            onClick={() => setActiveFilter(t.id)}
          >
            <ThemeIcon themeId={t.id} size={15} /> {t.name}
          </button>
        ))}
      </div>
      <div className="words-grid">
        {filtered.map((word, idx) => {
          const theme = themes.find((t) => t.id === word.themeId);
          return (
            <WordCard
              key={`${word.themeId}-${word.word}`}
              word={word}
              theme={theme}
              delay={idx * 30}
              onSelect={onWordSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ======== SEARCH RESULTS ======== */
function SearchResults({ query, onWordSelect }) {
  const allWords = useMemo(() => getAllWords(), []);

  const results = useMemo(() => {
    const q = query.toLowerCase();
    return allWords.filter(
      (w) =>
        w.word.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q) ||
        w.example.toLowerCase().includes(q)
    );
  }, [query, allWords]);

  if (results.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state-icon"><IconNoResults size={48} /></span>
        <div className="empty-state-title">No results found</div>
        <div className="empty-state-desc">
          Try searching for a different word or translation
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="search-results-header">
        <div className="search-results-title">
          Results for{" "}
          <span className="search-query-highlight">"{query}"</span>
        </div>
        <div className="search-results-meta">{results.length} words found</div>
      </div>
      {results.map((word, idx) => {
        const theme = themes.find((t) => t.id === word.themeId);
        return (
          <div
            key={`${word.themeId}-${word.word}`}
            className="search-result-card"
            style={{ animationDelay: `${idx * 40}ms` }}
            onClick={() => onWordSelect(word, theme)}
          >
            <div
              className="search-result-theme-dot"
              style={{ background: theme.gradient }}
            >
              <ThemeIcon themeId={theme.id} size={16} />
            </div>
            <div className="search-result-content">
              <div className="search-result-word">{word.word}</div>
              <div className="search-result-translation">{word.translation}</div>
              <div className="search-result-example">"{word.example}"</div>
            </div>
            <div
              className="search-result-theme-tag"
              style={{ background: theme.gradient }}
            >
              {theme.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ======== WORD OF THE DAY ======== */
function WordOfTheDay({ onWordSelect }) {
  const allWords = useMemo(() => getAllWords(), []);
  const today = new Date();
  const index = (today.getDate() + today.getMonth() * 31) % allWords.length;
  const word = allWords[index];
  const theme = themes.find((t) => t.id === word.themeId);

  return (
    <div
      className="wotd-banner"
      style={{ borderColor: `${theme.color}33`, cursor: "pointer" }}
      onClick={() => onWordSelect(word, theme)}
    >
      <div style={{ flex: 1 }}>
        <div className="wotd-label">
          <IconSparkle size={16} /> Word of the Day
        </div>
        <div className="wotd-word">{word.word}</div>
        <div className="wotd-translation">{word.translation}</div>
        <div className="wotd-example">"{word.example}"</div>
      </div>
      <div className="wotd-icon-col"><ThemeIcon themeId={theme.id} size={36} /></div>
    </div>
  );
}

/* ======== HOME VIEW ======== */
function HomeView({ onThemeSelect, onWordSelect }) {
  const totalWords = useMemo(() => getAllWords().length, []);

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-badge">
          <IconBook size={16} /> English Vocabulary Dictionary
        </div>
        <h1 className="hero-title">
          Master English
          <br />
          <span className="hero-gradient-text">Word by Word</span>
        </h1>
        <p className="hero-desc">
          Explore curated vocabulary organized by topics. Each word comes with
          pronunciation, Spanish translation, and real example sentences.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{totalWords}</div>
            <div className="stat-label">Words</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{themes.length}</div>
            <div className="stat-label">Topics</div>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Word of the Day */}
        <WordOfTheDay onWordSelect={onWordSelect} />

        {/* Themes */}
        <div className="section-header">
          <div className="section-title">Browse by Topic</div>
          <div className="section-count">{themes.length} topics</div>
        </div>
        <div className="themes-grid">
          {themes.map((theme, idx) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              delay={idx * 80}
              onClick={() => onThemeSelect(theme)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* ======== HEADER ======== */
function Header({ searchQuery, onSearch, view, setView }) {
  return (
    <header className="header">
      <div className="header-brand" onClick={() => setView("home")}>
        <div className="header-logo"><IconBook size={22} /></div>
        <div>
          <div className="header-title">VocApp</div>
          <span className="header-subtitle">English Vocabulary App</span>
        </div>
      </div>

      <div className="header-search">
        <span className="search-icon"><IconSearch size={16} /></span>
        <input
          type="text"
          placeholder="Search words, translations..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          id="global-search"
        />
        {searchQuery && (
          <span
            style={{ cursor: "pointer", color: "var(--text-muted)", display: "flex" }}
            onClick={() => onSearch("")}
          >
            <IconClose size={15} />
          </span>
        )}
      </div>

      <nav className="header-nav">
        <button
          className={`nav-btn ${view === "home" ? "active" : ""}`}
          onClick={() => setView("home")}
          id="nav-home"
        >
          <IconHome size={16} /> Home
        </button>
        <button
          className={`nav-btn ${view === "browse" ? "active" : ""}`}
          onClick={() => setView("browse")}
          id="nav-browse"
        >
          <IconBook size={16} /> Browse All
        </button>
      </nav>
    </header>
  );
}

/* ======== ROOT APP ======== */
export default function App() {
  const [view, setView] = useState("home");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedWordTheme, setSelectedWordTheme] = useState(null);

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (q.trim()) {
      setView("search");
      setSelectedTheme(null);
    } else {
      setView("home");
    }
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setView("theme");
  };

  const handleWordSelect = (word, theme) => {
    const resolvedTheme = theme || themes.find((t) => t.id === word.themeId);
    setSelectedWord(word);
    setSelectedWordTheme(resolvedTheme);
  };

  const handleViewChange = (v) => {
    setView(v);
    setSearchQuery("");
    setSelectedTheme(null);
  };

  return (
    <div>
      <title>VocApp – English Dictionary by Topics</title>

      <Header
        searchQuery={searchQuery}
        onSearch={handleSearch}
        view={view}
        setView={handleViewChange}
      />

      {view === "home" && (
        <HomeView onThemeSelect={handleThemeSelect} onWordSelect={handleWordSelect} />
      )}

      {view === "browse" && (
        <div className="main-content" style={{ paddingTop: 40 }}>
          <BrowseAll onWordSelect={(w) => handleWordSelect(w)} />
        </div>
      )}

      {view === "theme" && selectedTheme && (
        <div className="main-content" style={{ paddingTop: 40 }}>
          <ThemeDetail
            theme={selectedTheme}
            onBack={() => handleViewChange("home")}
            onWordSelect={(w) => handleWordSelect(w, selectedTheme)}
          />
        </div>
      )}

      {view === "search" && (
        <div className="main-content" style={{ paddingTop: 40 }}>
          <SearchResults query={searchQuery} onWordSelect={handleWordSelect} />
        </div>
      )}

      {selectedWord && selectedWordTheme && (
        <WordModal
          word={selectedWord}
          theme={selectedWordTheme}
          onClose={() => {
            setSelectedWord(null);
            setSelectedWordTheme(null);
          }}
        />
      )}
    </div>
  );
}
