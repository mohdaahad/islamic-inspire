
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Languages, Calculator, Code, FileText } from 'lucide-react';

const Courses = () => {
  const islamicCourses = [
    {
      title: 'Quranic Studies',
      description: 'Learn proper recitation (Tajweed), memorization (Hifz), and understanding of the Quran.',
      icon: <BookOpen className="h-8 w-8 text-islamic-green" />,
      level: 'All Levels'
    },
    {
      title: 'Hadith Sciences',
      description: 'Study the sayings and traditions of Prophet Muhammad (PBUH) with authentic narrations.',
      icon: <FileText className="h-8 w-8 text-islamic-green" />,
      level: 'Intermediate'
    },
    {
      title: 'Arabic Language',
      description: 'Master the language of the Quran through comprehensive grammar and vocabulary.',
      icon: <Languages className="h-8 w-8 text-islamic-green" />,
      level: 'Beginner to Advanced'
    }
  ];

  const academicCourses = [
    {
      title: 'Mathematics',
      description: 'Strong foundation in algebra, calculus, and geometry with Islamic contributions to mathematics.',
      icon: <Calculator className="h-8 w-8 text-islamic-darkGreen" />,
      level: 'All Levels'
    },
    {
      title: 'Computer Science',
      description: 'Modern programming skills with emphasis on ethical technology use in Islamic context.',
      icon: <Code className="h-8 w-8 text-islamic-darkGreen" />,
      level: 'Intermediate'
    },
    {
      title: 'General Education',
      description: 'Core subjects including sciences, social studies, and literature with Islamic perspective.',
      icon: <GraduationCap className="h-8 w-8 text-islamic-darkGreen" />,
      level: 'All Levels'
    }
  ];

  return (
    <div className="py-16 bg-islamic-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-darkGreen mb-4">Our Courses & Programs</h2>
          <p className="text-islamic-navy max-w-2xl mx-auto">
            Discover our comprehensive range of Islamic and academic courses designed to nurture both faith and intellect.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-islamic-darkGreen mb-6 text-center">Islamic Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {islamicCourses.map((course, index) => (
              <Card key={index} className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">{course.icon}</div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Level: {course.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-islamic-darkGreen mb-6 text-center">Academic Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicCourses.map((course, index) => (
              <Card key={index} className="border-islamic-lightGreen hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">{course.icon}</div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Level: {course.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-islamic-navy">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-islamic-darkGreen text-islamic-darkGreen hover:bg-islamic-darkGreen hover:text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-islamic-gold hover:bg-islamic-green text-white px-8 py-6">
            View All Programs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
