
import React from 'react';

const CodeBattleProject = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/lovable-uploads/e881429c-58e8-4f91-b644-3308f6145662.png" 
              alt="CodeBattle Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">CodeBattle</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              CodeBattle est une application mobile éducative qui aide les étudiants à apprendre la programmation en résolvant des défis interactifs. Elle propose une interface simple, un système de messagerie en temps réel, et un espace enseignant pour suivre la progression des élèves.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Fonctionnalités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Défis de programmation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Défis interactifs à différents niveaux de difficulté</li>
                <li>Système de validation automatique du code</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Messagerie en temps réel</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Communication entre étudiants et enseignants</li>
                <li>Partage de code et résolution collaborative</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Espace enseignant</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Suivi de la progression des élèves</li>
                <li>Création de défis personnalisés</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBattleProject;
