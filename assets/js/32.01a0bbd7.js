(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{324:function(e,t,r){e.exports=r.p+"assets/img/11.2 centralized system.51bda07c.png"},325:function(e,t,r){e.exports=r.p+"assets/img/11.2 distributed system.505b07d5.png"},326:function(e,t,r){e.exports=r.p+"assets/img/11.2-cap-theorem.eab6f1ac.png"},327:function(e,t,r){e.exports=r.p+"assets/img/11.2 cap.e81f5854.png"},328:function(e,t,r){e.exports=r.p+"assets/img/11.2 ca、cp、cp.6a5e99d3.png"},329:function(e,t,r){e.exports=r.p+"assets/img/11.2 paxos-promise.a0f2eb01.png"},330:function(e,t,r){e.exports=r.p+"assets/img/11.2 paxos-promise-2.95bac2f4.png"},625:function(e,t,r){"use strict";r.r(t);var a=r(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"分布式系统和集中式系统对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统和集中式系统对比"}},[e._v("#")]),e._v(" 分布式系统和集中式系统对比")]),e._v(" "),t("p",[e._v("在讲分布式系统之前，得了解一下什么是集中式系统，才知道为什么会有分布式系统的出现。")]),e._v(" "),t("p",[e._v("集中式系统多采用Client-Server架构，该架构采用单个功能强大的服务器构建。连接到中央服务器的功能较弱的客户端节点可以将其处理请求提交到服务端，而不是直接在本地执行它们。")]),e._v(" "),t("p",[e._v("它的优点是：")]),e._v(" "),t("ul",[t("li",[e._v("由于采用客户端-服务器架构，易于设置并可快速开发")]),e._v(" "),t("li",[e._v("整个系统可以通过中央服务器进行管理和监控")]),e._v(" "),t("li",[e._v("由于只需要更新一台机器，因此可以更高效地更新系统")]),e._v(" "),t("li",[e._v("很容易对服务器进行物理保护和维护")]),e._v(" "),t("li",[e._v("客户端节点可以轻松删除和添加，而不影响整个系统")])]),e._v(" "),t("p",[e._v("它的缺点是：")]),e._v(" "),t("ul",[t("li",[e._v("中央服务器出现问题可能会导致系统完全崩溃。因此，存在单点故障")]),e._v(" "),t("li",[e._v("整个系统的可用性取决于中央服务器，因此系统的更新必须即时完成。这导致服务器维护困难")]),e._v(" "),t("li",[e._v("维护备份的可能性较小。如果中央服务器出现故障并且没有备份，所有数据都将被删除")])]),e._v(" "),t("p",[e._v("正是由于上述集中式系统的缺点，所以才会有分布式系统的出现。")]),e._v(" "),t("p",[e._v("分布式系统采用的是点对点架构，即P2P，它是一个网络互连的独立计算机的集合。分布式系统中的每个节点都拥有足够的计算能力来协作完成任务。在分布式系统中，用户对数据具有平等的访问权限。单个节点的故障不会影响整个系统，从而提高可用性和可靠性。")]),e._v(" "),t("p",[e._v("下面是两个系统的一个对比：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("特征")])]),e._v(" "),t("th",[t("strong",[e._v("集中式系统")])]),e._v(" "),t("th",[t("strong",[e._v("分布式系统")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("网络拓扑")]),e._v(" "),t("td",[t("img",{staticStyle:{zoom:"33%"},attrs:{src:r(324),alt:"image-20240929122334947"}})]),e._v(" "),t("td",[t("img",{staticStyle:{zoom:"33%"},attrs:{src:r(325),alt:"image-20240929122348283"}})])]),e._v(" "),t("tr",[t("td",[e._v("可扩展性")]),e._v(" "),t("td",[e._v("受到中央服务器容量的限制。")]),e._v(" "),t("td",[e._v("高度可扩展；可以通过添加更多节点进行扩展。")])]),e._v(" "),t("tr",[t("td",[e._v("容错")]),e._v(" "),t("td",[e._v("容易出现单点故障；如果中央服务器发生故障，系统就会崩溃。")]),e._v(" "),t("td",[e._v("具有故障恢复能力；如果一个节点发生故障，其他节点可以接管其职责。")])]),e._v(" "),t("tr",[t("td",[e._v("表现")]),e._v(" "),t("td",[e._v("由于所有请求都经过中央服务器，因此在高负载下可能会成为瓶颈。")]),e._v(" "),t("td",[e._v("由于工作负载分布在多个节点上，因此在高负载下提供更好的性能。")])]),e._v(" "),t("tr",[t("td",[e._v("灵活性")]),e._v(" "),t("td",[e._v("由于所有组件紧密耦合且依赖于中央服务器，因此更改的灵活性较差。")]),e._v(" "),t("td",[e._v("由于组件松散耦合，可以独立修改或替换，甚至部署在不同的操作系统上，因此更加灵活、适应性更强。")])]),e._v(" "),t("tr",[t("td",[e._v("成本")]),e._v(" "),t("td",[e._v("由于升级中央服务器需要大量投资，因此扩展成本可能很高。")]),e._v(" "),t("td",[e._v("由于涉及添加商品硬件或虚拟机，因此扩展更具成本效益。")])]),e._v(" "),t("tr",[t("td",[e._v("部署")]),e._v(" "),t("td",[e._v("轻松快速地部署")]),e._v(" "),t("td",[e._v("整个系统很复杂")])]),e._v(" "),t("tr",[t("td",[e._v("测试")]),e._v(" "),t("td",[e._v("需要端到端测试，难以实现全面覆盖")]),e._v(" "),t("td",[e._v("个别组件测试")])]),e._v(" "),t("tr",[t("td",[e._v("开发/工程速度")]),e._v(" "),t("td",[e._v("分配工作更加困难，通常由于数据库太大而无法分割而受到限制")]),e._v(" "),t("td",[e._v("团队可以独立开展各种服务")])])])]),e._v(" "),t("h2",{attrs:{id:"cap理论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cap理论"}},[e._v("#")]),e._v(" CAP理论")]),e._v(" "),t("p",[e._v("CAP理论，也称为Brewer's定理，是由计算机科学家Eric Brewer于2000年提出的理论，它关注分布式系统中一致性（Consistency）、可用性（Availability）、分区容忍性（Partition Tolerance）这三个属性之间的权衡关系。")]),e._v(" "),t("img",{attrs:{src:r(326),alt:"Understanding of CAP Theorem"}}),e._v(" "),t("p",[e._v("具体来说，CAP理论指出在一个分布式系统中，这三个属性不可能同时得到满足，最多只能同时满足其中的两个。以下是CAP理论的三个属性的简要解释：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("一致性（Consistency）：所有节点在同一时间具有相同的数据。在一致性的系统中，任何对系统的更新操作都将立即反映在所有节点上，使得所有节点保持一致的数据状态。这可确保用户始终观察到一致的数据。")]),e._v(" "),t("p",[e._v("在分布式系统中实现强一致性可能具有挑战性，尤其是在存在网络延迟、故障或高延迟的情况下。协调节点之间的数据同步以保持一致性通常会带来额外的复杂性和性能开销。")])]),e._v(" "),t("li",[t("p",[e._v("可用性（Availability）：即使出现故障或网络分区，对系统发出的每个请求都会得到响应。即使个别节点或组件出现故障，可用的系统仍能响应用户请求并继续运行。")]),e._v(" "),t("p",[e._v("确保高可用性通常涉及冗余和容错机制，例如复制、负载平衡和故障转移策略。这些机制允许系统通过将请求重定向到健康节点或使用数据的备份副本来继续运行，相反这就会增加更多的成本。")])]),e._v(" "),t("li",[t("p",[e._v("分区容忍性（Partition Tolerance）：分布式系统在出现网络分区或通信故障时仍能继续运。当分布式系统中的节点由于网络问题或其他因素而无法相互通信时，就会发生网络分区。这可能导致消息丢失、延迟或节点彼此隔离。")]),e._v(" "),t("p",[e._v("由于无法保证完全的网络可靠性，因此分区容错性是分布式系统中的基本要求，即P是必须的。有了分区容错性，即使某些节点无法相互通信，分布式系统也可以继续运行并提供服务。")])])]),e._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:r(327),alt:"img"}}),e._v(" "),t("p",[e._v("根据CAP理论，一个分布式系统只能在一致性、可用性和分区容忍性中选择两个，无法同时满足所有三个。这种权衡关系对于设计和理解分布式系统非常重要，因为在实际应用中需要根据具体的需求和场景来选择适当的系统设计方案。")]),e._v(" "),t("p",[e._v("如果发生网络分区 (P)，分布式系统必须在一致性 (C) 和可用性 (A) 之间做出选择。换句话说，在存在网络分区的情况下，不可能同时实现一致性和可用性。")]),e._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:r(328)}}),e._v(" "),t("h3",{attrs:{id:"ca系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ca系统"}},[e._v("#")]),e._v(" CA系统")]),e._v(" "),t("p",[e._v("CA 系统旨在同时实现一致性和可用性，但它们牺牲了分区容忍度。换句话说，它们优先维护数据的一致，并在没有网络分区的情况下响应用户请求。")]),e._v(" "),t("p",[e._v("CA 系统通常部署在网络可靠性高、网络分区可能性低的环境中。它们非常适合数据一致性和高可用性至关重要的应用程序，例如传统的单站点数据库。")]),e._v(" "),t("h3",{attrs:{id:"ap系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ap系统"}},[e._v("#")]),e._v(" AP系统")]),e._v(" "),t("p",[e._v("AP 系统优先考虑可用性和分区容忍度，弱化一致性。这些系统选择保持可用性，即使在网络分区期间也能响应用户请求，接受不同节点可能具有暂时不一致的数据。")]),e._v(" "),t("p",[e._v("AP 系统通常用于高可用性至关重要的场景，例如实时协作应用程序或内容交付网络 (CDN)。它们优先提供响应式服务，即使这意味着接受最终一致性并允许跨节点的暂时不一致，这种是目前大多数分布式系统的选择。")]),e._v(" "),t("p",[e._v("这里提一下，"),t("strong",[e._v("最终一致性")]),e._v("是分布式系统中实现可用性和一致性之间平衡的一种常用方法。最终一致性不会强制所有节点立即保持一致，而是允许出现暂时的不一致，并最终随着时间的推移收敛到一致状态。这种方法可实现高可用性和响应能力，同时仍提供最终的数据收敛，例如HDFS、Elasticsearch、Kafka等系统。")]),e._v(" "),t("h3",{attrs:{id:"cp系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp系统"}},[e._v("#")]),e._v(" CP系统")]),e._v(" "),t("p",[e._v("CP 系统优先考虑一致性和分区容忍度，弱化可用性。在这些系统中，当发生网络分区时，它们会选择保持强一致性，即使这意味着暂时牺牲可用性。这意味着在分区期间，系统更新可能会被阻止，直到实现一致性或解决分区问题。")]),e._v(" "),t("p",[e._v("CP 系统通常用于数据一致性至关重要的场景，例如金融系统或需要严格同步的系统。它们愿意在网络分区期间牺牲可用性，以确保所有节点都具有相同的一致数据。")]),e._v(" "),t("h2",{attrs:{id:"paxos一致性算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paxos一致性算法"}},[e._v("#")]),e._v(" Paxos一致性算法")]),e._v(" "),t("p",[e._v("前面我们说了，CAP理论只能三选二，在现实中，大部份系统会选择弱化一致性，即选择AP系统，选择最终一致性。所以，这里一致性算法就发挥了重要的作用，其中Paxos更是分布式系统的奠基石。")]),e._v(" "),t("p",[e._v("Paxos是一种经典的分布式一致性算法，用于解决分布式系统中的一致性问题。Paxos算法定义了三个角色，这些角色可以单独一个节点执行，也可以在同一个节点上执行。Paxos算法的执行就是对一个值形成共识，过程如下：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("提议者(Proposer)")]),e._v("： 发起一个提案，并向其他节点发送提案请求。")]),e._v(" "),t("li",[t("strong",[e._v("接收者(Acceptor)：")]),e._v(" 收到提案后，如果没有其他更高编号的提案，则接受提案并广播接受通知。")]),e._v(" "),t("li",[t("strong",[e._v("学习者(Leaner)：")]),e._v(" 当收到大多数节点的接受通知后，就可以学习该值。")])]),e._v(" "),t("p",[e._v("Paxos的运行分为下面两个阶段。")]),e._v(" "),t("ul",[t("li",[e._v("在第一阶段，Proposer通过获得大多数Acceptor的承诺来获得临时的领导地位，这个领导地位会持续到另一个Proposer获得大多数Acceptor的承诺为止。")]),e._v(" "),t("li",[e._v("在第二阶段，Proposer利用它临时的领导权来发起新的提案让大家接受。Proposer只有很短的时间利用其已建立的领导权来获得大多数Acceptor的接受。如果Proposer不够快，其临时领导权可能会被另一个Proposer接管，而新Proposer必须重复此过程。")])]),e._v(" "),t("h3",{attrs:{id:"阶段1-phase-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阶段1-phase-1"}},[e._v("#")]),e._v(" 阶段1 (Phase 1)")]),e._v(" "),t("h4",{attrs:{id:"prepare阶段-phase-1a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare阶段-phase-1a"}},[e._v("#")]),e._v(" Prepare阶段(Phase 1a)")]),e._v(" "),t("p",[e._v("每个Proposer会发起一个提案，每个提案都带一个编号，这个编号是全局唯一且递增的。")]),e._v(" "),t("p",[e._v("Proposer会向所有Acceptor发送一个"),t("code",[e._v("prepare(n)")]),e._v("的消息，其中n是提案编号。")]),e._v(" "),t("h4",{attrs:{id:"promise阶段-phase-1b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise阶段-phase-1b"}},[e._v("#")]),e._v(" Promise阶段(Phase 1b)")]),e._v(" "),t("p",[e._v("Acceptor接收到"),t("code",[e._v("prepare(n)")]),e._v("请求后，会比较提案编号n和自己已接受的最大提案编号m。")]),e._v(" "),t("ul",[t("li",[e._v("n>m，即n大于已接受的最大提案编号m。它会发送"),t("code",[e._v("promise(m,v)")]),e._v("消息，并承诺不再接受编号小于n的提案。同时，Acceptor会将自己已经接受的最大编号提案的值告诉Proposer。")]),e._v(" "),t("li",[e._v("n<=m，即n小于或等于已接受的最大提案编号m。Acceptor会拒绝该prepare请求。")])]),e._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:r(329),alt:"image-20240930155502230"}}),e._v(" "),t("h3",{attrs:{id:"阶段2-phase-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阶段2-phase-2"}},[e._v("#")]),e._v(" 阶段2 (Phase 2)")]),e._v(" "),t("h4",{attrs:{id:"accept阶段-phase-2a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accept阶段-phase-2a"}},[e._v("#")]),e._v(" Accept阶段(Phase 2a)")]),e._v(" "),t("p",[e._v("Proposer在收到多数Acceptor的Promise响应后，会从所有响应中选择一个已接受的最大编号提案的值，作为本次提案的值。然后，Proposer会将提案编号n和提案值v发送给所有Acceptor，即发送"),t("code",[e._v("Accept(n, v)")]),e._v("消息，请求他们接受这个提案。")]),e._v(" "),t("h4",{attrs:{id:"accepted阶段-phase-2b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accepted阶段-phase-2b"}},[e._v("#")]),e._v(" Accepted阶段(Phase 2b)")]),e._v(" "),t("p",[e._v("Acceptor收到"),t("code",[e._v("Accept(n, v)")]),e._v("请求后，会检查该提案编号n是否大于等于自己承诺过的最大提案编号m。如果满足条件，Acceptor会接受这个提案，并将接受结果发送给Proposer，即发送"),t("code",[e._v("Accepted")]),e._v("消息。否则，Acceptor会拒绝该请求。")]),e._v(" "),t("p",[e._v("假如有多个Proposer，此时Proposer B发出了一个提案编号更大n2(n2>n)的提案。如下，当Proposer A发出"),t("code",[e._v("accept(n,v)")]),e._v("请求时，此时Acceptor承诺过的最大填编号是n2，它大于Proposer的提案编号n，所以此时会拒绝Proposer A的accept请求，转而接受Proposer B的提案。")]),e._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:r(330),alt:"image-20240930160605971"}}),e._v(" "),t("p",[e._v("当Proposer收到多数Acceptor的Accepted响应时，该提案就达成了共识。此时，其他节点可以从Proposer或者Acceptor处学习到这个已达成共识的提案值，以确保系统的一致性。")]),e._v(" "),t("p",[e._v("需要注意的是，这里的“多数”指的是参与者集合的过半数。Paxos算法能够保证在任何时刻，只要有超过半数的节点正常工作，系统就能够达成一致。这使得Paxos算法具有很好的容错性和可扩展性。")]),e._v(" "),t("h3",{attrs:{id:"伪代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[e._v("#")]),e._v(" 伪代码")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Proposer")]),e._v("伪代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Proposer\n{\n    // Proposer提议者的状态\n    v;  // 建议值\n    p_num; // 提案编号\n    acks;  // 从Acceptor接收到的确认数\n    promises; // 从Acceptor接收到的承诺\n\n    // 客户端调用Proposer的此函数来提出其期望值。中止后也会调用此函数来重试。 \n    on propose(client_value)\n    {\n        p_num = 生成一个大于上次生成的 p_num 的唯一提案编号\n        v = 客户端值; \n        acks = 0; \n        promises = {}; \n        发送<Prepapre, p_num>给所有的Acceptor;\n    }\n\n    // 当提议者从其中一个Acceptor收到承诺消息时，会调用此函数。\n    on promise(n, promise)\n    {\n        if (n != p_num) // 忽略它\n            return;\n        promises.add(promise);\n        if (promises.size == ceil(acceptors.size+1)/2) {  // 大多数\n            if (promises.max_value() != NULL){ // 至少一个承诺具有价值\n                v = promises.max_value();  // 选择从 Acceptor 接收到的最大编号的值\n            }\n            发送 <Accept, p_num, v> 给所有Acceptor; \n        }\n    }\n\n    // 当Proposer从其中一个Acceptor收到已接受的消息时，将调用此函数。\n    on accepted(n) {\n        if (n != p_num)\n            return; // 忽略它\n        acks++; \n        if (acks == ceil(acceptors.size+1)/2) { // 大多数\n            发送 <Descide, v> 给所有Learner; \n        }\n    }\n\n    // 当Proposer从其中一个Acceptor收到 nack 消息时，将调用此函数。\n    on nack(n) {\n        if (n != p_num)\n            return; // 忽略它\n        abort();\n        p_num = 0; //将导致所有未来消息被忽略\n        \n    }\n\n}\n")])])]),t("blockquote",[t("p",[e._v("Acceptor伪代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Acceptor {\n    // Acceptor状态\n    accepted_num  // 接受的最高提案编号\n    promised_num //  承诺的最高提案编号\n    accepted_value // 接受的值\n\n    // 当Acceptor从其中一个Proposer收到准备消息时，会调用此函数。\n    on prepare (n, sender) {\n        if (promised_num < n) {\n            promised_num = n; \n            存储在磁盘;\n            发送 <Promise, n, promise(accepted_num, accepted_value)> 给发送者;\n        } else {\n            发送 <Nack, n> 给发送者;\n        }\n    }\n\n    // 当Acceptor从其中一个Proposer收到接受消息时，会调用此函数。\n    on accept (n, v, sender) {\n        if (promised_num <= n){\n            promised_num = n; \n            accepted_num = n; \n            accepted_value = v; \n            存储在磁盘;\n            发送 <Accepted, n> 给发送者;\n        }else {\n            发送 <Nack, n> 给发送者;\n        }\n    }\n}\n")])])]),t("blockquote",[t("p",[e._v("Learner伪代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Learner {\n    // Learner的状态\n    decided_value = NULL;\n    \n    // 当Learner收到其中一个Proposer发来的决定消息时，此函数被调用。\n    on decide (v){\n        if (decided_value == NULL) {\n            decided_value = v; \n            Learn (v);\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);