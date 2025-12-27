# 🔐 Smart Password Risk Analyzer

A modern, responsive web application that evaluates the strength and vulnerability of your passwords in real-time. Built with React, TypeScript, and Chakra UI.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-3.30-319795?style=flat&logo=chakraui)

## ✨ Features

- **Real-time Strength Indicator** - Visual feedback as you type with 4-level strength assessment (Weak, Medium, Strong, Very Strong)
- **Comprehensive Risk Analysis** - Detailed scoring system (0-100) with risk classification (Low, Medium, High)
- **Password Issue Detection** - Identifies specific weaknesses in your password:
  - Missing uppercase/lowercase letters
  - Missing numbers or special characters
  - Too short passwords
  - Repeated characters (e.g., "aaa")
  - Sequential patterns (e.g., "abc", "123")
  - Common password detection
- **Crack Time Estimation** - Estimates how long it would take to brute-force your password (based on 1 billion guesses/second)
- **Show/Hide Password Toggle** - Securely view your password while typing
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Library:** Chakra UI v3
- **Password Strength Library:** check-password-strength
- **Icons:** React Icons
- **Animation:** Framer Motion

## 📁 Project Structure

```
src/
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
├── index.css                   # Global styles
├── components/
│   ├── PasswordInput.tsx       # Password input with show/hide toggle
│   ├── ResultCard.tsx          # Analysis results display card
│   ├── StrengthIndicator.tsx   # Visual strength meter component
│   └── RuleList.tsx            # Password rules component
├── utils/
│   └── analyzePassword.ts      # Password analysis logic & scoring
└── styles/                     # Additional style files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/smart-password-risk-analyzer.git
   cd smart-password-risk-analyzer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Start development server with hot reload               |
| `npm run build`   | Build for production (TypeScript compile + Vite build) |
| `npm run preview` | Preview production build locally                       |
| `npm run lint`    | Run ESLint for code quality checks                     |

## 🔍 How It Works

### Scoring Algorithm

The password analyzer evaluates passwords based on multiple criteria:

| Criteria               | Points |
| ---------------------- | ------ |
| Length (6-8 chars)     | +10    |
| Length (8-10 chars)    | +20    |
| Length (10-14 chars)   | +25    |
| Length (14+ chars)     | +30    |
| Contains lowercase     | +10    |
| Contains uppercase     | +10    |
| Contains numbers       | +10    |
| Contains special chars | +10    |
| Repeated characters    | -10    |
| Sequential patterns    | -10    |
| Common password        | -20    |

### Risk Classification

| Score  | Risk Level     |
| ------ | -------------- |
| 70-100 | 🟢 Low Risk    |
| 40-69  | 🟡 Medium Risk |
| 0-39   | 🔴 High Risk   |

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
