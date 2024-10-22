"use client"

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus, ChevronDown, FileText, Upload, Folder, ArrowLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import HistoricalData from './HistoricalData';
import CommunityContributions from './CommunityContributions';
import ComprehensiveReports from './ComprehensiveReports';
import CustomReportBuilder from './CustomReportBuilder';
import ScheduledReports from './ScheduledReports';
import CustomReport from './CustomReport';

const Reports = () => {
  const [showCustomReport, setShowCustomReport] = useState(false);
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [currentReport, setCurrentReport] = useState({ title: '', content: '', file: null });
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('');
  const [newFolderName, setNewFolderName] = useState('');

  const handleNewCustomReport = () => {
    setShowCustomReport(true);
    setCurrentReport({ title: '', content: '', file: null });
  };

  const handleUploadReports = (event) => {
    const uploadedFiles = Array.from(event.target.files).map(file => ({
      name: file.name,
      content: URL.createObjectURL(file),
      file: file
    }));
    setFiles(prevFiles => [...prevFiles, ...uploadedFiles]);
  };

  const handleNewFolder = () => {
    if (newFolderName) {
      setFolders(prevFolders => [...prevFolders, newFolderName]);
      setNewFolderName('');
      setShowSaveDialog(false);
    }
  };

  const handleBack = () => {
    setShowCustomReport(false);
  };

  const handleSave = () => {
    setShowSaveDialog(true);
  };

  const handleSaveConfirm = () => {
    if (currentReport.title) {
      const newFile = {
        name: `${currentReport.title}.docx`,
        content: currentReport.content,
        file: currentReport.file
      };
      if (selectedFolder) {
        // Logic to save file in the selected folder
        console.log(`Saving ${newFile.name} in folder: ${selectedFolder}`);
      } else {
        setFiles(prevFiles => [...prevFiles, newFile]);
      }
      setShowCustomReport(false);
      setShowSaveDialog(false);
    } else {
      alert("Please enter a title for your report.");
    }
  };

  const handleReportChange = (title, content) => {
    setCurrentReport(prev => ({ ...prev, title, content }));
  };

  const handleFileClick = (file) => {
    setShowCustomReport(true);
    setCurrentReport({ title: file.name.replace('.docx', ''), content: file.content, file: file.file });
  };

  return (
    <div className="p-6 space-y-6">
      <Tabs defaultValue="create">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Reports</TabsTrigger>
          <TabsTrigger value="submit">Submit New Data</TabsTrigger>
          <TabsTrigger value="view">View Historical Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <Card>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                {showCustomReport && (
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" /> New <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={handleNewCustomReport}>
                      <FileText className="mr-2 h-4 w-4" /> Custom Report
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => document.getElementById('file-upload').click()}>
                      <Upload className="mr-2 h-4 w-4" /> Upload Report(s)
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowSaveDialog(true)}>
                      <Folder className="mr-2 h-4 w-4" /> New Folder
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleUploadReports}
                  style={{ display: 'none' }}
                />
              </div>
              {showCustomReport ? (
                <CustomReport 
                  report={currentReport}
                  onSave={handleSave} 
                  onChange={handleReportChange} 
                />
              ) : (
                <div className="border rounded-md p-4 min-h-[400px] bg-white dark:bg-gray-800">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Folders</h3>
                    {folders.length > 0 ? (
                      <ul>
                        {folders.map((folder, index) => (
                          <li key={index} className="flex items-center">
                            <Folder className="mr-2 h-4 w-4" /> {folder}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No folders created yet.</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Files</h3>
                    {files.length > 0 ? (
                      <ul>
                        {files.map((file, index) => (
                          <li key={index} className="flex items-center cursor-pointer" onClick={() => handleFileClick(file)}>
                            <FileText className="mr-2 h-4 w-4" /> {file.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No files uploaded yet.</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="submit">
          {/* ... (Submit New Data content remains unchanged) ... */}
        </TabsContent>
        <TabsContent value="view">
          <HistoricalData />
        </TabsContent>
      </Tabs>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Report</DialogTitle>
            <DialogDescription>
              Choose a folder to save your report or create a new one.
            </DialogDescription>
          </DialogHeader>
          <Select onValueChange={setSelectedFolder}>
            <SelectTrigger>
              <SelectValue placeholder="Select folder" />
            </SelectTrigger>
            <SelectContent>
              {folders.map((folder, index) => (
                <SelectItem key={index} value={folder}>{folder}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="New folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <Button onClick={handleNewFolder}>Create Folder</Button>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveConfirm}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <CommunityContributions />
      <ComprehensiveReports />
      <CustomReportBuilder />
      <ScheduledReports />
    </div>
  );
};

export default Reports;