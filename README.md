# 《流程引擎原理与实践》

电子书地址：[https://workflow-engine-book.shuwoom.com/](https://workflow-engine-book.shuwoom.com/)



# 第一部份：流程引擎基础

##  1 [引言](https://workflow-engine-book.shuwoom.com/1-%E5%BC%95%E8%A8%80.html)

### 1.1 流程引擎的发展历史

### 1.2 流程引擎的应用场景

### 1.3 相关产品国内外发展现状

### 1.4 本书的内容和结构安排



## 2 [概念](https://workflow-engine-book.shuwoom.com/2-%E6%A6%82%E5%BF%B5.html)

### 2.1 基础概念

### 2.2 进阶概念



## 3 流程建模和解析

### 3.1 [流程建模语言发展概述](https://workflow-engine-book.shuwoom.com/3.1-%E6%B5%81%E7%A8%8B%E5%BB%BA%E6%A8%A1%E8%AF%AD%E8%A8%80%E5%8F%91%E5%B1%95%E6%A6%82%E8%BF%B0.html)

### 3.2 流程建模

#### 3.2.1 [流程定义](https://workflow-engine-book.shuwoom.com/3.2-%E6%B5%81%E7%A8%8B%E5%BB%BA%E6%A8%A1-%E6%B5%81%E7%A8%8B%E5%AE%9A%E4%B9%89.html)

#### 3.2.2 [事件节点定义](https://workflow-engine-book.shuwoom.com/3.2-%E6%B5%81%E7%A8%8B%E5%BB%BA%E6%A8%A1-%E4%BA%8B%E4%BB%B6%E8%8A%82%E7%82%B9%E5%AE%9A%E4%B9%89.html)

#### 3.2.3 [任务节点定义](https://workflow-engine-book.shuwoom.com/3.2-%E6%B5%81%E7%A8%8B%E5%BB%BA%E6%A8%A1-%E4%BB%BB%E5%8A%A1%E8%8A%82%E7%82%B9%E5%AE%9A%E4%B9%89.html)

#### 3.2.4 [网关节点定义](https://workflow-engine-book.shuwoom.com/3.2-%E6%B5%81%E7%A8%8B%E5%BB%BA%E6%A8%A1-%E7%BD%91%E5%85%B3%E8%8A%82%E7%82%B9%E5%AE%9A%E4%B9%89.html)

### 3.3 [生命周期](https://workflow-engine-book.shuwoom.com/3.3-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html)

#### 3.3.1 任务的生命周期

#### 3.3.2 流程的生命周期

### 3.4 [流程模型的解析](https://workflow-engine-book.shuwoom.com/3.4-%E6%B5%81%E7%A8%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%A3%E6%9E%90.html)

### 3.5 与BPMN的比较



# 第二部份：流程引擎实现


## 4 流程引擎的核心组件

### 4.1 [WFMC工作流参考模型](https://workflow-engine-book.shuwoom.com/4.1-WFMC%E5%B7%A5%E4%BD%9C%E6%B5%81%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B.html)

### 4.2 任务调度机制

#### 4.2.1 [DAG调度算法原理与实践](https://workflow-engine-book.shuwoom.com/4.2.1-DAG%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5.html)

#### 4.2.2 [开源Airflow DAG调度算法剖析](https://workflow-engine-book.shuwoom.com/4.2.2-%E5%BC%80%E6%BA%90Airflow%20DAG%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E5%89%96%E6%9E%90.html)

#### 4.2.3 [FSM调度算法原理与实践](https://workflow-engine-book.shuwoom.com/4.2.3-FSM%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5.html)

#### 4.2.4 [开源OSWorkflow FSM调度算法剖析](https://workflow-engine-book.shuwoom.com/4.2.4-%E5%BC%80%E6%BA%90OSWorkflow%20FSM%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E5%89%96%E6%9E%90.html)

#### 4.2.5 [Petri网调度算法原理与实践](https://workflow-engine-book.shuwoom.com/4.2.5-Petri%E7%BD%91%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5.html)

#### 4.2.6 [开源YAWL Petri网调度算法剖析](https://workflow-engine-book.shuwoom.com/4.2.6-%E5%BC%80%E6%BA%90YAWL%20Petri%E7%BD%91%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E5%89%96%E6%9E%90.html)

### 4.3 [工作流模式-控制流模式](https://workflow-engine-book.shuwoom.com/4.3-%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%A8%A1%E5%BC%8F-%E6%8E%A7%E5%88%B6%E6%B5%81%E6%A8%A1%E5%BC%8F.html)

### 4.4 [资源调度机制-资源模式](https://workflow-engine-book.shuwoom.com/4.4-%E8%B5%84%E6%BA%90%E8%B0%83%E5%BA%A6%E6%9C%BA%E5%88%B6-%E8%B5%84%E6%BA%90%E6%A8%A1%E5%BC%8F.html)

### 4.5 [数据管理机制-数据模式](https://workflow-engine-book.shuwoom.com/4.5-%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6-%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%BC%8F.html)

### 4.6 [异常处理机制-异常处理模式](https://workflow-engine-book.shuwoom.com/4.6-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%9C%BA%E5%88%B6-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%A8%A1%E5%BC%8F.html)

### 4.7 [引擎执行模式](https://workflow-engine-book.shuwoom.com/4.7-%E5%BC%95%E6%93%8E%E6%89%A7%E8%A1%8C%E6%A8%A1%E5%BC%8F.html)


## 5 [事件驱动机制](https://workflow-engine-book.shuwoom.com/5-%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E6%9C%BA%E5%88%B6.html)

## 6 [核心表结构与接口设计](https://workflow-engine-book.shuwoom.com/6-%E6%A0%B8%E5%BF%83%E8%A1%A8%E7%BB%93%E6%9E%84%E4%B8%8E%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1.html)




## 7 权限系统设计

### 7.1 ACL权限模型

### 7.2 RBAC权限模型

### 7.3 ABAC权限模型

### 7.4 PERM权限模型

### 7.5 Casbin框架应用实践

#### 7.5.1 Casbin的ACL实现

#### 7.5.2 Casbin的RBAC实现

#### 7.5.3 Casbin的ABAC实现

#### 7.5.4 Casbin综合实践



## 8 分布式Crontab任务调度

### 8.1 cron表达式介绍

### 8.2 etcd基础操作

### 8.3 master-worker架构



# 第三部份：流程引擎进阶



## 9 流程分析

### 9.1 控制流视角

### 9.2 数据视角

### 9.3 资源视角



## 10 云原生工作流

### 10.1 k8s上部署工作流原理

### 10.2 k8s上运行工作流任务原理

### 10.3 k8s上工作流任务运行综合实践



## 11 多引擎分布式系统实现

### 11.1 系统架构

### 11.2 分布式系统的基础理论

### 11.3 高并发与高性能

> 水平拓展

#### 11.3.1 数据库优化技术

#### 11.3.2 全局唯一ID生成器

#### 11.3.3 缓存技术

#### 11.3.4 异步化技术

> 垂直拓展

#### 11.3.5 池化技术

#### 11.3.6 Linux参数优化

### 11.4 高可用与稳定性

#### 11.4.1 限流

#### 11.4.2 降级和熔断

#### 11.4.3 故障转移

#### 11.4.4 分布式锁




