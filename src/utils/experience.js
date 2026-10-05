const CAREER_START = new Date(2023, 5); // June 2023
const CAREER_GAP_MONTHS = 2; // break between ezAtlas and Novagito AI

// Whole years of professional experience, kept current automatically.
export const getExperienceYears = (now = new Date()) => {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth()) -
    CAREER_GAP_MONTHS;

  return Math.max(1, Math.floor(months / 12));
};
