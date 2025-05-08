
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/MainLayout";

const LittleQuestProject = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <img
            src="/lovable-uploads/ab9aae4c-6aa5-4d4d-8376-972baf1bf41e.png"
            alt="Little Quest Logo"
            className="w-32 h-32 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">LITTLE QUEST</h1>
            <p className="text-gray-600 mb-4">
              A pixel 2D game made for Multidisciplinary Project by GROUP-11
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                Game Development
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                2D Pixel Art
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                Godot Engine
              </span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "LITTLE QUEST" is a pixel 2D game made for Multidisciplinary Project by GROUP-11. It is a simple single-player game that tells adventures of a nameless character fighting enemies and bosses in a fantasy world full of different difficulties and challenges. Join us in this exciting experience, and we hope you have an enjoyable journey through the game world.
                </p>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                  <li>Engaging level design</li>
                  <li>Mobile compatibility</li>
                  <li>Multiple enemy types</li>
                  <li>Retro-style pixel art graphics</li>
                  <li>Intuitive controls and fluid animations</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Overall Architecture</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Game Engine: Godot 4.3</li>
                  <li>Programing language: GDScript</li>
                  <li>Website: HTML, CSS, JS</li>
                  <li>Pixel Art: Aseprite</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design">
            <h2 className="text-2xl font-bold mb-4">Design Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <img 
                  src="/lovable-uploads/4e428052-3c96-48eb-951f-4adaa2ec43bd.png" 
                  alt="Little Quest Gameplay" 
                  className="w-full h-auto object-contain"
                />
                <CardContent className="p-4">
                  <h3 className="font-medium">Gameplay Screen</h3>
                  <p className="text-sm text-gray-600">In-game combat with enemy encounter</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <img 
                  src="/lovable-uploads/40da6fe2-c60c-4693-ad12-1a9ce7ddcf13.png" 
                  alt="Little Quest Game Cover" 
                  className="w-full h-auto object-contain"
                />
                <CardContent className="p-4">
                  <h3 className="font-medium">Game Cover</h3>
                  <p className="text-sm text-gray-600">Official promotional artwork</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Team Members</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-700">Project Manager</h3>
                    <Separator className="my-2" />
                    <p className="text-gray-700">BENCHENINA Souhaib Meheni</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-700">Development Team</h3>
                    <Separator className="my-2" />
                    <ul className="space-y-2 text-gray-700">
                      <li>BRAHMI Abbas</li>
                      <li>LAMRIA Mahmoud Noureddine</li>
                      <li>AIT SAID Mehdi</li>
                      <li>HAMADI Imededdine</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default LittleQuestProject;
