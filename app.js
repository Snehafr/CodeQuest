
const roadmap=[
{phase:1,title:"Foundations",weeks:"Weeks 1–6",desc:"Python leads; C runs alongside it to build deeper understanding.",weeksData:[
["Week 1–2 · Setup + Basics",["Install Python + VS Code","Learn variables, int, float, string, bool and basic math","Practice print statements and input()","Mini project: Mad Libs generator","Install gcc + configure VS Code for C","Learn C variables, int, float, char, printf/scanf","Understand compile → run workflow","Mini project: Hello World + temperature converter"]],
["Week 3 · Control Flow",["Python: if / elif / else","Python: comparison and logical operators","Mini project: number guessing game","C: if / else and switch","C: &&, ||, !","Mini project: simple grade calculator"]],
["Week 4 · Loops",["Python: for and while","Python: break and continue","Mini project: times table + countdown timer","C: for, while, do-while","C: break and continue","Compare the same times-table program in Python and C"]],
["Week 5 · Functions",["Python: functions, parameters, return values","Python: scope basics","Mini project: calculator with functions","C: function declarations, definitions and return types","Understand explicit C types","Mini project: calculator in C"]],
["Week 6 · Data Structures I",["Python: lists, indexing and slicing","Python: dictionaries","Mini project: console to-do list","C: fixed-size arrays","C: intro to pointers","Mini project: fixed-size array to-do list"]]
]},
{phase:2,title:"Core Skills",weeks:"Weeks 7–16",desc:"Strengthen structures, files, errors, objects, memory, APIs and version control.",weeksData:[
["Week 7 · Data Structures II",["Python: tuples and sets","Python: nested lists and dictionaries","Python: list comprehensions","C: pointer arithmetic","C: pointers + arrays","C: pass arrays to functions"]],
["Week 8 · String Manipulation",["Python: string methods","Python: f-string formatting","Mini project: password strength checker","C: character arrays / C strings","C: strlen, strcpy, strcmp","Mini project: palindrome checker"]],
["Week 9 · File Handling",["Python: read/write .txt and .csv","Mini project: journal/logging app","C: fopen, fread, fwrite, fclose","Mini project: save/load names to a file"]],
["Week 10 · Error Handling",["Python: try / except / finally","Learn common Python error types","Add error handling to an earlier project","C: return codes","C: NULL checks and input validation"]],
["Week 11–12 · Structure & Objects",["Python: classes and objects","Python: attributes, methods, __init__, self","Python: inheritance basics","Mini project: contact book with classes","C: structs","C: arrays of structs","Mini project: contact book with structs + arrays"]],
["Week 13 · Memory Management",["C: malloc and free","Understand dynamic memory allocation","Mini project: dynamic resizable array","Read about Python garbage collection"]],
["Week 14 · Working with APIs",["Python: APIs and requests","JSON basics","Mini project: weather app","C: refactor earlier projects","C: fix bugs and add comments"]],
["Week 15 · Version Control",["Git: init, add, commit, push","GitHub: create a repository","Push Python and C projects","Upload all projects so far to GitHub"]],
["Week 16 · Reflection",["Write the same small program in Python and C","Compare speed of writing","Compare memory control","Compare error handling","Decide whether to keep both or focus on one"]]
]},
];

const paths=[
["web","🌐","Web Development","HTML & CSS → JavaScript → Flask or React → personal portfolio"],
["data","📊","Data & AI","pandas → numpy → matplotlib → scikit-learn → dataset project"],
["apps","📱","App Development","Tkinter / Kivy → GUI basics → desktop app"],
["games","🎮","Game Development","Pygame → game loops → sprites → collision detection → 2D game"]
];



/* =========================================================
   LEARNING RESOURCES · per-task guidance
   Every quest gets a Learn button with objectives, a mini
   study plan, practice mission, and curated resources.
   ========================================================= */
