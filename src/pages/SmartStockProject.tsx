
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
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";

const SmartStockProject = () => {
  // Fixed the logo path by removing "public/" prefix
  const logo = "/lovable-uploads/756d8ce4-6740-474f-b98a-8386342fb051.png";

  return (
    <div className="py-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 px-3 py-1">Warehouse Management</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">SmartStock</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">Intelligent Warehouse Management System</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The SmartStock Warehouse Management System (WMS) is designed to efficiently manage merchandise stored in a hub, 
            which is divided into zones based on storage type. The system optimizes warehouse operations by categorizing 
            storage zones based on specific conditions and requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <BoxIcon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Storage Types</h3>
                <p className="dark:text-gray-300">Rack Storage and Bulk Storage options to accommodate different merchandise types.</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <Thermometer className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Environmental Control</h3>
                <p className="dark:text-gray-300">Temperature and humidity monitoring to ensure optimal storage conditions.</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <Scale className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Capacity Management</h3>
                <p className="dark:text-gray-300">Weight and dimension tracking for efficient space utilization.</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <Truck className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Zone Indexing</h3>
                <p className="dark:text-gray-300">Each storage zone is indexed by a matricule for easy tracking and location.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* UI/UX Design Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">UI/UX Design</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The SmartStock interface is designed with user experience at its core, providing intuitive dashboards 
            for each role in the warehouse ecosystem. Below are the key screens from our application:
          </p>

          <Tabs defaultValue="dashboards" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8 bg-gray-100 dark:bg-gray-700">
              <TabsTrigger value="dashboards" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Dashboards</TabsTrigger>
              <TabsTrigger value="tasks" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Task Management</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Analytics</TabsTrigger>
              <TabsTrigger value="auth" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Authentication</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboards">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/5c8d134e-da50-433a-8a53-96d16544f53f.png" 
                      alt="Driver Dashboard" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Driver Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Real-time task management interface for drivers with task scanning functionality</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/0191ea49-8e5f-4278-a392-4188d7b08d97.png" 
                      alt="Main Dashboard" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Main Dashboard Overview</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Main system dashboard showing zone statistics and real-time monitoring</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/bc30bb74-e8e6-4789-9d0d-4a18e57f4e51.png" 
                      alt="Administrator Dashboard" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Administrator Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Complete oversight of warehouse operations with performance metrics and zone management</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/229fcf27-5abd-4d42-b88c-1ed0cc71cb61.png" 
                      alt="Moderator Dashboard" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Moderator Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Interface for validating orders and assigning tasks to drivers and controllers</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tasks">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/2415b22b-1342-47dc-a145-1e3d08d77879.png" 
                      alt="Task Assignment Interface" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Task Assignment Interface</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Assigned tasks view with location details and completion status</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/8bbfab2b-d9d2-4ec0-9662-4508e5059ea9.png" 
                      alt="Driver Assignment" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Driver Assignment Management</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Interface for assigning drivers to specific tasks based on location and availability</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/d091bd84-c795-4628-9e35-d0e4dc2d86aa.png" 
                      alt="Client Orders Interface" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Client Orders Interface</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Order management system showing active stocking and destocking requests</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/8154243b-fc34-45b3-a692-d244023f0383.png" 
                      alt="Merchandise Management" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Merchandise Management</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Inventory overview showing stock levels and item location within the warehouse</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/7e42353c-52c6-4383-9e9f-077465224782.png" 
                      alt="Performance Metrics" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Performance Analytics</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Weekly task completion metrics with detailed efficiency tracking</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/e9d28117-3006-4985-9028-14a28334efc5.png" 
                      alt="Reports Dashboard" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Reports Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive reporting system with stock movement and zone utilization analytics</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/d960893c-c50d-457f-9f53-c7687a590dcd.png" 
                      alt="Analytics Dashboard" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Advanced Analytics Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">In-depth performance metrics with operational efficiency and zone utilization visualizations</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/dda18ecb-22b7-4f23-bba0-d9a5c7c135aa.png" 
                      alt="Warehouse Performance" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Warehouse Performance Overview</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Key performance indicators showing operational efficiency improvements</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auth">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/5bfa81d1-b1d2-48a4-aaf0-1257285d6768.png" 
                      alt="Sign In Screen" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Login Interface</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">User authentication screen for secure system access</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/d5b2aa1c-8415-480f-a954-79056af0014b.png" 
                      alt="Settings Screen" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Settings & Account Management</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">User profile management with notification preferences and security settings</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/32329223-0d2f-4125-86d7-1946aa34b79e.png" 
                      alt="Sign Up Screen" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Registration Interface</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">New user account creation with role-based access control</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/92b8da7a-5f7a-49fe-bdae-6c91338a323b.png" 
                      alt="User Settings" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4 bg-white dark:bg-gray-800">
                      <h3 className="font-semibold text-lg dark:text-white">Driver Settings Panel</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Role-specific settings with vehicle information and notification preferences</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Features & Functionalities</h2>
          
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-gray-100 dark:bg-gray-700">
              <TabsTrigger value="admin" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Administrator</TabsTrigger>
              <TabsTrigger value="moderator" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Moderator</TabsTrigger>
              <TabsTrigger value="driver" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Driver</TabsTrigger>
              <TabsTrigger value="client" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Client</TabsTrigger>
              <TabsTrigger value="controller" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Controller</TabsTrigger>
            </TabsList>

            <TabsContent value="admin" className="mt-6">
              <Card className="dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <LayoutDashboard className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-2xl font-semibold dark:text-white">Administrator Dashboard</h3>
                  </div>
                  <Separator className="my-4 dark:bg-gray-600" />
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-2">Zone Management</h4>
                      <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                        <li>Define storage zones and categories</li>
                        <li>Set zone dimensions and auto-generate matricules</li>
                        <li>Configure allowable humidity, temperature, and weight limits</li>
                        <li>Modify or reorganize zones as needed</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-2">Data Access & Analytics</h4>
                      <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                        <li>Access data from all dashboards, including validated client orders</li>
                        <li>Monitor real-time stocking/destocking operations</li>
                        <li>Filter data by merchandise categories or zones</li>
                        <li>Analyze zone saturation levels</li>
                        <li>View merchandise inspections by controllers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-2">Performance Monitoring</h4>
                      <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">System Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Optimized Storage Utilization</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Intelligent zone management ensures merchandise is stored according to specific requirements,
                  maximizing space utilization and minimizing waste.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Real-time Tracking & Visibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  All stakeholders have access to real-time information about merchandise status, 
                  from stocking to delivery, improving transparency and decision-making.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Multi-role Coordination</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Seamless coordination between administrators, moderators, drivers, controllers, 
                  and clients ensures smooth operations and quick issue resolution.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Performance Monitoring</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehensive performance metrics for all system users helps identify 
                  areas for improvement and recognize high performers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Quality Control Integration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Built-in inspection and quality control processes ensure merchandise 
                  is properly stored and handled throughout the logistics chain.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Enhanced Client Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Clients have full visibility of their products and can easily manage 
                  stocking and destocking operations through an intuitive interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Specifications */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Specifications</h2>
          
          <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Frontend Technologies</h4>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                  <li className="text-gray-700 dark:text-gray-300">React.js for responsive user interface</li>
                  <li className="text-gray-700 dark:text-gray-300">Tailwind CSS for styling</li>
                  <li className="text-gray-700 dark:text-gray-300">Real-time data visualization with Charts.js</li>
                  <li className="text-gray-700 dark:text-gray-300">Mobile-responsive design for all dashboards</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Backend Technologies</h4>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                  <li className="text-gray-700 dark:text-gray-300">Node.js with Express for API development</li>
                  <li className="text-gray-700 dark:text-gray-300">MongoDB for flexible data storage</li>
                  <li className="text-gray-700 dark:text-gray-300">Redis for caching and real-time updates</li>
                  <li className="text-gray-700 dark:text-gray-300">JWT-based authentication system</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Mobile Integration</h4>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                  <li className="text-gray-700 dark:text-gray-300">Native mobile app for drivers and controllers</li>
                  <li className="text-gray-700 dark:text-gray-300">Barcode/QR code scanning for zone and merchandise identification</li>
                  <li className="text-gray-700 dark:text-gray-300">Offline capability with sync when connectivity returns</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Integration Capabilities</h4>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                  <li className="text-gray-700 dark:text-gray-300">API-first design for easy third-party integration</li>
                  <li className="text-gray-700 dark:text-gray-300">ERP system connections for enterprise clients</li>
                  <li className="text-gray-700 dark:text-gray-300">IoT integration for environmental monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartStockProject;

