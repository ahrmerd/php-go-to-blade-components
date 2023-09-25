// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {  ExtensionContext, languages } from 'vscode';
import LinkProvider from './linkProvider';
import HoverProvider from './hoverProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
	let hover = languages.registerHoverProvider("blade", new HoverProvider());
	let hover2 = languages.registerHoverProvider("php", new HoverProvider());
  
	let link = languages.registerDocumentLinkProvider(
	  "blade",
	  new LinkProvider()
	);
  
	let link2 = languages.registerDocumentLinkProvider(
	  "php",
	  new LinkProvider()
	);
  
	context.subscriptions.push(hover, link);
	context.subscriptions.push(hover2, link2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