const resourceLibrary={
 python:[
  {name:"CS50P · Introduction to Programming with Python",url:"https://cs50.harvard.edu/python/",note:"Free, structured course with lectures, notes and problem sets."},
  {name:"Python Official Tutorial",url:"https://docs.python.org/3/tutorial/",note:"Official Python tutorial and language fundamentals."}
 ],
 c:[
  {name:"CS50x · C, Arrays, Memory & Data Structures",url:"https://cs50.harvard.edu/x/",note:"Free computer-science course with a strong C foundation."},
  {name:"cppreference · C language",url:"https://en.cppreference.com/w/c/language",note:"Detailed C language reference for syntax and semantics."}
 ],
 git:[
  {name:"Pro Git Book",url:"https://git-scm.com/book/en/v2",note:"Free, practical guide to Git from basics through branching and workflows."},
  {name:"GitHub Docs · Get started",url:"https://docs.github.com/en/get-started",note:"Official GitHub guidance for repositories and collaboration."}
 ],
 vscode:[
  {name:"VS Code Documentation",url:"https://code.visualstudio.com/docs",note:"Official editor setup, terminal, debugging and extensions documentation."}
 ],
 api:[
  {name:"Requests Documentation",url:"https://requests.readthedocs.io/en/latest/",note:"Practical Python HTTP client documentation."},
  {name:"MDN · HTTP overview",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",note:"Clear explanation of HTTP requests, responses and status codes."}
 ],
 json:[
  {name:"MDN · JSON",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",note:"Reference for JSON data and serialization concepts."},
  {name:"Python json module",url:"https://docs.python.org/3/library/json.html",note:"Official Python JSON library documentation."}
 ],
 files:[
  {name:"Python · Reading and Writing Files",url:"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",note:"Official guide to text files and file I/O."},
  {name:"C file I/O reference",url:"https://en.cppreference.com/w/c/io",note:"C standard I/O functions including fopen, fread and fwrite."}
 ],
 oop:[
  {name:"CS50P · Object-Oriented Programming",url:"https://cs50.harvard.edu/python/notes/8/",note:"Classes, objects, methods, inheritance and related concepts."},
  {name:"Python · Classes",url:"https://docs.python.org/3/tutorial/classes.html",note:"Official reference for Python classes and inheritance."}
 ],
 memory:[
  {name:"CS50x · Memory",url:"https://cs50.harvard.edu/x/2026/weeks/4/",note:"Visual explanation of pointers, memory and dynamic allocation."},
  {name:"cppreference · Memory management",url:"https://en.cppreference.com/w/c/memory",note:"C allocation and memory-management reference."}
 ],
 strings:[
  {name:"Python · String Methods",url:"https://docs.python.org/3/library/stdtypes.html#string-methods",note:"Official reference for Python string operations."},
  {name:"cppreference · C strings",url:"https://en.cppreference.com/w/c/string",note:"C string and character-array functions."}
 ],
 errors:[
  {name:"CS50P · Exceptions",url:"https://cs50.harvard.edu/python/notes/3/",note:"Exceptions, try/except and defensive programming."},
  {name:"Python · Errors and Exceptions",url:"https://docs.python.org/3/tutorial/errors.html",note:"Official error and exception handling guide."}
 ],
 data:[
  {name:"Python · Data Structures",url:"https://docs.python.org/3/tutorial/datastructures.html",note:"Lists, tuples, sets, dictionaries and common patterns."},
  {name:"CS50P · Problem Sets",url:"https://cs50.harvard.edu/python/psets/",note:"Practice problems to turn concepts into working programs."}
 ],
 algorithms:[
  {name:"CS50x · Algorithms & Data Structures",url:"https://cs50.harvard.edu/x/2026/weeks/3/",note:"Algorithmic thinking, searching, sorting and efficiency."}
 ]
};

function resourceInfo(text){
 const t=text.toLowerCase();
 let category="python";
 if(t.includes("git")||t.includes("github")) category="git";
 else if(t.includes("vscode")||t.includes("vs code")||t.includes("configure")) category="vscode";
 else if(t.includes("api")||t.includes("requests")) category="api";
 else if(t.includes("json")) category="json";
 else if(t.includes("file")||t.includes("fopen")||t.includes("fread")||t.includes("fwrite")) category="files";
 else if(t.includes("class")||t.includes("object")||t.includes("inheritance")||t.includes("struct")) category="oop";
 else if(t.includes("malloc")||t.includes("free")||t.includes("pointer")||t.includes("memory")) category="memory";
 else if(t.includes("string")||t.includes("strlen")||t.includes("strcpy")||t.includes("strcmp")||t.includes("palindrome")) category="strings";
 else if(t.includes("error")||t.includes("exception")||t.includes("null")||t.includes("validation")) category="errors";
 else if(t.includes("list")||t.includes("dictionary")||t.includes("tuple")||t.includes("set")||t.includes("array")) category="data";
 else if(t.startsWith("c:")||t.includes(" c ")||t.includes("c++")||t.includes("gcc")||t.includes("printf")||t.includes("scanf")||t.includes("switch")||t.includes("&&")||t.includes("||")||t.includes("do-while")||t.includes("function declarations")||t.includes("explicit c types")) category="c";
 const focus={
  python:"Build the concept in Python, then run small experiments rather than only reading examples.",
  c:"Learn the C syntax, compile it, inspect the output, then deliberately change one thing at a time.",
  git:"Use the terminal and make real commits. Git becomes much easier once you can see the history you created.",
  vscode:"Set up the editor so running and debugging code becomes a one-command habit.",
  api:"Understand the request → response cycle, inspect returned data, and handle failure cases.",
  json:"Learn how structured data is represented, parsed, edited and written back.",
  files:"Practice opening, reading, writing and closing files safely, including what happens when a file is missing.",
  oop:"Start from a small real-world object, give it state and behaviour, then add relationships only when useful.",
  memory:"Draw the memory layout on paper, then verify it with a tiny C program. Pointers click much faster this way.",
  strings:"Treat strings as data structures, not magic text. Inspect indexes, lengths and transformations explicitly.",
  errors:"Make the program fail on purpose, identify the failure, then add the smallest useful guard or exception handler.",
  data:"Create tiny examples first, inspect their contents, then use them in a small program.",
  algorithms:"Write the steps in plain language before coding. Then test the algorithm on tiny and awkward inputs."
 };
 const practice={
  python:"Write a 15–30 line program that demonstrates the concept. Test at least three different inputs.",
  c:"Write a small C program, compile it yourself, and test normal, boundary and invalid input.",
  git:"Create a tiny practice repository, make 3 meaningful commits, inspect the log, and push it.",
  vscode:"Create a tiny project, run it, set a breakpoint, inspect a variable, and run it again after a change.",
  api:"Call one public API, print the status code and useful fields, and handle a failed request gracefully.",
  json:"Create a small JSON object, parse it, modify one field, and serialize it again.",
  files:"Write data to a file, close it, reopen it, read it back, and verify the result.",
  oop:"Model one real thing as a class, create several objects, call methods on them, and explain what each attribute stores.",
  memory:"Draw a variable, its address and the pointed-to value. Then reproduce the diagram with a tiny pointer program.",
  strings:"Build a tiny text utility and test empty strings, one-character strings, spaces and repeated characters.",
  errors:"List three ways the program can fail and make each failure produce a useful, controlled result.",
  data:"Create the structure manually with 5–10 values, inspect it, then solve a small problem using it.",
  algorithms:"Solve the same problem first by hand, then in code, then test it with an edge case."
 };
 return {category,focus:focus[category],practice:practice[category],resources:resourceLibrary[category]};
}

function detailForTask(text){
 const r=resourceInfo(text);
 const lower=text.toLowerCase();
 let learn=[
  `Understand what “${text}” means and what problem it solves.`,
  r.focus,
  "Type the examples yourself and change them until you can predict the output before running the program."
 ];
 if(lower.includes("mini project")) learn.push("Build the project from a blank file. Keep it small, then add one improvement after the basic version works.");
 if(lower.includes("install")||lower.includes("configure")) learn.push("Verify the installation by running a tiny test program before moving on.");
 if(lower.includes("compare")) learn.push("Implement both versions and write down what changed in syntax, memory control and developer experience.");
 if(lower.includes("understand")||lower.includes("learn")) learn.push("Finish by explaining the concept aloud or in 3–5 notes without looking at the resource.");
 const project=lower.includes("mini project");
 const time=project?"45–90 min":"25–45 min";
 const why=project?"This quest turns the concept into something you can actually use. Keep the first version deliberately small.":"This is a foundation quest. Getting this concept solid now will make later projects much easier.";
 return {title:text,category:r.category,objectives:learn,practice:r.practice,resources:r.resources,doneWhen:["You can explain the idea without copying the definition.","You can write a small example from memory.","You tested the code with at least one edge case or unusual input."],time,why};
}

function openResource(id){
 const x=all().find(t=>t.id===id);
 if(!x)return;
 const d=detailForTask(x.text);
 let modal=document.getElementById("resourceModal");
 if(!modal){modal=document.createElement("div");modal.id="resourceModal";modal.className="resource-modal";document.body.appendChild(modal);}
 modal.innerHTML=`<div class="resource-backdrop" onclick="closeResource(event)"></div><section class="resource-panel" role="dialog" aria-modal="true" aria-labelledby="resourceTitle"><button class="resource-close" aria-label="Close learning guide" onclick="closeResource()">×</button><div class="eyebrow">Learning guide · ${x.phase}</div><h2 id="resourceTitle">${d.title}</h2><div class="resource-meta"><span>⏱ ${d.time}</span><span>🧭 ${d.category.toUpperCase()}</span></div><div class="resource-grid"><div><h3>Why this matters</h3><p>${d.why}</p><h3>What to learn</h3><ol>${d.objectives.map(v=>`<li>${v}</li>`).join("")}</ol><h3>Practice mission</h3><p>${d.practice}</p><h3>You're done when</h3><ul>${d.doneWhen.map(v=>`<li>${v}</li>`).join("")}</ul></div><aside><h3>Where to learn</h3>${d.resources.map(v=>`<a class="resource-link" href="${v.url}" target="_blank" rel="noopener noreferrer"><strong>${v.name}</strong><span>${v.note}</span><em>Open resource ↗</em></a>`).join("")}<div class="resource-tip"><strong>Best order</strong><br>Learn → code → test → fix → explain → check the quest.</div></aside></div></section>`;
 document.body.classList.add("modal-open");
 setTimeout(()=>modal.classList.add("show"),10);
}
function closeResource(e){if(e&&e.target&&!e.target.classList.contains("resource-backdrop"))return;const m=document.getElementById("resourceModal");if(m){m.classList.remove("show");document.body.classList.remove("modal-open");setTimeout(()=>m.remove(),180)}}
window.addEventListener("keydown",e=>{if(e.key==="Escape")closeResource()});

let state=JSON.parse(localStorage.getItem("cq-state")||'{"done":{},"custom":[],"paths":[]}');
const themes={
  cyber:{name:"Cyber Pixel",icon:"🤖",colors:["#060912","#0d1320","#111a2b","#20c4e3","#a805cf","#20d9ff","#4ade80","#ff5ba6"],desc:"Neon cyber vibes with electric cyan and purple accents."},
  forest:{name:"Forest Quest",icon:"🌲",colors:["#081412","#13291d","#1e3a28","#2ce55f","#22c55e","#86efac","#f8bf24","#f97316"],desc:"Earthy forest tones with refreshing green and warm gold."},
  retro:{name:"Retro Arcade",icon:"👾",colors:["#1a0b1e","#2d1336","#4a1d5d","#ff2095","#ff66ff","#00e5ff","#ffd166","#7861ff"],desc:"Bold arcade style with neon pink, blue, and retro energy."},
  sunset:{name:"Sunset Pixel",icon:"🌅",colors:["#1a0f0a","#2d1812","#4e2a10","#ff6a00","#ff9f26","#ffd166","#fff1b8","#ff7a59"],desc:"Warm sunset palette with orange and golden adventure."},
  ocean:{name:"Ocean Depths",icon:"🌊",colors:["#07121f","#0f1e2e","#16324f","#1ea4e7","#22d3ee","#38bdf8","#67e8f9","#a3f3ff"],desc:"Deep ocean blues with bright cyan seafoam highlights."},
  dungeon:{name:"Dungeon Crawl",icon:"💀",colors:["#120c0c","#1f1414","#3a1e1e","#dc2626","#f43f5e","#fb923c","#fac15c","#fff3c4"],desc:"Dark dungeon vibes with red accents and danger."},
  galaxy:{name:"Galaxy Quest",icon:"🌌",colors:["#08001e","#161040","#2e1e66","#8b5cf6","#a855f7","#22d3ee","#a78bfa","#fde68a"],desc:"Cosmic purples with starry blues and magical vibes."},
  mono:{name:"Monochrome RPG",icon:"🛡️",colors:["#0c0c0c","#1a1a1a","#2e2e2e","#a3a3a3","#d4d4d4","#e5e5e5","#ffffff","#facc15"],desc:"Clean monochrome with sharp contrast and gold detail."},
  toxic:{name:"Toxic Waste",icon:"☢️",colors:["#080f08","#1a2e0f","#264012","#8ff700","#a3e635","#bef264","#fbbf24","#ff3864"],desc:"Toxic neon greens with radioactive energy and high contrast."},
  frost:{name:"Frost Bite",icon:"❄️",colors:["#081220","#152238","#1e3a5f","#38bdf8","#67e8f9","#bae6fd","#e0f2fe","#a5f3fc"],desc:"Icy blues and frosty whites for a chill adventure."},
  candy:{name:"Candy Land",icon:"🍭",colors:["#201826","#40254f","#6b2a77","#ff4090","#ff66b9","#a78bfa","#7c3aed","#22d3ee"],desc:"Sweet candy colors with playful pink and purple tones."},
  volcano:{name:"Volcano Fire",icon:"🌋",colors:["#1c0808","#2d150f","#7f1d1d","#ea580c","#f97316","#fb923c","#facc15","#fff7ed"],desc:"Fiery lava tones with molten orange and ember glow."},
  plains:{name:"Pixel Plains",icon:"🌄",colors:["#0e1a0e","#1f3d1f","#2e6a34","#4ade80","#86efac","#bef264","#facc15","#ff950c"],desc:"Classic RPG green with nature and sunny tones."},
  terminal:{name:"Tech Terminal",icon:"🖥️",colors:["#061013","#0d1a1f","#13404a","#00bcd4","#22d3ee","#67e8f9","#a7f3d0","#f8fafc"],desc:"Hacker terminal greens and cyans with matrix vibes."},
  desert:{name:"Desert Dunes",icon:"🌵",colors:["#1e1600","#332817","#5c4a1c","#f5b800","#facc15","#fde68a","#fff7d6","#ffe07a"],desc:"Sandy desert tones with a warm yellow and bronze feel."},
  mines:{name:"Dwarven Mines",icon:"⛏️",colors:["#0d0f12","#1a2028","#2a3540","#94a3b8","#cbd5e1","#60a5fa","#e2e8f0","#f59e0b"],desc:"Rocky stone palette with steel blues and mining gold."}
};
let activeTheme=localStorage.getItem("cq-theme")||"cyber";
function applyTheme(id){const theme=themes[id]||themes.cyber,c=theme.colors,root=document.documentElement;activeTheme=themes[id]?id:"cyber";root.dataset.theme=activeTheme;root.style.setProperty("--bg",c[0]);root.style.setProperty("--panel",c[1]);root.style.setProperty("--panel2",c[2]);root.style.setProperty("--line",c[3]+"99");root.style.setProperty("--purple",c[4]);root.style.setProperty("--cyan",c[5]);root.style.setProperty("--green",c[6]);root.style.setProperty("--pink",c[7]);root.style.setProperty("--text",c[6]==="#ffffff"?"#ffffff":"#eefcff");root.style.setProperty("--muted",c[6]+"b8");root.style.setProperty("--glow-1",c[4]+"55");root.style.setProperty("--glow-2",c[5]+"38");root.style.setProperty("--sidebar",c[0]+"ee")}
function setTheme(id){if(!themes[id])return;localStorage.setItem("cq-theme",id);applyTheme(id);render();toast(`${themes[id].name.toUpperCase()} EQUIPPED`)}
function themePicker(){return `<section class="card theme-settings"><div class="theme-settings-head"><div><h2>Theme palette</h2><div class="desc">Choose a visual style for your CodeQuest adventure. Your choice is saved in this browser.</div></div><span class="theme-equipped">EQUIPPED: ${themes[activeTheme].name}</span></div><div class="theme-grid">${Object.entries(themes).map(([id,t])=>`<button class="theme-card ${id===activeTheme?"selected":""}" onclick="setTheme('${id}')" aria-pressed="${id===activeTheme}"><span class="theme-card-title"><span>${t.icon}</span>${t.name}</span><span class="theme-swatches">${t.colors.map(color=>`<i style="background:${color}"></i>`).join("")}</span><span class="theme-card-desc">${t.desc}</span></button>`).join("")}</div></section>`}
applyTheme(activeTheme);
function save(){localStorage.setItem("cq-state",JSON.stringify(state))}
function taskId(p,w,t){return `${p}:${w}:${t}`}
function all(){let a=[];roadmap.forEach((p,pi)=>p.weeksData.forEach((w,wi)=>w[1].forEach((t,ti)=>a.push({id:taskId(pi,wi,ti),text:t,week:w[0],phase:p.title}))));state.custom.forEach((x,i)=>a.push({id:"custom:"+i,text:x.text,week:x.week,phase:"Custom"}));return a}
function questState(id){return state.done[id]===true?"done":state.done[id]==="progress"?"progress":"idle"}
function isDone(id){return questState(id)==="done"}
function progress(){let a=all(),d=a.filter(x=>isDone(x.id)).length;return {a,d,p:a.length?Math.round(d/a.length*100):0}}
function nav(active){document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===active))}
// Keep navigation inside CodeQuest in the current document.  The original
// links still work when opened directly or in a new tab, but normal clicks no
// longer reload the stylesheet, script, and sidebar (the source of the blink).
function navigate(url){
 const next=new URL(url,location.href);
 if(next.pathname===location.pathname&&next.search===location.search)return;
 // Browsers do not consistently allow pushState between file:// documents.
 // Fall back to the original link navigation in that case.
 if(location.protocol==="file:"){location.href=next.href;return}
 try{
  history.pushState({},"",next.pathname+next.search+next.hash);
  render();
  window.scrollTo({top:0,behavior:"auto"});
 }catch(error){location.href=next.href}
}
document.addEventListener("click",event=>{
 if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 const link=event.target.closest("a[href]");
 if(!link||link.target||link.hasAttribute("download"))return;
 const next=new URL(link.href,location.href);
 const internalPages=["index.html","roadmap.html","phase.html","week.html","tasks.html","paths.html","settings.html"];
 const page=next.pathname.split("/").pop();
 if(next.origin!==location.origin||!internalPages.includes(page))return;
 // Let local-file navigation follow the normal browser path. This is needed
 // because file:// URLs cannot reliably use the History API.
 if(location.protocol==="file:")return;
 event.preventDefault();
 navigate(next.href);
});
window.addEventListener("popstate",()=>{render();window.scrollTo({top:0,behavior:"auto"})});
function layout(title,sub,body,active){return `<div class="hero"><div><div class="eyebrow">CodeQuest</div><h1>${title}</h1><div class="lead">${sub}</div></div></div>${body}`}
function taskHTML(x){return `<div class="task-row ${isDone(x.id)?"completed":""} ${questState(x.id)==="progress"?"in-progress":""}">${questButton(x.id)}<span class="task-text">${x.text}</span><button class="learn-btn" onclick="openResource('${x.id}')">Learn ↗</button><span class="task-xp">+10 XP</span></div>`}
function render(){
 const page=location.pathname.split("/").pop()||"index.html"; nav(page);
 const {a,d,p}=progress();let main=document.querySelector("main");
 if(page==="index.html"||page===""){main.innerHTML=layout("Your coding journey.","A dark, gamified learning dashboard built from your Python + C roadmap.",`
 <div class="grid">
  <div class="card stat"><span class="label">OVERALL PROGRESS</span><strong data-live="overall-percent">${p}%</strong><div class="progress"><i data-live="overall" style="width:${p}%"></i></div></div>
  <div class="card stat"><span class="label">TASKS DONE</span><strong data-live="done-count">${d} / ${a.length}</strong><div class="progress"><i data-live="overall" style="width:${p}%"></i></div></div>
  <div class="card stat"><span class="label">CURRENT PHASE</span><strong>${d===a.length?"Complete":"Phase "+(d<25?"1":"2")}</strong><span class="label">Keep moving ✦</span></div>
  <div class="card stat"><span class="label">STREAK</span><strong>${Math.min(d,30)} 🔥</strong><span class="label">prototype XP streak</span></div>
 </div>
 <div class="section-title"><h2>Continue learning</h2><a class="btn primary" href="roadmap.html">Open roadmap →</a></div>
 <div class="card" id="continueQuest">${renderContinueQuest()}</div>
 <div class="section-title"><h2>Quick links</h2></div>
 <div class="grid">
  <a class="card" style="grid-column:span 4" href="roadmap.html"><span class="eyebrow">01</span><h3>Roadmap</h3><div class="desc">Explore phases and weeks.</div></a>
  <a class="card" style="grid-column:span 4" href="tasks.html"><span class="eyebrow">02</span><h3>All Tasks</h3><div class="desc">See every task in one place.</div></a>
  <a class="card" style="grid-column:span 4" href="paths.html"><span class="eyebrow">03</span><h3>Choose Path</h3><div class="desc">Pick your Phase 3 direction.</div></a>
 </div>`,"index.html");
 }
 else if(page==="roadmap.html"){
  main.innerHTML=layout("Interactive roadmap.","Every phase is a real page. Click a phase to open its weeks, then open a week to work through its tasks.",`<div class="phase-grid">${roadmap.map((x,i)=>`<a class="card phase" href="phase.html?p=${i}"><div class="eyebrow">${x.weeks}</div><h2>Phase ${x.phase}: ${x.title}</h2><div class="desc">${x.desc}</div><div class="progress"><i data-live="phase" style="width:${phasePct(i)}%"></i></div><div class="card-footer"><span>${phaseDone(i)} completed</span><span>Enter phase →</span></div></a>`).join("")}</div>`,"roadmap.html");
 }
 else if(page==="phase.html"){
  let i=Number(new URLSearchParams(location.search).get("p")||0),x=roadmap[i]||roadmap[0];
  main.innerHTML=layout(`Phase ${x.phase}: ${x.title}`,x.desc,`<a class="btn" href="roadmap.html">← All phases</a><div class="section-title"><h2>${x.weeks}</h2></div><div class="week-grid">${x.weeksData.map((w,wi)=>`<a class="card week-card" href="week.html?p=${i}&w=${wi}"><div class="week-no">${w[0]}</div><h3>${w[0].split(" · ")[1]||w[0]}</h3><div class="desc">${w[1].length} tasks</div><div class="progress"><i style="width:${weekPct(i,wi)}%"></i></div><div class="card-footer"><span>${weekDone(i,wi)} / ${w[1].length}</span><span>Enter →</span></div></a>`).join("")}</div>`,"roadmap.html");
 }
 else if(page==="week.html"){
  let q=new URLSearchParams(location.search),i=Number(q.get("p")||0),wi=Number(q.get("w")||0),x=roadmap[i],w=x?.weeksData[wi];
  if(!w){location.href="roadmap.html";return}
  let tasks=w[1].map((t,ti)=>({id:taskId(i,wi,ti),text:t,week:w[0],phase:x.title}));
  main.innerHTML=layout(w[0],`Phase ${x.phase}: ${x.title}`,`<a class="btn" href="phase.html?p=${i}">← Back to phase</a><div class="week-placard" style="margin-top:18px"><div class="card-footer"><span>Quest progress</span><b data-live="week-label">${weekPct(i,wi)}%</b></div><div class="progress"><i data-live="week" style="width:${weekPct(i,wi)}%"></i></div><div class="task-list">${tasks.map((t,ti)=>questRow(t,ti)).join("")}</div></div>`,"roadmap.html");
 }
 else if(page==="tasks.html"){
  main.innerHTML=layout("Your task board.","Every week gets its own interactive placard. Complete quests, fill the progress bars, and search the whole roadmap.",`
   <div class="filters">
    <button class="filter active" onclick="setFilter('all',this)">All quests</button>
    <button class="filter" onclick="setFilter('open',this)">⚡ Open</button>
    <button class="filter" onclick="setFilter('done',this)">✦ Completed</button>
   </div>
   <input class="search" id="search" placeholder="Search tasks or weeks..." oninput="filterTasks()">
   <div id="taskBoard" class="task-placard-wrap"></div>
  `,"tasks.html"); renderTaskBoard();
 }
 else if(page==="paths.html"){
  main.innerHTML=layout("Choose your direction.","Phase 3 begins at Week 17+. Select one or two paths based on what excites you.",`<div class="branch-grid">${paths.map(x=>`<article class="card branch ${state.paths.includes(x[0])?"selected":""}" onclick="selectPath('${x[0]}')"><div class="icon">${x[1]}</div><h2>${x[2]}</h2><div class="desc">${x[3]}</div><div class="card-footer"><span>${state.paths.includes(x[0])?"Selected":"Not selected"}</span><span>Click to select</span></div></article>`).join("")}</div>`,"paths.html");
 }
 else if(page==="settings.html"){
  main.innerHTML=layout("Settings.","Personalise the way your CodeQuest adventure looks and feels.",`${themePicker()}<div class="card settings-data"><h2>Local data</h2><div class="desc">Tasks completed: ${d}. Custom tasks: ${state.custom.length}. Selected paths: ${state.paths.length}.</div><br><button class="btn" onclick="resetData()">Reset all progress</button></div>`,"settings.html");
 }
}
function phaseDone(i){let d=0;roadmap[i].weeksData.forEach((w,wi)=>w[1].forEach((_,ti)=>{if(isDone(taskId(i,wi,ti)))d++}));return d}
function phasePct(i){let total=roadmap[i].weeksData.reduce((n,w)=>n+w[1].length,0);return Math.round(phaseDone(i)/total*100)}
function weekDone(i,w){return roadmap[i].weeksData[w][1].filter((_,ti)=>isDone(taskId(i,w,ti))).length}
function weekPct(i,w){return Math.round(weekDone(i,w)/roadmap[i].weeksData[w][1].length*100)}
function questButton(id){let status=questState(id),label=status==="done"?"Completed — double click to keep complete":status==="progress"?"In progress — double click to complete":"Not started — click to mark in progress";return `<button class="quest-toggle ${status}" aria-label="${label}" title="Click: in progress · Double click: complete" onclick="questClick('${id}',this,event)" ondblclick="questComplete('${id}',this,event)"><span class="pixel-pal" aria-hidden="true"><i class="pal-eye left"></i><i class="pal-eye right"></i><i class="pal-mouth"></i></span></button>`}
function questRow(x,idx){let status=questState(x.id);return `<div class="task-row ${status==="done"?"completed":""} ${status==="progress"?"in-progress":""}">${questButton(x.id)}<span class="task-number">#${String(idx+1).padStart(2,"0")}</span><span class="task-text">${x.text}</span><button class="learn-btn" onclick="openResource('${x.id}')">Learn ↗</button><span class="task-xp">+10 XP</span></div>`}
function renderTaskBoard(filter="all",search=""){
 let el=document.getElementById("taskBoard");if(!el)return;let q=(search||"").toLowerCase(),groups=[];
 roadmap.forEach((p,pi)=>p.weeksData.forEach((w,wi)=>{let items=w[1].map((t,ti)=>({id:taskId(pi,wi,ti),text:t,week:w[0],phase:p.title})).filter(x=>(filter==="all"||(filter==="done"?isDone(x.id):!isDone(x.id)))&&(x.text.toLowerCase().includes(q)||x.week.toLowerCase().includes(q)));if(items.length)groups.push({title:w[0],phase:`Phase ${p.phase}: ${p.title}`,items,total:w[1].length})}));
 let custom=state.custom.map((x,i)=>({id:"custom:"+i,text:x.text,week:x.week,phase:"Custom"})).filter(x=>(filter==="all"||(filter==="done"?isDone(x.id):!isDone(x.id)))&&(x.text.toLowerCase().includes(q)||x.week.toLowerCase().includes(q)));
 if(custom.length)groups.push({title:"Custom Quests",phase:"Your additions",items:custom,total:custom.length});
 el.innerHTML=groups.length?groups.map(g=>{let done=g.items.filter(x=>isDone(x.id)).length,pct=Math.round(done/g.total*100);return `<section class="week-placard"><div class="week-placard-head"><div><div class="week-kicker">${g.phase}</div><h3>${g.title}</h3><div class="week-meta">${done}/${g.total} quests completed</div></div><span class="badge">${pct}%</span></div><div class="progress"><i style="width:${pct}%"></i></div><div class="task-list">${g.items.map((x,i)=>questRow(x,i)).join("")}</div></section>`}).join(""):`<div class="empty-state"><strong>No quests found</strong>Try another search or filter.</div>`;
}
function renderContinueQuest(){
 const next=all().find(x=>!isDone(x.id));
 if(!next) return `<div class="empty-state"><strong>All quests complete 🎉</strong>You cleared the roadmap. Time to celebrate, then choose your next path.</div>`;
 return `<div class="task-row ${questState(next.id)==="progress"?"in-progress":""}">${questButton(next.id)}<span class="task-text"><strong>Next up</strong><br>${next.text}<br><small style="color:var(--muted)">${next.phase} · ${next.week}</small></span><button class="learn-btn" onclick="openResource('${next.id}')">Learn ↗</button><span class="task-xp">+10 XP</span></div>`;
}

