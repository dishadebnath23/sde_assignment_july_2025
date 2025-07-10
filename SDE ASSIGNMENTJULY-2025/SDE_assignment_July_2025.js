function isValidCode(code) {
  if (code.length !== 7) return false;

  for (let i = 0; i < 3; i++) {
    const ch = code[i].toUpperCase();
    if (ch < 'A' || ch > 'Z') return false;
  }

  for (let i = 3; i < 7; i++) {
    const ch = code[i];
    if (ch < '0' || ch > '9') return false;
  }

  return true;
}

function normalizeCode(code) {
  return code.slice(0, 3).toUpperCase() + code.slice(3);
}

function processData(data) {
  const totalCodes = data.length;
  const normalizedValidCodes = [];
  let validCodes = 0;

  for (let code of data) {
    const normalized = normalizeCode(code);
    if (isValidCode(normalized)) {
      normalizedValidCodes.push(normalized);
      validCodes++;
    }
  }

  normalizedValidCodes.sort();
  const invalidCodes = totalCodes - validCodes;

  return {
    totalCodes,
    validCodes,
    invalidCodes,
    normalizedValidCodes
  };
}

module.exports = { processData };
