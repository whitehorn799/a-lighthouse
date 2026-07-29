<%*
// 1. Define the Anchor and the Sign-off HTML
const anchor = "%%footer_start%%";
const date = tp.date.now("YYYY-MM-DD HH:mm");
const signOff = `<span class="log-sign-off">${date}</span>`;

// 2. Get the current file content
let content = tp.file.content;

// 3. Check if the anchor exists. If not, append it to the end.
if (!content.includes(anchor)) {
    content += `\n\n${anchor}`;
}

// 4. Split the content at the anchor and rebuild it
const parts = content.split(anchor);
const newContent = parts[0] + anchor + "\n" + signOff;

// 5. Overwrite the file with the updated content
// FIXED: Removed the 'obsidian.' prefix which caused the error
const activeView = app.workspace.getActiveViewOfType(app.internalPlugins.getPluginById("editor") ? Object.getPrototypeOf(app.workspace.getActiveViewOfType(tp.obsidian.MarkdownView)).constructor : tp.obsidian.MarkdownView);

// Simplified version for the most common Obsidian setups:
const editor = app.workspace.activeLeaf.view.editor;
if (editor) {
    editor.setValue(newContent);
}
%>