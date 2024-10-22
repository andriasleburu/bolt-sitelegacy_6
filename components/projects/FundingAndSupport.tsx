"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const FundingAndSupport = () => {
  const fundingData = [
    { grantName: 'UNESCO Heritage Conservation Grant', amount: '$500,000', status: 'Approved', date: '2023-03-15' },
    { grantName: 'Marine Ecosystem Restoration Fund', amount: '$250,000', status: 'Pending', date: '2023-05-20' },
    { grantName: 'Local Tourism Board Support', amount: '$100,000', status: 'In Review', date: '2023-06-01' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funding and Support</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Grant/Support Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fundingData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.grantName}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  <Badge variant={item.status === 'Approved' ? 'default' : item.status === 'Pending' ? 'secondary' : 'outline'}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default FundingAndSupport;