function setQuestState(id,status,message){if(status==="idle")delete state.done[id];else state.done[id]=status==="done"?true:"progress";save();render();toast(message)}
function questClick(id,button,event){event.preventDefault();clearTimeout(button._questClickTimer);button._questClickTimer=setTimeout(()=>{const next=questState(id)==="progress"?"idle":"progress";setQuestState(id,next,next==="progress"?"QUEST IN PROGRESS  ◌":"QUEST RESET")},230)}
function questComplete(id,button,event){event.preventDefault();clearTimeout(button._questClickTimer);setQuestState(id,"done","QUEST CLEARED!  +10 XP  ✦")}


let progressSparkMemory = {};

function progressPageKey(){
  return (location.pathname.split("/").pop()||"index.html") + location.search;
}

function setProgressTarget(bar, target){
  target = Math.max(0, Math.min(100, Number(target)||0));
  const key = progressPageKey()+"::"+Array.from(document.querySelectorAll(".progress")).indexOf(bar.parentElement);
  const previous = bar.dataset.sparkValue != null
    ? Number(bar.dataset.sparkValue)
    : (progressSparkMemory[key] != null ? Number(progressSparkMemory[key]) : null);

  bar.parentElement.classList.add("progress-bar-sparky");
  bar.style.width = target + "%";

  if(previous !== null && Math.round(previous) !== Math.round(target)){
    const dir = target > previous ? "spark-up" : "spark-down";
    const parent = bar.parentElement;
    parent.classList.remove("spark-up","spark-down");
    void parent.offsetWidth;
    parent.classList.add(dir);
    clearTimeout(bar._sparkTimer);
    bar._sparkTimer=setTimeout(()=>parent.classList.remove("spark-up","spark-down"),700);
  }

  bar.dataset.sparkValue = String(target);
  progressSparkMemory[key] = target;
}

