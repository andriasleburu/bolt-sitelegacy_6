"use client"

import React from 'react';
import MySitesOverview from './MySitesOverview';
import TaskList from './TaskList';
import ActiveProjects from './ActiveProjects';
import ProjectDetails from './ProjectDetails';
import CollaborationTools from './CollaborationTools';
import FundingAndSupport from './FundingAndSupport';

const Projects = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MySitesOverview />
        <TaskList />
      </div>
      <ActiveProjects />
      <ProjectDetails />
      <CollaborationTools />
      <FundingAndSupport />
    </div>
  );
};

export default Projects;