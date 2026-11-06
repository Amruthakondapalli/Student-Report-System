import React, { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import home from '../home-page.html?raw';
import login from '../login.html?raw';
import admin from '../admin-dashboard.html?raw';
import teacher from '../teacher-dashboard.html?raw';
import student from '../student-dashboard.html?raw';
import parent from '../parent-dashboard.html?raw';
import report from '../report.html?raw';
import analytics from '../analytics.html?raw';

const pages = {
  '/': home, '/index.html': home, '/login.html': login,
  '/admin-dashboard.html': admin, '/teacher-dashboard.html': teacher,
  '/student-dashboard.html': student, '/parent-dashboard.html': parent,
  '/report.html': report, '/analytics.html': analytics,
};

function App() {
  const path = window.location.pathname;
  const source = pages[path] || home;
  const parsed = useMemo(() => {
    const doc = new DOMParser().parseFromString(source, 'text/html');
    return { html: doc.body.innerHTML.replace(/<script[\s\S]*?<\/script>/gi, ''), className: doc.body.className, attrs: [...doc.body.attributes].reduce((a, x) => (a[x.name] = x.value, a), {}), title: doc.title };
  }, [source]);

  useEffect(() => {
    document.body.className = parsed.className;
    [...document.body.attributes].forEach(a => { if (a.name.startsWith('data-')) document.body.removeAttribute(a.name); });
    Object.entries(parsed.attrs).forEach(([key, value]) => { if (key.startsWith('data-')) document.body.setAttribute(key, value); });
    document.title = parsed.title || 'Smart Student Report System';
    const timer = setTimeout(() => window.initSRS?.(), 0);
    return () => clearTimeout(timer);
  }, [parsed]);

  return <div dangerouslySetInnerHTML={{ __html: parsed.html }} />;
}

createRoot(document.getElementById('root')).render(<App />);