function sparkProgressBars(){
  const pageKey = progressPageKey();
  document.querySelectorAll(".progress").forEach((track, index)=>{
    const bar=track.querySelector("i");
    if(!bar) return;

    track.classList.add("progress-bar-sparky");

    const match = (bar.style.width||"").match(/([\d.]+)%/);
    const target = match ? Number(match[1]) : 0;
    const key = pageKey+"::"+index;
    const previous = progressSparkMemory[key];

    if(previous !== undefined && Math.round(previous)!==Math.round(target)){
      bar.style.width = previous+"%";
      void bar.offsetWidth;
      requestAnimationFrame(()=>{
        bar.style.width = target+"%";
      });

      const dir = target > previous ? "spark-up" : "spark-down";
      track.classList.remove("spark-up","spark-down");
      void track.offsetWidth;
      track.classList.add(dir);
      clearTimeout(bar._sparkTimer);
      bar._sparkTimer=setTimeout(()=>track.classList.remove("spark-up","spark-down"),700);
    }

    bar.dataset.sparkValue=String(target);
    progressSparkMemory[key]=target;
  });
}

function updateLiveProgress(){
  const overall=progress();
  document.querySelectorAll(".progress i").forEach(bar=>{
    // Bars carrying a live-progress marker represent the overall dashboard progress.
    if(bar.dataset.live==="overall"){
      setProgressTarget(bar, overall.p);
    }
  });

  // Week-page progress.
  const weekMatch=location.pathname.endsWith("week.html") ? new URLSearchParams(location.search) : null;
  if(weekMatch){
    const pi=Number(weekMatch.get("p")||0);
    const wi=Number(weekMatch.get("w")||0);
    const pct=weekPct(pi,wi);
    document.querySelectorAll("[data-live='week']").forEach(bar=>setProgressTarget(bar, pct));
    document.querySelectorAll("[data-live='week-label']").forEach(el=>el.textContent=pct+"%");
  }

  // Phase-page progress bars.
  const phaseMatch=location.pathname.endsWith("phase.html") ? new URLSearchParams(location.search) : null;
  if(phaseMatch){
    const pi=Number(phaseMatch.get("p")||0);
    const pct=phasePct(pi);
    document.querySelectorAll("[data-live='phase']").forEach(bar=>setProgressTarget(bar, pct));
  }

  // Dashboard stat values.
  document.querySelectorAll("[data-live='overall-percent']").forEach(el=>el.textContent=overall.p+"%");
  document.querySelectorAll("[data-live='done-count']").forEach(el=>el.textContent=overall.d+" / "+overall.a.length);
  sparkProgressBars();
}

function renderTaskTable(){renderTaskBoard(activeFilter,document.getElementById("search")?.value||"")}
let activeFilter="all";
function setFilter(f,b){activeFilter=f;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderTaskBoard(f,document.getElementById("search")?.value||"")}
function filterTasks(){renderTaskBoard(activeFilter,document.getElementById("search").value)}

function selectPath(id){state.paths=state.paths.includes(id)?state.paths.filter(x=>x!==id):[...state.paths,id];save();render();toast("LOADOUT UPDATED  ✦")}
function resetData(){if(confirm("Reset all progress and custom data?")){state={done:{},custom:[],paths:[]};save();render();toast("SAVE DATA RESET  ◈")}}
function toast(t){let x=document.querySelector(".toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1500)}
window.addEventListener("storage",e=>{if(e.key==="cq-theme")applyTheme(e.newValue||"cyber");render()});render();
