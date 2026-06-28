'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, BarChart3, Layers, ArrowLeft, GraduationCap, Sparkles, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="page-container">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ויזואליזציה של מידע
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          אפליקציית תרגול אינטראקטיבית למבחן בויזואליזציה של מידע.
          חמישה מבחנים, גיליון עזר ויזואלי ומילון מושגים מלא.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/exams">
            <button className="hero-btn primary">
              <BookOpen size={20} />
              התחלת תרגול
              <ArrowLeft size={16} />
            </button>
          </Link>
          <Link href="/cheatsheet">
            <button className="hero-btn secondary">
              <BarChart3 size={20} />
              גיליון עזר
            </button>
          </Link>
          <Link href="/terms">
            <button className="hero-btn secondary">
              <Layers size={20} />
              מושגים
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="features-grid"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <motion.div className="card feature-card" whileHover={{ y: -4, scale: 1.02 }}>
          <div className="feature-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-purple)' }}>
            <Target size={26} />
          </div>
          <h3>5 מבחני תרגול</h3>
          <p>100 שאלות ברמה אוניברסיטאית, שלושה סוגי שאלות: בחירה יחידה, בחירה מרובה והערכת טענות</p>
        </motion.div>
        <motion.div className="card feature-card" whileHover={{ y: -4, scale: 1.02 }}>
          <div className="feature-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: 'var(--accent-pink)' }}>
            <Sparkles size={26} />
          </div>
          <h3>גיליון עזר ויזואלי</h3>
          <p>22 סוגי תרשימים עם איורים, מתי להשתמש ומתי לא, סוג הנתונים והמשימה</p>
        </motion.div>
        <motion.div className="card feature-card" whileHover={{ y: -4, scale: 1.02 }}>
          <div className="feature-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-green)' }}>
            <GraduationCap size={26} />
          </div>
          <h3>מילון מושגים</h3>
          <p>כל הכללים, העקרונות והדמויות: Tufte, Shneiderman, Bertin, Munzner, גשטלט ועוד</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
