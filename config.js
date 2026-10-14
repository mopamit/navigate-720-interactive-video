window.NAVIGATE_CONFIG = {
  intro: '203520.mp4',
  assets: { logo: 'assets/navigate-logo-transparent.png', buddy: 'assets/219761.png', prismind: 'assets/219739.png' },
  videos: [
    { id: 'student-start', group: 'student', title: 'כניסה, מסלול אישי ומשימות', src: '' },
    { id: 'student-help', group: 'student', title: 'תרגום וסוכן AI לעזרה', src: '' },
    { id: 'student-progress', group: 'student', title: 'מיומנויות, משוב והתקדמות', src: '' },
    { id: 'teacher-content', group: 'teacher', title: 'תכנים, יחידות ויעדי למידה', src: '' },
    { id: 'teacher-progress', group: 'teacher', title: 'מעקב וניתוח ביצועי תלמידים', src: '' },
    { id: 'teacher-personal', group: 'teacher', title: 'המלצות והתאמה אישית', src: '' }
  ]
};


// Seconds in the main film. Tutorial files can be connected using videos[].src above.
window.NAVIGATE_CONFIG.cues = [
 {id:'path',time:40.8,group:'student',title:'איך מתחילים במסלול האישי?',videos:['student-start']},
 {id:'feedback',time:49.1,group:'student',title:'כך רואים התקדמות ומקבלים משוב',videos:['student-progress']},
 {id:'help',time:63.5,group:'student',title:'צריכים עזרה? מכירים את סוכן ה־AI',videos:['student-help']},
 {id:'teacher',time:85.5,group:'teacher',title:'ומה רואים מהצד של המורה?',videos:['teacher-content','teacher-progress','teacher-personal']}
];

