"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#F1F0EE]">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        .logo-font {
          font-family: 'Orbitron', sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>

            {/* Navigation */}
            <nav className={`bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-[#949291]/20 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <h1 className="logo-font text-2xl font-bold text-[#474342] tracking-wider">DEVDELTA</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#home" className="text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium transition-colors">Home</a>
                                <a href="#services" className="text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium transition-colors">Services</a>
                                <a href="#about" className="text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium transition-colors">About</a>
                                <a href="#contact" className="text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                            </div>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#474342] hover:text-[#54504F]"
                        >
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-[#949291]/20">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#home" className="text-[#474342] hover:text-[#54504F] block px-3 py-2 text-base font-medium">Home</a>
                            <a href="#services" className="text-[#474342] hover:text-[#54504F] block px-3 py-2 text-base font-medium">Services</a>
                            <a href="#about" className="text-[#474342] hover:text-[#54504F] block px-3 py-2 text-base font-medium">About</a>
                            <a href="#contact" className="text-[#474342] hover:text-[#54504F] block px-3 py-2 text-base font-medium">Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 bg-gradient-to-b from-[#F1F0EE] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#474342] mb-6 animate-on-scroll">
                            Automate the boring.<br />
                            <span className="text-[#54504F]">Elevate the awesome.</span> 🚀
                        </h1>
                        <p className="text-lg text-[#6E6A69] mb-8 max-w-3xl mx-auto italic animate-on-scroll">
                            "Why did the developer automate their coffee maker? Because coding before caffeine is a syntax error." ☕💻
                        </p>
                        <p className="text-xl text-[#615D5C] mb-10 max-w-4xl mx-auto animate-on-scroll">
                            At DevDelta, we help businesses automate the boring and elevate the awesome. 🚀💪🎯 We specialize in end-to-end automation solutions—from simple workflows to advanced AI-powered systems—helping startups and enterprises scale smarter and faster.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap animate-on-scroll">
                            <button className="bg-[#474342] hover:bg-[#54504F] text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
                                Start Your Journey
                            </button>
                            <button className="border-2 border-[#474342] text-[#474342] hover:bg-[#474342] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#474342] text-center mb-16 animate-on-scroll">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Custom Automation */}
                        <div className="bg-[#F1F0EE] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2 animate-on-scroll">
                            <div className="text-[#54504F] mb-4">
                                <i className="fas fa-cogs text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#474342] mb-3">Custom Automation</h3>
                            <p className="text-[#6E6A69]">Using both code and no-code/low-code platforms like n8n, we build scalable, efficient workflows tailored to your operations.</p>
                        </div>

                        {/* Full-Stack Development */}
                        <div className="bg-[#F1F0EE] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2 animate-on-scroll">
                            <div className="text-[#54504F] mb-4">
                                <i className="fas fa-layer-group text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#474342] mb-3">Full-Stack Development</h3>
                            <p className="text-[#6E6A69]">Web, mobile, cloud-based—whatever stack you need, we deliver robust, modern applications with clean architecture.</p>
                        </div>

                        {/* AI & Machine Learning */}
                        <div className="bg-[#F1F0EE] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2 animate-on-scroll">
                            <div className="text-[#54504F] mb-4">
                                <i className="fas fa-brain text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#474342] mb-3">AI & Machine Learning</h3>
                            <p className="text-[#6E6A69]">We design and integrate AI agents, ML models, and intelligent systems that actually learn and improve.</p>
                        </div>

                        {/* AI Integrations */}
                        <div className="bg-[#F1F0EE] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2 animate-on-scroll">
                            <div className="text-[#54504F] mb-4">
                                <i className="fas fa-robot text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#474342] mb-3">AI Integrations</h3>
                            <p className="text-[#6E6A69]">Supercharge your existing systems with smart assistants, NLP, predictive analytics, and generative AI features.</p>
                        </div>

                        {/* DevOps & Infrastructure */}
                        <div className="bg-[#F1F0EE] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2 animate-on-scroll">
                            <div className="text-[#54504F] mb-4">
                                <i className="fas fa-server text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#474342] mb-3">DevOps & Infrastructure</h3>
                            <p className="text-[#6E6A69]">From CI/CD pipelines to container orchestration, we streamline your development lifecycle.</p>
                        </div>

                        {/* Startup Enablement */}
                        <div className="bg-[#F1F0EE] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-2 animate-on-scroll">
                            <div className="text-[#54504F] mb-4">
                                <i className="fas fa-rocket text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#474342] mb-3">Startup Enablement</h3>
                            <p className="text-[#6E6A69]">Tech strategy, MVPs, and growth-ready builds for startups ready to move fast and iterate faster.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#474342] to-[#54504F]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll">
                        Let's turn your manual bottlenecks into automated breakthroughs
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 animate-on-scroll">
                        Whether you're looking to eliminate repetitive tasks, build the next big app, or infuse AI into your operations, DevDelta is your partner in innovation.
                    </p>
                    <button className="bg-white text-[#474342] hover:bg-[#F1F0EE] font-semibold py-4 px-10 rounded-lg transition-all transform hover:scale-105 text-lg animate-on-scroll">
                        Get Started Today
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-[#F1F0EE]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="animate-on-scroll">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#474342] mb-6">About DevDelta</h2>
                            <p className="text-[#615D5C] mb-6 text-lg">
                                We're not just another tech company. We're your innovation partners, dedicated to transforming how businesses operate in the digital age.
                            </p>
                            <p className="text-[#6E6A69] mb-8">
                                Our team combines deep technical expertise with business acumen to deliver solutions that don't just work—they excel. From startups to enterprises, we've helped businesses across industries automate their operations and scale their impact.
                            </p>
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <h4 className="text-3xl font-bold text-[#54504F]">100+</h4>
                                    <p className="text-[#6E6A69]">Projects Delivered</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-[#54504F]">50+</h4>
                                    <p className="text-[#6E6A69]">Happy Clients</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-[#54504F]">24/7</h4>
                                    <p className="text-[#6E6A69]">Support</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative animate-on-scroll">
                            <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center">
                                <Image
                                    src="/LogoDevDelta.png"
                                    alt="DevDelta Logo"
                                    width={300}
                                    height={300}
                                    className="w-full max-w-[300px] h-auto"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-[#474342] text-white p-4 rounded-lg">
                                <p className="font-semibold">Innovation First</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#474342] text-center mb-16 animate-on-scroll">Get In Touch</h2>
                    <div className="max-w-3xl mx-auto animate-on-scroll">
                        <div className="bg-[#F1F0EE] rounded-2xl p-8 md:p-12">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-[#474342] font-medium mb-2">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="w-full px-4 py-3 bg-white text-[#474342] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54504F]"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-[#474342] font-medium mb-2">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full px-4 py-3 bg-white text-[#474342] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54504F]"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="project-type" className="block text-[#474342] font-medium mb-2">Project Type</label>
                                    <select
                                        id="project-type"
                                        className="w-full px-4 py-3 bg-white text-[#474342] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54504F]"
                                    >
                                        <option>Custom Automation</option>
                                        <option>Full-Stack Development</option>
                                        <option>AI Integration</option>
                                        <option>DevOps Solutions</option>
                                        <option>Startup MVP</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-[#474342] font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white text-[#474342] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54504F]"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#474342] hover:bg-[#54504F] text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#474342] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="logo-font text-2xl font-bold text-white tracking-wider mb-2">DEVDELTA</h2>
                            <p className="text-gray-400">© 2024 DevDelta S.R.L. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://linkedin.com/company/devdelta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://instagram.com/devdelta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="https://fiverr.com/devdelta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.639 11.928h-3.278V8.65h3.278v3.278zm0 1.639v3.278h-3.278v-3.278h3.278zm1.639-1.639V8.65h3.278v3.278h-3.278zm0 1.639h3.278v3.278h-3.278v-3.278zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}