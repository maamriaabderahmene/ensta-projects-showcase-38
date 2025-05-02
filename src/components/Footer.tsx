
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-ensta-darkblue to-ensta-darkred text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PrepaNova Showcase</h3>
            <p className="text-sm text-white/80">
              A showcase of student projects from the "formation de base en informatique" program 
              at the École Nationale des Technologies Avancées.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link to="/projects" className="text-sm hover:underline">Projects</Link></li>
              <li><Link to="/technologies" className="text-sm hover:underline">Technologies</Link></li>
              <li><Link to="/supervisor" className="text-sm hover:underline">Supervisor</Link></li>
              <li><Link to="/department" className="text-sm hover:underline">Department</Link></li>
              <li><Link to="/developers" className="text-sm hover:underline">Developers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm text-white/80">
              École Nationale Supérieure des Technologies Avancées<br />
              Département de Base en Informatique
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img src="/lovable-uploads/608c5708-1d87-4251-bae2-66e250811ba2.png" alt="ENSTA Logo" className="h-8" />
              <img src="/lovable-uploads/d172ede3-25cf-48ef-92af-e74639363716.png" alt="DFI Logo" className="h-6" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-sm text-white/60 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 PrepaNova Showcase. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed and developed by ENSTA students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
