import { ElementItem } from "./ElementItem";
import { ItemEvent } from "./ItemEvent";
import { DELETE_ICON, EDIT_ICON, LINK_ICON } from "./constants";
import { ItemParameters } from "./types";

class Button {
    private button = document.createElement('button');
    
    constructor(html: string) {
        this.button.innerHTML = html;
        this.button.classList.add('btn', 'btn-dark');
    }
    public onClick(f: EventListenerOrEventListenerObject) {
        this.button.addEventListener('click', f);
    }

    public getElement(): HTMLElement {
        return this.button;
    }

    public getParemtElement(): HTMLElement | null {
        return this.button.closest('.list-group-item');
    }
}

class ButtonDelete {
    private button = document.createElement('button');
    
    constructor(html: string) {
        this.button.innerHTML = html;
        this.button.classList.add('btn', 'btn-danger');
    }
    public onClick(f: EventListenerOrEventListenerObject) {
        this.button.addEventListener('click', f);
    }

    public getElement(): HTMLElement {
        return this.button;
    }

    public getParemtElement(): HTMLElement | null {
        return this.button.closest('.list-group-item');
    }
}
class ButtonLink {
    private button = document.createElement('button');
    
    constructor(html: string) {
        this.button.innerHTML = html;
        this.button.classList.add('btn', 'btn-secondary');
    }
    public onClick(f: EventListenerOrEventListenerObject) {
        this.button.addEventListener('click', f);
    }

    public getElement(): HTMLElement {
        return this.button;
    }

    public getParemtElement(): HTMLElement | null {
        return this.button.closest('.list-group-item');
    }
}

export class ButtonGroup {
    protected item: ElementItem;
    protected container = document.createElement('div');
    protected eventEmitter = new ItemEvent();
    protected buttons = {
        link: new ButtonLink(LINK_ICON),
        edit: new Button(EDIT_ICON),
        delete: new ButtonDelete(DELETE_ICON)
    };
    constructor(item: ElementItem) {
        this.item = item;
        this.setEvents();
    }
    protected setEvents(): void {
        this.buttons.delete.onClick(() => {
            this.eventEmitter.emit('clickDelete', { item: this.item });
        });
        this.buttons.edit.onClick(() => {
            this.eventEmitter.emit('clickEdit', { item: this.item });
        });
        this.buttons.link.onClick(() => {
            this.eventEmitter.emit('clickLink', { item: this.item });
        });
    }
    public onClickDelete(listener: (params: ItemParameters) => void) {
        this.eventEmitter.on('clickDelete', listener);
    }
    public onClickEdit(listener: (params: ItemParameters) => void) {
        this.eventEmitter.on('clickEdit', listener);
    }
    public onClickLink(listener: (params: ItemParameters) => void) {
        this.eventEmitter.on('clickLink', listener);
    }

    public mount() {
        this.container.classList.add('btn-group', 'btn-group-sm');
        this.container.append(this.buttons.link.getElement());
        this.container.append(this.buttons.edit.getElement());
        this.container.append(this.buttons.delete.getElement());
    }

    public getElement() {
        return this.container;
    }
}