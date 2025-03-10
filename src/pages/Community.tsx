
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Heart, Globe, BookOpen, MessageSquare } from 'lucide-react';

const Community = () => {
  const upcomingEvents = [
    {
      title: "Weekly Quran Circle",
      date: "Every Saturday, 10:00 AM",
      location: "Main Campus, Room 102",
      description: "Join us for a weekly Quran study and reflection circle.",
      registerLink: "#"
    },
    {
      title: "Islamic History Lecture Series",
      date: "September 15, 2023, 7:00 PM",
      location: "Auditorium",
      description: "A special lecture on the Golden Age of Islamic Civilization.",
      registerLink: "#"
    },
    {
      title: "Community Iftar",
      date: "During Ramadan",
      location: "College Courtyard",
      description: "Join the Al-Hikma community for iftar during the blessed month of Ramadan.",
      registerLink: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-16 bg-islamic-pattern">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-islamic-darkGreen mb-6 text-center">Our Community</h1>
            <p className="text-islamic-navy text-lg text-center max-w-3xl mx-auto mb-12">
              Al-Hikma Islamic College is more than an educational institution; it's a vibrant community united by faith, 
              knowledge, and service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-islamic-lightGreen p-4 rounded-full inline-flex justify-center items-center">
                      <Users size={30} className="text-islamic-darkGreen" />
                    </div>
                  </div>
                  <CardTitle>Student Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy text-center mb-4">
                    Join one of our many student-led organizations focused on academic, spiritual, and social growth.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-islamic-navy">• Muslim Student Association</li>
                    <li className="text-islamic-navy">• Islamic Arts & Culture Club</li>
                    <li className="text-islamic-navy">• Quranic Studies Circle</li>
                    <li className="text-islamic-navy">• Community Service Team</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    Explore Organizations
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-islamic-lightGreen p-4 rounded-full inline-flex justify-center items-center">
                      <Heart size={30} className="text-islamic-darkGreen" />
                    </div>
                  </div>
                  <CardTitle>Volunteer Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy text-center mb-4">
                    Serve the community through various volunteer initiatives throughout the year.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-islamic-navy">• Food Bank Service</li>
                    <li className="text-islamic-navy">• Islamic Education Outreach</li>
                    <li className="text-islamic-navy">• Youth Mentorship Program</li>
                    <li className="text-islamic-navy">• Elderly Care Visits</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    Get Involved
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-islamic-lightGreen p-4 rounded-full inline-flex justify-center items-center">
                      <Globe size={30} className="text-islamic-darkGreen" />
                    </div>
                  </div>
                  <CardTitle>Global Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy text-center mb-4">
                    Participate in international programs connecting students with the global Muslim community.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-islamic-navy">• International Exchange Programs</li>
                    <li className="text-islamic-navy">• Global Islamic Conferences</li>
                    <li className="text-islamic-navy">• Humanitarian Relief Projects</li>
                    <li className="text-islamic-navy">• Cross-Cultural Dialogue</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-islamic-darkGreen mb-4">Upcoming Events</h2>
                <p className="text-islamic-navy max-w-2xl mx-auto">
                  Join us for these upcoming events and strengthen your connection with the Al-Hikma community.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-islamic-gold mr-2" />
                        <CardDescription>{event.date}</CardDescription>
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-islamic-navy mb-2">
                        <span className="font-medium">Location:</span> {event.location}
                      </p>
                      <p className="text-islamic-navy">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-white">
                        Register
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button className="bg-islamic-green hover:bg-islamic-darkGreen text-white">
                  View All Events
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <BookOpen className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Zakat & Sadaqah</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy mb-4">
                    Support Islamic education through your Zakat and Sadaqah contributions. Your donations help provide 
                    scholarships, improve facilities, and expand our educational programs.
                  </p>
                  <p className="text-islamic-navy">
                    100% of your Zakat goes directly to supporting students in need through our scholarship fund.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-islamic-gold hover:bg-islamic-green text-white">
                    Donate Now
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <MessageSquare className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy mb-4">
                    Join our online community forum where students, alumni, faculty, and community members can connect, 
                    share resources, and engage in meaningful discussions.
                  </p>
                  <p className="text-islamic-navy">
                    Recent topics include Islamic finance, contemporary fiqh issues, and interfaith dialogue.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-islamic-green hover:bg-islamic-darkGreen text-white">
                    Join Discussion
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-islamic-darkGreen mb-4">Get Involved</h2>
              <p className="text-islamic-navy mb-6">
                There are many ways to become an active member of the Al-Hikma community. Whether you're a student, 
                parent, alumni, or supporter, we welcome your participation and contribution.
              </p>
              <Button className="bg-islamic-darkGreen hover:bg-islamic-green text-white">
                Contact Community Relations
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
