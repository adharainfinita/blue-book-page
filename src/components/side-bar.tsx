import React from 'react';
import '../styles/SideBar.css';


const Sidebar: React.FC= () => {
  const expandSidebar = () => {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.classList.add('expanded');
  };

  const collapseSidebar = () => {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    sidebar.classList.remove('expanded');
  };

  return (
    <aside className="sidebar" onMouseOver={expandSidebar} onMouseOut={collapseSidebar}>
      <div className="sidebar-content">
        <h4>Capítulo 1</h4>
        <h4>Capítulo 2</h4>
        <h4>Capítulo 3</h4>
        <h4>Capítulo 4</h4>
        <h4>Capítulo 5</h4>
        <h4>Capítulo 6</h4>
      </div>
    </aside>
  );
};

export default Sidebar;
