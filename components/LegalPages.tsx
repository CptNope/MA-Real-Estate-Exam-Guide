import React from 'react';

interface LegalPageProps {
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<LegalPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-950 z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-6 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
          aria-label="Close Privacy Policy and return to main content"
        >
          ← Back to Guide
        </button>

        <article className="prose prose-invert prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-slate-50 mb-6">Privacy Policy</h1>
          
          <p className="text-slate-300 mb-4">
            <strong>Last Updated:</strong> November 23, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Overview</h2>
            <p className="text-slate-300 leading-relaxed">
              MA Real Estate Exam Guide ("we," "our," or "us") is committed to protecting your privacy. 
              This study guide is a free educational tool designed to help Massachusetts real estate students 
              prepare for their licensing exam.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Information We Collect</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              This application runs entirely in your browser. We do not collect, store, or transmit any 
              personal information to external servers.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Local Storage:</strong> Your study progress, quiz scores, and settings are saved 
                locally in your browser using LocalStorage.</li>
              <li><strong>No Tracking:</strong> We do not use cookies, analytics, or tracking scripts.</li>
              <li><strong>No Account Required:</strong> No registration or personal information is required 
                to use this guide.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Data Storage</h2>
            <p className="text-slate-300 leading-relaxed">
              All data is stored locally on your device. This includes:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Quiz progress and scores</li>
              <li>Flashcard completion status</li>
              <li>Calculator history</li>
              <li>Display preferences (dark mode, font size, etc.)</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              You can clear this data at any time by clearing your browser's local storage or cache.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Third-Party Services</h2>
            <p className="text-slate-300 leading-relaxed">
              This application is hosted on GitHub Pages. Please review 
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
                 className="text-blue-400 hover:text-blue-300 underline"
                 target="_blank"
                 rel="noopener noreferrer">
                GitHub's Privacy Policy
              </a> for information about their data practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Your Rights</h2>
            <p className="text-slate-300 leading-relaxed">
              Since we don't collect personal data, there is no data for us to access, modify, or delete. 
              All your study data remains on your device under your control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Changes to This Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be reflected with an 
              updated "Last Updated" date at the top of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have questions about this Privacy Policy, please visit our 
              <a href="https://github.com/CptNope/MA-Real-Estate-Exam-Guide" 
                 className="text-blue-400 hover:text-blue-300 underline"
                 target="_blank"
                 rel="noopener noreferrer">
                GitHub repository
              </a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export const TermsOfService: React.FC<LegalPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-950 z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-6 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
          aria-label="Close Terms of Service and return to main content"
        >
          ← Back to Guide
        </button>

        <article className="prose prose-invert prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-slate-50 mb-6">Terms of Service</h1>
          
          <p className="text-slate-300 mb-4">
            <strong>Last Updated:</strong> November 23, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using the MA Real Estate Exam Guide, you accept and agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Educational Purpose</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              This study guide is provided for educational purposes only to help students prepare for the 
              Massachusetts Real Estate Salesperson Exam.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Content is for study and reference purposes</li>
              <li>Not a substitute for official exam preparation courses</li>
              <li>Does not guarantee exam success</li>
              <li>Should be used alongside official study materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">No Warranty</h2>
            <p className="text-slate-300 leading-relaxed">
              This guide is provided "AS IS" without any warranties, express or implied. We make no 
              guarantees about:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Accuracy or completeness of information</li>
              <li>Suitability for passing the exam</li>
              <li>Availability or uninterrupted access</li>
              <li>Freedom from errors or bugs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              To the maximum extent permitted by law, we shall not be liable for any damages arising 
              from your use or inability to use this study guide, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Exam results or outcomes</li>
              <li>Lost study time or preparation</li>
              <li>Inaccurate information</li>
              <li>Technical issues or data loss</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Acceptable Use</h2>
            <p className="text-slate-300 leading-relaxed">
              You agree to use this guide only for lawful, personal, non-commercial educational purposes. 
              You may not:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Redistribute or sell the content</li>
              <li>Claim authorship of the materials</li>
              <li>Use automated tools to scrape content</li>
              <li>Attempt to compromise the security of the application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Intellectual Property</h2>
            <p className="text-slate-300 leading-relaxed">
              The content and design of this study guide are provided for educational use. All study 
              materials are compiled from publicly available information about Massachusetts real estate law 
              and practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Changes to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Continued use of the 
              guide after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed">
              This is an independent study guide and is not affiliated with, endorsed by, or connected 
              to the Massachusetts Board of Registration of Real Estate Brokers and Salespersons or any 
              official testing organization.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export const AccessibilityStatement: React.FC<LegalPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-950 z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-6 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
          aria-label="Close Accessibility Statement and return to main content"
        >
          ← Back to Guide
        </button>

