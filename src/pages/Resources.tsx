
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Video, Headphones, Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-16 bg-islamic-pattern">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-islamic-darkGreen mb-6 text-center">Islamic Resources</h1>
            <p className="text-islamic-navy text-lg text-center max-w-3xl mx-auto mb-12">
              Explore our collection of Islamic resources, including Quran recitations, educational books, scholarly lectures, and more.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <BookOpen className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Quran & Tafsir</CardTitle>
                  <CardDescription>Quranic texts with translations and commentaries</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Complete Quran with multiple translations</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Tafsir Ibn Kathir</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Word-by-word translation and grammar</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access Resources
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <Headphones className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Audio Recitations</CardTitle>
                  <CardDescription>Beautiful Quranic recitations by renowned reciters</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Headphones className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Sheikh Abdul Rahman Al-Sudais</span>
                    </li>
                    <li className="flex items-center">
                      <Headphones className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Sheikh Mishary Rashid Alafasy</span>
                    </li>
                    <li className="flex items-center">
                      <Headphones className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Sheikh Mahmoud Khalil Al-Husary</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <Headphones className="mr-2 h-4 w-4" />
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <Video className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Video Lectures</CardTitle>
                  <CardDescription>Educational lectures by scholars on various Islamic topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Video className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Fundamentals of Islamic Beliefs</span>
                    </li>
                    <li className="flex items-center">
                      <Video className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Understanding the Seerah</span>
                    </li>
                    <li className="flex items-center">
                      <Video className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Contemporary Fiqh Issues</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Lectures
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <BookOpen className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>E-Books Library</CardTitle>
                  <CardDescription>Downloadable Islamic books in multiple languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Classical Islamic Texts</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Contemporary Islamic Books</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Children's Islamic Literature</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download E-Books
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <FileText className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Research Papers</CardTitle>
                  <CardDescription>Academic papers on Islamic studies and related fields</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Islamic Legal Studies</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Contemporary Islamic Thought</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Islamic History and Civilization</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Browse Research
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <BookOpen className="h-8 w-8 text-islamic-green" />
                  </div>
                  <CardTitle>Educational Tools</CardTitle>
                  <CardDescription>Learning materials for students and educators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Arabic Language Worksheets</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Islamic Studies Curriculum</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 text-islamic-darkGreen mr-2" />
                      <span>Teaching Guides and Resources</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Materials
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-islamic-darkGreen mb-4 text-center">Resource Requests</h2>
              <p className="text-islamic-navy mb-6 text-center">
                Don't see what you're looking for? Contact our library team for specific resource requests.
              </p>
              <div className="flex justify-center">
                <Button className="bg-islamic-green hover:bg-islamic-darkGreen text-white">
                  Request Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
