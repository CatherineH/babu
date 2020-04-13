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
    fit: ["size"]
  },
  measurements: ["bicepCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["sleeve"],//, "neckBinding", "front", "back", "frontBinding", "backBinding"],
  options: {
    size: { pct: 50, min: 10, max: 100 }
  }
};
