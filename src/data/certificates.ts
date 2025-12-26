export interface Certificate {
  id: string;
  title: string;
  organization: string;
  description: string;
  issueDate: string;
  expirationDate: string;
  credentialId: string;
  credentialUrl: string; // The URL to the official badge page (if available) or #
  asset: string; // The local PDF file
}

import cc1 from '../assets/cc1.png';
import cc2 from '../assets/cc2.png';
import cc3 from '../assets/cc3.png';
import cc4 from '../assets/cc4.png';

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Introduction to Cybersecurity",
    organization: "Cisco",
    description: "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course.",
    issueDate: "11/25/2024",
    expirationDate: "This credential does not expire",
    credentialId: "f57daaa8-8370-4c82-b692-f23f637d7871",
    credentialUrl: "#", 
    asset: cc1
  },
  {
    id: "2",
    title: "JavaScript Essentials 1",
    organization: "Cisco",
    description: "Cisco, in collaboration with OpenEDG JS Institute, verifies that the earner has successfully completed the JavaScript Essentials 1 course.",
    issueDate: "12/01/2025",
    expirationDate: "This credential does not expire",
    credentialId: "a31eab00-e4b7-4747-8599-e0974713470e",
    credentialUrl: "#",
    asset: cc2
  },
  {
    id: "3",
    title: "JavaScript Essentials 2",
    organization: "Cisco",
    description: "Cisco, in collaboration with OpenEDG JS Institute, verifies that the earner has successfully completed the JavaScript Essentials 2 course.",
    issueDate: "12/22/2025",
    expirationDate: "This credential does not expire",
    credentialId: "719619f2-f6a0-4e72-b176-8a0338276734",
    credentialUrl: "#",
    asset: cc3
  },
  {
    id: "4",
    title: "Networking Basics",
    organization: "Cisco",
    description: "Cisco verifies the earner of this badge successfully completed the Networking Basics course.",
    issueDate: "11/18/2025",
    expirationDate: "This credential does not expire",
    credentialId: "9453ffa7-d326-44e9-b909-5048585e1333",
    credentialUrl: "#",
    asset: cc4
  }
];
