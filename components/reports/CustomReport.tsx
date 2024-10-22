"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Undo, Redo } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CustomReport = ({ report, onSave, onChange }) => {
  const [title, setTitle] = useState(report.title || '');
  const [content, setContent] = useState(report.content || '');
  const editorRef = useRef(null);

  useEffect(() => {
    const debounce = setTimeout(() => {
      onChange(title, content);
    }, 1000);

    return () => clearTimeout(debounce);
  }, [title, content, onChange]);

  useEffect(() => {
    if (report.file) {
      // Logic to load and display the file content
      // This is a placeholder and would need to be implemented based on your file format
      console.log("Loading file:", report.file);
    }
  }, [report.file]);

  const handleSave = () => {
    onSave();
  };

  const applyStyle = (style) => {
    document.execCommand(style, false, null);
    editorRef.current.focus();
  };

  return (
    <Card>
      <CardContent className="p-4">
        <Input
          type="text"
          placeholder="Report Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4"
        />
        <div className="mb-4 flex space-x-2 border-b pb-2">
          <Button variant="outline" size="sm" onClick={() => applyStyle('undo')}><Undo className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('redo')}><Redo className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('bold')}><Bold className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('italic')}><Italic className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('underline')}><Underline className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('justifyLeft')}><AlignLeft className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('justifyCenter')}><AlignCenter className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('justifyRight')}><AlignRight className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('insertUnorderedList')}><List className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" onClick={() => applyStyle('insertOrderedList')}><ListOrdered className="h-4 w-4" /></Button>
          <Select onValueChange={(value) => document.execCommand('formatBlock', false, value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Styles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="p">Normal</SelectItem>
              <SelectItem value="h1">Heading 1</SelectItem>
              <SelectItem value="h2">Heading 2</SelectItem>
              <SelectItem value="h3">Heading 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div
          ref={editorRef}
          className="w-full h-[400px] p-2 border rounded-md overflow-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          contentEditable
          dangerouslySetInnerHTML={{ __html: content }}
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
        />
        <Button onClick={handleSave} className="mt-4">Save</Button>
      </CardContent>
    </Card>
  );
};

export default CustomReport;