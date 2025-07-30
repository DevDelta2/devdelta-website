"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! 👋 Welcome to DevDelta. How can we help you today?' }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Show notification after 3 seconds
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 3000);

        return () => clearTimeout(timer);
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

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            setMessages([...messages, { type: 'user', text: inputMessage }]);
            // Simulate bot response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: 'Thank you for your message! A DevDelta representative will contact you shortly. For urgent matters, please email us directly at devdeltaclient@gmail.com'
                }]);
            }, 1000);
            setInputMessage('');
        }
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const openChatWithMessage = (customMessage?: string) => {
        setChatOpen(true);
        setShowNotification(false);
        if (customMessage) {
            setMessages([
                { type: 'bot', text: 'Hello! 👋 Welcome to DevDelta. How can we help you today?' },
                { type: 'bot', text: customMessage }
            ]);
        }
    };

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

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-position: -200% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }

                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                .animate-on-scroll {
                    opacity: 0;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-pulse {
                    animation: pulse 2s ease-in-out infinite;
                }

                .animate-slide-in {
                    animation: slideIn 0.3s ease-out forwards;
                }

                .animate-bounce {
                    animation: bounce 1s ease-in-out infinite;
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .glass-effect-dark {
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .shimmer {
                    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
                    background-size: 200% 100%;
                    animation: shimmer 3s ease-in-out infinite;
                }

                .nav-link {
                    position: relative;
                    transition: all 0.3s ease;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: #54504F;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .nav-link:active {
                    transform: scale(0.95);
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
                                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-link text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium">Home</a>
                                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="nav-link text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium">Services</a>
                                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="nav-link text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium">About</a>
                                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="nav-link text-[#474342] hover:text-[#54504F] px-3 py-2 text-sm font-medium">Contact</a>
                            </div>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#474342] hover:text-[#54504F] p-2 transition-transform duration-200 active:scale-90"
                        >
                            <span className="text-2xl font-bold">{mobileMenuOpen ? '×' : '<>'}</span>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-[#949291]/20 animate-fade-in-up">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-[#474342] hover:text-[#54504F] hover:bg-[#F1F0EE] block px-3 py-2 text-base font-medium rounded-lg transition-all">Home</a>
                            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-[#474342] hover:text-[#54504F] hover:bg-[#F1F0EE] block px-3 py-2 text-base font-medium rounded-lg transition-all">Services</a>
                            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-[#474342] hover:text-[#54504F] hover:bg-[#F1F0EE] block px-3 py-2 text-base font-medium rounded-lg transition-all">About</a>
                            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-[#474342] hover:text-[#54504F] hover:bg-[#F1F0EE] block px-3 py-2 text-base font-medium rounded-lg transition-all">Contact</a>
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
                            <span className="text-[#54504F]">Elevate the awesome.</span> <span className="animate-float inline-block">🚀</span>
                        </h1>
                        <p className="text-lg text-[#6E6A69] mb-8 max-w-3xl mx-auto italic animate-on-scroll">
                            "Why did the developer automate their coffee maker? Because coding before caffeine is a syntax error." ☕💻
                        </p>
                        <p className="text-xl text-[#615D5C] mb-10 max-w-4xl mx-auto animate-on-scroll">
                            At DevDelta, we help businesses automate the boring and elevate the awesome. 🚀💪🎯 We specialize in end-to-end automation solutions—from simple workflows to advanced AI-powered systems—helping startups and enterprises scale smarter and faster.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap animate-on-scroll">
                            <button
                                onClick={() => openChatWithMessage("Great! I see you're ready to start your journey with DevDelta. 🚀 What type of project are you looking to build? We can help with automation, AI integration, web development, or custom solutions.")}
                                className="bg-[#474342] hover:bg-[#54504F] text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 animate-pulse"
                            >
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
                    <button
                        onClick={() => openChatWithMessage("Excellent! You're ready to transform your business with DevDelta. 💡 Tell us about your biggest challenge right now - what manual process is slowing you down that we can help automate?")}
                        className="bg-white text-[#474342] hover:bg-[#F1F0EE] font-semibold py-4 px-10 rounded-lg transition-all transform hover:scale-105 text-lg animate-on-scroll"
                    >
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
                                <div className="animate-pulse">
                                    <h4 className="text-3xl font-bold text-[#54504F]">36</h4>
                                    <p className="text-[#6E6A69]">Projects Delivered</p>
                                </div>
                                <div className="animate-pulse" style={{animationDelay: '0.5s'}}>
                                    <h4 className="text-3xl font-bold text-[#54504F]">14</h4>
                                    <p className="text-[#6E6A69]">Happy Clients</p>
                                </div>
                                <div className="animate-pulse" style={{animationDelay: '1s'}}>
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
                            <div className="absolute -bottom-4 -right-4 bg-[#474342] text-white p-4 rounded-lg animate-float">
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
            <footer className="bg-[#474342] py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                <div className="absolute inset-0 shimmer"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="glass-effect-dark rounded-2xl p-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="logo-font text-3xl font-bold text-white tracking-wider mb-4 animate-pulse">DEVDELTA</h2>
                                <p className="text-gray-300 mb-2">Innovating Tomorrow, Today</p>
                                <p className="text-gray-400 text-sm">© 2025 DevDelta S.R.L.</p>
                                <p className="text-gray-400 text-sm">All rights reserved.</p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                                <div className="space-y-2">
                                    <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                                    <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                                    <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                                </div>
                            </div>

                            <div className="text-center md:text-right">
                                <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                                <div className="flex justify-center md:justify-end space-x-4 mb-4">
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-effect w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-effect w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://fiverr.com/devdelta_ra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-effect w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all"
                                    >
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M13.639,9.197C13.639,10.197 13.639,11.197 13.639,12.197C12.139,12.197 10.639,12.197 9.139,12.197C9.139,11.197 9.139,10.197 9.139,9.197C10.639,9.197 12.139,9.197 13.639,9.197C13.639,9.197 13.639,9.197 13.639,9.197M13.639,14.197C13.639,15.197 13.639,16.197 13.639,17.197C12.139,17.197 10.639,17.197 9.139,17.197C9.139,16.197 9.139,15.197 9.139,14.197C10.639,14.197 12.139,14.197 13.639,14.197C13.639,14.197 13.639,14.197 13.639,14.197M16.639,9.197C17.639,9.197 18.639,9.197 19.639,9.197C19.639,10.197 19.639,11.197 19.639,12.197C18.639,12.197 17.639,12.197 16.639,12.197C16.639,11.197 16.639,10.197 16.639,9.197C16.639,9.197 16.639,9.197 16.639,9.197M16.639,14.197C17.639,14.197 18.639,14.197 19.639,14.197C19.639,15.197 19.639,16.197 19.639,17.197C18.639,17.197 17.639,17.197 16.639,17.197C16.639,16.197 16.639,15.197 16.639,14.197C16.639,14.197 16.639,14.197 16.639,14.197M12,2C17.514,2 22,6.486 22,12C22,17.514 17.514,22 12,22C6.486,22 2,17.514 2,12C2,6.486 6.486,2 12,2C12,2 12,2 12,2M12,0C5.373,0 0,5.373 0,12C0,18.627 5.373,24 12,24C18.627,24 24,18.627 24,12C24,5.373 18.627,0 12,0C12,0 12,0 12,0"/>
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-gray-400 text-sm">devdeltaclient@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-4 border-t border-gray-600">
                        <p className="text-gray-400 text-sm animate-pulse">
                            Made with ❤️ and lots of ☕ by DevDelta Team
                        </p>
                    </div>
                </div>
            </footer>

            {/* AI Assistant Button with Notification */}
            <div className="fixed bottom-6 right-6 z-40">
                {showNotification && !chatOpen && (
                    <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 animate-slide-in">
                        <p className="text-sm text-[#474342] font-medium whitespace-nowrap">Can we take your order? 💬</p>
                        <div className="absolute bottom-0 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                    </div>
                )}
                <button
                    onClick={() => openChatWithMessage()}
                    className="bg-[#474342] hover:bg-[#54504F] text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-pulse"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            </div>

            {/* AI Chat Modal */}
            {chatOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col animate-fade-in-up">
                        {/* Chat Header */}
                        <div className="bg-[#474342] text-white p-4 rounded-t-2xl flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">DevDelta AI Assistant</h3>
                                    <p className="text-xs text-gray-300">Online now</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setChatOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${
                                            message.type === 'user'
                                                ? 'bg-[#474342] text-white'
                                                : 'bg-[#F1F0EE] text-[#474342]'
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#474342]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#474342] hover:bg-[#54504F] text-white p-2 rounded-lg transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}