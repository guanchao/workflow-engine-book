(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{669:function(a,t,s){"use strict";s.r(t);var r=s(14),_=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"流程引擎原理与实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程引擎原理与实践"}},[a._v("#")]),a._v(" 流程引擎原理与实践")]),a._v(" "),t("h1",{attrs:{id:"第一部份-流程引擎基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一部份-流程引擎基础"}},[a._v("#")]),a._v(" 第一部份：流程引擎基础")]),a._v(" "),t("h2",{attrs:{id:"_1-引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-引言"}},[a._v("#")]),a._v(" 1 引言")]),a._v(" "),t("h3",{attrs:{id:"_1-1-流程引擎的发展历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-流程引擎的发展历史"}},[a._v("#")]),a._v(" 1.1 流程引擎的发展历史")]),a._v(" "),t("h3",{attrs:{id:"_1-2-流程引擎的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-流程引擎的应用场景"}},[a._v("#")]),a._v(" 1.2 流程引擎的应用场景")]),a._v(" "),t("h3",{attrs:{id:"_1-3-相关产品国内外发展现状"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-相关产品国内外发展现状"}},[a._v("#")]),a._v(" 1.3 相关产品国内外发展现状")]),a._v(" "),t("h3",{attrs:{id:"_1-4-本书的内容和结构安排"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-本书的内容和结构安排"}},[a._v("#")]),a._v(" 1.4 本书的内容和结构安排")]),a._v(" "),t("h2",{attrs:{id:"_2-概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-概念"}},[a._v("#")]),a._v(" 2 概念")]),a._v(" "),t("h3",{attrs:{id:"_2-1-基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基础概念"}},[a._v("#")]),a._v(" 2.1 基础概念")]),a._v(" "),t("h3",{attrs:{id:"_2-2-进阶概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-进阶概念"}},[a._v("#")]),a._v(" 2.2 进阶概念")]),a._v(" "),t("h2",{attrs:{id:"_3-流程建模和解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-流程建模和解析"}},[a._v("#")]),a._v(" 3 流程建模和解析")]),a._v(" "),t("h3",{attrs:{id:"_3-1-流程建模语言发展概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-流程建模语言发展概述"}},[a._v("#")]),a._v(" 3.1 流程建模语言发展概述")]),a._v(" "),t("h3",{attrs:{id:"_3-2-流程建模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-流程建模"}},[a._v("#")]),a._v(" 3.2 流程建模")]),a._v(" "),t("h4",{attrs:{id:"_3-2-1-流程定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-流程定义"}},[a._v("#")]),a._v(" 3.2.1 流程定义")]),a._v(" "),t("h4",{attrs:{id:"_3-2-2-事件节点定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-事件节点定义"}},[a._v("#")]),a._v(" 3.2.2 事件节点定义")]),a._v(" "),t("h4",{attrs:{id:"_3-2-3-任务节点定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-任务节点定义"}},[a._v("#")]),a._v(" 3.2.3 任务节点定义")]),a._v(" "),t("h4",{attrs:{id:"_3-2-4-网关节点定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-网关节点定义"}},[a._v("#")]),a._v(" 3.2.4 网关节点定义")]),a._v(" "),t("h3",{attrs:{id:"_3-3-生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-生命周期"}},[a._v("#")]),a._v(" 3.3 生命周期")]),a._v(" "),t("h4",{attrs:{id:"_3-3-1-任务的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-任务的生命周期"}},[a._v("#")]),a._v(" 3.3.1 任务的生命周期")]),a._v(" "),t("h4",{attrs:{id:"_3-3-2-流程的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-流程的生命周期"}},[a._v("#")]),a._v(" 3.3.2 流程的生命周期")]),a._v(" "),t("h3",{attrs:{id:"_3-4-流程模型的解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-流程模型的解析"}},[a._v("#")]),a._v(" 3.4 流程模型的解析")]),a._v(" "),t("h3",{attrs:{id:"_3-5-与bpmn的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-与bpmn的比较"}},[a._v("#")]),a._v(" 3.5 与BPMN的比较")]),a._v(" "),t("h1",{attrs:{id:"第二部份-流程引擎实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二部份-流程引擎实现"}},[a._v("#")]),a._v(" 第二部份：流程引擎实现")]),a._v(" "),t("h2",{attrs:{id:"_4-流程引擎的核心组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-流程引擎的核心组件"}},[a._v("#")]),a._v(" 4 流程引擎的核心组件")]),a._v(" "),t("h3",{attrs:{id:"_4-1-wfmc工作流参考模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-wfmc工作流参考模型"}},[a._v("#")]),a._v(" 4.1 WFMC工作流参考模型")]),a._v(" "),t("h3",{attrs:{id:"_4-2-任务调度机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-任务调度机制"}},[a._v("#")]),a._v(" 4.2 任务调度机制")]),a._v(" "),t("h4",{attrs:{id:"_4-2-1-dag调度算法原理与实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-dag调度算法原理与实践"}},[a._v("#")]),a._v(" 4.2.1 DAG调度算法原理与实践")]),a._v(" "),t("h4",{attrs:{id:"_4-2-2-开源airflow-dag调度算法剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-开源airflow-dag调度算法剖析"}},[a._v("#")]),a._v(" 4.2.2 开源Airflow DAG调度算法剖析")]),a._v(" "),t("h4",{attrs:{id:"_4-2-3-fsm调度算法原理与实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-fsm调度算法原理与实践"}},[a._v("#")]),a._v(" 4.2.3 FSM调度算法原理与实践")]),a._v(" "),t("h4",{attrs:{id:"_4-2-4-开源osworkflow-fsm调度算法剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-开源osworkflow-fsm调度算法剖析"}},[a._v("#")]),a._v(" 4.2.4 开源OSWorkflow FSM调度算法剖析")]),a._v(" "),t("h4",{attrs:{id:"_4-2-5-petri网调度算法原理与实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-petri网调度算法原理与实践"}},[a._v("#")]),a._v(" 4.2.5 Petri网调度算法原理与实践")]),a._v(" "),t("h4",{attrs:{id:"_4-2-6-开源yawl-petri网调度算法剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-6-开源yawl-petri网调度算法剖析"}},[a._v("#")]),a._v(" 4.2.6 开源YAWL Petri网调度算法剖析")]),a._v(" "),t("h3",{attrs:{id:"_4-3-工作流模式-控制流模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-工作流模式-控制流模式"}},[a._v("#")]),a._v(" 4.3 工作流模式-控制流模式")]),a._v(" "),t("h3",{attrs:{id:"_4-4-资源调度机制-资源模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-资源调度机制-资源模式"}},[a._v("#")]),a._v(" 4.4 资源调度机制-资源模式")]),a._v(" "),t("h3",{attrs:{id:"_4-5-数据管理机制-数据模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-数据管理机制-数据模式"}},[a._v("#")]),a._v(" 4.5 数据管理机制-数据模式")]),a._v(" "),t("h3",{attrs:{id:"_4-6-异常处理机制-异常处理模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-异常处理机制-异常处理模式"}},[a._v("#")]),a._v(" 4.6 异常处理机制-异常处理模式")]),a._v(" "),t("h3",{attrs:{id:"_4-7-引擎执行模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-引擎执行模式"}},[a._v("#")]),a._v(" 4.7 引擎执行模式")]),a._v(" "),t("h2",{attrs:{id:"_5-事件驱动机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-事件驱动机制"}},[a._v("#")]),a._v(" 5 事件驱动机制")]),a._v(" "),t("h3",{attrs:{id:"_5-1-事件驱动架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-事件驱动架构"}},[a._v("#")]),a._v(" 5.1 事件驱动架构")]),a._v(" "),t("h3",{attrs:{id:"_5-2-基于redis的轻量级综合实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-基于redis的轻量级综合实践"}},[a._v("#")]),a._v(" 5.2 基于Redis的轻量级综合实践")]),a._v(" "),t("h3",{attrs:{id:"_5-3-基于kafka的高性能综合实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-基于kafka的高性能综合实践"}},[a._v("#")]),a._v(" 5.3 基于Kafka的高性能综合实践")]),a._v(" "),t("h2",{attrs:{id:"_6-核心表结构与接口设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-核心表结构与接口设计"}},[a._v("#")]),a._v(" 6 核心表结构与接口设计")]),a._v(" "),t("h3",{attrs:{id:"_6-1-核心表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-核心表结构"}},[a._v("#")]),a._v(" 6.1 核心表结构")]),a._v(" "),t("h3",{attrs:{id:"_6-2-核心接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-核心接口"}},[a._v("#")]),a._v(" 6.2 核心接口")]),a._v(" "),t("h2",{attrs:{id:"_7-权限系统设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-权限系统设计"}},[a._v("#")]),a._v(" 7 权限系统设计")]),a._v(" "),t("h3",{attrs:{id:"_7-1-acl权限模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-acl权限模型"}},[a._v("#")]),a._v(" 7.1 ACL权限模型")]),a._v(" "),t("h3",{attrs:{id:"_7-2-rbac权限模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-rbac权限模型"}},[a._v("#")]),a._v(" 7.2 RBAC权限模型")]),a._v(" "),t("h3",{attrs:{id:"_7-3-abac权限模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-abac权限模型"}},[a._v("#")]),a._v(" 7.3 ABAC权限模型")]),a._v(" "),t("h3",{attrs:{id:"_7-4-perm权限模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-perm权限模型"}},[a._v("#")]),a._v(" 7.4 PERM权限模型")]),a._v(" "),t("h3",{attrs:{id:"_7-5-casbin框架应用实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-casbin框架应用实践"}},[a._v("#")]),a._v(" 7.5 Casbin框架应用实践")]),a._v(" "),t("h4",{attrs:{id:"_7-5-1-casbin的acl实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-1-casbin的acl实现"}},[a._v("#")]),a._v(" 7.5.1 Casbin的ACL实现")]),a._v(" "),t("h4",{attrs:{id:"_7-5-2-casbin的rbac实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-2-casbin的rbac实现"}},[a._v("#")]),a._v(" 7.5.2 Casbin的RBAC实现")]),a._v(" "),t("h4",{attrs:{id:"_7-5-3-casbin的abac实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-3-casbin的abac实现"}},[a._v("#")]),a._v(" 7.5.3 Casbin的ABAC实现")]),a._v(" "),t("h4",{attrs:{id:"_7-5-4-casbin综合实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-4-casbin综合实践"}},[a._v("#")]),a._v(" 7.5.4 Casbin综合实践")]),a._v(" "),t("h2",{attrs:{id:"_8-分布式crontab任务调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-分布式crontab任务调度"}},[a._v("#")]),a._v(" 8 分布式Crontab任务调度")]),a._v(" "),t("h3",{attrs:{id:"_8-1-cron表达式介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-cron表达式介绍"}},[a._v("#")]),a._v(" 8.1 cron表达式介绍")]),a._v(" "),t("h3",{attrs:{id:"_8-2-etcd基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-etcd基础操作"}},[a._v("#")]),a._v(" 8.2 etcd基础操作")]),a._v(" "),t("h3",{attrs:{id:"_8-3-master-worker架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-master-worker架构"}},[a._v("#")]),a._v(" 8.3 master-worker架构")]),a._v(" "),t("h1",{attrs:{id:"第三部份-流程引擎进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三部份-流程引擎进阶"}},[a._v("#")]),a._v(" 第三部份：流程引擎进阶")]),a._v(" "),t("h2",{attrs:{id:"_9-流程分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-流程分析"}},[a._v("#")]),a._v(" 9 流程分析")]),a._v(" "),t("h3",{attrs:{id:"_9-1-控制流视角"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-控制流视角"}},[a._v("#")]),a._v(" 9.1 控制流视角")]),a._v(" "),t("h3",{attrs:{id:"_9-2-数据视角"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-数据视角"}},[a._v("#")]),a._v(" 9.2 数据视角")]),a._v(" "),t("h3",{attrs:{id:"_9-3-资源视角"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-资源视角"}},[a._v("#")]),a._v(" 9.3 资源视角")]),a._v(" "),t("h2",{attrs:{id:"_10-云原生工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-云原生工作流"}},[a._v("#")]),a._v(" 10 云原生工作流")]),a._v(" "),t("h3",{attrs:{id:"_10-1-k8s上部署工作流原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-k8s上部署工作流原理"}},[a._v("#")]),a._v(" 10.1 k8s上部署工作流原理")]),a._v(" "),t("h3",{attrs:{id:"_10-2-k8s上运行工作流任务原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-k8s上运行工作流任务原理"}},[a._v("#")]),a._v(" 10.2 k8s上运行工作流任务原理")]),a._v(" "),t("h3",{attrs:{id:"_10-3-k8s上工作流任务运行综合实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-k8s上工作流任务运行综合实践"}},[a._v("#")]),a._v(" 10.3 k8s上工作流任务运行综合实践")]),a._v(" "),t("h2",{attrs:{id:"_11-多引擎分布式系统实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-多引擎分布式系统实现"}},[a._v("#")]),a._v(" 11 多引擎分布式系统实现")]),a._v(" "),t("h3",{attrs:{id:"_11-1-系统架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-系统架构"}},[a._v("#")]),a._v(" 11.1 系统架构")]),a._v(" "),t("h3",{attrs:{id:"_11-2-分布式系统的基础理论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-分布式系统的基础理论"}},[a._v("#")]),a._v(" 11.2 分布式系统的基础理论")]),a._v(" "),t("h3",{attrs:{id:"_11-3-高并发与高性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-高并发与高性能"}},[a._v("#")]),a._v(" 11.3 高并发与高性能")]),a._v(" "),t("blockquote",[t("p",[a._v("水平拓展")])]),a._v(" "),t("h4",{attrs:{id:"_11-3-1-数据库优化技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-1-数据库优化技术"}},[a._v("#")]),a._v(" 11.3.1 数据库优化技术")]),a._v(" "),t("h4",{attrs:{id:"_11-3-2-全局唯一id生成器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-2-全局唯一id生成器"}},[a._v("#")]),a._v(" 11.3.2 全局唯一ID生成器")]),a._v(" "),t("h4",{attrs:{id:"_11-3-3-缓存技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-3-缓存技术"}},[a._v("#")]),a._v(" 11.3.3 缓存技术")]),a._v(" "),t("h4",{attrs:{id:"_11-3-4-异步化技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-4-异步化技术"}},[a._v("#")]),a._v(" 11.3.4 异步化技术")]),a._v(" "),t("blockquote",[t("p",[a._v("垂直拓展")])]),a._v(" "),t("h4",{attrs:{id:"_11-3-5-池化技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-5-池化技术"}},[a._v("#")]),a._v(" 11.3.5 池化技术")]),a._v(" "),t("h4",{attrs:{id:"_11-3-6-linux参数优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-6-linux参数优化"}},[a._v("#")]),a._v(" 11.3.6 Linux参数优化")]),a._v(" "),t("h3",{attrs:{id:"_11-4-高可用与稳定性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-高可用与稳定性"}},[a._v("#")]),a._v(" 11.4 高可用与稳定性")]),a._v(" "),t("h4",{attrs:{id:"_11-4-1-限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-1-限流"}},[a._v("#")]),a._v(" 11.4.1 限流")]),a._v(" "),t("h4",{attrs:{id:"_11-4-2-降级和熔断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-2-降级和熔断"}},[a._v("#")]),a._v(" 11.4.2 降级和熔断")]),a._v(" "),t("h4",{attrs:{id:"_11-4-3-故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-3-故障转移"}},[a._v("#")]),a._v(" 11.4.3 故障转移")]),a._v(" "),t("h4",{attrs:{id:"_11-4-4-分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-4-分布式锁"}},[a._v("#")]),a._v(" 11.4.4 分布式锁")])])}),[],!1,null,null,null);t.default=_.exports}}]);