"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("@yarn-workspace-test/sum"));
function plusTwo(a) {
    return (0, sum_1.default)(a, 2);
}
exports.default = plusTwo;
