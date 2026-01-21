import type { Filter } from "../types";
import { challengeZero } from "./challenge0";
import { challengeOneFilter } from "./challenge1";
import { challengeTwoFilter } from "./challenge2";
import { challengeThreeFilter } from "./challenge3";
import { ultimateChallenge } from "./challenge4";
// Examples...
import { gridFilter } from "./samples/grid";
import { vignetteFilter } from "./samples/vignette";

const filters: Filter[] = [
  challengeZero,
  challengeOneFilter,
  challengeTwoFilter,
  challengeThreeFilter,
  ultimateChallenge,
  // Delete the ones below to remove examples from menu...
  gridFilter,
  vignetteFilter,
];

export default filters;
