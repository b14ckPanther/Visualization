'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { exams } from '@/data/exams';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  BookOpen,
  Award
} from 'lucide-react';

export default function ExamSessionPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.examId as string;
  const exam = exams.find((e) => e.id === examId);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, {
    userAnswers: number[];
    isCorrect: boolean;
    submitted: boolean;
  }>>({});
  const [showResults, setShowResults] = useState(false);

  if (!exam) {
    return (
      <div className="page-container" style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h2>המבחן לא נמצא</h2>
        <button onClick={() => router.push('/exams')} className="nav-btn primary" style={{ marginTop: '1rem', marginInline: 'auto' }}>
          חזרה למבחנים
        </button>
      </div>
    );
  }

  const currentQuestion = exam.questions[currentIdx];
  const isQuestionAnswered = answeredQuestions[currentIdx]?.submitted;
  const questionState = answeredQuestions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isQuestionAnswered) return;

    if (currentQuestion.type === 'single' || currentQuestion.type === 'statement') {
      setSelectedAnswers([optIdx]);
    } else {
      // multiple
      if (selectedAnswers.includes(optIdx)) {
        setSelectedAnswers(selectedAnswers.filter((idx) => idx !== optIdx));
      } else {
        setSelectedAnswers([...selectedAnswers, optIdx]);
      }
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers.length === 0) return;

    // Check correctness
    const correctAnswers = currentQuestion.correctAnswers;
    const isCorrect = 
      selectedAnswers.length === correctAnswers.length && 
      selectedAnswers.every((val) => correctAnswers.includes(val));

    setAnsweredQuestions({
      ...answeredQuestions,
      [currentIdx]: {
        userAnswers: selectedAnswers,
        isCorrect,
        submitted: true,
      }
    });
  };

  const handleNext = () => {
    if (currentIdx < exam.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      // Load previous answers if any, otherwise clear
      const nextQuestionState = answeredQuestions[currentIdx + 1];
      setSelectedAnswers(nextQuestionState ? nextQuestionState.userAnswers : []);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      const prevQuestionState = answeredQuestions[currentIdx - 1];
      setSelectedAnswers(prevQuestionState ? prevQuestionState.userAnswers : []);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswers([]);
    setAnsweredQuestions({});
    setShowResults(false);
  };

  // Score Calculation
  const totalQuestions = exam.questions.length;
  const correctCount = Object.values(answeredQuestions).filter((q) => q.isCorrect).length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  // Animation variants
  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="page-container">
      <div className="exam-container">
        
        {/* Back Link */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px' }}>
          <button onClick={() => router.push('/exams')} className="nav-btn secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <ArrowRight size={16} /> חזרה לרשימת המבחנים
          </button>
        </div>

        {!showResults ? (
          <>
            {/* Header info */}
            <div className="exam-progress">
              <div className="progress-bar-track">
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${((currentIdx + 1) / totalQuestions) * 100}%`,
                    background: exam.color
                  }} 
                />
              </div>
              <span className="progress-text">שאלה {currentIdx + 1} מתוך {totalQuestions}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="question-card"
              >
                {/* Question Type Badge */}
                <div className="question-type-badge">
                  <HelpCircle size={14} />
                  <span>
                    {currentQuestion.type === 'single' && 'שאלה אמריקאית (בחירה יחידה)'}
                    {currentQuestion.type === 'multiple' && 'בחירה מרובה (סמנו את כל התשובות הנכונות)'}
                    {currentQuestion.type === 'statement' && 'הערכת טענות (משפטים)'}
                  </span>
                </div>

                {/* Question Text */}
                <h2 className="question-text">{currentQuestion.question}</h2>

                {/* Options List */}
                <div className="options-list">
                  {currentQuestion.options.map((option, optIdx) => {
                    const isSelected = selectedAnswers.includes(optIdx);
                    const isCorrectAnswer = currentQuestion.correctAnswers.includes(optIdx);
                    
                    let buttonClass = "";
                    if (isQuestionAnswered) {
                      buttonClass = "answered";
                      if (isSelected) {
                        buttonClass += isCorrectAnswer ? " correct" : " incorrect";
                      } else if (isCorrectAnswer) {
                        buttonClass += " correct-answer";
                      }
                    } else if (isSelected) {
                      buttonClass = "selected";
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`option-btn ${buttonClass}`}
                        disabled={isQuestionAnswered}
                      >
                        {/* Indicator Checkbox / Radio */}
                        {currentQuestion.type === 'multiple' ? (
                          <div className="checkbox-indicator">
                            {isQuestionAnswered && isCorrectAnswer && <CheckCircle2 size={14} color="#34D399" />}
                            {isQuestionAnswered && isSelected && !isCorrectAnswer && <XCircle size={14} color="#F87171" />}
                          </div>
                        ) : (
                          <div className="option-indicator">
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                        )}

                        <div style={{ flex: 1 }}>
                          <span>{option}</span>
                          
                          {/* Option specific explanations shown after submit */}
                          {isQuestionAnswered && currentQuestion.optionExplanations && (
                            <div className="option-explanation">
                              <strong>
                                {isCorrectAnswer ? 'נכון: ' : 'לא נכון: '}
                              </strong>
                              {currentQuestion.optionExplanations[optIdx]}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Submit button if not answered */}
                {!isQuestionAnswered && (
                  <button 
                    onClick={handleSubmitAnswer} 
                    className="submit-btn"
                    disabled={selectedAnswers.length === 0}
                    style={{ background: exam.color }}
                  >
                    בדיקת תשובה
                  </button>
                )}

                {/* Question Feedback Explanation */}
                {isQuestionAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className={`explanation-box ${questionState.isCorrect ? 'correct-exp' : 'incorrect-exp'}`}
                  >
                    <div className="explanation-title" style={{ color: questionState.isCorrect ? 'var(--correct-text)' : 'var(--incorrect-text)' }}>
                      {questionState.isCorrect ? (
                        <>
                          <CheckCircle2 size={18} />
                          <span>תשובה נכונה! כל הכבוד</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={18} />
                          <span>תשובה לא נכונה.</span>
                        </>
                      )}
                    </div>
                    <p style={{ marginTop: '8px' }}>{currentQuestion.explanation}</p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Nav Bar */}
            <div className="exam-nav">
              <button 
                onClick={handlePrev} 
                className="nav-btn secondary"
                disabled={currentIdx === 0}
              >
                <ArrowRight size={16} /> שאלה קודמת
              </button>

              <button 
                onClick={handleNext} 
                className="nav-btn primary"
                disabled={!isQuestionAnswered}
                style={{ background: exam.color }}
              >
                {currentIdx === totalQuestions - 1 ? 'סיום המבחן' : 'שאלה הבאה'} 
                <ArrowLeft size={16} />
              </button>
            </div>
          </>
        ) : (
          /* Results Dashboard */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card results-card"
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: exam.color }}>
              <Award size={64} />
            </div>
            <h2>תוצאות המבחן: {exam.title}</h2>
            <div className="results-score" style={{ color: exam.color }}>{score}%</div>
            
            <p className="results-label">
              {score >= 85 ? 'מצוין! אתה לגמרי מוכן למבחן!' : score >= 60 ? 'טוב מאוד, כדאי לחזור על הנושאים שבהם טעית.' : 'מומלץ לעבור שוב על גיליון העזר והמושגים ולנסות שוב.'}
            </p>

            <div className="results-stats">
              <div className="stat-item">
                <span className="stat-value">{totalQuestions}</span>
                <span className="stat-label">סה"כ שאלות</span>
              </div>
              <div className="stat-item" style={{ color: 'var(--correct-text)' }}>
                <span className="stat-value">{correctCount}</span>
                <span className="stat-label">תשובות נכונות</span>
              </div>
              <div className="stat-item" style={{ color: 'var(--incorrect-text)' }}>
                <span className="stat-value">{totalQuestions - correctCount}</span>
                <span className="stat-label">תשובות שגויות</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={handleRestart} className="nav-btn primary" style={{ background: exam.color }}>
                <RotateCcw size={16} /> לנסות שוב
              </button>
              <button onClick={() => router.push('/exams')} className="nav-btn secondary">
                <BookOpen size={16} /> מבחנים אחרים
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
