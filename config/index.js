import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "babu",
  version,
  design: "CatherineH",
  code: "CatherineH",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    fit: ["sleeveLength"]
  },
  measurements: ["bicepsCircumference", "chestCircumference",
  "hipsToUpperLeg", "naturalWaistToHip", "hpsToHipsFront", "hpsToHipsBack",
  "hipsCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["sleeve", "front"],//, "neckBinding", "front", "back", "frontBinding", "backBinding"],
  options: {
    sleeveLength: { mm: 35, min: 10, max: 100 }
  }
};
