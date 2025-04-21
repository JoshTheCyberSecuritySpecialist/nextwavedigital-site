import React from 'react';
import { CaseStudy } from '../../types';
import CaseStudyCard from './CaseStudyCard';

const caseStudies: CaseStudy[] = [
  {
    id: 'phishing-001',
    title: 'Executive Target: Credential Theft',
    summary: 'Fake invoice clicked. Credentials submitted. Blocked by MFA + alert triggered by endpoint rules.',
    details: [
      'Targeted CFO with spoofed email from known vendor',
      'Included realistic invoice attachment with malware',
      'Created convincing login page to harvest credentials',
      'Attempted to bypass 2FA with real-time session hijacking'
    ],
    tools: ['GoPhish', 'Evilginx', 'Defender for Endpoint'],
    outcome: `
# Attack chain blocked at authentication stage
[+] Phishing email delivered successfully
[+] Target clicked malicious link
[+] Credentials entered on fake page
[+] MFA CHALLENGE TRIGGERED
[+] Attack blocked by secondary authentication
[+] Security team alerted
[+] Endpoint quarantined automatically
`
  },
  {
    id: 'ransomware-002',
    title: 'Ransomware Prevention',
    summary: 'Malicious macro detected in email attachment. Execution blocked. System quarantined.',
    details: [
      'Email with macro-enabled document bypassed initial filters',
      'Document designed to download additional payload',
      'Attempted to establish C2 connection',
      'Ransomware payload identified and isolated'
    ],
    tools: ['EDR', 'Email Gateway', 'Sandbox Analysis'],
    outcome: `
# Attack stopped at initial execution
[+] Malicious document detected
[+] Macro execution prevented
[+] C2 connection blocked by firewall
[+] File quarantined
[+] System isolated from network
[+] Forensic analysis completed - no data loss
[+] Improved email filtering rules deployed
`
  },
  {
    id: 'supply-003',
    title: 'Supply Chain Compromise',
    summary: 'Vendor portal account compromised. Attacker attempted to change payment details. Flagged by anomaly detection.',
    details: [
      'Vendor\'s email account compromised through password spray',
      'Attacker gained access to client portal',
      'Attempted to change payment routing information',
      'Unusual login location and behavior detected'
    ],
    tools: ['UEBA', 'IAM', 'Zero Trust Framework'],
    outcome: `
# Fraudulent transaction prevented
[+] Unusual login detected from unauthorized location
[+] Behavioral analytics flagged unusual actions  
[+] Step-up authentication challenge issued
[+] Authentication failed - access blocked
[+] Vendor notified of compromise
[+] Payment verification process hardened
[+] $94,500 fraudulent transfer prevented
`
  }
];

const CaseStudiesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center section-title centered">
          <span className="terminal-text">Breach Attempt: Blocked</span>
        </h2>
        
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Below are real case studies from our security engagements. Company details have been anonymized, but the attacks and protective measures are genuine.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;