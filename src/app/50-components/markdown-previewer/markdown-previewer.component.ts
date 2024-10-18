import { Component } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrl: './markdown-previewer.component.css'
})
export class MarkdownPreviewerComponent {
getPreview() {
throw new Error('Method not implemented.');
}
  markdownText: string = '';

  get convertedMarkdown() {
    return marked(this.markdownText);
  }
}
