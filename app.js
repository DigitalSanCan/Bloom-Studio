function generate(){
const occasion=document.getElementById('occasion').value;
const style=document.getElementById('style').value;
const budget=document.getElementById('budget').value;
const container=document.getElementById('container').value;
const inventory=document.getElementById('inventory').value.trim().split('\n');
const notes=document.getElementById('notes').value;

let recipe=inventory.slice(0,6).join('\n');

document.getElementById('output').innerHTML=
`<h2>Suggested Arrangement</h2>
<p><b>Occasion:</b> ${occasion}</p>
<p><b>Style:</b> ${style}</p>
<p><b>Budget:</b> $${budget}</p>
<p><b>Container:</b> ${container}</p>
<h3>Stem Recipe</h3>
<pre>${recipe}</pre>
<h3>Construction Order</h3>
<ol>
<li>Create tape grid.</li>
<li>Build greenery framework.</li>
<li>Insert focal flowers.</li>
<li>Add line flowers.</li>
<li>Add filler flowers.</li>
<li>Refine balance and negative space.</li>
</ol>
<h3>Customer Notes</h3>
<p>${notes}</p>
<p><i>Next version: connect this form to the OpenAI API to generate recipes, critique designs, and create image previews.</i></p>`;
}
