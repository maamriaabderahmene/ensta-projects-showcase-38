
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BaytiProject = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
        <img
          src="/lovable-uploads/f6ac1659-da76-4a61-857d-705092086ed6.png"
          alt="Bayti Logo"
          className="w-32 h-32 object-contain"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">BAYTI</h1>
          <p className="text-gray-600 mb-4">
            First Algerian Food Service
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Mobile
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Web
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Food Service
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
                Bayti is a mobile and web platform that connects home chefs with local customers, offering a marketplace for authentic, homemade meals. Whether you're a chef looking to grow your food business or a customer craving traditional cuisine, Bayti makes it easy to discover, order, and enjoy meals made with care.
              </p>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Browse and order homemade meals from local chefs</li>
                <li>Discover traditional and authentic Algerian cuisine</li>
                <li>Simple ordering process with intuitive interface</li>
                <li>Platform for home chefs to grow their food business</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design">
          <h2 className="text-2xl font-bold mb-4">Design Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/286ca1a9-a8b3-448d-a349-89a795cf1e46.png" 
                alt="Bayti Mobile App Onboarding" 
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-4">
                <h3 className="font-medium">Onboarding Screen</h3>
                <p className="text-sm text-gray-600">App introduction with service description</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/78315ef0-3e92-437c-94d4-52dd98f012c1.png" 
                alt="Bayti Mobile App Home Screen" 
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-4">
                <h3 className="font-medium">Home Screen</h3>
                <p className="text-sm text-gray-600">Browse meals by category with search functionality</p>
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
                  <h3 className="text-xl font-semibold text-orange-700">Project Manager</h3>
                  <Separator className="my-2" />
                  <p className="text-gray-700">BENRAHMOUNE Anes</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-700">Development Team</h3>
                  <Separator className="my-2" />
                  <ul className="space-y-2 text-gray-700">
                    <li>KHOUALDI Mohamed Achraf</li>
                    <li>ZIANE Zineb</li>
                    <li>BENKHEROUF Maria</li>
                    <li>KHODJA Fadi Mohanned</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BaytiProject;
