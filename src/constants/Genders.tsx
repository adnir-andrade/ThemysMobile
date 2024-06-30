function getGenders() {
  const genders = [];

  genders.push({ label: "Male", value: "Male" });
  genders.push({ label: "Female", value: "Female" });

  return genders;
}

export const genders = getGenders();
