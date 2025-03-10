
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, GraduationCap, FileText, DollarSign } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-16 bg-islamic-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-islamic-darkGreen mb-6 text-center">Admissions</h1>
              
              <div className="bg-white/90 p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-2xl font-semibold text-islamic-darkGreen mb-4">Join Our Community of Learners</h2>
                <p className="text-islamic-navy mb-6">
                  Al-Hikma Islamic College welcomes students of all backgrounds who are seeking a balanced education 
                  that nurtures both intellectual and spiritual growth. Our admissions process is designed to ensure 
                  that each student can thrive in our academic environment.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-islamic-green" />
                        Application Deadlines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-islamic-navy">Fall Semester: June 30</p>
                      <p className="text-islamic-navy">Spring Semester: November 30</p>
                      <p className="text-islamic-navy">Summer Programs: March 31</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-islamic-green" />
                        Eligibility
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-islamic-navy">High School Diploma or equivalent</p>
                      <p className="text-islamic-navy">Minimum GPA: 2.5</p>
                      <p className="text-islamic-navy">Basic understanding of Islamic principles</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-islamic-green" />
                        Required Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-islamic-navy">
                        <li>Completed application form</li>
                        <li>Official transcripts</li>
                        <li>Two letters of recommendation</li>
                        <li>Personal statement</li>
                        <li>Application fee ($50)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-islamic-green" />
                        Financial Aid
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-islamic-navy mb-2">
                        We offer scholarships and financial aid packages based on need and merit.
                      </p>
                      <p className="text-islamic-navy">
                        Financial aid application deadline: One month before the application deadline.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button className="bg-islamic-gold hover:bg-islamic-green text-white px-8 py-6">
                    Apply Now
                  </Button>
                </div>
              </div>
              
              <div className="bg-islamic-lightGreen/30 p-8 rounded-lg border border-islamic-lightGreen">
                <h2 className="text-2xl font-semibold text-islamic-darkGreen mb-4">Admissions Process</h2>
                
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-medium text-islamic-darkGreen text-lg">Submit Application</h3>
                      <p className="text-islamic-navy">Complete the online application form and pay the application fee.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-medium text-islamic-darkGreen text-lg">Document Review</h3>
                      <p className="text-islamic-navy">Our admissions team will review your submitted documents.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-medium text-islamic-darkGreen text-lg">Interview</h3>
                      <p className="text-islamic-navy">Selected candidates will be invited for an interview (in-person or virtual).</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-medium text-islamic-darkGreen text-lg">Admission Decision</h3>
                      <p className="text-islamic-navy">Admission decisions are typically made within 4-6 weeks after the application deadline.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-medium text-islamic-darkGreen text-lg">Enrollment</h3>
                      <p className="text-islamic-navy">Accepted students will receive enrollment instructions and orientation details.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
