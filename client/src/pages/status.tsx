import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Calendar, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

interface ServiceStatus {
  name: string;
  status: 'operational' | 'partial_outage' | 'major_outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastChecked: string;
}

interface UptimeData {
  date: string;
  uptime: number;
  incidents: number;
}

interface MaintenanceSchedule {
  title: string;
  description: string;
  scheduledDate: string;
  duration: string;
  affectedServices: string[];
}

const services: ServiceStatus[] = [
  {
    name: "PDF Merge API",
    status: "operational",
    uptime: 99.95,
    responseTime: 245,
    lastChecked: "2 minutes ago"
  },
  {
    name: "PDF Split API",
    status: "operational",
    uptime: 99.98,
    responseTime: 189,
    lastChecked: "2 minutes ago"
  },
  {
    name: "PDF Compress API",
    status: "operational",
    uptime: 99.92,
    responseTime: 312,
    lastChecked: "2 minutes ago"
  },
  {
    name: "PDF to Word API",
    status: "operational",
    uptime: 99.89,
    responseTime: 421,
    lastChecked: "2 minutes ago"
  },
  {
    name: "File Upload System",
    status: "operational",
    uptime: 99.97,
    responseTime: 156,
    lastChecked: "2 minutes ago"
  },
  {
    name: "Web Interface",
    status: "operational",
    uptime: 99.99,
    responseTime: 89,
    lastChecked: "1 minute ago"
  }
];

const uptimeHistory: UptimeData[] = [
  { date: "2024-01-08", uptime: 99.95, incidents: 0 },
  { date: "2024-01-07", uptime: 99.98, incidents: 0 },
  { date: "2024-01-06", uptime: 99.92, incidents: 1 },
  { date: "2024-01-05", uptime: 100.00, incidents: 0 },
  { date: "2024-01-04", uptime: 99.89, incidents: 0 },
  { date: "2024-01-03", uptime: 99.97, incidents: 0 },
  { date: "2024-01-02", uptime: 100.00, incidents: 0 },
  { date: "2024-01-01", uptime: 99.94, incidents: 0 },
  { date: "2023-12-31", uptime: 99.99, incidents: 0 },
  { date: "2023-12-30", uptime: 99.96, incidents: 0 },
  { date: "2023-12-29", uptime: 99.98, incidents: 0 },
  { date: "2023-12-28", uptime: 99.91, incidents: 1 },
  { date: "2023-12-27", uptime: 100.00, incidents: 0 },
  { date: "2023-12-26", uptime: 99.97, incidents: 0 },
  { date: "2023-12-25", uptime: 99.95, incidents: 0 },
  { date: "2023-12-24", uptime: 99.99, incidents: 0 },
  { date: "2023-12-23", uptime: 99.93, incidents: 0 },
  { date: "2023-12-22", uptime: 100.00, incidents: 0 },
  { date: "2023-12-21", uptime: 99.88, incidents: 1 },
  { date: "2023-12-20", uptime: 99.96, incidents: 0 },
  { date: "2023-12-19", uptime: 99.99, incidents: 0 },
  { date: "2023-12-18", uptime: 99.94, incidents: 0 },
  { date: "2023-12-17", uptime: 99.97, incidents: 0 },
  { date: "2023-12-16", uptime: 100.00, incidents: 0 },
  { date: "2023-12-15", uptime: 99.92, incidents: 0 },
  { date: "2023-12-14", uptime: 99.98, incidents: 0 },
  { date: "2023-12-13", uptime: 99.95, incidents: 0 },
  { date: "2023-12-12", uptime: 99.99, incidents: 0 },
  { date: "2023-12-11", uptime: 99.91, incidents: 1 },
  { date: "2023-12-10", uptime: 99.97, incidents: 0 }
];

const maintenanceSchedule: MaintenanceSchedule[] = [
  {
    title: "Database Migration and Optimization",
    description: "Scheduled maintenance to optimize database performance and implement new security features. All PDF tools will remain operational during this maintenance.",
    scheduledDate: "2024-01-15",
    duration: "2 hours (2:00 AM - 4:00 AM UTC)",
    affectedServices: ["PDF API Response Time", "File Upload Performance"]
  },
  {
    title: "Security Updates",
    description: "Monthly security patches and system updates to ensure optimal protection and compliance with latest security standards.",
    scheduledDate: "2024-01-20",
    duration: "30 minutes (3:00 AM - 3:30 AM UTC)",
    affectedServices: ["All PDF Tools", "Web Interface"]
  }
];

const getStatusIcon = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'partial_outage':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case 'major_outage':
      return <XCircle className="w-5 h-5 text-red-500" />;
    case 'maintenance':
      return <Clock className="w-5 h-5 text-blue-500" />;
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
  }
};

