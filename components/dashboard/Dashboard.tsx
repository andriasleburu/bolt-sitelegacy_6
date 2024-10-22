"use client"

import React from 'react';
import WorldHeritageSitesMap from './WorldHeritageSitesMap';
import NewInscribedProperties from './NewInscribedProperties';
import SiteList from './SiteList';
import TopAlerts from './TopAlerts';
import RecentActivity from './RecentActivity';
import News from './News';
import QuickAccess from './QuickAccess';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WorldHeritageSitesMap />
        </div>
        <div>
          <NewInscribedProperties />
        </div>
        <div className="lg:col-span-2">
          <SiteList />
        </div>
        <div>
          <TopAlerts />
        </div>
        <div>
          <RecentActivity />
        </div>
        <div>
          <News />
        </div>
        <div>
          <QuickAccess />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;