        <article className="prose prose-invert prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-slate-50 mb-6">Accessibility Statement</h1>
          
          <p className="text-slate-300 mb-4">
            <strong>Last Updated:</strong> November 23, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Our Commitment</h2>
            <p className="text-slate-300 leading-relaxed">
              We are committed to ensuring digital accessibility for all users, including those with 
              disabilities. We continually improve the user experience and apply relevant accessibility 
              standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Conformance Status</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              This study guide strives to conform with the Web Content Accessibility Guidelines (WCAG) 
              2.1 Level AA standards. We have implemented the following features:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong>Keyboard Navigation:</strong> All functionality is accessible via keyboard</li>
              <li><strong>Screen Reader Support:</strong> Proper ARIA labels and semantic HTML</li>
              <li><strong>Color Contrast:</strong> Text meets WCAG AA contrast ratios</li>
              <li><strong>Responsive Design:</strong> Works across devices and screen sizes</li>
              <li><strong>Focus Indicators:</strong> Clear visual focus states for navigation</li>
              <li><strong>Alternative Text:</strong> Descriptive labels for interactive elements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Accessibility Features</h2>
            
            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">Navigation</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Skip to main content links</li>
              <li>Logical heading structure (H1, H2, H3)</li>
              <li>Consistent navigation across pages</li>
              <li>Breadcrumb trails in study modules</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">Visual Design</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>High contrast color scheme</li>
              <li>Readable font sizes (minimum 16px)</li>
              <li>Clear visual hierarchy</li>
              <li>No color-only indicators</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">Interactive Elements</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Form labels properly associated</li>
              <li>Error messages clearly identified</li>
              <li>Buttons have descriptive text</li>
              <li>Links indicate their purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Assistive Technologies</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              This guide has been tested with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>NVDA (Windows)</li>
              <li>JAWS (Windows)</li>
              <li>VoiceOver (macOS/iOS)</li>
              <li>TalkBack (Android)</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Known Limitations</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We are aware of the following limitations and are working to address them:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Some calculator visualizations may be difficult to interpret with screen readers</li>
              <li>Chart and graph data may need alternative text descriptions</li>
              <li>Complex tables in study materials may need simplified alternatives</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Keyboard Shortcuts</h2>
            <div className="bg-slate-800 rounded-lg p-4 mt-4">
              <table className="w-full text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 pr-4">Key</th>
                    <th className="text-left py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 pr-4"><kbd className="bg-slate-700 px-2 py-1 rounded">Tab</kbd></td>
                    <td className="py-2">Navigate forward through interactive elements</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 pr-4"><kbd className="bg-slate-700 px-2 py-1 rounded">Shift + Tab</kbd></td>
                    <td className="py-2">Navigate backward through interactive elements</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 pr-4"><kbd className="bg-slate-700 px-2 py-1 rounded">Enter</kbd></td>
                    <td className="py-2">Activate buttons and links</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><kbd className="bg-slate-700 px-2 py-1 rounded">Esc</kbd></td>
                    <td className="py-2">Close modals and popups</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Feedback</h2>
            <p className="text-slate-300 leading-relaxed">
              We welcome feedback on the accessibility of this study guide. If you encounter any 
              accessibility barriers, please let us know through our 
              <a href="https://github.com/CptNope/MA-Real-Estate-Exam-Guide/issues" 
                 className="text-blue-400 hover:text-blue-300 underline"
                 target="_blank"
                 rel="noopener noreferrer">
                GitHub Issues page
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">Continuous Improvement</h2>
            <p className="text-slate-300 leading-relaxed">
              We regularly review and update our accessibility practices. This statement will be updated 
              to reflect any changes or improvements to accessibility features.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};
