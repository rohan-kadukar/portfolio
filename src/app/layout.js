import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Rohan Kadukar - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies. Check out my portfolio to see my projects and skills.',
  keywords: 'Full Stack Developer, Web Development, React, Node.js, JavaScript, Portfolio',
  authors: [{ name: 'Rohan Kadukar' }],
  creator: 'Rohan Kadukar',
  publisher: 'Rohan Kadukar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rohankadukar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rohan Kadukar - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies. Check out my portfolio to see my projects and skills.',
    url: 'https://rohankadukar.com',
    siteName: 'Rohan Kadukar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohan Kadukar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Kadukar - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies. Check out my portfolio to see my projects and skills.',
    images: ['/og-image.jpg'],
    creator: '@rohankadukar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              // Wait for page to be fully loaded
              window.addEventListener('load', function() {
                // Create button
                var button = document.createElement('div');
                button.id = 'abhinav-chatbot-btn';
                button.innerHTML = 
                  '<div class="relative group transition transform duration-300">' +
                    '<svg viewBox="0 0 24 24" class="w-[35px] h-[35px] fill-white attention-glow">' +
                      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>' +
                    '</svg>' +
                    '<span class="absolute -top-2 -right-2 block h-3 w-3 bg-green-500 rounded-full ring-2 ring-green-300 animate-pulse"></span>' +
                  '</div>';
                document.body.appendChild(button);
                
                // Create chat container (initially hidden)
                var chatbox = document.createElement('div');
                chatbox.id = 'abhinav-chatbot-container';
                chatbox.style.display = 'none';
                
                // Create iframe inside container
                var iframe = document.createElement('iframe');
                iframe.id = 'abhinav-chatbot-iframe';
                iframe.src = 'https://personal-chatbot-buddy.vercel.app/widget';
                chatbox.appendChild(iframe);
                
                // Add close button
                var closeBtn = document.createElement('div');
                closeBtn.id = 'abhinav-chatbot-close';
                closeBtn.innerHTML = '&times;';
                chatbox.appendChild(closeBtn);
                
                // Add to page
                document.body.appendChild(chatbox);
                
                // Add CSS
                var style = document.createElement('style');
                style.textContent = \`
                  #abhinav-chatbot-btn {
                    position: fixed;
                    bottom: 80px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #6366F1, #8B5CF6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    z-index: 99999;
                    transition: all 0.3s;
                  }
                  
                  #abhinav-chatbot-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
                  }
                  
                  #abhinav-chatbot-container {
                    position: fixed;
                    bottom: 90px;
                    right: 20px;
                    width: 360px;
                    height: 420px;
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
                    z-index: 99999;
                  }
                  
                  #abhinav-chatbot-iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                  }
                  
                  #abhinav-chatbot-close {
                    position: absolute;
                    top: 22px;
                    right: 20px;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    // background: rgba(0,0,0,0.1);
                    color: white;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                    z-index: 9999;
                    opacity: 0;
                  }
                  
                  @media (max-width: 480px) {
                    #abhinav-chatbot-container {
                      width: 90vw;
                      height: 70vh;
                      right: 5vw;
                      bottom: 90px;
                    }
                  }
                  /* Updated Attention Glow Animation for the first SVG only */
                  @keyframes attentionGlow {
                    0%, 100% {
                      filter: drop-shadow(0 0 0 rgba(16, 30, 185, 0.8));
                      transform: scale(1);
                    }
                    50% {
                      filter: drop-shadow(0 0 12px rgb(16, 30, 185)) drop-shadow(0 0 6px rgba(16, 30, 185, 0.7));
                      transform: scale(1.1);
                    }
                  }
                  .attention-glow {
                    animation: attentionGlow 3s ease-in-out infinite;
                  }
                \`;
                document.head.appendChild(style);
                
                // Button click - show chat
                button.addEventListener('click', function() {
                  chatbox.style.display = 'block';
                  button.style.display = 'none';
                  
                  // Send message to iframe to start in open state
                  setTimeout(function() {
                    iframe.contentWindow.postMessage({ 
                      type: 'initialState',
                      isOpen: true
                    }, '*');
                  }, 500);
                });
                
                // Close button click
                closeBtn.addEventListener('click', function() {
                  chatbox.style.display = 'none';
                  button.style.display = 'flex';
                });
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        {/* <elevenlabs-convai agent-id="agent_01jx8qt68qe0t9p08r72hy7yjx"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script> */}
        {children}
      </body>
    </html>
  );
}
