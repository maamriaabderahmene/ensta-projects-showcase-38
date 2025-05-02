
import React from "react";
import { 
  BoxIcon, 
  Thermometer, 
  Scale, 
  LayoutDashboard, 
  UserCircle, 
  Truck, 
  ShieldCheck 
} from "lucide-react";
import MainLayout from "../components/MainLayout";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";

const SmartStockProject = () => {
  const logo = "public/lovable-uploads/d9f2930c-5783-4c90-b93b-a5a50c5e14c2.png";

  return (
    <MainLayout>
      <div className="py-10 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1">Warehouse Management</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">SmartStock</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6">Intelligent Warehouse Management System</h2>
            <p className="text-lg text-gray-700 mb-6">
              A comprehensive solution for optimizing warehouse operations through intelligent zone management, 
              real-time tracking, and multi-role coordination between administrators, moderators, drivers, and controllers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">Storage Management</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">Inventory Tracking</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">Real-time Updates</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">Multi-role Dashboard</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1">Performance Analysis</Badge>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={logo} 
              alt="SmartStock Logo" 
              className="w-72 h-auto"
            />
          </div>
        </section>

        <div className="container mx-auto py-10">
          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              The SmartStock Warehouse Management System (WMS) is designed to efficiently manage merchandise stored in a hub, 
              which is divided into zones based on storage type. The system optimizes warehouse operations by categorizing 
              storage zones based on specific conditions and requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card className="bg-white border border-blue-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <BoxIcon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Storage Types</h3>
                  <p>Rack Storage and Bulk Storage options to accommodate different merchandise types.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-blue-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Thermometer className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Environmental Control</h3>
                  <p>Temperature and humidity monitoring to ensure optimal storage conditions.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-blue-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Scale className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Capacity Management</h3>
                  <p>Weight and dimension tracking for efficient space utilization.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-blue-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Truck className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Zone Indexing</h3>
                  <p>Each storage zone is indexed by a matricule for easy tracking and location.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features & Functionalities</h2>
            
            <Tabs defaultValue="admin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <TabsTrigger value="admin">Administrator</TabsTrigger>
                <TabsTrigger value="moderator">Moderator</TabsTrigger>
                <TabsTrigger value="driver">Driver</TabsTrigger>
                <TabsTrigger value="client">Client</TabsTrigger>
                <TabsTrigger value="controller">Controller</TabsTrigger>
              </TabsList>

              <TabsContent value="admin" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <LayoutDashboard className="w-6 h-6 mr-2 text-blue-600" />
                      <h3 className="text-2xl font-semibold">Administrator Dashboard</h3>
                    </div>
                    <Separator className="my-4" />
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Zone Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Define storage zones and categories</li>
                          <li>Set zone dimensions and auto-generate matricules</li>
                          <li>Configure allowable humidity, temperature, and weight limits</li>
                          <li>Modify or reorganize zones as needed</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Data Access & Analytics</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Access data from all dashboards, including validated client orders</li>
                          <li>Monitor real-time stocking/destocking operations</li>
                          <li>Filter data by merchandise categories or zones</li>
                          <li>Analyze zone saturation levels</li>
                          <li>View merchandise inspections by controllers</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Performance Monitoring</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Track commands validated by each moderator</li>
                          <li>Assign control operations to available controllers</li>
                          <li>Monitor controller completion rates for inspections</li>
                          <li>Review driver performance metrics based on assigned tasks</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="moderator" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <UserCircle className="w-6 h-6 mr-2 text-blue-600" />
                      <h3 className="text-2xl font-semibold">Moderator Dashboard</h3>
                    </div>
                    <Separator className="my-4" />
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Client Order Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Modify and validate client orders for stocking and destocking</li>
                          <li>Ensure orders comply with hub storage constraints</li>
                          <li>Validate the emplacement provided by the software</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Assignment Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Validate driver assignments generated by the software</li>
                          <li>Ensure efficient driver assignment based on availability and workload</li>
                          <li>Assign controllers to inspect merchandise as needed</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Reporting & Monitoring</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Generate reports on validated orders and assignments</li>
                          <li>Track driver and controller performance metrics</li>
                          <li>Access historical performance data</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="driver" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Truck className="w-6 h-6 mr-2 text-blue-600" />
                      <h3 className="text-2xl font-semibold">Driver Dashboard</h3>
                    </div>
                    <Separator className="my-4" />
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Task Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>View assigned stocking and destocking tasks</li>
                          <li>Access detailed merchandise information</li>
                          <li>Confirm destination and zone information</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Operation Workflow</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Start operations by scanning Clark Codes</li>
                          <li>Verify correct location by scanning Zone Codes</li>
                          <li>Perform stocking/destocking based on task data</li>
                          <li>Receive real-time status updates</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Status Tracking</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Automatic busy/available status updates</li>
                          <li>Task completion tracking</li>
                          <li>Integration with other dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="client" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <UserCircle className="w-6 h-6 mr-2 text-blue-600" />
                      <h3 className="text-2xl font-semibold">Client Dashboard</h3>
                    </div>
                    <Separator className="my-4" />
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Order Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>View all stocking and destocking orders</li>
                          <li>Access detailed product information</li>
                          <li>Add new stocking orders for existing/new products</li>
                          <li>Create destocking orders with delivery details</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Product Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Specify product details (quantity, volume, weight, dimensions)</li>
                          <li>Define storage requirements (temperature, humidity)</li>
                          <li>Add new products to the system</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Status Tracking</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Track destocking command status in real-time</li>
                          <li>Monitor merchandise status throughout the logistics process</li>
                          <li>Get updates from stocking to delivery</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="controller" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <ShieldCheck className="w-6 h-6 mr-2 text-blue-600" />
                      <h3 className="text-2xl font-semibold">Controller Dashboard</h3>
                    </div>
                    <Separator className="my-4" />
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Inspection Management</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>View assigned inspections with detailed merchandise information</li>
                          <li>Perform inspections by scanning zone codes</li>
                          <li>Verify merchandise details, quantity, and condition</li>
                          <li>Submit inspection reports with status and comments</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Status Updates</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Update merchandise inspection status</li>
                          <li>Automatic controller availability tracking</li>
                          <li>Notification system for issues and feedback</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-medium text-blue-700 mb-2">Performance Tracking</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>View daily, weekly, and monthly inspection summaries</li>
                          <li>Track inspection pass/fail ratios</li>
                          <li>Access detailed inspection history</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* System Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">System Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Optimized Storage Utilization</h3>
                  <p className="text-gray-700">
                    Intelligent zone management ensures merchandise is stored according to specific requirements,
                    maximizing space utilization and minimizing waste.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Real-time Tracking & Visibility</h3>
                  <p className="text-gray-700">
                    All stakeholders have access to real-time information about merchandise status, 
                    from stocking to delivery, improving transparency and decision-making.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Multi-role Coordination</h3>
                  <p className="text-gray-700">
                    Seamless coordination between administrators, moderators, drivers, controllers, 
                    and clients ensures smooth operations and quick issue resolution.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Performance Monitoring</h3>
                  <p className="text-gray-700">
                    Comprehensive performance metrics for all system users helps identify 
                    areas for improvement and recognize high performers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Quality Control Integration</h3>
                  <p className="text-gray-700">
                    Built-in inspection and quality control processes ensure merchandise 
                    is properly stored and handled throughout the logistics chain.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Enhanced Client Experience</h3>
                  <p className="text-gray-700">
                    Clients have full visibility of their products and can easily manage 
                    stocking and destocking operations through an intuitive interface.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Specifications */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
            
            <div className="bg-white border border-blue-100 rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-xl font-medium text-blue-700 mb-3">Frontend Technologies</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">React.js for responsive user interface</li>
                    <li className="text-gray-700">Tailwind CSS for styling</li>
                    <li className="text-gray-700">Real-time data visualization with Charts.js</li>
                    <li className="text-gray-700">Mobile-responsive design for all dashboards</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-blue-700 mb-3">Backend Technologies</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">Node.js with Express for API development</li>
                    <li className="text-gray-700">MongoDB for flexible data storage</li>
                    <li className="text-gray-700">Redis for caching and real-time updates</li>
                    <li className="text-gray-700">JWT-based authentication system</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-blue-700 mb-3">Mobile Integration</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">Native mobile app for drivers and controllers</li>
                    <li className="text-gray-700">Barcode/QR code scanning for zone and merchandise identification</li>
                    <li className="text-gray-700">Offline capability with sync when connectivity returns</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-blue-700 mb-3">Integration Capabilities</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">API-first design for easy third-party integration</li>
                    <li className="text-gray-700">ERP system connections for enterprise clients</li>
                    <li className="text-gray-700">IoT integration for environmental monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default SmartStockProject;
