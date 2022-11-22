"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEntity = void 0;
const typeorm_1 = require("typeorm");
let TaskEntity = class TaskEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "taskID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], TaskEntity.prototype, "tasktitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], TaskEntity.prototype, "taskdetail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], TaskEntity.prototype, "taskduedate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], TaskEntity.prototype, "taskresponsible", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-json'),
    __metadata("design:type", Object)
], TaskEntity.prototype, "taskstatus", void 0);
TaskEntity = __decorate([
    (0, typeorm_1.Entity)('task')
], TaskEntity);
exports.TaskEntity = TaskEntity;
//# sourceMappingURL=task.entity.js.map