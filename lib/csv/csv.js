const fs = require("react-native-level-fs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const utc = require("dayjs/plugin/utc");
const dayjs = require("dayjs").extend(customParseFormat).extend(utc);
const StreamBuf = require("../utils/stream-buf");

const {
  fs: {exists}
} = require("../utils/utils");

/* eslint-disable quote-props */
const SpecialValues = {
  true: true,
  false: false,
  "#N/A": {error: "#N/A"},
  "#REF!": {error: "#REF!"},
  "#NAME?": {error: "#NAME?"},
  "#DIV/0!": {error: "#DIV/0!"},
  "#NULL!": {error: "#NULL!"},
  "#VALUE!": {error: "#VALUE!"},
  "#NUM!": {error: "#NUM!"}
};
/* eslint-ensable quote-props */

class CSV {
  constructor(workbook) {
    this.workbook = workbook;
    this.worksheet = null;
  }
}

module.exports = CSV;
