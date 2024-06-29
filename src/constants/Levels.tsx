function getLevels(maxLevel: number = 20) {
  const levels = [];
  for (let i = 1; i <= maxLevel; i++) {
    levels.push({ label: i.toString(), value: i });
  }

  return levels;
}

export const levels = getLevels();
