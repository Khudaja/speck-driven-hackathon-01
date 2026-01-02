---
id: 1
title: Update Constitution
stage: constitution
date: 2025-12-29
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: master
user: Khudaja Murtaza
command: /sp.constitution
labels: [constitution,setup,initial]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
/sp.constitution

Project: Unified Book + RAG Chatbot

Principles:
- Spec-Kit Plus + Claude Code for Docusaurus book
- Accurate, modular, deployable on GitHub Pages
- RAG chatbot answering ONLY from book text
- Use FastAPI, Neon Postgres, Qdrant, OpenAI Agents/ChatKit

Standards:
- Book: MDX/Markdown, 10-15 chapters, 20k-30k words
- Chatbot: context-aware, fast (<2s response), text-selected answers only
- Code: clean, documented, follows best practices
- Deployment: GitHub Pages + serverless backend

Constraints:
- No external data for chatbot answers
- Use specified tech stack only
- Provide setup and usage docs

Success:
- Book deployed and chatbot embedded
- Accurate, relevant chatbot answers
- Integrated system working smoothly
- Clear code + docs
- Low latency responses
```

## Response snapshot

Updated the constitution file to reflect the principles and requirements for the Unified Book + RAG Chatbot project. Created a comprehensive constitution with six core principles:

1. Spec-Kit Plus + Claude Code Development
2. Accurate, Modular Content Architecture
3. RAG-Only Response Constraint (NON-NEGOTIABLE)
4. Specified Tech Stack Adherence
5. Performance and Latency Requirements
6. Clean, Documented Code Standards

Also added sections for Technology Stack Requirements and Development Workflow, along with governance guidelines.

## Outcome

- ✅ Impact: Updated project constitution with specific principles for the Unified Book + RAG Chatbot project
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Project constitution is established, ready to proceed with specification
- 🧠 Reflection: Constitution now properly reflects the project requirements and constraints

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed with project specification based on established constitution