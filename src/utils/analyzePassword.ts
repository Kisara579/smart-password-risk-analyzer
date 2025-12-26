function formatCrackTime(seconds: number) {
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 3.1536e9) return `${Math.round(seconds / 31536000)} years`;
  return `${Math.round(seconds / 3.1536e9)} centuries`;
}

export function analyzePassword(password: string) {
  const GUESSES_PER_SECOND = 1000000000;
  let score: number = 0;
  let issues: string[] = [];
  let poolSize = 0;

  // Length assessment
  if (password.length < 6) {
    score += 0;
    issues.push("TOO_SHORT");
  } else if (password.length >= 6 && password.length < 8) {
    score += 10;
  } else if (password.length >= 8 && password.length < 10) {
    score += 20;
  } else if (password.length >= 10 && password.length < 14) {
    score += 25;
  } else {
    score += 30;
  }

  // Character variety
  if (password.match(/[a-z]/)) {
    score += 10;
    poolSize += 26;
  } else {
    issues.push("NO_LOWERCASE");
  }

  if (password.match(/[A-Z]/)) {
    score += 10;
    poolSize += 26;
  } else {
    issues.push("NO_UPPERCASE");
  }
  if (password.match(/[0-9]/)) {
    score += 10;
    poolSize += 10;
  } else {
    issues.push("NO_NUMBER");
  }
  if (password.match(/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/)) {
    score += 10;
    poolSize += 32;
  } else {
    issues.push("NO_SPECIAL_CHAR");
  }

  // Repeated characters
  if (/(.)\1\1/.test(password)) {
    score -= 10;
    issues.push("REPEATED_CHARS");
  }

  // Sequential characters
  const lower = password.toLowerCase();
  for (let i = 0; i < lower.length - 2; i++) {
    if (
      lower.charCodeAt(i) + 1 === lower.charCodeAt(i + 1) &&
      lower.charCodeAt(i) + 2 === lower.charCodeAt(i + 2)
    ) {
      score -= 10;
      issues.push("SEQUENTIAL_PATTERN");
      break;
    }
  }

  // Common passwords
  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];
  if (commonPasswords.includes(password.toLowerCase())) {
    score -= 20;
    issues.push("COMMON_PASSWORD");
  }

  score = Math.max(0, score);

  let combinations = Math.pow(poolSize, password.length);
  let crackTime = formatCrackTime(combinations / GUESSES_PER_SECOND);

  return { score, issues, crackTime };
}
