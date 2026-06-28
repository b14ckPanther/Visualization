'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { exams } from '@/data/exams';
import { BookOpen, BarChart3, Clock, Network, AlertTriangle, ArrowLeft, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={22} />,
  BarChart3: <BarChart3 size={22} />,
  Clock: <Clock size={22} />,
  Network: <Network size={22} />,
  AlertTriangle: <AlertTriangle size={22} />,
};

export default function ExamsPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>מבחני תרגול</h1>
        <p>בחרו מבחן להתחיל. כל מבחן מכיל 20 שאלות ברמה אוניברסיטאית.</p>
      </motion.div>

      <div className="exam-grid">
        {exams.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={`/exams/${exam.id}`}>
              <motion.div
                className="card exam-card"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                style={{ '--card-color': exam.color } as React.CSSProperties}
              >
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 4, height: '100%',
                  background: exam.color, borderRadius: '0 12px 12px 0'
                }} />
                <div className="exam-card-header">
                  <div className="exam-card-icon" style={{
                    background: `${exam.color}20`,
                    color: exam.color
                  }}>
                    {iconMap[exam.icon] || <FileText size={22} />}
                  </div>
                  <div>
                    <h3>{exam.title}</h3>
                  </div>
                </div>
                <p>{exam.subtitle}</p>
                <div className="exam-card-footer">
                  <span className="exam-card-badge" style={{
                    background: `${exam.color}15`,
                    color: exam.color
                  }}>
                    {exam.questions.length} שאלות
                  </span>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    color: exam.color, fontSize: '0.85rem', fontWeight: 600
                  }}>
                    התחלה <ArrowLeft size={14} />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
