'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { terms } from '@/data/terms';
import { Search, Layers, User, Award, Sliders, Eye } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'עקרונות עיצוב': <Sliders size={14} />,
  'אינטראקציה': <Eye size={14} />,
  'גרפים ורשתות': <Layers size={14} />,
  'מיפוי ויזואלי': <Sliders size={14} />,
  'תפיסה אנושית': <Eye size={14} />,
  'מסגרות תיאורטיות': <Award size={14} />,
  'חשיבות הויזואליזציה': <Award size={14} />,
  'יסודות': <Layers size={14} />,
  'ויזואליזציה מטעה': <Sliders size={14} />,
  'דמויות היסטוריות': <User size={14} />,
};

export default function TermsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'עקרונות עיצוב',
    'אינטראקציה',
    'תפיסה אנושית',
    'גרפים ורשתות',
    'מיפוי ויזואלי',
    'מסגרות תיאורטיות',
    'דמויות היסטוריות',
    'ויזואליזציה מטעה'
  ];

  const filteredTerms = terms.filter((term) => {
    const matchesSearch = 
      term.titleHe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.details.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>מושגים וכללים מפתח</h1>
        <p>סקירה מקיפה של התיאוריות, החוקרים, כללי העיצוב ועקרונות התפיסה שנלמדו בקורס.</p>
      </motion.div>

      {/* Search and Filters */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ position: 'relative', maxWidth: '500px', marginInline: 'auto', width: '100%' }}>
          <input
            type="text"
            placeholder="חיפוש מושגים, חוקרים וכללים..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 18px',
              paddingRight: '46px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-glass)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              outline: 'none',
              fontFamily: 'var(--font-he)'
            }}
          />
          <Search 
            size={18} 
            style={{ 
              position: 'absolute', 
              right: '18px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: 'var(--text-muted)' 
            }} 
          />
        </div>

        {/* Category buttons */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' ? 'הכל' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="terms-grid">
        {filteredTerms.map((term, index) => (
          <motion.div
            key={term.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            className="card term-card"
          >
            <div className="term-card-header">
              <div>
                <h3>{term.titleHe}</h3>
                <span className="en-title">{term.titleEn}</span>
              </div>
              <span className="term-category-badge">
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {categoryIcons[term.category] || <Layers size={12} />}
                  {term.category}
                </span>
              </span>
            </div>

            <p className="term-definition">{term.definition}</p>

            <ul className="term-details">
              {term.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)' }}>
          לא נמצאו מושגים התואמים את החיפוש.
        </div>
      )}
    </div>
  );
}
