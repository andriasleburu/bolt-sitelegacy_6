"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, MapPin, Calendar, Users, FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { 
      id: 1, 
      title: 'UNESCO World Heritage Committee Meeting', 
      date: '2023-07-15', 
      location: 'Paris, France',
      type: 'Virtual',
      agenda: ['Opening ceremony', 'Review of new nominations', 'Discussion on conservation strategies'],
      speakers: ['Dr. Jane Smith', 'Prof. John Doe'],
    },
    { 
      id: 2, 
      title: 'Great Barrier Reef Conservation Workshop', 
      date: '2023-08-10', 
      location: 'Cairns, Australia',
      type: 'In-person',
      agenda: ['Coral restoration techniques', 'Climate change mitigation', 'Community involvement'],
      speakers: ['Dr. Emma Watson', 'Mr. Chris Hemsworth'],
    },
    { 
      id: 3, 
      title: 'Machu Picchu Sustainable Tourism Seminar', 
      date: '2023-09-05', 
      location: 'Cusco, Peru',
      type: 'Hybrid',
      agenda: ['Visitor management strategies', 'Local community benefits', 'Site preservation techniques'],
      speakers: ['Ms. Maria Garcia', 'Dr. Carlos Rodriguez'],
    },
  ];

  const eventReports = [
    { id: 1, title: 'Summary: UNESCO World Heritage Committee Meeting 2022', date: '2022-07-20' },
    { id: 2, title: 'Workshop Report: Angkor Wat Restoration Techniques', date: '2023-03-15' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button>
          <Video className="mr-2 h-4 w-4" />
          Livestream
        </Button>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
          <TabsTrigger value="reports">Event Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {events.map((event) => (
                  <li key={event.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        <Calendar className="inline-block mr-1 h-4 w-4" />
                        {event.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <MapPin className="inline-block mr-1 h-4 w-4" />
                        {event.location}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Badge>{event.type}</Badge>
                      <Button size="sm" onClick={() => setSelectedEvent(event)}>Details</Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="nearby">
          <Card>
            <CardHeader>
              <CardTitle>Nearby Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature coming soon. We'll use your location to show events near you.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Event Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {eventReports.map((report) => (
                  <li key={report.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      View Report
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedEvent && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedEvent.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="mb-2"><strong>Location:</strong> {selectedEvent.location}</p>
            <p className="mb-2"><strong>Type:</strong> {selectedEvent.type}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Agenda:</h4>
              <ul className="list-disc list-inside">
                {selectedEvent.agenda.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Speakers:</h4>
              <div className="flex space-x-4">
                {selectedEvent.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 5}`} />
                      <AvatarFallback>{speaker.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span>{speaker}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              RSVP / Register
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Events;