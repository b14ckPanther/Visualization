import { Exam } from './types';

export const exams: Exam[] = [
  {
    id: 'exam-1',
    title: 'מבחן תרגול א׳',
    subtitle: 'יסודות הויזואליזציה, תפיסה אנושית וסוגי נתונים',
    icon: 'BookOpen',
    color: '#8B5CF6',
    questions: [
      {
        id: 1,
        type: 'single',
        question: 'לפי ההגדרה של Munzner, מהי ויזואליזציה?',
        options: [
          'תהליך יצירת גרפיקה ממוחשבת תלת ממדית',
          'מערכות ויזואליזציה מבוססות מחשב המספקות ייצוגים חזותיים של מערכי נתונים שנועדו לעזור לאנשים לבצע משימות בצורה יעילה יותר',
          'תהליך המרה של נתונים לטבלאות',
          'שימוש בצבעים ואנימציות לשיפור חווית המשתמש',
          'תהליך ניתוח סטטיסטי של נתונים באמצעות תרשימים'
        ],
        correctAnswers: [1],
        explanation: 'ההגדרה של Tamara Munzner מדגישה שלושה מרכיבים: (1) מבוססת מחשב, (2) ייצוגים חזותיים של נתונים, (3) המטרה - לעזור לאנשים לבצע משימות יעילות יותר.',
        optionExplanations: [
          'גרפיקה תלת ממדית היא חלק מויזואליזציה אך לא ההגדרה המלאה',
          'תשובה נכונה - זוהי ההגדרה המדויקת של Munzner',
          'המרה לטבלאות היא עיבוד נתונים, לא ויזואליזציה',
          'צבעים ואנימציות הם כלים בויזואליזציה, לא ההגדרה',
          'ניתוח סטטיסטי הוא שלב מקדים, לא הויזואליזציה עצמה'
        ]
      },
      {
        id: 2,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. שלוש הפונקציות של ויזואליזציה הן: תיעוד (Record), ניתוח (Analyze), ותקשורת (Communicate).\nב. Anscombe\'s Quartet מדגים שמערכי נתונים בעלי סטטיסטיקות זהות תמיד נראים אותו דבר בויזואליזציה.',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'א׳ נכונה חלקית וב׳ שגויה'
        ],
        correctAnswers: [0],
        explanation: 'טענה א׳ נכונה - שלוש הפונקציות הן Record, Analyze, ו-Communicate. טענה ב׳ שגויה - Anscombe\'s Quartet מדגים בדיוק את ההפך: מערכי נתונים עם סטטיסטיקות זהות יכולים להיראות שונים לחלוטין בויזואליזציה.',
        optionExplanations: [
          'נכון - א׳ מדויקת, ב׳ הפוכה מהמציאות',
          'ב׳ שגויה - Anscombe\'s Quartet מראה שנתונים עם אותה סטטיסטיקה נראים שונה',
          'ב׳ שגויה כאמור',
          'א׳ נכונה',
          'א׳ נכונה לחלוטין, לא חלקית'
        ]
      },
      {
        id: 3,
        type: 'single',
        question: 'מהו Preattentive Processing?',
        options: [
          'עיבוד מידע שדורש ריכוז ומאמץ קוגניטיבי רב',
          'עיבוד מידע שנמשך לפחות 5 שניות',
          'קבוצת תכונות ויזואליות שמזוהות במהירות ובדיוק על ידי מערכת הראייה הנמוכה, בפחות מ-250 מילישניות',
          'עיבוד שמתרחש רק כשהעין זזה בתנועות Saccadic',
          'תהליך למידה של דפוסים חזותיים חדשים'
        ],
        correctAnswers: [2],
        explanation: 'Preattentive Processing הוא קבוצת תכונות ויזואליות שמזוהות במהירות רבה (פחות מ-250ms) ובדיוק גבוה, עוד לפני שתשומת הלב הממוקדת מופעלת. דוגמאות: צבע, גודל, כיוון, צורה.',
        optionExplanations: [
          'ההפך - Preattentive processing הוא אוטומטי ולא דורש מאמץ',
          'הזמן הוא פחות מ-250 מילישניות, לא 5 שניות',
          'תשובה נכונה - זיהוי מהיר ומדויק בפחות מ-250ms',
          'תנועות Saccadic קשורות לתנועת העין, לא ל-preattentive processing',
          'זהו תהליך מולד, לא תהליך למידה'
        ]
      },
      {
        id: 4,
        type: 'multiple',
        question: 'אילו מהבאים הם עקרונות גשטלט (Gestalt)? (סמנו את כל התשובות הנכונות)',
        options: [
          'Proximity (קרבה)',
          'Preattentive Processing (עיבוד קדם-קשבי)',
          'Similarity (דמיון)',
          'Continuity (רציפות)',
          'Closure (סגירות)'
        ],
        correctAnswers: [0, 2, 3, 4],
        explanation: 'עקרונות הגשטלט כוללים: Proximity (קרבה), Similarity (דמיון), Continuity (רציפות), Closure (סגירות), ו-Figure-Ground (דמות-רקע). Preattentive Processing הוא מושג שונה שעוסק בזיהוי מהיר של תכונות ויזואליות.',
        optionExplanations: [
          'נכון - עקרון הקרבה: אלמנטים קרובים זה לזה נתפסים כקבוצה',
          'לא נכון - Preattentive Processing הוא מושג נפרד מעקרונות הגשטלט',
          'נכון - עקרון הדמיון: אלמנטים דומים נתפסים כקבוצה',
          'נכון - עקרון הרציפות: העין נוטה לעקוב אחר קווים רציפים',
          'נכון - עקרון הסגירות: המוח משלים צורות חסרות'
        ]
      },
      {
        id: 5,
        type: 'single',
        question: 'לפי סדר הדיוק של Cleveland & McGill, מהו הערוץ הוויזואלי המדויק ביותר להצגת נתונים כמותיים?',
        options: [
          'צבע (Color hue)',
          'שטח (Area)',
          'זווית (Angle)',
          'מיקום על סקאלה משותפת (Position along a common scale)',
          'נפח (Volume)'
        ],
        correctAnswers: [3],
        explanation: 'לפי Cleveland & McGill, סדר הדיוק (מהגבוה לנמוך) הוא: Position along a common scale > Length > Angle/Slope > Area > Volume > Color hue/saturation. מיקום על סקאלה משותפת הוא המדויק ביותר.',
        optionExplanations: [
          'צבע הוא אחד הפחות מדויקים להצגת ערכים כמותיים',
          'שטח נמצא באמצע סדר הדיוק',
          'זווית/שיפוע נמצאים אחרי אורך בסדר הדיוק',
          'תשובה נכונה - מיקום על סקאלה משותפת הוא המדויק ביותר',
          'נפח הוא אחד הפחות מדויקים'
        ]
      },
      {
        id: 6,
        type: 'single',
        question: 'מהו ה-Data-Ink Ratio של Tufte?',
        options: [
          'היחס בין כמות הצבעים למספר הנתונים בגרף',
          'היחס בין הדיו המוקדש להצגת הנתונים לבין כלל הדיו בגרף - יש למקסם אותו',
          'מספר הפיקסלים שנדרשים להצגת כל נקודת נתונים',
          'היחס בין גודל הגרף לכמות המידע שהוא מציג',
          'כמות הטקסט ביחס לגרפיקה בויזואליזציה'
        ],
        correctAnswers: [1],
        explanation: 'Data-Ink Ratio של Tufte הוא היחס בין הדיו (פיקסלים) שמשמשים להצגת הנתונים בפועל לבין כלל הדיו בגרף. Tufte ממליץ למקסם יחס זה - כלומר להסיר כל אלמנט שאינו תורם להבנת הנתונים (Chart Junk).',
        optionExplanations: [
          'לא מדובר ביחס צבעים אלא ביחס דיו/פיקסלים',
          'תשובה נכונה - Data-Ink Ratio = Data-Ink / Total Ink',
          'זהו הכלל של Data-Pixel Rule, לא Data-Ink Ratio',
          'זה לא ההגדרה המדויקת',
          'הכלל עוסק בדיו, לא ביחס טקסט/גרפיקה'
        ]
      },
      {
        id: 7,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. Rods (מוטות) אחראיים על תפיסת עוצמה ונמצאים בעיקר ב-Fovea.\nב. Cones (קונוסים) מחולקים לשלושה סוגים: Short, Medium ו-Long, והם אחראיים בעיקר לתפיסת צבע.',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'ב׳ נכונה וא׳ נכונה חלקית'
        ],
        correctAnswers: [4],
        explanation: 'טענה א׳ נכונה חלקית - Rods אכן אחראיים על עוצמה, אבל הם פרוסים על פני כל הרשתית ולא מרוכזים ב-Fovea (ההפך - ב-Fovea יש בעיקר Cones). טענה ב׳ נכונה לחלוטין.',
        optionExplanations: [
          'א׳ שגויה חלקית - Rods נמצאים בכל הרשתית, לא ב-Fovea',
          'ב׳ נכונה אך גם א׳ נכונה חלקית',
          'א׳ אינה נכונה לגמרי',
          'ב׳ נכונה',
          'תשובה נכונה - Rods אחראיים לעוצמה (נכון) אך לא ב-Fovea (שגוי). Cones - שלושה סוגים לצבע (נכון)'
        ]
      },
      {
        id: 8,
        type: 'single',
        question: 'איזה סוג נתונים (Attribute Type) מתאר את "גודל חולצה" (S, M, L, XL)?',
        options: [
          'Nominal (קטגורי)',
          'Ordinal (סדורי)',
          'Quantitative (כמותי)',
          'Categorical (קטגורי)',
          'Sequential (רציף)'
        ],
        correctAnswers: [1],
        explanation: 'גודל חולצה הוא Ordinal (סדורי) כי יש סדר מוגדר (S < M < L < XL) אבל אי אפשר לעשות חישובים אריתמטיים (כמה "יותר גדול" L מ-M?). נתון Nominal לא היה בעל סדר, ונתון Quantitative היה מאפשר חשבון.',
        optionExplanations: [
          'Nominal אינו בעל סדר - כמו צבע עיניים',
          'תשובה נכונה - יש סדר (S<M<L<XL) אך אין משמעות אריתמטית',
          'Quantitative מאפשר חשבון (חיבור, ממוצע) - לא רלוונטי לגדלי חולצות',
          'Categorical זהה ל-Nominal ואינו בעל סדר',
          'Sequential אינו סוג נתונים בסיווג המקובל'
        ]
      },
      {
        id: 9,
        type: 'multiple',
        question: 'אילו מהבאים הם Dataset Types (סוגי מערכי נתונים) לפי החומר הנלמד?',
        options: [
          'Flat Table (טבלה שטוחה)',
          'Network/Graph (רשת/גרף)',
          'Spatial Field (שדה מרחבי)',
          'Histogram (היסטוגרמה)',
          'Tree (עץ - מקרה פרטי של גרף)'
        ],
        correctAnswers: [0, 1, 2, 4],
        explanation: 'סוגי מערכי הנתונים כוללים: Flat Table, Multidimensional Table, Network/Graph, Spatial Field, ו-Tree (שהוא מקרה פרטי של גרף ללא מעגלים). Histogram הוא סוג של ויזואליזציה, לא סוג נתונים.',
        optionExplanations: [
          'נכון - טבלה שטוחה: שורה לכל פריט, עמודות כתכונות',
          'נכון - צמתים מחוברים בקשתות',
          'נכון - ערכי תכונות משויכים לתאים במרחב',
          'לא נכון - Histogram הוא ויזואליזציה, לא סוג נתונים',
          'נכון - עץ הוא גרף קשיר ללא מעגלים'
        ]
      },
      {
        id: 10,
        type: 'single',
        question: 'מהם שלושת סוגי ה-Attribute Types (סוגי תכונות) העיקריים?',
        options: [
          'Continuous, Discrete, Binary',
          'Nominal, Ordinal, Quantitative',
          'Integer, Float, String',
          'Categorical, Numerical, Textual',
          'Primary, Secondary, Tertiary'
        ],
        correctAnswers: [1],
        explanation: 'שלושת סוגי התכונות הם: Categorical/Nominal (השוואת שוויון בלבד, ללא סדר), Ordinal (סדורי - מוגדר יחס גדול/קטן), ו-Quantitative (כמותי - ניתן לבצע חשבון).',
        optionExplanations: [
          'אלו חלוקות אפשריות אך לא הסיווג המקובל בויזואליזציה',
          'תשובה נכונה - Nominal (קטגורי), Ordinal (סדורי), Quantitative (כמותי)',
          'אלו סוגי נתונים בתכנות, לא בויזואליזציה',
          'חלוקה חלקית שאינה מבדילה בין Ordinal ל-Quantitative',
          'אין סיווג כזה בויזואליזציה'
        ]
      },
      {
        id: 11,
        type: 'single',
        question: 'מי צייר את המפה המפורסמת של מסע נפוליאון לרוסיה ב-1812?',
        options: [
          'Edward Tufte',
          'William Playfair',
          'Charles Joseph Minard',
          'Florence Nightingale',
          'John Snow'
        ],
        correctAnswers: [2],
        explanation: 'Charles Joseph Minard יצר את אחת הויזואליזציות המפורסמות ביותר בהיסטוריה - מפת מסע הצבא של נפוליאון לרוסיה ב-1812. המפה מציגה גודל הצבא, מסלול, טמפרטורה וזמן.',
        optionExplanations: [
          'Tufte ניתח את המפה של Minard אך לא יצר אותה',
          'Playfair ידוע כממציא גרפי הקו, העוגה והעמודות',
          'תשובה נכונה - Minard יצר את הויזואליזציה המפורסמת',
          'Nightingale ידועה בתרשים Coxcomb על מוות במלחמת קרים',
          'Snow ידוע במפת מקרי הכולרה בלונדון 1854'
        ]
      },
      {
        id: 12,
        type: 'single',
        question: 'מהי אבחנת מידע (Data Abstraction)?',
        options: [
          'תהליך מחיקת נתונים לא רלוונטיים',
          'תהליך תרגום משפת התחום (domain) לשפה גנרית של ויזואליזציה - זיהוי סוגי נתונים ותכונות',
          'יצירת סיכום סטטיסטי של הנתונים',
          'המרת נתונים לפורמט JSON',
          'תהליך הורדת מימדיות (Dimension Reduction)'
        ],
        correctAnswers: [1],
        explanation: 'Data Abstraction כולל: (1) תרגום משפת domain לשפה גנרית, (2) זיהוי dataset types ו-attribute types, (3) זיהוי cardinality, (4) שקילת טרנספורמציות.',
        optionExplanations: [
          'מחיקת נתונים היא חלק מ-filtering, לא abstraction',
          'תשובה נכונה - תרגום מ-domain language ל-generic visualization language',
          'סיכום סטטיסטי הוא כלי, לא Data Abstraction',
          'פורמט הקובץ אינו קשור ל-Data Abstraction',
          'Dimension Reduction הוא טכניקה ספציפית, לא Data Abstraction'
        ]
      },
      {
        id: 13,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. Change Blindness הוא מצב שבו אנשים לא מצליחים לזהות שינויים ויזואליים גדולים בסצנה.\nב. Feature Integration Theory טוענת שתכונות preattentive מעובדות בצורה סדרתית (Serial) ולא במקביל.',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'א׳ נכונה וב׳ הפוכה'
        ],
        correctAnswers: [4],
        explanation: 'Change Blindness אכן מתאר כישלון בזיהוי שינויים (א׳ נכונה). Feature Integration Theory טוענת ש-preattentive features מעובדות במקביל (Parallel), ורק שילוב של תכונות מצריך עיבוד סדרתי (Serial) - כלומר ב׳ הפוכה.',
        optionExplanations: [
          'א׳ נכונה, אך ב׳ גם צריכה התייחסות',
          'ב׳ הפוכה - תכונות preattentive מעובדות במקביל',
          'ב׳ שגויה',
          'א׳ נכונה',
          'תשובה נכונה - א׳ נכונה, ב׳ הפוכה (parallel, לא serial)'
        ]
      },
      {
        id: 14,
        type: 'single',
        question: 'לפי Tufte, מהו Chart Junk?',
        options: [
          'תרשימים שמציגים נתונים שגויים',
          'אלמנטים דקורטיביים בגרף שאינם תורמים להבנת הנתונים ומסיחים את הדעת',
          'גרפים ישנים שכבר לא רלוונטיים',
          'שימוש בצבעים רבים מדי בגרף',
          'נתונים חסרים בגרף'
        ],
        correctAnswers: [1],
        explanation: 'Chart Junk הוא מונח של Edward Tufte לאלמנטים ויזואליים בגרף שאינם מעבירים מידע ומסיחים את הדעת מהנתונים. דוגמאות: דפוסי רקע, עיטורים, אפקטים תלת-ממדיים מיותרים.',
        optionExplanations: [
          'נתונים שגויים זה Misleading visualization, לא Chart Junk',
          'תשובה נכונה - אלמנטים דקורטיביים שלא תורמים להבנת הנתונים',
          'Chart Junk לא קשור לרלוונטיות לאורך זמן',
          'ריבוי צבעים יכול להיות בעייתי אך אינו ההגדרה של Chart Junk',
          'נתונים חסרים הם בעיה של Missing Data'
        ]
      },
      {
        id: 15,
        type: 'single',
        question: 'מהם הכללים של Tufte לבניית ויזואליזציה טובה?',
        options: [
          'להשתמש בכמה שיותר צבעים ואפקטים',
          'להציג את הנתונים, לאפשר למתבונן להתמקד בתוכן, להימנע מעיוות הנתונים, ולחשוף נתונים ברמות פירוט שונות',
          'ליצור תמיד גרפים תלת-ממדיים לרושם מרשים יותר',
          'להשתמש אך ורק ב-Pie Charts ו-Bar Charts',
          'למזער את כמות הנתונים המוצגים ולהציג רק סיכומים'
        ],
        correctAnswers: [1],
        explanation: 'כללי Tufte: (1) הציגו את הנתונים, (2) אפשרו למתבונן להתמקד בתוכן, (3) הימנעו מעיוות, (4) עודדו השוואה, (5) חשפו נתונים ברמות פירוט שונות, (6) שרתו מטרה ברורה.',
        optionExplanations: [
          'Tufte דווקא ממליץ על מינימליזם ופשטות',
          'תשובה נכונה - אלו עקרונות הליבה של Tufte',
          'Tufte מתנגד לאפקטים תלת-ממדיים מיותרים',
          'Tufte לא מגביל לסוגי גרפים מסוימים',
          'Tufte ממליץ לחשוף נתונים ברמות פירוט שונות, לא רק סיכומים'
        ]
      },
      {
        id: 16,
        type: 'multiple',
        question: 'מהם השימושים העיקריים ביצירת ויזואליזציות? (סמנו את כל התשובות הנכונות)',
        options: [
          'לשכנע (Convince)',
          'לגלות תשובות ולשאול שאלות (Discover)',
          'לספר סיפור (Tell a story)',
          'להחליף טבלאות נתונים',
          'למצוא דפוסים (Find patterns)'
        ],
        correctAnswers: [0, 1, 2, 4],
        explanation: 'השימושים העיקריים: לשכנע, להציג את הנתונים, לספר סיפור, לענות ולגלות שאלות, לקבל החלטות, לראות נתונים בהקשר, למצוא דפוסים, להשראה. "להחליף טבלאות" אינו מטרה - ויזואליזציה משלימה טבלאות.',
        optionExplanations: [
          'נכון - שכנוע הוא אחד השימושים המרכזיים (דוגמת Nightingale)',
          'נכון - גילוי תשובות ושאלות חדשות',
          'נכון - סיפור הוא שימוש מרכזי (דוגמת Minard)',
          'לא נכון - ויזואליזציה משלימה טבלאות, לא מחליפה אותן',
          'נכון - זיהוי דפוסים הוא יתרון מרכזי'
        ]
      },
      {
        id: 17,
        type: 'single',
        question: 'מהו Absolute Judgment לפי חומר הקורס? כמה רמות של גוון צבע (hue) משתמשים יכולים לזהות בממוצע?',
        options: [
          '3 רמות',
          '5 רמות',
          '10 רמות',
          '20 רמות',
          '50 רמות'
        ],
        correctAnswers: [2],
        explanation: 'לפי חומר הקורס, משתמשים יכולים לזהות בדיוק כ-10 רמות של גוון צבע (hue) ו-5 רמות של בהירות (brightness). בממוצע, משתמשים מסוגלים לחלץ כ-6-7 רמות של ערך נתונים בדיוק.',
        optionExplanations: [
          'מעט מדי - 3 רמות לא מנצלות את יכולת ההבחנה',
          '5 רמות הוא הערך עבור brightness, לא hue',
          'תשובה נכונה - 10 רמות של hue',
          'יותר מדי - אנשים לא יכולים להבחין ב-20 רמות של גוון',
          'הרבה יותר מדי מיכולת ההבחנה האנושית'
        ]
      },
      {
        id: 18,
        type: 'single',
        question: 'מהו ההבדל בין Infographic לויזואליזציה?',
        options: [
          'אין הבדל - הם אותו דבר',
          'ויזואליזציה נוצרת על ידי תוכנית שניתנת להפעלה על מערכי נתונים רבים, ואילו Infographic מעוצב ידנית עבור מערך נתונים ספציפי',
          'Infographic תמיד אינטראקטיבי וויזואליזציה תמיד סטטית',
          'ויזואליזציה היא תמיד בשחור-לבן ו-Infographic בצבע',
          'Infographic מיועד למדענים וויזואליזציה לקהל הרחב'
        ],
        correctAnswers: [1],
        explanation: 'ויזואליזציה (Visualization) נוצרת על ידי תוכנית שניתנת להפעלה על מערכי נתונים שונים (כמו Parallel Coordinates). Infographic מעוצב ידנית עבור מערך נתונים ספציפי, ולרוב כולל ויזואליזציות פשוטות + טקסט + עיצוב גרפי.',
        optionExplanations: [
          'יש הבדל משמעותי בין השניים',
          'תשובה נכונה - ויזואליזציה היא programmatic, infographic היא hand-crafted',
          'שניהם יכולים להיות סטטיים או אינטראקטיביים',
          'אין קשר לצבעוניות',
          'ההפך - Infographic מיועד לרוב לקהל רחב'
        ]
      },
      {
        id: 19,
        type: 'single',
        question: 'לפי ה-Visualization Pipeline, מהם השלבים העיקריים?',
        options: [
          'Data → Visualization → Interaction',
          'Data Modeling → Data Selection → Data-to-Visual Mapping → Scene Parameters → Rendering',
          'Import → Clean → Export → Present',
          'Collect → Store → Query → Display',
          'Design → Code → Test → Deploy'
        ],
        correctAnswers: [1],
        explanation: 'ה-Visualization Pipeline כולל 5 שלבים: (1) Data Modeling - מבנה הנתונים, (2) Data Selection - בחירת תת-קבוצה, (3) Data-to-Visual Mapping - מיפוי ערכים לאלמנטים גרפיים, (4) Scene Parameter Setting - הגדרות תצוגה, (5) Rendering.',
        optionExplanations: [
          'פישוט יתר - חסרים שלבים חשובים',
          'תשובה נכונה - 5 שלבי ה-Pipeline המלאים',
          'תהליך ETL, לא visualization pipeline',
          'תהליך מאגרי נתונים, לא visualization',
          'תהליך פיתוח תוכנה כללי'
        ]
      },
      {
        id: 20,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. Kanizsa Illusion מדגים את עיקרון ה-Closure של הגשטלט - המוח "משלים" צורות שלא קיימות.\nב. Hermann Grid Illusion מראה כתמים שחורים מדומים בצמתים של הרשת.',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'א׳ נכונה וב׳ נכונה חלקית'
        ],
        correctAnswers: [2],
        explanation: 'שתי הטענות נכונות. Kanizsa Triangle יוצר אשליה של משולש שלא מצויר בפועל - דוגמה קלאסית ל-Closure. Hermann Grid Illusion יוצר כתמים שחורים (או אפורים) מדומים בצמתי הרשת.',
        optionExplanations: [
          'גם ב׳ נכונה',
          'גם א׳ נכונה',
          'תשובה נכונה - שתי הטענות מדויקות',
          'שתיהן נכונות',
          'שתיהן נכונות לחלוטין'
        ]
      }
    ]
  },
  {
    id: 'exam-2',
    title: 'מבחן תרגול ב׳',
    subtitle: 'סוגי תרשימים, מיפוי ויזואלי ותרשימים בסיסיים',
    icon: 'BarChart3',
    color: '#EC4899',
    questions: [
      {
        id: 1,
        type: 'single',
        question: 'איזה סוג תרשים מתאים ביותר להצגת Component Comparison (חלק מתוך שלם)?',
        options: [
          'Scatterplot',
          'Line Chart',
          'Pie Chart',
          'Histogram',
          'Box Plot'
        ],
        correctAnswers: [2],
        explanation: 'Pie Chart מתאים ביותר ל-Component Comparison - כשרוצים להראות את החלק של כל רכיב מתוך השלם (100%). הוא מציג חלוקה יחסית.',
        optionExplanations: [
          'Scatterplot מציג קורלציה בין שני משתנים',
          'Line Chart מציג מגמות לאורך זמן',
          'תשובה נכונה - Pie Chart מציג חלקים מתוך שלם',
          'Histogram מציג התפלגות תדרים',
          'Box Plot מציג סטטיסטיקות תיאוריות'
        ]
      },
      {
        id: 2,
        type: 'single',
        question: 'איזה סוג תרשים מתאים ביותר להצגת Correlation Comparison?',
        options: [
          'Pie Chart',
          'Bar Chart',
          'Scatterplot',
          'Gantt Chart',
          'Treemap'
        ],
        correctAnswers: [2],
        explanation: 'Scatterplot הוא התרשים המתאים ביותר להצגת קורלציה (Correlation) בין שני משתנים כמותיים. כל נקודה מייצגת ערך על שני צירים.',
        optionExplanations: [
          'Pie Chart מציג חלקים מתוך שלם, לא קורלציה',
          'Bar Chart משווה ערכים בין קטגוריות',
          'תשובה נכונה - Scatterplot מציג קשר בין שני משתנים',
          'Gantt Chart מציג לוחות זמנים',
          'Treemap מציג היררכיות'
        ]
      },
      {
        id: 3,
        type: 'multiple',
        question: 'מהם 8 המשתנים הוויזואליים (Visual Variables) של Bertin?',
        options: [
          'Position (מיקום), Size (גודל)',
          'Shape (צורה), Color/Hue (צבע)',
          'Brightness (בהירות), Orientation (כיוון)',
          'Animation (אנימציה), Interaction (אינטראקציה)',
          'Texture (מרקם), Motion (תנועה)'
        ],
        correctAnswers: [0, 1, 2, 4],
        explanation: 'שמונת המשתנים הוויזואליים של Bertin הם: Position, Size, Shape, Color (Hue), Brightness, Orientation, Texture, ו-Motion. Animation ו-Interaction אינם חלק מ-8 המשתנים המקוריים.',
        optionExplanations: [
          'נכון - Position ו-Size הם שניים מהמשתנים',
          'נכון - Shape ו-Color הם משתנים ויזואליים',
          'נכון - Brightness ו-Orientation הם משתנים ויזואליים',
          'לא נכון - Animation ו-Interaction אינם חלק מ-8 המשתנים הוויזואליים',
          'נכון - Texture ו-Motion הם שניים מהמשתנים'
        ]
      },
      {
        id: 4,
        type: 'single',
        question: 'לפי חמשת סוגי ההשוואה הבסיסיים, "מכירות עלו בהתמדה מאז ינואר" היא דוגמה לאיזה סוג?',
        options: [
          'Component Comparison',
          'Item Comparison',
          'Time-Series Comparison',
          'Frequency Distribution',
          'Correlation Comparison'
        ],
        correctAnswers: [2],
        explanation: '"מכירות עלו בהתמדה מאז ינואר" מתאר שינוי לאורך זמן - זוהי Time-Series Comparison. מילות המפתח: "מאז", "עלו", "לאורך".',
        optionExplanations: [
          'Component מתארת חלק מתוך שלם',
          'Item Comparison משווה פריטים זה לזה',
          'תשובה נכונה - שינוי לאורך זמן = Time-Series',
          'Frequency Distribution עוסקת בכמה פריטים נופלים בכל טווח',
          'Correlation עוסקת בקשר בין שני משתנים'
        ]
      },
      {
        id: 5,
        type: 'single',
        question: 'מדוע לא מומלץ להשתמש ב-Rainbow Colormap?',
        options: [
          'כי הוא משתמש ביותר מדי צבעים',
          'כי אין לו סדר טבעי ושינויים בין צבעים קשים לתפיסה, מה שמוביל לפרשנות שגויה',
          'כי הוא לא נתמך בדפדפנים מודרניים',
          'כי הוא בעייתי רק עבור עיוורי צבעים',
          'כי הוא מתאים רק לנתונים קטגוריים'
        ],
        correctAnswers: [1],
        explanation: 'ל-Rainbow Colormap שתי בעיות עיקריות: (1) אין סדר טבעי - איזה צבע "גדול" יותר? (2) שינויים בין צבעים שכנים קשים לתפיסה. הקהל מתקשה לשייך צבעים לערכים. מומלץ להשתמש ב-ColorBrewer.',
        optionExplanations: [
          'הבעיה היא לא כמות הצבעים אלא חוסר הסדר',
          'תשובה נכונה - אין סדר טבעי ושינויים קשים לתפיסה',
          'Rainbow Colormap נתמך טכנולוגית, הבעיה היא תפיסתית',
          'הבעיה רלוונטית לכל המשתמשים, לא רק עיוורי צבעים',
          'גם לנתונים רציפים הוא בעייתי'
        ]
      },
      {
        id: 6,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. Stacked Bar Chart מאפשר השוואה קלה של כל רכיב בנפרד בין קטגוריות שונות.\nב. Bar Chart הוא הכלי המתאים ביותר ל-Item Comparison.',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'א׳ שגויה וב׳ נכונה'
        ],
        correctAnswers: [4],
        explanation: 'Stacked Bar Chart מקשה על השוואה של רכיבים בודדים כי רק הרכיב התחתון מתחיל מאפס - שאר הרכיבים "צפים" ולכן קשה להשוות אותם (א׳ שגויה). Bar Chart אכן מתאים ביותר ל-Item Comparison (ב׳ נכונה).',
        optionExplanations: [
          'א׳ שגויה - Stacked Bar מקשה על השוואת רכיבים בודדים',
          'ב׳ נכונה אך לא לבד',
          'א׳ שגויה',
          'ב׳ נכונה',
          'תשובה נכונה - א׳ שגויה, ב׳ נכונה'
        ]
      },
      {
        id: 7,
        type: 'single',
        question: 'מהם "חמשת מספרי הקסם" שמציג Box Plot?',
        options: [
          'ממוצע, חציון, שונות, סטיית תקן, Range',
          'מינימום, רבעון תחתון (Q1), חציון (Q2), רבעון עליון (Q3), מקסימום',
          'Sum, Count, Average, Min, Max',
          'Mean, Mode, Median, Variance, Skewness',
          'Q1, Q2, Q3, Q4, Q5'
        ],
        correctAnswers: [1],
        explanation: 'Box Plot מציג את חמשת מספרי הקסם (Five Number Summary): מינימום (ללא חריגים), רבעון תחתון (Q1), חציון (Median/Q2), רבעון עליון (Q3), ומקסימום (ללא חריגים). ערכים חריגים (outliers) מוצגים כנקודות בודדות.',
        optionExplanations: [
          'ממוצע ושונות אינם חלק מ-Five Number Summary',
          'תשובה נכונה - Min, Q1, Median, Q3, Max',
          'אלו פונקציות אגרגציה כלליות',
          'Mode ו-Variance אינם חלק מ-Box Plot',
          'יש רק 3 רבעונים (Q1-Q3), לא 5'
        ]
      },
      {
        id: 8,
        type: 'single',
        question: 'מהו Histogram ובמה הוא שונה מ-Bar Chart?',
        options: [
          'אין הבדל - הם שמות שונים לאותו תרשים',
          'Histogram מציג התפלגות תדירויות של משתנה רציף בתוך bins, בעוד Bar Chart משווה קטגוריות נפרדות',
          'Histogram תמיד אופקי ו-Bar Chart תמיד אנכי',
          'Histogram מציג נתונים לאורך זמן ו-Bar Chart לא',
          'Histogram משתמש בצבעים ו-Bar Chart לא'
        ],
        correctAnswers: [1],
        explanation: 'Histogram מציג Frequency Distribution - כמה ערכים נופלים בכל טווח (bin) של משתנה רציף. העמודות צמודות כי הציר הוא רציף. Bar Chart משווה קטגוריות נפרדות ויש רווח בין העמודות.',
        optionExplanations: [
          'יש הבדל משמעותי בין השניים',
          'תשובה נכונה - Histogram = frequency distribution, Bar Chart = item comparison',
          'שניהם יכולים להיות אופקיים או אנכיים',
          'Histogram לא בהכרח קשור לזמן',
          'שניהם יכולים להשתמש בצבעים'
        ]
      },
      {
        id: 9,
        type: 'multiple',
        question: 'אילו מהכללים הבאים נכונים לגבי שימוש ב-Pie Chart?',
        options: [
          'יש להגביל ל-6 פלחים (segments) לכל היותר',
          'יש לסדר את הפלחים מהגדול לקטן',
          'מותר להוסיף אפקט 3D לרושם יותר מרשים',
          'יש לוודא שהרכיבים מסתכמים ל-100%',
          'יש להוסיף תוויות עם ערכים מספריים לפלחים'
        ],
        correctAnswers: [0, 1, 3, 4],
        explanation: 'כללים ל-Pie Chart: (1) לא יותר מ-6 segments, (2) סידור מגדול לקטן, (3) אין אפקט 3D - זה מעוות את הנתונים, (4) הסכום חייב להיות 100%, (5) הוספת תוויות עם ערכים מספריים.',
        optionExplanations: [
          'נכון - יותר מ-6 פלחים מקשה על הקריאה',
          'נכון - סידור לפי גודל מקל על ההשוואה',
          'לא נכון - 3D מעוות את הפרופורציות וגורם להטעיה',
          'נכון - Pie Chart חייב להסתכם ל-100%',
          'נכון - תוויות עוזרות לקריאת הערכים המדויקים'
        ]
      },
      {
        id: 10,
        type: 'single',
        question: 'מה מבדיל בין Heatmap ל-Highlight Table?',
        options: [
          'אין הבדל',
          'ב-Highlight Table הערך המספרי עצמו מוצג בתוך התא, בנוסף לקידוד הצבע',
          'Heatmap תמיד גדול יותר',
          'Highlight Table לא משתמש בצבעים',
          'Heatmap מציג רק נתונים גיאוגרפיים'
        ],
        correctAnswers: [1],
        explanation: 'Highlight Table הוא "בן-דוד" של Heatmap - ההבדל העיקרי הוא שב-Highlight Table הערך המספרי עצמו מוצג בתוך כל תא בנוסף לקידוד הצבע, מה שמאפשר קריאת ערכים מדויקים.',
        optionExplanations: [
          'יש הבדל ברור',
          'תשובה נכונה - Highlight Table מוסיף את הערך המספרי בתוך התא',
          'הגודל אינו גורם מבחין',
          'גם Highlight Table משתמש בצבעים',
          'Heatmap אינו מוגבל לנתונים גיאוגרפיים'
        ]
      },
      {
        id: 11,
        type: 'single',
        question: 'Area Chart הוא למעשה:',
        options: [
          'סוג של Pie Chart',
          'סוג של Scatterplot עם שטח צבוע',
          'Line Chart עם השטח שמתחת לקו צבוע - והוא Stacked',
          'Bar Chart עם עמודות רחבות במיוחד',
          'Heatmap עם צבעים רציפים'
        ],
        correctAnswers: [2],
        explanation: 'Area Chart הוא בעצם Line Chart שהשטח שמתחתיו צבוע. חשוב לציין שהוא Stacked - כלומר השטחים נערמים זה על זה. הוא מתאים להמחשת מגמות (trend) כשרוצים לראות את הסכום הכולל.',
        optionExplanations: [
          'לא קשור ל-Pie Chart',
          'לא מבוסס על Scatterplot',
          'תשובה נכונה - Line Chart + שטח צבוע, stacked',
          'לא קשור ל-Bar Chart',
          'לא קשור ל-Heatmap'
        ]
      },
      {
        id: 12,
        type: 'single',
        question: 'מהו Gantt Chart ולמה הוא משמש?',
        options: [
          'תרשים להצגת קורלציה בין משתנים',
          'תרשים להמחשת לוחות זמנים ומשך זמן של משימות',
          'תרשים להצגת חלוקת תקציב',
          'תרשים להצגת היררכיות',
          'תרשים להצגת התפלגויות סטטיסטיות'
        ],
        correctAnswers: [1],
        explanation: 'Gantt Chart משמש לניהול לוח זמנים (scheduling) ולהמחשת משכי זמן. כל פס מייצג משימה, האורך מייצג את משך הזמן, והמיקום על ציר הזמן מראה מתי.',
        optionExplanations: [
          'קורלציה מוצגת ב-Scatterplot',
          'תשובה נכונה - Gantt Chart להמחשת לוחות זמנים ומשכים',
          'חלוקת תקציב מוצגת ב-Pie Chart או Bar Chart',
          'היררכיות מוצגות ב-Treemap או Node-Link Diagram',
          'התפלגויות מוצגות ב-Histogram או Box Plot'
        ]
      },
      {
        id: 13,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. Donut Chart הוא פופולרי מאוד ב-Dashboards ומתפקד כמו Pie Chart עם חלל במרכז.\nב. מחקרים הראו שב-Pie Chart, השפעת השטח (Area) על תפיסת הגודל חזקה יותר מהשפעת הזווית (Angle).',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'א׳ נכונה, ב׳ שנויה במחלוקת'
        ],
        correctAnswers: [2],
        explanation: 'א׳ נכונה - Donut Chart פופולרי ב-dashboards. ב׳ נכונה - מחקרים (Robert Kosara et al.) הראו שתפיסת שטח (Area) חזקה יותר מזווית בפרשנות Pie Chart.',
        optionExplanations: [
          'גם ב׳ נכונה',
          'גם א׳ נכונה',
          'תשובה נכונה - שתי הטענות נכונות',
          'שתיהן נכונות',
          'ב׳ נתמכת במחקרים'
        ]
      },
      {
        id: 14,
        type: 'single',
        question: 'למה משמש Treemap?',
        options: [
          'הצגת Time Series',
          'הצגת מבנה היררכי בעזרת מלבנים מקוננים, כאשר גודל המלבן מייצג ערך',
          'הצגת קורלציה בין עצים ביער',
          'הצגת מיקומים על מפה',
          'הצגת גרף רשתי (Network Graph)'
        ],
        correctAnswers: [1],
        explanation: 'Treemap מציג מבנה היררכי כ-2D Layout של מלבנים מקוננים. גודל כל מלבן מייצג ערך כמותי (כמו גודל קובץ). זוהי שיטת Space-Filling לתצוגת עצים.',
        optionExplanations: [
          'Time Series מוצג ב-Line Chart',
          'תשובה נכונה - היררכיה עם מלבנים מקוננים',
          'לא קשור לעצים פיזיים',
          'מפות גיאוגרפיות הן סוג אחר',
          'רשתות מוצגות בגרפים של צמתים וקשתות'
        ]
      },
      {
        id: 15,
        type: 'single',
        question: 'מה נכון לגבי כללי תיוג (Labels) ואגדות (Legends) בגרפים?',
        options: [
          'לא חייבים תוויות כי הגרף מדבר בעד עצמו',
          'יש לתייג צירים עם יחידות מתאימות, להציג סימני ציר (tick marks), ולפרש צבעים באמצעות אגדה',
          'יש להוסיף כמה שיותר סימני ציר (tick marks)',
          'אגדה (Legend) לא נחוצה אם יש רק צבע אחד',
          'יש למקם את האגדה תמיד בפינה הימנית העליונה'
        ],
        correctAnswers: [1],
        explanation: 'כללי Labels: (1) תיוג צירים עם יחידות, (2) סימני ציר (tick marks) מתאימים - לא יותר מדי ולא פחות מדי, (3) טווח נתונים הגיוני, (4) אגדת צבעים (color bar), (5) רווחי grid הגיוניים.',
        optionExplanations: [
          'חובה לתת למשתמש כלים לפרשנות',
          'תשובה נכונה - תיוג צירים, tick marks, ואגדת צבעים',
          'סימני ציר מוגזמים מסיחים את הדעת (excessive)',
          'גם עם צבע אחד חשוב לתאר מה מיוצג',
          'מיקום האגדה צריך להיות נוח אך אין כלל קשיח'
        ]
      },
      {
        id: 16,
        type: 'single',
        question: 'מהו Small Multiples?',
        options: [
          'גרף קטן שמוצג בפינת המסך',
          'סדרת גרפים בגודל תמונה ממוזערת, כולם באותם מדדים וסקאלה, המציגים טווח אפשרויות של תופעה אחת ומזמינים השוואה',
          'שיטה להקטנת גרפים גדולים',
          'שם אחר ל-Dashboard',
          'טכניקה להקטנת מערך הנתונים'
        ],
        correctAnswers: [1],
        explanation: 'Small Multiples הוא סדרת גרפים קטנים (thumbnail-sized) המציגים אותם מדדים ואותה סקאלה. המטרה: להראות טווח חלופות ולזמן השוואה. חשוב: סדר הגיוני, אותם מדדים/סקאלות, פשטות.',
        optionExplanations: [
          'לא מדובר בגרף בודד אלא בסדרה',
          'תשובה נכונה - סדרת גרפים אחידים להשוואה',
          'לא מדובר בהקטנה אלא בסדרה מרובה',
          'Dashboard יכול להכיל Small Multiples אך הם דברים שונים',
          'Small Multiples הוא שיטת תצוגה, לא עיבוד נתונים'
        ]
      },
      {
        id: 17,
        type: 'single',
        question: 'מהו Bubble Plot?',
        options: [
          'גרף שמציג בועות מים',
          'Scatterplot שבו גודל הנקודה (בועה) מייצג משתנה שלישי, ולפעמים גם הצבע מייצג משתנה נוסף',
          'Pie Chart שבו הפלחים הם עיגולים',
          'גרף רשתי שבו הצמתים הם בועות',
          'גרף שמציג נתוני אינפלציה'
        ],
        correctAnswers: [1],
        explanation: 'Bubble Plot הוא הרחבה של Scatterplot: מיקום X ו-Y מייצגים שני משתנים, גודל הבועה מייצג משתנה שלישי, ולפעמים הצבע מייצג משתנה רביעי. כך ניתן להציג 3-4 ממדים בגרף דו-ממדי.',
        optionExplanations: [
          'לא קשור לבועות מים',
          'תשובה נכונה - Scatterplot עם ממד שלישי בגודל הנקודה',
          'לא קשור ל-Pie Chart',
          'גרפים רשתיים הם סוג אחר',
          'לא קשור לאינפלציה'
        ]
      },
      {
        id: 18,
        type: 'single',
        question: 'כשרוצים לכתוב את ה-Message בכותרת הגרף, מה נכון?',
        options: [
          'הכותרת צריכה להיות תיאור טכני של סוג הגרף',
          'הכותרת צריכה לספר את המסר העיקרי שהגרף מעביר',
          'לא צריך כותרת בכלל',
          'הכותרת צריכה לכלול את שם הכלי שיצר את הגרף',
          'הכותרת צריכה להכיל את כל הנתונים של הגרף'
        ],
        correctAnswers: [1],
        explanation: 'לפי עקרונות Drawing Simple Charts, יש לכתוב את המסר (Message) בכותרת הגרף. למשל: "המערב מהווה כמחצית מהרווחים" ולא "גרף עוגה של רווחים".',
        optionExplanations: [
          'תיאור טכני אינו מסר',
          'תשובה נכונה - הכותרת מעבירה את המסר המרכזי',
          'כותרת חיונית להבנת הגרף',
          'שם הכלי אינו רלוונטי למתבונן',
          'לא ניתן לכלול את כל הנתונים בכותרת'
        ]
      },
      {
        id: 19,
        type: 'single',
        question: 'מתי עדיף להשתמש ב-Line Chart על פני Column Chart להצגת Time Series?',
        options: [
          'תמיד עדיף Line Chart',
          'כשיש הרבה נקודות זמן ורוצים להדגיש את המגמה הרציפה, Line Chart עדיף',
          'רק כשהנתונים שליליים',
          'רק כשיש קטגוריה אחת',
          'כשהנתונים מאוד מפוזרים'
        ],
        correctAnswers: [1],
        explanation: 'Line Chart עדיף על Column Chart ל-Time Series כשיש הרבה נקודות זמן ורוצים להדגיש את המגמה (trend) הרציפה. Column Chart מתאים יותר כשיש מעט נקודות זמן.',
        optionExplanations: [
          'לא תמיד - Column Chart מתאים למעט נקודות',
          'תשובה נכונה - Line Chart מדגיש מגמה רציפה',
          'הסימן של הנתונים אינו הקריטריון',
          'Line Chart יכול להציג מספר קטגוריות',
          'פיזור אינו הקריטריון'
        ]
      },
      {
        id: 20,
        type: 'statement',
        question: 'בחנו את שתי הטענות הבאות:\nא. Focus, Balance ו-Simplicity הם עקרונות חשובים באסתטיקה של ויזואליזציה.\nב. לפי אלברט איינשטיין (כפי שצוטט בקורס): "הכל צריך להיות פשוט ככל האפשר, אך לא פשוט מדי".',
        options: [
          'רק א׳ נכונה',
          'רק ב׳ נכונה',
          'שתיהן נכונות',
          'שתיהן שגויות',
          'א׳ נכונה, ב׳ לא צוטטה בקורס'
        ],
        correctAnswers: [2],
        explanation: 'שתיהן נכונות. עקרונות אסתטיקה בויזואליזציה: Focus (הפנה את תשומת הלב לחשוב), Balance (שימוש יעיל בשטח), Simplicity (לא יותר מדי מידע). והציטוט של איינשטיין אכן מופיע בחומר.',
        optionExplanations: [
          'גם ב׳ נכונה',
          'גם א׳ נכונה',
          'תשובה נכונה - שתי הטענות מדויקות',
          'שתיהן נכונות',
          'הציטוט אכן מופיע בחומר הקורס'
        ]
      }
    ]
  },
  {
    id: 'exam-3',
    title: 'מבחן תרגול ג׳',
    subtitle: 'נתוני זמן, נתונים רב-ממדיים ואינטראקציה',
    icon: 'Clock',
    color: '#F59E0B',
    questions: [
      { id: 1, type: 'single', question: 'מהו Time Series בויזואליזציה?', options: ['סדרה של צבעים', 'רצף אירועים/תצפיות המסודרים בממד אחד – זמן', 'רשימת משימות', 'גרף עוגה עם ציר זמן', 'מערך נתונים כלשהו'], correctAnswers: [1], explanation: 'Time Series הוא רצף של אירועים או תצפיות הממוינים לפי ממד הזמן. הנתונים יכולים להיות רציפים או בדידים (discrete).', optionExplanations: ['לא קשור לצבעים', 'תשובה נכונה - רצף אירועים מסודר בזמן', 'רשימת משימות אינה Time Series', 'Pie Chart לא מתאים ל-Time Series', 'לא כל מערך נתונים הוא Time Series'] },
      { id: 2, type: 'multiple', question: 'מהם המטרות העיקריות של ויזואליזציית Time Series? (סמנו הכל)', options: ['זיהוי אופי התופעה', 'חיזוי ערכים עתידיים (Forecasting)', 'זיהוי דפוסים: מגמות (Trends) ועונתיות (Seasonality)', 'יצירת תמונות יפות', 'הבחנה בין דפוסים שיטתיים לרעש אקראי'], correctAnswers: [0, 1, 2, 4], explanation: 'מטרות Time Series: זיהוי אופי התופעה, חיזוי (forecasting), זיהוי דפוסים (trends, seasonality), והבחנה בין דפוסים שיטתיים לרעש.', optionExplanations: ['נכון', 'נכון', 'נכון', 'לא - זו לא מטרת ויזואליזציה', 'נכון'] },
      { id: 3, type: 'single', question: 'מהו ThemeRiver (Streamgraph)?', options: ['גרף שמציג נהרות על מפה', 'ויזואליזציה שמציגה שינויים בנושאים לאורך זמן, כאשר רוחב הזרם מייצג את עוצמת הנושא', 'גרף קווי רגיל', 'סוג של Pie Chart', 'תרשים גנט'], correctAnswers: [1], explanation: 'ThemeRiver (Streamgraph) מציג שינויים בנושאים/ערכים לאורך זמן. רוחב כל "זרם" מייצג את עוצמת הנושא. נקרא גם Streamgraph. דוגמה קלאסית: שמות תינוקות לאורך השנים.', optionExplanations: ['לא קשור לנהרות פיזיים', 'תשובה נכונה', 'לא Line Chart רגיל', 'לא Pie Chart', 'לא Gantt Chart'] },
      { id: 4, type: 'single', question: 'מהו המנטרה של Shneiderman?', options: ['Data first, design later', 'Overview first, zoom and filter, then details on demand', 'Keep it simple, stupid', 'Form follows function', 'Less is more'], correctAnswers: [1], explanation: 'המנטרה של Ben Shneiderman: "Overview first, zoom and filter, then details on demand" - תחילה סקירה כללית, אחר כך זום וסינון, ולבסוף פרטים לפי דרישה.', optionExplanations: ['לא זו המנטרה', 'תשובה נכונה - Overview first, zoom and filter, then details on demand', 'זהו עיקרון עיצובי כללי, לא של Shneiderman', 'עיקרון אדריכלי', 'עיקרון של Mies van der Rohe'] },
      { id: 5, type: 'single', question: 'מהם Parallel Coordinates?', options: ['קואורדינטות של קווים מקבילים על מפה', 'שיטה להצגת נתונים רב-ממדיים שבה כל ממד מוצג כציר אנכי מקביל, וכל נקודת נתונים היא קו שחוצה את כל הצירים', 'גרף עם שני צירי Y מקבילים', 'שיטה להצגת נתונים בינאריים', 'סוג של Bar Chart עם עמודות מקבילות'], correctAnswers: [1], explanation: 'Parallel Coordinates מציג נתונים רב-ממדיים (multivariate). כל ממד הוא ציר אנכי מקביל. כל פריט נתונים מיוצג כקו (polyline) שחוצה את כל הצירים.', optionExplanations: ['לא קשור למפות', 'תשובה נכונה', 'Dual Axis הוא דבר אחר', 'לא מוגבל לנתונים בינאריים', 'לא Bar Chart'] },
      { id: 6, type: 'single', question: 'מהם Chernoff Faces?', options: ['שיטה לזיהוי פנים במחשב', 'Glyphs שמשתמשים בפנים אנושיות שבהם כל פרמטר של הפנים (גודל עין, שיפוע גבה, פה וכו\') מייצג ממד בנתונים', 'אלגוריתם לציור פנים', 'שיטה לזיהוי רגשות בויזואליזציה', 'סוג של Emoji בגרפים'], correctAnswers: [1], explanation: 'Chernoff Faces הם Glyphs שמשתמשים בתכונות פנים אנושיות כדי להציג נתונים רב-ממדיים. 10 פרמטרים כמו: Head Eccentricity, Eye Size, Pupil Size, Eyebrow Slope, Nose Size, Mouth Width ועוד.', optionExplanations: ['לא זיהוי פנים', 'תשובה נכונה', 'לא אלגוריתם ציור', 'לא זיהוי רגשות', 'לא Emoji'] },
      { id: 7, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Spirals מתאימים להצגת נתונים מחזוריים (periodic/cyclic data) כי כל לולאה מייצגת מחזור אחד.\nב. Sankey Diagram משמש להצגת זרימות (flows) בין נקודות, כאשר עובי הקו מייצג את נפח הזרימה.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'רק ב׳ נכונה חלקית'], correctAnswers: [2], explanation: 'שתיהן נכונות. Spirals מתאימים לנתונים מחזוריים - כל loop = מחזור אחד. Sankey Diagram מציג זרימות, כאשר עובי הקו מייצג את נפח/כמות הזרימה.', optionExplanations: ['גם ב׳ נכונה', 'גם א׳ נכונה', 'תשובה נכונה', 'שתיהן נכונות', 'ב׳ נכונה לחלוטין'] },
      { id: 8, type: 'single', question: 'מהי Radar Chart (Spider Chart) ומתי משתמשים בה?', options: ['תרשים שמציג נתונים של מכמ"ש (מכ"ם)', 'תרשים רדיאלי עם צירים מרובים, מתאים כשהנתונים דורשים סקאלות כמותיות שונות, או כשרוצים להעריך סימטריה', 'תרשים עגול שמציג רק אחוזים', 'סוג של Pie Chart עם קווים', 'תרשים שמתאים רק לנתונים גיאוגרפיים'], correctAnswers: [1], explanation: 'Radar Chart היא תרשים רדיאלי עם צירים מרובים. שימושים: (1) נתונים שדורשים סקאלות שונות, (2) הערכת סימטריה, (3) נתונים שהם מעגליים מטבעם. אזהרה: לא קלים לתפיסה ב"מבט ראשון".', optionExplanations: ['לא קשור למכ"ם', 'תשובה נכונה', 'לא מוגבל לאחוזים', 'לא Pie Chart', 'לא רק לגיאוגרפיה'] },
      { id: 9, type: 'multiple', question: 'אילו מהבאים הם Interaction Operators לפי Daniel Keim?', options: ['Navigation (ניווט)', 'Selection (בחירה)', 'Filtering (סינון)', 'Compilation (הידור)', 'Reconfiguring (ארגון מחדש)'], correctAnswers: [0, 1, 2, 4], explanation: 'Interaction Operators של Keim: Navigation, Selection, Filtering, Reconfiguring, Encoding, Connection, Abstraction/Elaboration. Compilation אינו Interaction Operator.', optionExplanations: ['נכון - Pan, Zoom, Rotate', 'נכון - Click, Paint, Lasso', 'נכון - הפחתת נפח נתונים', 'לא נכון - Compilation הוא מונח מתכנות', 'נכון - ארגון מחדש של הנתונים'] },
      { id: 10, type: 'single', question: 'מהו Linking and Brushing?', options: ['שיטה לציור קווים בגרף', 'Linking מראה כיצד נקודה מתנהגת בכל אחד מהגרפים, ו-Brushing מאפשר בחירת תת-קבוצת נתונים, יחד הם מאפשרים הבנה בין תצוגות מרובות', 'שיטה למחיקת נתונים', 'טכניקה לשינוי צבעים', 'כלי לייצוא גרפים'], correctAnswers: [1], explanation: 'Linking: הצגת איך נקודה/קבוצת נקודות מתנהגת בכל אחד מהגרפים (קישור). Brushing: בחירת תת-קבוצת נתונים באמצעות מכשיר קלט. יחד, הם כלים פשוטים אך חזקים להבנה בין multiple views.', optionExplanations: ['לא ציור קווים', 'תשובה נכונה', 'לא מחיקה', 'לא שינוי צבעים', 'לא ייצוא'] },
      { id: 11, type: 'single', question: 'מהו ההבדל בין Overview+Detail ל-Focus+Context?', options: ['אין הבדל', 'Overview+Detail מציג שתי תצוגות נפרדות, Focus+Context מציג הכל בתצוגה אחת עם עיוות', 'Overview+Detail הוא לנתונים גדולים בלבד', 'Focus+Context עובד רק בתלת-ממד', 'Overview+Detail תמיד אינטראקטיבי ו-Focus+Context סטטי'], correctAnswers: [1], explanation: 'Overview+Detail: שתי תצוגות נפרדות - אחת לסקירה ואחת לפרטים. חסרון: הצופה צריך להעביר מבט. Focus+Context: תצוגה אחת עם אזור מוגדל (focus) והיקף (context) - עשוי לכלול עיוות.', optionExplanations: ['יש הבדל ברור', 'תשובה נכונה', 'שניהם מתאימים לנתונים בגדלים שונים', 'Focus+Context עובד גם ב-2D', 'שניהם יכולים להיות אינטראקטיביים'] },
      { id: 12, type: 'single', question: 'מהו Fisheye View?', options: ['מסנן שמעוות תמונות', 'טכניקת Focus+Context שמגדילה אזור מסוים תוך שמירה על ההקשר מסביב בצורה מוקטנת', 'זום רגיל', 'סוג של Pie Chart', 'מצלמה מיוחדת לצילום דגים'], correctAnswers: [1], explanation: 'Fisheye View היא טכניקת Focus+Context שבה אזור הפוקוס מוגדל ושאר התצוגה נשמרת בצורה מוקטנת. מאפשרת לראות פרטים תוך שמירה על הקשר. דוגמה קלאסית: Fisheye Menu.', optionExplanations: ['לא מסנן תמונות', 'תשובה נכונה', 'לא זום רגיל - הוא שומר הקשר', 'לא Pie Chart', 'לא מצלמה'] },
      { id: 13, type: 'single', question: 'מהו MDS (Multidimensional Scaling)?', options: ['שיטה להגדלת ממדי הנתונים', 'שיטה שמייצגת מדידות דמיון/שוני בין זוגות אובייקטים כמרחקים בין נקודות במרחב דו-ממדי', 'סוג של Bar Chart', 'טכניקת אינטראקציה', 'שיטה להצפנת נתונים'], correctAnswers: [1], explanation: 'MDS (Multidimensional Scaling) מייצג דמיון/שוני בין זוגות אובייקטים כמרחקים במרחב נמוך-ממדי (בדרך כלל 2D). דוגמה קלאסית: מטריצת מרחקים בין ערים → מפה דו-ממדית. נחשב לכלי exploratory.', optionExplanations: ['ההפך - MDS מקטין ממדים', 'תשובה נכונה', 'לא Bar Chart', 'לא טכניקת אינטראקציה', 'לא הצפנה'] },
      { id: 14, type: 'single', question: 'מהו Semantic Zooming?', options: ['זום שמשנה את משמעות הנתונים', 'זום שבו רמת הפירוט המוצגת משתנה בהתאם לרמת הזום, לא רק הגודל הגיאומטרי', 'זום רגיל עם אנימציה', 'זום שעובד רק עם טקסט', 'זום שעובד רק עם תמונות'], correctAnswers: [1], explanation: 'Semantic Zooming: כשמתקרבים, לא רק הגודל משתנה אלא גם סוג המידע המוצג. למשל: בזום רחוק רואים נקודות, בזום קרוב רואים תוויות ופרטים. זאת בניגוד ל-Geometric Zooming שרק מגדיל.', optionExplanations: ['לא משנה משמעות', 'תשובה נכונה', 'לא רק אנימציה', 'לא רק לטקסט', 'לא רק לתמונות'] },
      { id: 15, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Perspective Wall היא גרסה של Bifocal Display שעובדת טוב עם זמן על ציר ה-X.\nב. Animated Transitions יעילות רק כשכמות השינוי מינימלית.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'שתיהן נכונות חלקית'], correctAnswers: [2], explanation: 'שתיהן נכונות. Perspective Wall היא גרסה של Bifocal Display שעובדת היטב עם ציר זמן. Animated Transitions יעילות כשכמות השינוי מינימלית - מחקר (Heer & Robertson, 2007) הראה שהן משפרות תפיסה גרפית.', optionExplanations: ['גם ב׳ נכונה', 'גם א׳ נכונה', 'תשובה נכונה', 'שתיהן נכונות', 'שתיהן נכונות לחלוטין'] },
      { id: 16, type: 'single', question: 'מהו Glyph בויזואליזציה?', options: ['סוג של פונט', 'ייצוג ויזואלי של פיסת מידע שבו ישות גרפית ותכונותיה נשלטות על ידי תכונות הנתונים', 'סמל מיוחד בכתב עתיק', 'סוג של גרף', 'כלי עריכת תמונות'], correctAnswers: [1], explanation: 'Glyph הוא ייצוג ויזואלי שבו ישות גרפית ותכונותיה (צבע, גודל, צורה) נשלטות על ידי תכונות הנתונים. מיפוי: One-to-One, One-to-Many, או Many-to-Many. דוגמאות: Star Glyphs, Chernoff Faces.', optionExplanations: ['לא פונט', 'תשובה נכונה', 'לא כתב עתיק', 'Glyph הוא רכיב בתוך גרף', 'לא כלי עריכה'] },
      { id: 17, type: 'single', question: 'מה מייחד את Lifelines כויזואליזציה?', options: ['היא מציגה קווי חיים של אנשים מפורסמים', 'היא מציגה רצף כרונולוגי של אירועים בחיי אדם (כמו היסטוריה רפואית), עם צבעים שונים לסוגי אירועים ועובי קו משתנה', 'היא סוג של Line Chart', 'היא מציגה תוחלת חיים', 'היא עובדת רק עם נתונים רפואיים'], correctAnswers: [1], explanation: 'Lifelines: ויזואליזציה כרונולוגית של אירועים בחיי אדם. תכונות: צבעים שונים לסוגי אירועים, עובי קו משתנה, אינטראקציה (לחיצה לפרטים). יתרונות: מציגה facets מרובים, מפחיתה החמצת מידע.', optionExplanations: ['לא רק מפורסמים', 'תשובה נכונה', 'יותר מ-Line Chart רגיל', 'לא תוחלת חיים', 'מתאימה לתחומים רבים - רפואה, חינוך, פלילי'] },
      { id: 18, type: 'single', question: 'מהו RadViz?', options: ['תוכנת ויזואליזציה', 'שיטה מבוססת כוח (Force-Based) להצגת נתונים רב-ממדיים, שבה הממדים מסודרים במעגל ונקודות הנתונים מופנות לפי ערכיהן בכל ממד', 'רדיו ויזואלי', 'סוג של Radar Chart', 'כלי לעריכת וידאו'], correctAnswers: [1], explanation: 'RadViz היא שיטת Force-Based להצגת נתונים רב-ממדיים. הממדים מסודרים בהיקף מעגל, וכל נקודת נתונים ממוקמת לפי "משיכה" של ערכיה בכל ממד. סידור הממדים משפיע על התוצאה.', optionExplanations: ['לא תוכנה ספציפית', 'תשובה נכונה', 'לא רדיו', 'דומה אך שונה מ-Radar Chart', 'לא עריכת וידאו'] },
      { id: 19, type: 'single', question: 'מה ההבדל בין Geometric Zooming ל-Semantic Zooming?', options: ['אין הבדל', 'Geometric רק מגדיל את הגודל, Semantic משנה את סוג/רמת הפירוט המוצגת', 'Geometric עובד רק ב-3D', 'Semantic עובד רק עם מפות', 'Geometric יקר יותר חישובית'], correctAnswers: [1], explanation: 'Geometric Zooming: רק מגדיל/מקטין - כמו זכוכית מגדלת. Semantic Zooming: ברמות זום שונות מוצג מידע שונה - למשל, ברמה גבוהה רואים מדינות, בזום רואים ערים, בזום עמוק רואים רחובות.', optionExplanations: ['יש הבדל מהותי', 'תשובה נכונה', 'שניהם עובדים ב-2D וב-3D', 'Semantic אינו מוגבל למפות', 'לאו דווקא'] },
      { id: 20, type: 'single', question: 'מהו Dashboard בהקשר של ויזואליזציה?', options: ['לוח מחוונים ברכב', 'תצוגה שמשלבת מספר ויזואליזציות שונות יחד, בדרך כלל מקושרות (linked), המספקות סקירה כוללת של הנתונים', 'סוג של גרף בודד', 'כלי לעריכת נתונים', 'דף HTML פשוט'], correctAnswers: [1], explanation: 'Dashboard משלב מספר ויזואליזציות שונות בתצוגה אחת, בדרך כלל עם linking ביניהן. מספק סקירה כוללת ומאפשר ניטור. Donut Charts פופולריים ב-dashboards.', optionExplanations: ['לא לוח מחוונים ברכב (אם כי השם לקוח משם)', 'תשובה נכונה', 'Dashboard כולל מספר ויזואליזציות', 'לא כלי עריכה', 'יותר מ-HTML פשוט'] }
    ]
  },
  {
    id: 'exam-4',
    title: 'מבחן תרגול ד׳',
    subtitle: 'גרפים, עצים, רשתות וויזואליזציה מרחבית',
    icon: 'Network',
    color: '#10B981',
    questions: [
      { id: 1, type: 'single', question: 'מהו ההבדל בין Graph ל-Tree?', options: ['אין הבדל', 'Tree הוא גרף קשיר ללא מעגלים (cycles), לרוב עם שורש וכיוון', 'Graph תמיד קטן מ-Tree', 'Tree תמיד לא מכוון', 'Graph לא יכול להיות מכוון'], correctAnswers: [1], explanation: 'Tree הוא מקרה פרטי של Graph: גרף קשיר (connected) ללא מעגלים (no cycles). בדרך כלל יש לו שורש (root) והוא מכוון (directed) - צמתים הם הורים או ילדים.', optionExplanations: ['יש הבדל', 'תשובה נכונה', 'לא קשור לגודל', 'Tree בדרך כלל מכוון', 'Graph יכול להיות מכוון או לא'] },
      { id: 2, type: 'single', question: 'מהו Treemap ומהי שיטת Space-Filling?', options: ['תרשים שמציג עצים ביער', 'שיטה שממלאת את כל שטח התצוגה בייצוג של מבנה היררכי - מלבנים מקוננים שגודלם מייצג ערך', 'גרף שמציג מפה', 'שיטה לציור עצים עם ענפים', 'טכניקת אנימציה'], correctAnswers: [1], explanation: 'Treemap היא שיטת Space-Filling שממלאה את כל שטח התצוגה. היררכיה מוצגת כמלבנים מקוננים. גודל כל מלבן מייצג ערך כמותי. זו גישה חלופית ל-Node-Link Diagram.', optionExplanations: ['לא עצים ביער', 'תשובה נכונה', 'לא מפה גיאוגרפית', 'Node-Link הוא "ציור עם ענפים"', 'לא אנימציה'] },
      { id: 3, type: 'single', question: 'מהו Sunburst Display?', options: ['תרשים שמציג שקיעות', 'שיטת Space-Filling רדיאלית להצגת היררכיות, שבה כל טבעת מייצגת רמה בהיררכיה', 'סוג של Pie Chart', 'גרף שמציג קרינת שמש', 'סוג של Line Chart עגול'], correctAnswers: [1], explanation: 'Sunburst Display היא שיטת Space-Filling רדיאלית. השורש במרכז, כל טבעת מייצגת רמה נוספת בהיררכיה. מאפשרת ניווט ומניפולציה של מבנים היררכיים.', optionExplanations: ['לא שקיעות', 'תשובה נכונה', 'דומה אך שונה מ-Pie Chart', 'לא קרינת שמש', 'לא Line Chart'] },
      { id: 4, type: 'multiple', question: 'מהם האתגרים העיקריים בויזואליזציית גרפים/רשתות?', options: ['מיקום צמתים ללא חפיפה', 'עומס (clutter) של קשתות', 'תיוג (Labeling)', 'בחירת צבע הרקע', 'סקאלה (Scale) - גודל הרשת'], correctAnswers: [0, 1, 2, 4], explanation: 'אתגרים בויזואליזציית גרפים: (1) מיקום צמתים ללא חפיפה, (2) עומס קשתות (clutter), (3) תיוג, (4) ניווט/אינטראקציה, (5) סקאלה. צבע הרקע אינו אתגר ספציפי לגרפים.', optionExplanations: ['נכון', 'נכון', 'נכון', 'לא נכון - צבע רקע אינו אתגר ייחודי', 'נכון'] },
      { id: 5, type: 'single', question: 'מהם כללי Shneiderman לויזואליזציית גרפים?', options: ['להשתמש רק בצבעים בהירים', 'כל צומת צריך להיות נראה, ניתן לספור את הדרגה שלו, כל קשת ניתנת למעקב, וניתן לזהות אשכולות וחריגים', 'להציג לכל היותר 10 צמתים', 'להשתמש רק ב-Force-Directed Layout', 'להימנע מתיוג צמתים'], correctAnswers: [1], explanation: 'כללי Shneiderman: (1) כל צומת צריך להיות נראה, (2) לכל צומת ניתן לספור את הדרגה (degree), (3) לכל קשת ניתן לעקוב ממקור ליעד, (4) ניתן לזהות אשכולות (clusters) וחריגים (outliers).', optionExplanations: ['לא קשור לצבעים', 'תשובה נכונה', 'אין הגבלה כזו', 'Shneiderman לא מגביל לסוג layout', 'תיוג חשוב'] },
      { id: 6, type: 'single', question: 'מהו Force-Directed Graph Layout?', options: ['גרף שמציג כוחות פיזיקליים', 'אלגוריתם layout שבו קשתות מתנהגות כקפיצים (משיכה) וצמתים כחלקיקים טעונים (דחייה), כשהמערכת מחפשת מינימום אנרגיה', 'גרף שבו כל הצמתים בשורה', 'סוג של Treemap', 'אלגוריתם למיון נתונים'], correctAnswers: [1], explanation: 'Force-Directed Layout: קשתות = קפיצים (כוח משיכה), צמתים = חלקיקים טעונים (כוח דחייה). האלגוריתם מחפש מינימום אנרגיה מקומי. המטרה: קשתות קצרות, מינימום חפיפות.', optionExplanations: ['לא כוחות פיזיקליים אמיתיים', 'תשובה נכונה', 'לא בשורה', 'לא Treemap', 'לא מיון'] },
      { id: 7, type: 'single', question: 'מהו Adjacency Matrix לייצוג גרף?', options: ['מטריצה שמציגה מרחקים בין ערים', 'ייצוג גרף כמטריצה שבה שורות ועמודות מייצגות צמתים, ותאים מסומנים מציינים קשת בין הצמתים המתאימים', 'טבלת Excel רגילה', 'סוג של Heatmap', 'מטריצה שמייצגת צבעים'], correctAnswers: [1], explanation: 'Adjacency Matrix: שורות ועמודות = צמתים. תא (i,j) מסומן אם יש קשת בין צומת i לצומת j. סדר הצמתים משפיע מאוד על הקריאות. חלופה ל-Node-Link Diagram.', optionExplanations: ['MDS משתמש במטריצת מרחקים, לא Adjacency Matrix', 'תשובה נכונה', 'לא טבלת Excel', 'יכול להיראות כמו Heatmap אך הוא ייצוג גרף', 'לא צבעים'] },
      { id: 8, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Hyperbolic Tree משתמש בגיאומטריה לא-אוקלידית ומאפשר ניווט Focus+Context להיררכיות גדולות.\nב. Cone Tree הוא ייצוג תלת-ממדי של עץ.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'רק א׳ נכונה חלקית'], correctAnswers: [2], explanation: 'שתיהן נכונות. Hyperbolic Tree: גיאומטריה לא-אוקלידית, גדילה מעריכית של השטח עם גדילה ליניארית של הרדיוס, מאפשר Focus+Context. Cone Tree: ייצוג 3D של עץ עם קונוסים.', optionExplanations: ['גם ב׳ נכונה', 'גם א׳ נכונה', 'תשובה נכונה', 'שתיהן נכונות', 'א׳ נכונה לחלוטין'] },
      { id: 9, type: 'single', question: 'מהו Choropleth Map?', options: ['מפה שמציגה כבישים', 'מפה גיאוגרפית שמחלקת אזורים לפי גבולות מוגדרים ומשתמשת בגרדיאנט צבעים לייצוג ערכים בתוך כל אזור', 'מפה שמציגה גובה הרים', 'סוג של Treemap על מפה', 'מפה שמציגה מזג אוויר'], correctAnswers: [1], explanation: 'Choropleth Map: מחלקת אזורים גיאוגרפיים לפי גבולות מוגדרים (מדינות, מחוזות). צבעים מייצגים ערכים. הנתונים בדרך כלל מנורמלים (per capita). יתרון: דפוסים ומגמות. חסרון: פישוט יתר.', optionExplanations: ['לא כבישים', 'תשובה נכונה', 'מפת גובה היא topographic map', 'לא Treemap', 'לא ספציפית למזג אוויר'] },
      { id: 10, type: 'single', question: 'מהו Symbol Map?', options: ['מפה של סמלים', 'מפה גיאוגרפית שמייצגת נתונים באמצעות סמלים (עיגולים, ריבועים) שגודלם ו/או צבעם מייצגים ממד נתונים', 'מפה שמציגה אותיות', 'סוג של Pie Chart על מפה', 'מפה של דגלים'], correctAnswers: [1], explanation: 'Symbol Map: סמלים (עיגולים, ריבועים, אייקונים) ממוקמים על מפה. גודל ו/או צבע הסמל מייצגים ממד נתונים (אוכלוסייה, מכירות). יתרון: קל להבנה, גמיש. חסרון: עומס באזורים צפופים.', optionExplanations: ['לא סמלים כלליים', 'תשובה נכונה', 'לא אותיות', 'לא Pie Chart', 'לא דגלים'] },
      { id: 11, type: 'single', question: 'מהו Cartogram?', options: ['קריקטורה של מפה', 'מפה גיאוגרפית שבה שטחי האזורים מעוותים באופן יחסי לערך נתונים (כמו אוכלוסייה), במקום לשטח הגיאוגרפי האמיתי', 'מפה מדויקת', 'סוג של Bar Chart', 'מפה תלת-ממדית'], correctAnswers: [1], explanation: 'Cartogram מעוות שטחים גיאוגרפיים כך שגודל כל אזור יהיה פרופורציונלי לערך נתונים (אוכלוסייה, GDP). יתרון: פרספקטיבה חדשה. חסרון: מקשה על תפיסת יחסים גיאוגרפיים.', optionExplanations: ['לא קריקטורה', 'תשובה נכונה', 'ההפך - הוא מעוות את המפה', 'לא Bar Chart', 'לא בהכרח 3D'] },
      { id: 12, type: 'single', question: 'מהו Flow Map?', options: ['מפה שמציגה זרימת מים', 'מפה שמציגה תנועה/זרימה בין מיקומים באמצעות קווים/חצים, כאשר עובי הקו מייצג נפח הזרימה', 'סוג של Flowchart', 'גרף עמודות על מפה', 'דיאגרמת רצף'], correctAnswers: [1], explanation: 'Flow Map: קווים/חצים מחברים מקורות ויעדים על מפה. עובי הקו מייצג נפח (אנשים, סחורות, כלי רכב). שימושים: דפוסי הגירה, זרימת סחורות, תנועה. חסרון: עומס ויזואלי כשיש הרבה זרימות.', optionExplanations: ['לא רק מים', 'תשובה נכונה', 'לא Flowchart', 'לא Bar Chart', 'לא דיאגרמת רצף'] },
      { id: 13, type: 'multiple', question: 'אילו מהבאים הם Layout Aesthetics (קריטריוני אסתטיקה) בציור גרפים?', options: ['מינימום חציית קשתות (Edge crossing)', 'מינימום אורך קשתות כולל', 'מקסימום צבעים', 'אורך קשתות אחיד', 'סימטריה'], correctAnswers: [0, 1, 3, 4], explanation: 'Layout Aesthetics: (1) מינימום חציית קשתות, (2) מינימום אורך קשתות כולל, (3) מינימום שטח, (4) אורך קשתות אחיד, (5) סימטריה. מחקרים מראים שחציית קשתות חשובה במיוחד.', optionExplanations: ['נכון', 'נכון', 'לא נכון - לא קריטריון אסתטיקה', 'נכון', 'נכון'] },
      { id: 14, type: 'single', question: 'מהו Pivot Graph של Wattenberg?', options: ['גרף שמסתובב', 'שיטה לדחיסה ולהצגה מחדש של נתוני גרף, שמאגדת צמתים בעלי ערכים זהים ומאגדת קשתות בהתאם', 'סוג של Pie Chart', 'גרף שמציג נתוני Pivot Table', 'אלגוריתם מיון'], correctAnswers: [1], explanation: 'Pivot Graphs של Wattenberg: אגירת כל הצמתים עם ערכים זהים בכל ממד, ואגירת קשתות בהתאם. למשל, F=Female, M=Male, מספרים = ספירות. מאפשר ראייה מאוגדת של הרשת.', optionExplanations: ['לא מסתובב', 'תשובה נכונה', 'לא Pie Chart', 'קשור אך שונה מ-Pivot Table', 'לא מיון'] },
      { id: 15, type: 'single', question: 'מהו הסיפור של Abraham Wald מהגשר הכלכלי במלחמת העולם השנייה?', options: ['הוא המציא את ה-Choropleth Map', 'הוא הבין שצריך לחזק את האזורים שלא נפגעו בכדורים, כי המטוסים שחזרו הם אלו ששרדו (Survivorship Bias)', 'הוא פיתח את ה-Scatterplot', 'הוא עיצב מפות למודיעין', 'הוא פיתח את ה-Radar Chart'], correctAnswers: [1], explanation: 'Abraham Wald: בני הברית מיפו חורי כדורים במטוסים שחזרו ורצו לחזק את האזורים הפגועים. Wald הבין שצריך לחזק את האזורים שלא נפגעו - כי מטוסים שנפגעו שם לא חזרו (Survivorship Bias).', optionExplanations: ['לא המציא Choropleth', 'תשובה נכונה - Survivorship Bias', 'לא פיתח Scatterplot', 'לא עיצב מפות מודיעיניות', 'לא פיתח Radar Chart'] },
      { id: 16, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Choropleth Map דורש נורמליזציה של הנתונים (למשל per capita) כדי לתת תמונה מדויקת.\nב. Symbol Map יכול להפוך עמוס כשיש אזורים צפופים עם הרבה סמלים.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'א׳ נכונה חלקית'], correctAnswers: [2], explanation: 'שתיהן נכונות. Choropleth Map צריך נורמליזציה (per capita) כי אזורים גדולים יותר באופן טבעי "נראים" חשובים יותר. Symbol Map אכן עלול להיות cluttered באזורים צפופים.', optionExplanations: ['גם ב׳ נכונה', 'גם א׳ נכונה', 'תשובה נכונה', 'שתיהן נכונות', 'א׳ נכונה לחלוטין'] },
      { id: 17, type: 'single', question: 'מהו Heatmap גיאוגרפי?', options: ['מפה שמציגה טמפרטורות', 'ויזואליזציה שמציגה צפיפות או עוצמה של נתונים באמצעות גרדיאנט צבעים על מפה, מתאימה לזיהוי דפוסים, אשכולות ו-hot spots', 'מפה צבעונית', 'סוג של Choropleth', 'מפה שמציגה רק אזורים חמים'], correctAnswers: [1], explanation: 'Heatmap גיאוגרפי: גרדיאנט צבעים המייצג צפיפות/עוצמה. יתרונות: זיהוי דפוסים, אשכולות, hot spots. מתאים למערכי נתונים גדולים. חסרונות: בחירת צבעים חשובה, עלול להיות עמוס.', optionExplanations: ['לא רק טמפרטורות', 'תשובה נכונה', 'לא סתם צבעוני', 'סוג שונה מ-Choropleth', 'לא רק אזורים חמים'] },
      { id: 18, type: 'single', question: 'מהי הבעיה העיקרית עם "Hairball Graph"?', options: ['הצמתים קטנים מדי', 'רשת צפופה מדי שבה כמות הקשתות יוצרת עומס ויזואלי שמונע הבנת המבנה', 'הגרף עגול מדי', 'אין מספיק צבעים', 'הגרף איטי מדי'], correctAnswers: [1], explanation: '"Hairball Graph" מתאר גרף שבו יש כל כך הרבה קשתות שהתוצאה נראית כמו כדור שיער - אי אפשר לעקוב אחרי קשתות, לזהות מבנה, או להבין דפוסים. פתרונות: סינון, אגירה, layouts חכמים.', optionExplanations: ['לא גודל הצמתים', 'תשובה נכונה', 'לא הצורה', 'לא צבעים', 'לא מהירות'] },
      { id: 19, type: 'single', question: 'לפי מפת John Snow, מה גילה ב-1854?', options: ['דפוסי מזג אוויר', 'ריכוז של מעל 500 מקרי מוות מכולרה בלונדון סביב משאבת המים ברחוב Broad Street', 'מסלולי ספינות', 'שינויי אוכלוסייה', 'דפוסי סחר'], correctAnswers: [1], explanation: 'Dr. John Snow (רופא מרדים) סימן על מפה מעל 500 מקרי מוות מכולרה בלונדון. הוא גילה ריכוז סביב משאבת המים ב-Broad Street. זו דוגמה קלאסית לויזואליזציה שתומכת בהסקת מסקנות.', optionExplanations: ['לא מזג אוויר', 'תשובה נכונה', 'לא ספינות', 'לא אוכלוסייה', 'לא סחר'] },
      { id: 20, type: 'single', question: 'מהו Degree-of-Interest Tree?', options: ['עץ שמציג דרגות עניין', 'שיטת תצוגת עץ שבה רמת הפירוט משתנה לפי "דרגת העניין" - צמתים קרובים לנקודת המיקוד מורחבים וצמתים רחוקים מכווצים', 'עץ בינארי', 'סוג של Treemap', 'מבנה נתונים'], correctAnswers: [1], explanation: 'Degree-of-Interest Tree: שיטת Focus+Context לעצים. צמתים קרובים למיקוד מורחבים (expanded) וצמתים רחוקים מכווצים. מאפשר ניווט בהיררכיות גדולות תוך שמירה על הקשר.', optionExplanations: ['לא סתם דרגות עניין', 'תשובה נכונה', 'לא עץ בינארי', 'לא Treemap', 'שיטת תצוגה, לא מבנה נתונים'] }
    ]
  },
  {
    id: 'exam-5',
    title: 'מבחן תרגול ה׳',
    subtitle: 'ויזואליזציה מטעה, הערכה ונושאים מתקדמים',
    icon: 'AlertTriangle',
    color: '#EF4444',
    questions: [
      { id: 1, type: 'single', question: 'מהם הדרכים הנפוצות להטעיה בויזואליזציה?', options: ['שימוש בצבעים בהירים', 'Data Scrubbing, Unbalanced Scaling, Truncated Axis, Cherry Picking, ו-Double Axes', 'שימוש ב-Pie Charts', 'הוספת כותרות', 'שימוש ב-Scatterplot'], correctAnswers: [1], explanation: 'דרכים נפוצות להטעיה: Data Scrubbing (ניקוי סלקטיבי), Unbalanced Scaling (סקאלות לא מאוזנות), Truncated Axis (חיתוך ציר Y), Cherry Picking (בחירת נתונים סלקטיבית), Double Axes (שני צירי Y), ו-Perspective Distortion.', optionExplanations: ['צבעים בהירים אינם בהכרח מטעים', 'תשובה נכונה', 'Pie Charts עצמם לא מטעים', 'כותרות עוזרות, לא מטעות', 'Scatterplot אינו מטעה מטבעו'] },
      { id: 2, type: 'single', question: 'מהו Data Scrubbing בהקשר של הטעיה?', options: ['ניקוי נתונים לגיטימי', 'ניקוי סלקטיבי של נתונים כדי ליצור קורלציה מזויפת שלא קיימת בנתונים הגולמיים', 'מחיקת קבצי נתונים', 'שיטת גיבוי נתונים', 'עיבוד נתונים מהיר'], correctAnswers: [1], explanation: 'Data Scrubbing (ניקוי סלקטיבי): הסרת נקודות נתונים באופן סלקטיבי כדי ליצור דפוסים/קורלציות שלא קיימים בנתונים המקוריים. הנתונים הגולמיים לא מראים קורלציה, אבל אחרי "ניקוי" מופיעה קורלציה מזויפת.', optionExplanations: ['ניקוי לגיטימי הוא preprocessing, לא scrubbing', 'תשובה נכונה', 'לא מחיקת קבצים', 'לא גיבוי', 'לא עיבוד מהיר'] },
      { id: 3, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Correlation is not Causation - קורלציה אינה מוכיחה סיבתיות.\nב. חיתוך ציר Y (Truncated Y-Axis) תמיד אסור ולעולם לא לגיטימי.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'א׳ נכונה, ב׳ לא תמיד נכונה'], correctAnswers: [4], explanation: 'א׳ נכונה - קורלציה אינה סיבתיות. ב׳ לא תמיד נכונה - חיתוך ציר Y יכול להיות לגיטימי כשהנתונים מתרכזים בטווח צר וההבדלים חשובים. הבעיה היא כשזה נעשה כדי להטעות.', optionExplanations: ['ב׳ גם דורשת התייחסות', 'ב׳ לא תמיד נכונה', 'ב׳ לא תמיד נכונה', 'א׳ נכונה', 'תשובה נכונה'] },
      { id: 4, type: 'single', question: 'מהי Normalization ולמה היא חשובה?', options: ['שיטה למחיקת נתונים', 'תהליך טרנספורמציה של נתונים כך שיקיימו תכונה סטטיסטית מסוימת, למשל טווח 0..1, או חלוקה ליחידת זמן', 'סוג של ויזואליזציה', 'שיטת דחיסת קבצים', 'כלי לבדיקת איכות נתונים'], correctAnswers: [1], explanation: 'Normalization: טרנספורמציה של נתונים. דוגמאות: D_normalized = (D_original - D_min) / (D_max - D_min) לטווח 0..1, חלוקה ליחידת זמן, הגבלת טווח. חשוב להשוואה הוגנת.', optionExplanations: ['לא מחיקה', 'תשובה נכונה', 'לא ויזואליזציה', 'לא דחיסה', 'לא בדיקת איכות'] },
      { id: 5, type: 'single', question: 'מהו PCA (Principal Component Analysis)?', options: ['שיטה להגדלת נתונים', 'שיטה להורדת מימדיות שמוצאת את הכיוונים (Principal Components) בהם השונות בנתונים מרבית', 'סוג של גרף', 'שיטת צביעה', 'כלי ניווט'], correctAnswers: [1], explanation: 'PCA (Principal Component Analysis): שיטה להורדת מימדיות. מוצאת את הכיוונים (ציריים) שבהם השונות מרבית. מאפשרת הצגת נתונים רב-ממדיים בממדים מופחתים תוך שמירה על מרב המידע.', optionExplanations: ['ההפך - מקטין ממדים', 'תשובה נכונה', 'לא סוג גרף', 'לא צביעה', 'לא ניווט'] },
      { id: 6, type: 'multiple', question: 'אילו מהבאים הם שיטות להורדת מימדיות (Dimension Reduction)?', options: ['PCA (Principal Component Analysis)', 'MDS (Multidimensional Scaling)', 't-SNE', 'Bar Chart', 'Kohonen Self-Organizing Maps (SOMs)'], correctAnswers: [0, 1, 2, 4], explanation: 'שיטות להורדת מימדיות: PCA, MDS, t-SNE, SOMs, ובחירת הממדים החשובים ביותר. Bar Chart הוא ויזואליזציה, לא שיטת הורדת מימדיות.', optionExplanations: ['נכון', 'נכון', 'נכון', 'לא נכון - Bar Chart הוא ויזואליזציה', 'נכון'] },
      { id: 7, type: 'single', question: 'מהי בעיית Perspective Distortion בויזואליזציה מטעה?', options: ['בעיה עם מסכי LCD', 'עיוות פרספקטיבה (כמו 3D) שגורם לאובייקטים קרובים להיראות גדולים יותר מהם באמת', 'בעיה עם מדפסות', 'בעיה עם צבעים', 'בעיה עם פונטים'], correctAnswers: [1], explanation: 'Perspective Distortion: שימוש באפקט 3D/פרספקטיבה גורם לאובייקטים קרובים להיראות גדולים יותר. למשל, Pie Chart ב-3D מעוות את הפלחים - הקרובים נראים גדולים יותר.', optionExplanations: ['לא קשור למסכים', 'תשובה נכונה', 'לא מדפסות', 'לא צבעים', 'לא פונטים'] },
      { id: 8, type: 'single', question: 'מהן Missing Values ואיך מטפלים בהן?', options: ['ערכים שנמחקו בכוונה', 'ערכים חסרים בנתונים. שיטות טיפול: מחיקת הרשומה, הצבת ערך Sentinel, ממוצע, Nearest Neighbor, או חישוב תחליפי', 'שגיאות בקוד', 'ערכים מוצפנים', 'ערכים שליליים'], correctAnswers: [1], explanation: 'Missing Values: ערכים חסרים בגלל חיישן תקול, שדה ריק בסקר, או שגיאה אנושית. שיטות: (1) מחיקת הרשומה, (2) ערך Sentinel, (3) ממוצע, (4) Nearest Neighbor, (5) חישוב תחליף.', optionExplanations: ['לא בהכרח בכוונה', 'תשובה נכונה', 'לא שגיאות קוד', 'לא הצפנה', 'לא ערכים שליליים'] },
      { id: 9, type: 'single', question: 'מהי Linear Interpolation?', options: ['שיטה לציור קווים ישרים', 'שיטה למילוי ערכים חסרים בין שתי נקודות נתונים ידועות באמצעות קו ישר', 'סוג של Line Chart', 'שיטה למיון נתונים', 'שיטה לצביעת גרפים'], correctAnswers: [1], explanation: 'Linear Interpolation: מילוי ערכים חסרים בין שתי נקודות ידועות על ידי "חיבור" בקו ישר. פשוטה ומהירה, אך לא תמיד מדויקת - Bilinear ו-Nonlinear Interpolation מדויקים יותר.', optionExplanations: ['יותר מציור קווים', 'תשובה נכונה', 'לא Line Chart', 'לא מיון', 'לא צביעה'] },
      { id: 10, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Cherry Picking הוא בחירת תקופת זמן סלקטיבית שתומכת בטענה מסוימת.\nב. Double Axes (שני צירי Y) הוא תמיד שיטה מטעה ואסור להשתמש בו.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'א׳ נכונה, ב׳ לא תמיד'], correctAnswers: [4], explanation: 'א׳ נכונה - Cherry Picking הוא בחירה סלקטיבית שמטעה. ב׳ לא תמיד - Double Axes עלול להטעות אבל לפעמים הוא נחוץ להצגת שני משתנים בסקאלות שונות, כל עוד זה מתואר בבירור.', optionExplanations: ['ב׳ גם דורשת התייחסות', 'ב׳ לא תמיד', 'ב׳ לא תמיד נכונה', 'א׳ נכונה', 'תשובה נכונה'] },
      { id: 11, type: 'single', question: 'מהי Task Abstraction לפי Munzner?', options: ['תהליך הסתרת משימות', 'תהליך תרגום שאלות ספציפיות של התחום (domain) לזוגות {action, target} גנריים', 'יצירת משימות חדשות', 'ביטול משימות מיותרות', 'הקצאת משימות למחשב'], correctAnswers: [1], explanation: 'Task Abstraction: תרגום שאלות/בעיות ספציפיות של התחום לזוגות {action, target} גנריים. Actions: Analyze, Search, Query. דוגמאות: discover distribution, compare trends, locate outliers.', optionExplanations: ['לא הסתרה', 'תשובה נכונה', 'לא יצירה', 'לא ביטול', 'לא הקצאה'] },
      { id: 12, type: 'multiple', question: 'אילו מהבאים הם Actions ב-Task Abstraction?', options: ['Analyze (Consume: Discover/Present, Enjoy, Produce)', 'Search (Lookup, Locate, Browse, Explore)', 'Query (Identify, Compare, Summarize)', 'Design (Create, Modify, Delete)', 'Filter (Include, Exclude)'], correctAnswers: [0, 1, 2], explanation: 'שלוש רמות Actions: (1) Analyze: Consume (Discover/Present), Enjoy, Produce. (2) Search: Lookup, Locate, Browse, Explore. (3) Query: Identify (one), Compare (some), Summarize (all). Design ו-Filter אינם ברמת ה-Actions.', optionExplanations: ['נכון', 'נכון', 'נכון', 'לא נכון - Design אינו Action ב-Task Abstraction', 'לא נכון - Filter הוא Interaction Operator, לא Action'] },
      { id: 13, type: 'single', question: 'לפי Bertin (1981), מהי הגישה הנכונה לבניית גרף?', options: ['"גרף נבנה פעם אחת ולתמיד"', '"גרף לא נוצר פעם אחת - הוא נבנה ומשוחזר עד שהוא חושף את כל הקשרים. הפעולות הטובות ביותר הן אלו שמבוצעות על ידי מקבל ההחלטות עצמו"', 'יש לתת למעצב גרפי לבנות את הגרף', 'יש לבנות את הגרף באופן אוטומטי בלבד', 'הגרף צריך להיות סטטי תמיד'], correctAnswers: [1], explanation: 'Bertin (1981): "A graphic is not drawn once and for all, it is constructed and reconstructed until it reveals all the relationships. The best graphic operations are those carried out by the decision-maker himself." - ההדגשה היא על אינטראקטיביות ואיטרציה.', optionExplanations: ['ההפך ממה ש-Bertin אמר', 'תשובה נכונה - ציטוט של Bertin 1981', 'Bertin מדגיש שמקבל ההחלטות עצמו צריך לבנות', 'לא רק אוטומטי', 'Bertin מדגיש בנייה ושחזור'] },
      { id: 14, type: 'single', question: 'מהו Lie Factor של Tufte?', options: ['מדד שמודד כמה הגרף יפה', 'מדד שמשווה את גודל האפקט הוויזואלי לגודל האפקט בנתונים בפועל. Lie Factor = Effect in graphic / Effect in data', 'סוג של Chart Junk', 'מדד מהירות טעינה', 'מדד של מספר הצבעים'], correctAnswers: [1], explanation: 'Lie Factor = (Size of effect shown in graphic) / (Size of effect in data). אם Lie Factor > 1 או < 1, הגרף מעוות את המציאות. למשל, שינוי של 50% בנתונים שנראה כשינוי של 200% בגרף.', optionExplanations: ['לא מדד יופי', 'תשובה נכונה', 'לא Chart Junk', 'לא מהירות', 'לא צבעים'] },
      { id: 15, type: 'single', question: 'מהי Scatterplot Matrix?', options: ['מטריצה של מספרים', 'מערך של Scatterplots המציג את כל הזוגות האפשריים של ממדים, עם Histogram על האלכסון', 'סוג של Adjacency Matrix', 'טבלת Excel עם גרפים', 'רשת של Bar Charts'], correctAnswers: [1], explanation: 'Scatterplot Matrix: מערך Scatterplots לכל זוגות הממדים. האלכסון מציג Histogram של כל ממד. מאפשר זיהוי קורלציות בין כל זוג ממדים. כלי חשוב לניתוח נתונים רב-ממדיים.', optionExplanations: ['לא מטריצת מספרים', 'תשובה נכונה', 'לא Adjacency Matrix', 'לא Excel', 'לא Bar Charts'] },
      { id: 16, type: 'single', question: 'מה הכוונה ב-Derived Attributes?', options: ['תכונות שנמחקו', 'תכונות שמחושבות מתכונות המקוריות - שינוי סוג פשוט, רכישת נתונים נוספים, או טרנספורמציה מורכבת', 'תכונות שהועתקו', 'תכונות שהורדו מהאינטרנט', 'תכונות שניתנו על ידי המשתמש'], correctAnswers: [1], explanation: 'Derived Attributes: תכונות שמחושבות מהתכונות המקוריות. שלוש קטגוריות: (1) שינוי סוג פשוט, (2) רכישת נתונים נוספים, (3) טרנספורמציה מורכבת. מהלך חשוב בהכנת נתונים לויזואליזציה.', optionExplanations: ['לא מחיקה', 'תשובה נכונה', 'לא העתקה', 'לא הורדה', 'לא מהמשתמש'] },
      { id: 17, type: 'statement', question: 'בחנו את שתי הטענות הבאות:\nא. Florence Nightingale יצרה את ה-Coxcomb Chart כדי לשכנע שצריך לשפר היגיינה כדי למנוע כולרה, טיפוס ודיזנטריה.\nב. William Playfair נחשב לממציא הגרפים הסטטיסטיים המודרניים - Line Chart, Bar Chart ו-Pie Chart.', options: ['רק א׳ נכונה', 'רק ב׳ נכונה', 'שתיהן נכונות', 'שתיהן שגויות', 'א׳ נכונה חלקית, ב׳ נכונה'], correctAnswers: [2], explanation: 'שתיהן נכונות. Nightingale: Coxcomb Chart ב-1858 במלחמת קרים - כחול=מחלה, אדום=פצעים, שחור=אחר. Playfair (1759-1823): נחשב לאבי הגרפיקה הסטטיסטית המודרנית.', optionExplanations: ['גם ב׳ נכונה', 'גם א׳ נכונה', 'תשובה נכונה', 'שתיהן נכונות', 'א׳ נכונה לחלוטין'] },
      { id: 18, type: 'single', question: 'מהו Sampling בהכנת נתונים?', options: ['שיטה להגדלת נתונים', 'בחירת תת-קבוצה מייצגת של הנתונים כדי להקטין את גודלם, באמצעות בחירה במרווחים קבועים, ממוצע אזורים, או בחירת נקודות אקראיות/חציוניות', 'סוג של ויזואליזציה', 'שיטת הצפנה', 'כלי לציור גרפים'], correctAnswers: [1], explanation: 'Sampling: הקטנת נתונים באמצעות בחירה סלקטיבית. שיטות: (1) בחירה במרווחים קבועים, (2) ממוצע אזורים, (3) בחירת חציון או נקודות אקראיות. Data Subsetting: הגבלה לפי זמן/שאילתה.', optionExplanations: ['ההפך - מקטין נתונים', 'תשובה נכונה', 'לא ויזואליזציה', 'לא הצפנה', 'לא ציור'] },
      { id: 19, type: 'single', question: 'מה ההבדל בין Discover ל-Present ב-Actions?', options: ['אין הבדל', 'Discover (Explore) הוא חקירת נתונים לגילוי תובנות חדשות, Present (Explain) הוא הצגת תובנות ידועות לאחרים', 'Discover הוא למדענים ו-Present לאנשים רגילים', 'Discover הוא אוטומטי ו-Present ידני', 'Discover ב-2D ו-Present ב-3D'], correctAnswers: [1], explanation: 'Discover (Explore): חקירת נתונים לגילוי תובנות חדשות. Present (Explain): הצגת תובנות ידועות לקהל. זהו ה-"classic split" ב-Actions -> Consume -> Discover vs Present.', optionExplanations: ['יש הבדל חשוב', 'תשובה נכונה', 'לא מוגבל לקהל ספציפי', 'שניהם יכולים להיות אוטומטיים או ידניים', 'לא קשור למימדים'] },
      { id: 20, type: 'single', question: 'לפי Card, Mackinlay & Shneiderman (1999), ויזואליזציה מוגדרת כ:', options: ['"יצירת תמונות יפות"', '"שימוש בייצוגים חזותיים אינטראקטיביים של נתונים, המיוצרים על ידי מחשב, כדי להגביר את הקוגניציה (amplify cognition)"', '"תהליך המרת מספרים לגרפים"', '"כלי לשכנוע אנשים"', '"שיטה לעיצוב אתרי אינטרנט"'], correctAnswers: [1], explanation: 'ההגדרה של Card, Mackinlay & Shneiderman (1999): "The use of computer-generated, interactive, visual representations of data to amplify cognition." מילות מפתח: computer-generated, interactive, visual, amplify cognition.', optionExplanations: ['לא רק יופי', 'תשובה נכונה - ההגדרה המדויקת', 'פישוט יתר', 'שכנוע הוא שימוש אחד, לא ההגדרה', 'לא עיצוב אתרים'] }
    ]
  }
];
