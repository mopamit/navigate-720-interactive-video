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


// Six contextual stops, one tutorial per stop. Times are seconds in the film.
window.NAVIGATE_CONFIG.cues = [
 {id:'personal',time:16.8,group:'teacher',title:'איך מתאימים את הלמידה לתלמידים שונים?',videos:['teacher-personal']},
 {id:'content',time:31.6,group:'teacher',title:'איך בוחרים תכנים ויעדי למידה?',videos:['teacher-content']},
 {id:'path',time:43.6,group:'student',title:'איך מתחילים במסלול האישי?',videos:['student-start']},
 {id:'help',time:59.5,group:'student',title:'צריכים עזרה? מכירים את סוכן ה־AI',videos:['student-help']},
 {id:'feedback',time:72.5,group:'student',title:'מתרגלים מיומנויות ורואים התקדמות',videos:['student-progress']},
 {id:'tracking',time:85.5,group:'teacher',title:'איך עוקבים אחר התקדמות התלמידים?',videos:['teacher-progress']}
];
