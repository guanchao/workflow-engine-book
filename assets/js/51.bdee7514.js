(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{240:function(t,s,a){t.exports=a.p+"assets/img/wechat.50adb4d4.png"},462:function(t,s,a){t.exports=a.p+"assets/img/4 状态机.139501a7.png"},651:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("介绍FSM原理及其实现方法。")]),t._v(" "),s("h2",{attrs:{id:"有限状态机原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有限状态机原理"}},[t._v("#")]),t._v(" 有限状态机原理")]),t._v(" "),s("p",[t._v("状态机（State Machine）是一种用来进行计算或者解决问题的数学模型。它由一系列的状态和转换函数组成，这些转换函数定义了在给定输入和当前状态下如何改变状态。状态机可以用来模拟许多实际世界的系统，例如电梯的工作过程，交通灯的变化等。")]),t._v(" "),s("p",[t._v("而有限状态机（Finite State Machine，简称FSM）是状态机的一种特殊形式，它的状态数量是有限的。在任何给定的时间，有限状态机都处于其定义的某一状态中。当某个条件（通常是输入或时间事件）被满足时，它会从一个状态转移到另一个状态。")]),t._v(" "),s("p",[t._v("FSM包含如下几个核心概念：")]),t._v(" "),s("ul",[s("li",[t._v("State：状态。可以对应工作流程中的一个阶段或步骤。")]),t._v(" "),s("li",[t._v("Transition：流转，表示从一个状态流转到下一个状态，通常由事件触发。")]),t._v(" "),s("li",[t._v("Action：动作，到达指定状态后执行的操作。")])]),t._v(" "),s("p",[t._v("三者关系是：事件触发状态的转移，流转到指定状态后触发执行后续动作。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(462),alt:"image-20231117093752924"}}),t._v(" "),s("p",[s("strong",[t._v("DAG侧重于描述任务之间的依赖关系，而FSM侧重于描述状态的流转关系。")])]),t._v(" "),s("p",[t._v("相比于DAG不支持环的问题，FSM可以实现环，这个是FSM相比DAG方式实现工作流引擎的优势所在。")]),t._v(" "),s("p",[t._v("下面是一个简单的状态流转实例，其流转关系是：State A -> State B -> State C")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" State A\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("State A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Actions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 动作A\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        State B\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("State B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Actions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 动作B1\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 动作B2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        State C\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("State C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Actions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 动作C\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        End\n")])])]),s("h2",{attrs:{id:"有限状态机实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有限状态机实践"}},[t._v("#")]),t._v(" 有限状态机实践")]),t._v(" "),s("p",[t._v("FSM的原理很简单，下面我们基于前面的原理来实现一个简单的FSM。")]),t._v(" "),s("ol",[s("li",[t._v("首先，我们定义了"),s("code",[t._v("State")]),t._v("类，它表示工作流中的一个状态。每个状态都有一个名字和一个动作列表。")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("接下来，我们定义了"),s("code",[t._v("Transition")]),t._v("类，它表示工作流中的一个状态转换。每个转换都有一个源状态、一个目标状态、一个触发转换的事件、一个条件列表和一个动作列表。")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" conditions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source_state\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target_state\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conditions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conditions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" conditions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("然后，我们定义了"),s("code",[t._v("FiniteStateMachine")]),t._v("类，它表示一个工作流实例。"),s("code",[t._v("FiniteStateMachine")]),t._v("有一个状态列表、一个转换列表和一个当前状态。"),s("code",[t._v("on_event")]),t._v("方法用于处理事件。当事件发生时，它会检查所有与当前状态相关的转换，如果事件匹配并满足所有条件，则执行当前状态和转换的动作，并将当前状态更改为目标状态。")]),t._v(" "),s("p",[s("code",[t._v("transition.conditions")]),t._v("是一个包含条件函数的列表，这些函数在调用时返回一个布尔值。当所有条件函数的返回值都为"),s("code",[t._v("True")]),t._v("时，表示所有条件都满足。")]),t._v(" "),s("p",[s("code",[t._v("all()")]),t._v("函数接收一个可迭代对象（在本例中为生成器表达式），并返回"),s("code",[t._v("True")]),t._v("当且仅当可迭代对象中的所有元素都为真值（"),s("code",[t._v("True")]),t._v("）。生成器表达式"),s("code",[t._v("condition() for condition in transition.conditions")]),t._v("会依次调用列表"),s("code",[t._v("transition.conditions")]),t._v("中的每个条件函数，并返回一个包含所有条件函数返回值的生成器。")]),t._v(" "),s("p",[t._v("如果转换的所有条件函数都返回"),s("code",[t._v("True")]),t._v("（即所有条件都满足），则执行该"),s("code",[t._v("if")]),t._v("语句块中的代码。在这种情况下，将执行当前状态和转换的动作，并将当前状态更改为目标状态。")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FiniteStateMachine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" states"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initial_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("states "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" states\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transitions\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initial_state\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Current state: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", Event: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" condition "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conditions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" action "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                        action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" action "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                        action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target_state\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"New state: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("接下来，我们定义了"),s("code",[t._v("WorkflowEngine")]),t._v("类，它用于管理工作流定义和实例。"),s("code",[t._v("WorkflowEngine")]),t._v("有一个工作流定义字典和一个工作流实例字典。"),s("code",[t._v("create_workflow_instance")]),t._v("方法根据工作流名称创建一个新的"),s("code",[t._v("FiniteStateMachine")]),t._v("实例，并将其添加到实例字典中。"),s("code",[t._v("on_event")]),t._v("方法用于将事件传递给指定的工作流实例。")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkflowEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow_definitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow_definitions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow_definitions\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow_instances "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_workflow_instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        state_machine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_create_state_machine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workflow_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        workflow_instance_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow_instances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow_instances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("workflow_instance_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state_machine\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" workflow_instance_id\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow_instance_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        state_machine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow_instances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("workflow_instance_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        state_machine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_create_state_machine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        definition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("workflow_definitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("workflow_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        states "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" definition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'states'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        transitions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" definition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transitions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        initial_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" states"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" FiniteStateMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("states"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initial_state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("在这个示例中，我们定义了一个名为"),s("code",[t._v("order_process")]),t._v("的工作流，其中包含三个状态（"),s("code",[t._v("new_order")]),t._v("、"),s("code",[t._v("paid")]),t._v("和"),s("code",[t._v("shipped")]),t._v("）和两个转换（从"),s("code",[t._v("new_order")]),t._v("到"),s("code",[t._v("paid")]),t._v("和从"),s("code",[t._v("paid")]),t._v("到"),s("code",[t._v("shipped")]),t._v("）。如下图所示：")]),t._v(" "),s("p",[t._v("![image-20240313234059811](./img/4 state-machine-demo.png)")])]),t._v(" "),s("li",[s("p",[t._v("最后，我们创建了一个"),s("code",[t._v("WorkflowEngine")]),t._v("实例，使用"),s("code",[t._v("order_process")]),t._v("工作流定义创建了一个工作流实例，并触发了两个事件（"),s("code",[t._v("payment_successful")]),t._v("和"),s("code",[t._v("ship_order")]),t._v("），以使工作流实例从"),s("code",[t._v("new_order")]),t._v("状态转换到"),s("code",[t._v("paid")]),t._v("状态，然后转换到"),s("code",[t._v("shipped")]),t._v("状态。")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_valid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查某些有效性条件，例如检查输入值、数据库记录等")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 False，根据实际条件")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义工作流")]),t._v("\nnew_order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" State"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new_order'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npaid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" State"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nshipped "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" State"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shipped'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nworkflow_definitions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order_process'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'states'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new_order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" paid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shipped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transitions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            Transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              source_state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("new_order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              target_state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("paid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'payment_successful'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              conditions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("is_valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              source_state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("paid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              target_state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("shipped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ship_order'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              conditions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("is_valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建工作流引擎")]),t._v("\nworkflow_engine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WorkflowEngine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workflow_definitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建工作流实例")]),t._v("\nworkflow_instance_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_workflow_instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order_process'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发事件")]),t._v("\nworkflow_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workflow_instance_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'payment_successful'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworkflow_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workflow_instance_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ship_order'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("现在，当您运行代码并触发事件时，您应该看到类似以下的输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Current state: new_order, Event: payment_successful\nNew state: paid\nCurrent state: paid, Event: ship_order\nNew state: shipped\n")])])]),s("p",[t._v("这将显示工作流实例在事件触发时的状态变化。")]),t._v(" "),s("blockquote",[s("p",[t._v("总结")])]),t._v(" "),s("p",[t._v("FSM很好解决了DAG中审批业务场景无法支持回环的问题，应用场景进一步得到扩展。流程引擎的实现方法介绍到FSM这里，基本上可以满足绝大多数的业务场景需求，其通用性也更加广泛。")]),t._v(" "),s("p",[t._v("但是我们进一步研究，会发现，还有一小部分的场景，FSM和DAG实现的流程引擎都无法支持。例如，我们通过表单来触发流程，这里如果设置了表单提交分数例如100份，要提交至少80份以后才开始触发后续的流程，例如问卷统计之类的步骤。但是我们知道DAG和FSM都基于事件触发状态或任务的流转，那么每次用户提交一份表单就会触发一次流程实例的创建和运行，这样导致没法等待提交一定数量后的问卷才触发流程实例创建执行，因为这两种流程引擎的实现原理都是立即触发运行的。")]),t._v(" "),s("p",[t._v("那么要解决这个问题，就需要用到后面我们介绍到的第三种算法：基于Petri网的令牌机制实现的流程引擎方法。")]),t._v(" "),s("ul",[s("li",[t._v("参考：https://web.mit.edu/6.111/www/f2017/handouts/L06.pdf")])]),t._v(" "),s("img",{staticStyle:{zoom:"15%"},attrs:{src:a(240)}})])}),[],!1,null,null,null);s.default=e.exports}}]);