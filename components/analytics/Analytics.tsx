"use client"

import React from 'react';
import MapView from './MapView';
import SummaryStats from './SummaryStats';
import RealTimeAlerts from './RealTimeAlerts';
import AlertHistory from './AlertHistory';
import TrendAnalysis from './TrendAnalysis';
import SiteHealthTrends from './SiteHealthTrends';
import ComparativeAnalysis from './ComparativeAnalysis';
import PredictiveAnalytics from './PredictiveAnalytics';
import CustomQueries from './CustomQueries';
import UserActivity from './UserActivity';
import EngagementMetrics from './EngagementMetrics';

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <MapView />
        </div>
        <div>
          <SummaryStats />
        </div>
        <div>
          <RealTimeAlerts />
        </div>
        <div>
          <AlertHistory />
        </div>
        <div className="lg:col-span-2">
          <TrendAnalysis />
        </div>
        <div className="lg:col-span-2">
          <SiteHealthTrends />
        </div>
        <div className="lg:col-span-2">
          <ComparativeAnalysis />
        </div>
        <div>
          <PredictiveAnalytics />
        </div>
        <div>
          <CustomQueries />
        </div>
        <div>
          <UserActivity />
        </div>
        <div>
          <EngagementMetrics />
        </div>
      </div>
    </div>
  );
};

export default Analytics;