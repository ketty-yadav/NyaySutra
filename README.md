# NyaySutra

**Intelligent Legal Assistance Platform**

> Making case information easier to understand, follow, and manage — for citizens, lawyers, and judges.

---

## The Problem

A citizen can check their case status any time they want — and still have no 
real idea what it means for their life.

Legal information exists — case numbers, hearing dates, court orders — but it's 
scattered, written in legal language, and dependent on someone else (usually 
the lawyer) to explain it. Access to information is not the same as 
understanding your case.

---

## What NyaySutra Does

NyaySutra connects case visibility, legal document understanding, research 
assistance, and case management into one role-based platform — for citizens, 
lawyers, and judges.

It does not replace the legal system. It makes the case journey understandable 
and visible to the person living through it.

---

## Key Features

- **Role-Based Dashboards** — separate views for Citizens, Lawyers, and Judges
- **Legal Document Summarizer** — simplifies orders, notices, and judgments into plain English/Hindi
- **Legal Precedent Finder** — semantic search for relevant past judgments
- **Contract & Legal Notice Analyzer** — flags risky clauses and generates a risk score
- **Court Delay Prediction** — realistic case duration estimates based on judicial trends
- **Hearing Preparation Assistant** — auto-generated checklists before every hearing
- **Property Dispute Assistant** — organizes ownership timelines and land records
- **Lawyer Transparency Module** — every lawyer action becomes visible to the citizen in real time
- **Smart Reminders** — never miss a hearing, deadline, or filing date
- **Secure Digital Case Locker** — encrypted document storage with OTP + role-based access
- **Multilingual Support** — English and Hindi at launch, more regional languages planned
- **Voice Assistant** — ask "When is my next hearing?" and get a plain-language answer

---

## Tech Stack

**Frontend:** Next.js (React), React Native, Tailwind CSS
**Backend:** Python, FastAPI, REST API
**Database:** PostgreSQL, Redis
**Legal Intelligence:** LLM, NLP, RAG, Semantic Search, Vector Database
**Document Processing:** OCR, PDF Parsing
**Search:** Elasticsearch
**Security:** JWT, OTP, Role-Based Access Control, Encryption, Audit Logs
**Voice:** Speech-to-Text, Text-to-Speech
**Cloud & Deployment:** AWS/GCP, Docker, GitHub

---

## Gap Analysis

| Existing Approach | What It Provides | Remaining Gap |
|---|---|---|
| **eCourts** | Case status, hearings, orders and case information | Information is not presented as one complete, easy-to-understand case journey |
| **Indian Kanoon / SCC Online** | Judgments and legal research access | Users still need to interpret and connect the information themselves |
| **LawRato** | Lawyer discovery and legal information access | Case-specific updates still depend on individual lawyer communication |
| **Lawyer–Client Communication (general)** | Case updates through the lawyer | Updates remain dependent on individual communication, not real-time or structured |
| **Separate Legal Tools** | Individual research or document functions | Users need multiple disconnected tools across different stages of a case |

NyaySutra's goal is not to replace existing judicial systems, but to make the 
information around a case easier to understand, follow, and manage.

---

## Research & Validation

### Legal-Tech & Judicial Research
- LLM-based legal document summarization and understanding — [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S1877050926017473)
- Semantic retrieval and analysis of legal case data — [Springer](https://link.springer.com/article/10.1186/s40537-025-01340-1)
- NLP/ML approaches for structured legal information extraction — [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0166361525000168)

### Government Data & Judicial Technology
- National Judicial Data Grid (NJDG) — [njdg.ecourts.gov.in](https://njdg.ecourts.gov.in/njdg_v3/)
- Supreme Court of India — official reports — [sci.gov.in/reports](https://www.sci.gov.in/reports/)
- India's ongoing eCourts initiative already integrates AI, OCR, and NLP for judicial processes, validating the technical direction NyaySutra builds on.

### Platforms Studied
[eCourts](https://services.ecourts.gov.in/ecourtindia_v6/) · 
[Indian Kanoon](https://indiankanoon.org) · 
[SCC Online](https://www.scconline.com/) · 
[LawRato](https://lawrato.com/)

---

## Human Oversight

NyaySutra is designed as an assistance platform. AI-generated outputs are 
intended to support understanding and research, while final legal advice, 
interpretation, and decisions remain with qualified legal professionals.

---

## Team

**Team Name:** Delulu Freaks

Built for Build with Bharat 2.0 Hackathon

---

## License

This project is submitted for hackathon evaluation purposes.
