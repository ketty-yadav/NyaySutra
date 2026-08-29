export type Role = "Citizen" | "Lawyer" | "Judge";

export const mockNotifications = [
  { id: 1, text: "New case document added: Sale_Deed_2026.pdf", time: "10 mins ago", isRead: false },
  { id: 2, text: "Hearing scheduled for 18 September", time: "2 hours ago", isRead: false },
  { id: 3, text: "Contract analysis completed for Lease Agreement", time: "1 day ago", isRead: true },
];

export const mockHearings = [
  {
    id: "h1",
    caseName: "Sharma vs. Verma",
    court: "District Court, Meerut",
    date: "12 September 2026",
    time: "10:30 AM",
    status: "Preparation required",
    type: "Evidence Hearing"
  },
  {
    id: "h2",
    caseName: "State vs. Rajesh Kumar",
    court: "High Court",
    date: "15 September 2026",
    time: "12:15 PM",
    status: "Ready",
    type: "Final Arguments"
  },
  {
    id: "h3",
    caseName: "Singh Property Matter",
    court: "District Court",
    date: "18 September 2026",
    time: "3:00 PM",
    status: "Documents pending",
    type: "First Hearing"
  }
];

export const mockDocuments = [
  { id: "d1", name: "Sale_Deed_2026.pdf", status: "Processed", aiStatus: "AI Summary Available", date: "02 Sep 2026" },
  { id: "d2", name: "Court_Order_18Aug.pdf", status: "Processed", aiStatus: "Risk Analyzed", date: "18 Aug 2026" },
  { id: "d3", name: "Written_Statement.pdf", status: "Pending Review", aiStatus: "Processing...", date: "05 Sep 2026" },
  { id: "d4", name: "Lease_Agreement.pdf", status: "Processed", aiStatus: "AI Summary Available", date: "01 Sep 2026" },
  { id: "d5", name: "Evidence_Index.pdf", status: "Verified", aiStatus: "No AI insights", date: "28 Aug 2026" }
];

export const mockReminders = [
  { id: "r1", task: "Submit written response", date: "Tomorrow", priority: "High" },
  { id: "r2", task: "Prepare hearing brief", date: "12 Sep 2026", priority: "High" },
  { id: "r3", task: "Review evidence", date: "14 Sep 2026", priority: "Medium" },
  { id: "r4", task: "Client update", date: "16 Sep 2026", priority: "Low" }
];

export const mockJudgeCauseList = [
  { id: "c1", caseNo: "CIV/2024/0182", name: "Sharma vs. Verma", stage: "Evidence", age: "2y 4m", delayRisk: "Moderate Risk", riskScore: 68 },
  { id: "c2", caseNo: "CRL/2023/0441", name: "State vs. Rajesh Kumar", stage: "Arguments", age: "3y 1m", delayRisk: "Low Risk", riskScore: 24 },
  { id: "c3", caseNo: "CIV/2025/0092", name: "Mehta Property Dispute", stage: "Issues Framed", age: "1y 2m", delayRisk: "High Risk", riskScore: 82 },
  { id: "c4", caseNo: "W.P/2026/0011", name: "Singh vs. State", stage: "Admission", age: "4m", delayRisk: "Low Risk", riskScore: 12 },
];
