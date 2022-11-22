"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./user.entity");
const dist_1 = require("@nestjs/jwt/dist");
const product_service_1 = require("./product/product.service");
const product_module_1 = require("./product/product.module");
const product_entity_1 = require("./product/dto/product.entity");
const employee_service_1 = require("./employee/employee.service");
const employee_controller_1 = require("./employee/employee.controller");
const employee_module_1 = require("./employee/employee.module");
const employee_entity_1 = require("./employee/dto/employee.entity");
const task_service_1 = require("./task/task.service");
const task_controller_1 = require("./task/task.controller");
const task_module_1 = require("./task/task.module");
const customer_service_1 = require("./customer/customer.service");
const customer_controller_1 = require("./customer/customer.controller");
const customer_module_1 = require("./customer/customer.module");
const customer_entity_1 = require("./customer/dto/customer.entity");
const task_entity_1 = require("./task/dto/task.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "10.234.100.41",
                port: 30432,
                username: "postgres",
                password: "P@ssw0rd",
                database: "report-builder-db",
                synchronize: true,
                logging: true,
                entities: [user_entity_1.User, product_entity_1.ProductEntity, employee_entity_1.employeeEntity, customer_entity_1.CustomerEntity, task_entity_1.TaskEntity],
                subscribers: [],
                migrations: [],
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, product_entity_1.ProductEntity, employee_entity_1.employeeEntity, customer_entity_1.CustomerEntity, task_entity_1.TaskEntity]),
            dist_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1d' }
            }),
            product_module_1.ProductModule,
            employee_module_1.EmployeeModule,
            task_module_1.TaskModule,
            customer_module_1.CustomerModule
        ],
        controllers: [app_controller_1.AppController, employee_controller_1.EmployeeController, task_controller_1.TaskController, customer_controller_1.CustomerController],
        providers: [app_service_1.AppService, product_service_1.ProductService, employee_service_1.EmployeeService, task_service_1.TaskService, customer_service_1.CustomerService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map