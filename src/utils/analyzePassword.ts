export function analyzePassword(password: string) {
  let score: number = 0;
  let issues: string[] = [];

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

  if (password.match(/[a-z]/)) {
    score += 10;
  } else {
    issues.push("NO_LOWERCASE");
  }

  if (password.match(/[A-Z]/)) {
    score += 10;
  } else {
    issues.push("NO_UPPERCASE");
  }
  if (password.match(/[0-9]/)) {
    score += 10;
  } else {
    issues.push("NO_NUMBER");
  }
  if (password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    score += 10;
  } else {
    issues.push("NO_SPECIAL_CHAR");
  }

  return { score, issues };
}