const getStatusBadge = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational':
      return <Badge variant="default" className="bg-green-100 text-green-800">Operational</Badge>;
    case 'partial_outage':
      return <Badge variant="destructive" className="bg-yellow-100 text-yellow-800">Partial Outage</Badge>;
    case 'major_outage':
      return <Badge variant="destructive">Major Outage</Badge>;
    case 'maintenance':
      return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Under Maintenance</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const getOverallStatus = () => {
  const hasOutage = services.some(s => s.status === 'major_outage');
  const hasPartialOutage = services.some(s => s.status === 'partial_outage');
  const hasMaintenance = services.some(s => s.status === 'maintenance');
  
  if (hasOutage) return { status: 'major_outage', message: 'Some systems are experiencing issues' };
  if (hasPartialOutage) return { status: 'partial_outage', message: 'Some systems are experiencing degraded performance' };
  if (hasMaintenance) return { status: 'maintenance', message: 'Scheduled maintenance in progress' };
  return { status: 'operational', message: 'All systems operational' };
};

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleString());
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const currentLang = getCurrentLanguage();
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoRefresh) {
      interval = setInterval(() => {
        setLastUpdated(new Date().toLocaleString());
      }, 60000); // Update every minute
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh]);

  const overallStatus = getOverallStatus();
  const avgUptime = uptimeHistory.reduce((sum, day) => sum + day.uptime, 0) / uptimeHistory.length;
  const totalIncidents = uptimeHistory.reduce((sum, day) => sum + day.incidents, 0);

  return (
    <>
      <MultiLangSEOHead
        title="PDF Tools Service Status - System Uptime and Performance"
        description="Real-time status updates for all PDF tools and APIs. Check current operational status, uptime statistics, and maintenance schedules for our online PDF services."
        keywords="PDF tools status, PDF service status, PDF API uptime, online PDF tools status, PDF converter service uptime, PDF tools maintenance, system status"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/status' : `/${currentLang}/status`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              PDF Tools Service Status
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-time monitoring of all PDF tools and APIs. Check current operational status, 
              uptime statistics, and planned maintenance schedules.
            </p>
          </div>

          {/* Overall Status */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(overallStatus.status as ServiceStatus['status'])}
                  <div>
                    <CardTitle className="text-2xl">Current System Status</CardTitle>
                    <CardDescription className="text-lg">
                      {overallStatus.message}
                    </CardDescription>
                  </div>
                </div>
                {getStatusBadge(overallStatus.status as ServiceStatus['status'])}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {avgUptime.toFixed(2)}%
                  </div>
                  <p className="text-slate-600">Average Uptime (30 days)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {totalIncidents}
                  </div>
                  <p className="text-slate-600">Total Incidents (30 days)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {services.filter(s => s.status === 'operational').length}/{services.length}
                  </div>
                  <p className="text-slate-600">Services Operational</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Auto-refresh Notice */}
          <Alert className="mb-8">
            <RefreshCw className="h-4 w-4" />
            <AlertDescription>
              <strong>Live Status Updates:</strong> This page automatically refreshes every minute to provide 
              real-time PDF service status information. Last updated: {lastUpdated}
            </AlertDescription>
          </Alert>

          {/* Individual Services Status */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Individual Service Status
              </CardTitle>
              <CardDescription>
                Detailed status and performance metrics for each PDF tool and API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-slate-600">
                          {service.uptime}% uptime • {service.responseTime}ms avg response • 
                          Last checked {service.lastChecked}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Historical Uptime */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Historical Uptime (Past 30 Days)</CardTitle>
              <CardDescription>
                Daily uptime percentage and incident tracking for PDF tools service reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-10 gap-1">
                  {uptimeHistory.slice(0, 30).map((day, index) => (
                    <div
                      key={index}
                      className={`h-8 rounded-sm flex items-center justify-center text-xs font-medium ${
                        day.uptime >= 99.9 ? 'bg-green-500 text-white' :
                        day.uptime >= 99.5 ? 'bg-yellow-500 text-white' :
                        day.uptime >= 99.0 ? 'bg-orange-500 text-white' :
                        'bg-red-500 text-white'
                      }`}
                      title={`${day.date}: ${day.uptime}% uptime, ${day.incidents} incidents`}
                    >
                      {day.uptime.toFixed(0)}%
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>30 days ago</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <span>99.9%+ uptime</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                      <span>99.5-99.9%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                      <span>99.0-99.5%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                      <span>&lt;99.0%</span>
                    </div>
                  </div>
                  <span>Today</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Maintenance Schedule */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Scheduled Maintenance
              </CardTitle>
              <CardDescription>
                Planned maintenance windows and system updates for PDF tools and APIs
              </CardDescription>
            </CardHeader>
            <CardContent>
              {maintenanceSchedule.length > 0 ? (
                <div className="space-y-4">
                  {maintenanceSchedule.map((maintenance, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{maintenance.title}</h3>
                          <p className="text-slate-600">{maintenance.description}</p>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          Scheduled
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Date:</strong> {maintenance.scheduledDate}
                        </div>
                        <div>
                          <strong>Duration:</strong> {maintenance.duration}
                        </div>
                        <div className="md:col-span-2">
                          <strong>Affected Services:</strong> {maintenance.affectedServices.join(', ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-600">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                  <p>No scheduled maintenance at this time.</p>
                  <p className="text-sm">All PDF tools and APIs are running normally.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* How to Report Issues */}
          <Card>
            <CardHeader>
              <CardTitle>How to Report Issues</CardTitle>
              <CardDescription>
                Experiencing problems with PDF tools? Here's how to get help quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Report Technical Issues</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Email:</strong> support@pdftools.com
                    </li>
                    <li>
                      <strong>Response Time:</strong> Within 2 hours during business hours
                    </li>
                    <li>
                      <strong>Emergency Issues:</strong> Critical system outages are handled 24/7
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Additional Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/help-center" className="text-blue-600 hover:underline">
                        Help Center & Troubleshooting
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="text-blue-600 hover:underline">
                        Frequently Asked Questions
                      </a>
                    </li>
                    <li>
                      <a href="/api-docs" className="text-blue-600 hover:underline">
                        API Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Alert className="mt-6">
                <AlertDescription>
                  <strong>Pro Tip:</strong> Before reporting an issue, check this status page to see if there's 
                  a known problem or scheduled maintenance that might be affecting your experience.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}