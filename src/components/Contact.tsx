
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-darkGreen mb-4">Contact Us</h2>
          <p className="text-islamic-navy max-w-2xl mx-auto">
            Have questions about our programs or admissions? We're here to help you on your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="bg-islamic-lightGreen/30 p-6 rounded-lg border border-islamic-lightGreen mb-8">
              <h3 className="text-xl font-semibold text-islamic-darkGreen mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-islamic-green mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-islamic-darkGreen">Phone</p>
                    <p className="text-islamic-navy">(+1) 555-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-islamic-green mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-islamic-darkGreen">Email</p>
                    <p className="text-islamic-navy">info@alhikma-college.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-islamic-green mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-islamic-darkGreen">Address</p>
                    <p className="text-islamic-navy">123 Knowledge Street, Cambridge, MA 02142</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-islamic-green mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-islamic-darkGreen">Office Hours</p>
                    <p className="text-islamic-navy">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-islamic-navy">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-islamic-navy text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Visit Our Campus</h3>
              <p className="mb-4">We invite you to visit our campus and experience the Al-Hikma difference. Schedule a tour to see our facilities and meet our faculty.</p>
              <Button className="bg-islamic-gold hover:bg-islamic-green text-white">
                Schedule a Visit
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-6 rounded-lg shadow-md border border-islamic-lightGreen">
              <h3 className="text-xl font-semibold text-islamic-darkGreen mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-islamic-navy mb-1">Full Name</label>
                    <Input id="name" placeholder="Your name" className="border-islamic-lightGreen focus:border-islamic-green" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-islamic-navy mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Your email" className="border-islamic-lightGreen focus:border-islamic-green" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-islamic-navy mb-1">Subject</label>
                  <Input id="subject" placeholder="Subject of your message" className="border-islamic-lightGreen focus:border-islamic-green" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-islamic-navy mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} className="border-islamic-lightGreen focus:border-islamic-green" />
                </div>
                
                <Button className="w-full bg-islamic-green hover:bg-islamic-darkGreen text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
