'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { charts } from '@/data/charts';
import ChartVisual from '@/components/ChartVisual';
import { Search, Info, CheckCircle2, AlertOctagon } from 'lucide-react';

export default function CheatsheetPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTask, setSelectedTask] = useState('All');

  const tasksList = [
    'All',
    'Item Comparison',
    'Component Comparison',
    'Time-Series Comparison',
    'Correlation Comparison',
    'Frequency Distribution',
    'Distribution Comparison',
    'Multivariate Analysis',
    'Hierarchy Exploration',
    'Flow Analysis',
    'Spatial Pattern Discovery'
  ];

  const filteredCharts = charts.filter((chart) => {
    const matchesSearch = 
      chart.nameHe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chart.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chart.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTask = selectedTask === 'All' || chart.taskType.includes(selectedTask);

    return matchesSearch && matchesTask;
  });

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>גיליון עזר ויזואלי</h1>
        <p>תרשימים נפוצים בויזואליזציה של מידע - כיצד הם נראים, מתי להשתמש בהם ומתי להימנע לחלוטין.</p>
      </motion.div>

      {/* Search and Filters */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ position: 'relative', maxWidth: '500px', marginInline: 'auto', width: '100%' }}>
          <input
            type="text"
            placeholder="חיפוש תרשימים (בעברית או אנגלית)..."
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

        {/* Task category buttons */}
        <div className="filter-bar">
          {tasksList.map((task) => (
            <button
              key={task}
              onClick={() => setSelectedTask(task)}
              className={`filter-btn ${selectedTask === task ? 'active' : ''}`}
            >
              {task === 'All' ? 'הכל' : task}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="cheatsheet-grid">
        {filteredCharts.map((chart, index) => (
          <motion.div
            key={chart.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="card chart-card"
          >
            {/* Visual Header */}
            <div className="chart-card-visual">
              <ChartVisual type={chart.svgType} />
            </div>

            {/* Content Body */}
            <div className="chart-card-body">
              <div className="chart-card-title">
                <h3>{chart.nameHe}</h3>
                <span className="en-name">{chart.nameEn}</span>
              </div>
              <p className="chart-card-desc">{chart.description}</p>

              {/* Tags */}
              <div className="chart-card-tags">
                <span className="tag data-type">{chart.dataType}</span>
                <span className="tag task-type">{chart.taskType}</span>
              </div>

              {/* Details sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                
                {/* When to use */}
                <div className="chart-detail-section use-section">
                  <h4 style={{ color: 'var(--accent-green)' }}>
                    <CheckCircle2 size={14} />
                    מתי להשתמש?
                  </h4>
                  <ul>
                    {chart.whenToUse.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* When not to use */}
                <div className="chart-detail-section avoid-section">
                  <h4 style={{ color: 'var(--accent-red)' }}>
                    <AlertOctagon size={14} />
                    מתי להימנע / לעולם לא?
                  </h4>
                  <ul>
                    {chart.whenNotToUse.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {filteredCharts.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)' }}>
          לא נמצאו תרשימים התואמים את החיפוש או הסינון.
        </div>
      )}
    </div>
  );
}
